import { useMemo, useState } from "react";
import { ShieldCheck, Check, AlertTriangle } from "lucide-react";

const COMMON_PASSWORDS = new Set<string>([
  "123456",
  "12345678",
  "123456789",
  "1234567890",
  "qwerty",
  "qwerty123",
  "password",
  "password1",
  "password123",
  "abc123",
  "111111",
  "1234567",
  "iloveyou",
  "admin",
  "welcome",
  "monkey",
  "letmein",
  "dragon",
  "sunshine",
  "princess",
  "matkhau",
  "matkhau123",
  "123123",
  "vietnam",
  "hanoi",
  "saigon",
  "abcdef",
  "zaloapp",
  "facebook",
]);

const VIETNAMESE_PATTERNS = [
  /\b(19|20)\d{2}\b/,
  /\b0[3589]\d{8}\b/,
  /\b\d{6,}\b/,
];

interface Analysis {
  score: 0 | 1 | 2 | 3 | 4;
  label: string;
  color: string;
  entropy: number;
  crackTime: string;
  reasons: string[];
  wins: string[];
}

function poolSize(pw: string): number {
  let pool = 0;
  if (/[a-z]/.test(pw)) pool += 26;
  if (/[A-Z]/.test(pw)) pool += 26;
  if (/[0-9]/.test(pw)) pool += 10;
  if (/[^A-Za-z0-9]/.test(pw)) pool += 33;
  return Math.max(pool, 1);
}

function formatCrackTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 1) return "tức thì (< 1 giây)";
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365.25;
  if (seconds < minute) return `${Math.round(seconds)} giây`;
  if (seconds < hour) return `${Math.round(seconds / minute)} phút`;
  if (seconds < day) return `${Math.round(seconds / hour)} giờ`;
  if (seconds < year) return `${Math.round(seconds / day)} ngày`;
  const years = seconds / year;
  if (years < 1_000) return `${Math.round(years).toLocaleString("vi-VN")} năm`;
  if (years < 1_000_000) return `${Math.round(years / 1_000).toLocaleString("vi-VN")} nghìn năm`;
  if (years < 1_000_000_000) return `${Math.round(years / 1_000_000).toLocaleString("vi-VN")} triệu năm`;
  return "lâu hơn tuổi vũ trụ";
}

