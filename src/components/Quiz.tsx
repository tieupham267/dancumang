import { useMemo, useState } from "react";
import { Check, X } from "lucide-react";

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface QuizProps {
  questions: QuizQuestion[];
}

interface AnswerState {
  selected: number | null;
  revealed: boolean;
}

export default function Quiz({ questions }: QuizProps) {
  const initial = useMemo<AnswerState[]>(
    () => questions.map(() => ({ selected: null, revealed: false })),
    [questions],
  );
  const [answers, setAnswers] = useState<AnswerState[]>(initial);

  const correctCount = answers.filter(
    (a, idx) => a.revealed && a.selected === questions[idx].correct,
  ).length;
  const revealedCount = answers.filter((a) => a.revealed).length;
  const allDone = revealedCount === questions.length;

  function handleSelect(qIdx: number, optIdx: number): void {
    setAnswers((prev) => {
      if (prev[qIdx].revealed) return prev;
      const next = prev.slice();
      next[qIdx] = { selected: optIdx, revealed: true };
      return next;
    });
  }

  function reset(): void {
    setAnswers(questions.map(() => ({ selected: null, revealed: false })));
  }

  if (questions.length === 0) return null;

  return (
    <div className="dcm-quiz">
      {questions.map((q, qIdx) => {
        const state = answers[qIdx];
        const isCorrect = state.revealed && state.selected === q.correct;
        return (
          <fieldset key={qIdx} className="dcm-quiz-q">
            <legend>
              <span className="q-num">Câu {qIdx + 1}</span> {q.question}
            </legend>

            <div className="dcm-quiz-options" role="radiogroup">
              {q.options.map((opt, optIdx) => {
                const selected = state.selected === optIdx;
                const isAnswerCorrect = optIdx === q.correct;
                let cls = "dcm-quiz-option";
                if (state.revealed) {
                  if (isAnswerCorrect) cls += " is-correct";
                  else if (selected) cls += " is-wrong";
                  else cls += " is-disabled";
                } else if (selected) {
                  cls += " is-selected";
                }
                return (
                  <button
                    key={optIdx}
                    type="button"
                    className={cls}
                    role="radio"
                    aria-checked={selected}
                    disabled={state.revealed}
                    onClick={() => handleSelect(qIdx, optIdx)}
                  >
                    <span className="dcm-quiz-bullet" aria-hidden="true">
                      {state.revealed && isAnswerCorrect && <Check size={14} strokeWidth={3} />}
                      {state.revealed && selected && !isAnswerCorrect && <X size={14} strokeWidth={3} />}
                      {!state.revealed && String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {state.revealed && (
              <div
                className={`dcm-quiz-explanation ${isCorrect ? "is-good" : "is-bad"}`}
                role="status"
              >
                <strong>{isCorrect ? "Chính xác!" : "Chưa đúng."}</strong>{" "}
                {q.explanation}
              </div>
            )}
          </fieldset>
        );
      })}

      <div className="dcm-quiz-summary">
        <div>
          Đã trả lời <strong>{revealedCount}</strong> / {questions.length} câu —{" "}
          đúng <strong>{correctCount}</strong>.
        </div>
        {allDone && (
          <button type="button" className="dcm-quiz-reset" onClick={reset}>
            Làm lại quiz
          </button>
        )}
      </div>

      <style>{`
        .dcm-quiz {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .dcm-quiz-q {
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 20px;
          background: var(--surface);
        }
        .dcm-quiz-q legend {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1rem;
          padding: 0 8px;
          line-height: 1.5;
          color: var(--ink-strong);
        }
        .q-num {
          font-family: var(--font-mono);
          color: var(--primary);
          font-weight: 700;
          margin-right: 8px;
          font-size: 0.85rem;
        }
        .dcm-quiz-options {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 16px;
        }
        .dcm-quiz-option {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 13px 16px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--surface);
          cursor: pointer;
          font: inherit;
          color: var(--ink);
          text-align: left;
          line-height: 1.5;
          transition: background 150ms, border-color 150ms, transform 150ms;
        }
        .dcm-quiz-option:hover:not(:disabled) {
          border-color: var(--primary);
          background: var(--primary-soft);
        }
        .dcm-quiz-option:disabled { cursor: default; }
        .dcm-quiz-option.is-selected {
          border-color: var(--primary);
          background: var(--primary-soft);
        }
        .dcm-quiz-option.is-correct {
          border-color: var(--success);
          background: var(--success-soft);
        }
        .dcm-quiz-option.is-wrong {
          border-color: var(--danger);
          background: var(--danger-soft);
        }
        .dcm-quiz-option.is-disabled { opacity: 0.55; }
        .dcm-quiz-bullet {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          min-width: 26px;
          border-radius: 50%;
          font-family: var(--font-display);
          font-size: 0.78rem;
          font-weight: 700;
          background: var(--surface-sunken);
          color: var(--ink-muted);
          flex-shrink: 0;
        }
        .is-correct .dcm-quiz-bullet {
          background: var(--success);
          color: #fff;
        }
        .is-wrong .dcm-quiz-bullet {
          background: var(--danger);
          color: #fff;
        }
        .dcm-quiz-explanation {
          margin-top: 16px;
          padding: 14px 16px;
          border-radius: 12px;
          font-size: 0.94rem;
          line-height: 1.65;
        }
        .dcm-quiz-explanation strong { font-family: var(--font-display); }
        .dcm-quiz-explanation.is-good {
          background: var(--success-soft);
          color: var(--ink);
          border-left: 3px solid var(--success);
        }
        .dcm-quiz-explanation.is-bad {
          background: var(--danger-soft);
          color: var(--ink);
          border-left: 3px solid var(--danger);
        }
        .dcm-quiz-summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          padding: 16px 20px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          font-size: 0.95rem;
          color: var(--ink-muted);
        }
        .dcm-quiz-summary strong { color: var(--ink-strong); font-family: var(--font-display); }
        .dcm-quiz-reset {
          padding: 9px 16px;
          border-radius: 10px;
          border: 1px solid var(--primary);
          background: transparent;
          color: var(--primary);
          font-family: var(--font-display);
          font-weight: 600;
          cursor: pointer;
          font-size: inherit;
          transition: background 150ms, color 150ms;
        }
        .dcm-quiz-reset:hover {
          background: var(--primary);
          color: #fff;
        }
      `}</style>
    </div>
  );
}