function analyze(pw: string): Analysis {
  const reasons: string[] = [];
  const wins: string[] = [];

  if (!pw) {
    return {
      score: 0,
      label: "Chưa nhập",
      color: "#8895A8",
      entropy: 0,
      crackTime: "—",
      reasons: [],
      wins: [],
    };
  }

  const pool = poolSize(pw);
  let entropy = pw.length * Math.log2(pool);

  if (COMMON_PASSWORDS.has(pw.toLowerCase())) {
    reasons.push("Nằm trong top mật khẩu phổ biến nhất — hacker thử đầu tiên.");
    entropy = Math.min(entropy, 8);
  }

  if (pw.length < 8) reasons.push("Quá ngắn — cần ít nhất 12 ký tự.");
  else if (pw.length < 12) reasons.push("Ngắn — nên dài ít nhất 12–15 ký tự.");
  else wins.push(`Dài ${pw.length} ký tự — tốt.`);

  const hasLower = /[a-z]/.test(pw);
  const hasUpper = /[A-Z]/.test(pw);
  const hasDigit = /[0-9]/.test(pw);
  const hasSymbol = /[^A-Za-z0-9]/.test(pw);
  const classes = [hasLower, hasUpper, hasDigit, hasSymbol].filter(Boolean).length;

  if (classes <= 1) reasons.push("Chỉ dùng 1 loại ký tự — thêm chữ hoa, số, ký tự đặc biệt.");
  else if (classes === 2) reasons.push("Mới có 2 loại ký tự — nên thêm ký hiệu để khó đoán.");
  else wins.push(`Đa dạng ${classes} loại ký tự — tốt.`);

  if (/^(.)\1+$/.test(pw)) {
    reasons.push("Toàn ký tự giống nhau — gần như không có giá trị bảo mật.");
    entropy = Math.min(entropy, 6);
  }

  if (/(.)\1{2,}/.test(pw)) reasons.push("Có ký tự lặp liên tiếp (vd: 'aaa', '111').");

  if (/(?:0123|1234|2345|3456|4567|5678|6789|7890|abcd|bcde|cdef|qwer|asdf|zxcv)/i.test(pw)) {
    reasons.push("Có dãy đi liền (vd: '1234', 'qwer', 'abcd') — dễ đoán.");
  }

  for (const re of VIETNAMESE_PATTERNS) {
    if (re.test(pw)) {
      reasons.push("Có chuỗi giống năm sinh hoặc số điện thoại — hacker tìm trên Facebook là ra.");
      entropy = Math.min(entropy, entropy - 8);
      break;
    }
  }

  if (pw.length >= 16) wins.push("Dài ≥ 16 ký tự — đây là yếu tố quan trọng nhất.");

  let score: 0 | 1 | 2 | 3 | 4 = 0;
  if (entropy >= 75) score = 4;
  else if (entropy >= 55) score = 3;
  else if (entropy >= 35) score = 2;
  else if (entropy >= 20) score = 1;

  const labels = ["Quá yếu", "Yếu", "Vừa", "Mạnh", "Rất mạnh"] as const;
  const colors = ["#E11D48", "#F97316", "#F59E0B", "#10B981", "#0B5FFF"] as const;

  const guessesPerSecond = 10_000_000_000;
  const guesses = Math.pow(2, Math.max(entropy, 0));
  const seconds = guesses / guessesPerSecond;

  return {
    score,
    label: labels[score],
    color: colors[score],
    entropy,
    crackTime: formatCrackTime(seconds),
    reasons,
    wins,
  };
}

export default function PasswordStrengthMeter() {
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);

  const result = useMemo(() => analyze(pw), [pw]);
  const percent = pw ? Math.max(8, ((result.score + 1) / 5) * 100) : 0;

  return (
    <div className="psm">
      <label className="psm-label">
        <span>Nhập mật khẩu để kiểm tra</span>
        <div className="psm-input-row">
          <input
            type={show ? "text" : "password"}
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            autoComplete="off"
            spellCheck={false}
            placeholder="Mật khẩu của bạn…"
            aria-describedby="psm-privacy"
          />
          <button type="button" onClick={() => setShow((s) => !s)}>
            {show ? "Ẩn" : "Hiện"}
          </button>
        </div>
      </label>

      <p id="psm-privacy" className="psm-privacy">
        <ShieldCheck size={16} strokeWidth={2.2} className="psm-privacy-icon" aria-hidden="true" />
        <span>Mật khẩu <strong>không rời khỏi trình duyệt</strong>. Trang này không có backend, không log, không gửi đi đâu.</span>
      </p>

      <div className="psm-bar" aria-hidden={!pw}>
        <div
          className="psm-bar-fill"
          style={{ width: `${percent}%`, background: result.color }}
        />
      </div>

      <div className="psm-summary">
        <div>
          <span className="psm-summary-label">Đánh giá:</span>
          <strong style={{ color: result.color }}>{result.label}</strong>
        </div>
        {pw && (
          <>
            <div>
              <span className="psm-summary-label">Entropy:</span>
              <strong>{Math.round(result.entropy)} bit</strong>
            </div>
            <div>
              <span className="psm-summary-label">Hacker mất:</span>
              <strong>{result.crackTime}</strong>
            </div>
          </>
        )}
      </div>

      {pw && (
        <div className="psm-feedback">
          {result.wins.length > 0 && (
            <ul className="psm-list psm-wins">
              {result.wins.map((w, i) => (
                <li key={`w-${i}`}>
                  <Check size={16} strokeWidth={2.5} className="psm-li-icon" aria-hidden="true" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          )}
          {result.reasons.length > 0 && (
            <ul className="psm-list psm-fixes">
              {result.reasons.map((r, i) => (
                <li key={`r-${i}`}>
                  <AlertTriangle size={16} strokeWidth={2.2} className="psm-li-icon" aria-hidden="true" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <details className="psm-tips">
        <summary>Mẹo tạo mật khẩu mạnh mà dễ nhớ</summary>
        <ul>
          <li>Dùng <strong>passphrase</strong> — câu dài có ý nghĩa với bạn nhưng vô nghĩa với người khác.</li>
          <li>Ví dụ: <code>conMeoNamTrenMaiNha!2024</code> — dài 25 ký tự, đa dạng, không phải từ điển.</li>
          <li><strong>Mỗi tài khoản một mật khẩu</strong> — để tránh credential stuffing.</li>
          <li>Quản lý bằng <strong>Bitwarden / 1Password / KeePass</strong>.</li>
        </ul>
      </details>

      <style>{`
        .psm { display: flex; flex-direction: column; gap: 20px; }
        .psm-label { display: flex; flex-direction: column; gap: 10px; font-weight: 600; color: var(--ink-strong); }
        .psm-input-row { display: flex; gap: 10px; }
        .psm-input-row input {
          flex: 1;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--ink);
          font: inherit;
          font-size: 1rem;
          transition: border-color 150ms, box-shadow 150ms;
        }
        .psm-input-row input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--primary-soft);
        }
        .psm-input-row button {
          padding: 0 18px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--surface-soft);
          color: var(--ink);
          cursor: pointer;
          font: inherit;
          font-weight: 600;
          transition: border-color 150ms, background 150ms;
        }
        .psm-input-row button:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .psm-privacy {
          font-size: 0.88rem;
          color: var(--ink-muted);
          background: var(--success-soft);
          border: 1px solid color-mix(in oklab, var(--success) 22%, transparent);
          padding: 12px 14px;
          border-radius: 10px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          line-height: 1.55;
        }
        .psm-privacy-icon {
          color: var(--success);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .psm-privacy strong { color: #047857; }
        .psm-bar {
          height: 10px;
          background: var(--surface-sunken);
          border-radius: 999px;
          overflow: hidden;
        }
        .psm-bar-fill {
          height: 100%;
          border-radius: 999px;
          transition: width 250ms, background 250ms;
        }
        .psm-summary {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          padding: 16px 20px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          font-size: 0.95rem;
        }
        .psm-summary > div { display: flex; align-items: baseline; gap: 6px; }
        .psm-summary-label {
          color: var(--ink-muted);
          font-size: 0.82rem;
        }
        .psm-summary strong {
          font-family: var(--font-display);
          font-weight: 700;
          color: var(--ink-strong);
        }
        .psm-feedback {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .psm-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.92rem;
          line-height: 1.6;
        }
        .psm-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .psm-li-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }
        .psm-wins li {
          padding: 10px 14px;
          background: var(--success-soft);
          border-left: 3px solid var(--success);
          border-radius: 0 10px 10px 0;
        }
        .psm-wins .psm-li-icon { color: var(--success); }
        .psm-fixes li {
          padding: 10px 14px;
          background: var(--danger-soft);
          border-left: 3px solid var(--danger);
          border-radius: 0 10px 10px 0;
        }
        .psm-fixes .psm-li-icon { color: var(--danger); }
        .psm-tips {
          background: var(--surface-soft);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px 18px;
        }
        .psm-tips summary {
          cursor: pointer;
          font-weight: 600;
          color: var(--ink-strong);
        }
        .psm-tips ul {
          margin-top: 12px;
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.92rem;
          line-height: 1.65;
        }
        .psm-tips code {
          background: var(--surface-sunken);
          border: 1px solid var(--border);
          padding: 1px 7px;
          border-radius: 5px;
          font-size: 0.88em;
          font-family: var(--font-mono);
        }
      `}</style>
    </div>
  );
}
