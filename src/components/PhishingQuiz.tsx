import { useMemo, useState } from "react";
import { Flag, Check } from "lucide-react";

interface PhishCase {
  channel: "SMS" | "Email" | "Zalo" | "Cuộc gọi" | "Messenger";
  sender: string;
  preview: string;
  body: string;
  isPhish: boolean;
  redFlags: string[];
  whyLegit?: string;
}

const CASES: PhishCase[] = [
  {
    channel: "SMS",
    sender: "VCB-Bank",
    preview: "Tài khoản của quý khách bị tạm khóa…",
    body:
      "Kính gửi quý khách, tài khoản Vietcombank của quý khách đã bị tạm khóa do hoạt động bất thường. Vui lòng xác minh tại http://vcb-secure.vn-login.top trong vòng 24h để tránh bị thu hồi.",
    isPhish: true,
    redFlags: [
      "Brand SMS giả mạo dạng VCB-Bank — tên thật là 'Vietcombank'.",
      "Link không phải domain chính thức (vcb-secure.vn-login.top — đuôi .top, có 'login' khả nghi).",
      "Tạo áp lực thời gian: 24h.",
      "Yêu cầu nhập thông tin tài khoản qua link — ngân hàng không bao giờ làm vậy.",
    ],
  },
  {
    channel: "Email",
    sender: "no-reply@accounts.google.com",
    preview: "Cảnh báo bảo mật: Có người vừa đăng nhập từ Hà Nội",
    body:
      "Chúng tôi vừa phát hiện một lượt đăng nhập mới vào tài khoản của bạn từ Hà Nội, trên thiết bị Chrome / Windows. Nếu là bạn, không cần làm gì. Nếu không phải bạn, hãy bấm 'Kiểm tra hoạt động' để bảo vệ tài khoản.",
    isPhish: false,
    redFlags: [],
    whyLegit:
      "Email từ domain chính thức accounts.google.com, không yêu cầu nhập mật khẩu trong email, ngôn từ điềm tĩnh, không gây hoảng. Đây là cảnh báo đăng nhập tiêu chuẩn của Google. Vẫn nên kiểm tra link cẩn thận trước khi bấm.",
  },
  {
    channel: "Zalo",
    sender: "Công an TP. Hà Nội",
    preview: "Anh/chị có liên quan đến một vụ án rửa tiền…",
    body:
      "Tôi là điều tra viên Nguyễn Văn A — Công an TP. Hà Nội. Tài khoản của anh/chị có liên quan đến vụ rửa tiền. Vui lòng cài app 'Dịch vụ công' tại link tôi gửi để hợp tác điều tra. Không được nói với ai, kể cả người nhà.",
    isPhish: true,
    redFlags: [
      "Công an không bao giờ liên hệ qua Zalo, không bao giờ yêu cầu cài app qua link.",
      "Yêu cầu giữ bí mật, không nói với người nhà — chiến thuật cô lập kinh điển.",
      "Tạo cảm giác nguy hiểm pháp lý.",
      "Link tải app không phải App Store / Google Play.",
    ],
  },
  {
    channel: "SMS",
    sender: "Shopee",
    preview: "Đơn hàng #SPX2401 đã giao thành công. Đánh giá để nhận xu.",
    body:
      "Đơn hàng SPX2401234 của bạn đã được giao thành công lúc 14:32. Vui lòng đánh giá để nhận 200 xu Shopee. Mở app Shopee → Đơn mua → Đã giao.",
    isPhish: false,
    redFlags: [],
    whyLegit:
      "Không chứa link, không yêu cầu nhập gì. Chỉ thông báo và hướng dẫn mở app chính thức. Brand SMS có thể giả nhưng nội dung không thúc bạn làm gì rủi ro.",
  },
  {
    channel: "Email",
    sender: "billing@apple-id-service.com",
    preview: "Hóa đơn iCloud 2.490.000đ đã được thanh toán",
    body:
      "Cảm ơn quý khách đã thanh toán gói iCloud Premium 2TB với giá 2.490.000đ. Nếu không phải bạn, vui lòng bấm 'Hủy giao dịch' bên dưới trong 12h để được hoàn tiền. [Hủy giao dịch]",
    isPhish: true,
    redFlags: [
      "Domain gửi là apple-id-service.com — Apple thật dùng @apple.com / @email.apple.com.",
      "Mức giá bất ngờ + nút 'Hủy giao dịch' = mồi nhử kinh điển khiến bạn vội bấm.",
      "Tạo áp lực thời gian (12h).",
      "Đơn vị tiền VND nhưng định dạng email kiểu Apple toàn cầu — không khớp.",
    ],
  },
  {
    channel: "Messenger",
    sender: "Người bạn cũ (Nguyễn Mai)",
    preview: "Bạn ơi cho mình mượn 5 triệu chiều nay mình trả ngay nhé",
    body:
      "Bạn ơi tớ kẹt tiền quá, chiều nay tớ trả ngay. Số tài khoản đây: VCB 0123456789 — Nguyễn Văn B. Cảm ơn bạn nhiều!",
    isPhish: true,
    redFlags: [
      "Tên chủ tài khoản KHÁC tên người gửi tin (Mai vs. Văn B) — dấu hiệu kinh điển của tài khoản Facebook bị hack.",
      "Yêu cầu chuyển tiền gấp, không gọi xác nhận.",
      "Văn phong gấp gáp, không như cách bạn ấy thường nói chuyện.",
      "→ Quy tắc: luôn gọi điện thoại xác nhận trước khi chuyển tiền cho 'bạn bè' nhắn mượn.",
    ],
  },
  {
    channel: "Cuộc gọi",
    sender: "+84 28 xxxx (gọi từ Điện máy Xanh)",
    preview: "Chúc mừng anh/chị trúng thưởng TV LG 65 inch…",
    body:
      "Chúc mừng anh/chị! Số điện thoại của anh/chị nằm trong danh sách trúng thưởng TV LG 65 inch từ Điện máy Xanh. Anh/chị chỉ cần đóng phí ship 1.500.000đ để nhận hàng. Cho em xin OTP gửi đến điện thoại để xác nhận giải thưởng.",
    isPhish: true,
    redFlags: [
      "Không có chương trình nào yêu cầu nộp phí trước khi nhận giải.",
      "Yêu cầu cung cấp OTP — không bao giờ làm điều này, kể cả với 'bộ phận chăm sóc khách hàng'.",
      "Cuộc gọi từ số lạ, danh nghĩa thương hiệu lớn.",
    ],
  },
  {
    channel: "Email",
    sender: "notifications@github.com",
    preview: "[your-repo] PR #42 was merged",
    body:
      "Hi tieupham267, your pull request #42 'Add Vietnamese password tips' has been merged into main by @reviewer. View the changes on GitHub.",
    isPhish: false,
    redFlags: [],
    whyLegit:
      "Domain notifications@github.com là domain chính thức. Email chỉ thông báo, không yêu cầu mật khẩu hay thông tin nhạy cảm.",
  },
];

interface AnswerState {
  caseIdx: number;
  guessedPhish: boolean;
}

export default function PhishingQuiz() {
  const cases = useMemo(() => CASES, []);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AnswerState[]>([]);
  const [revealed, setRevealed] = useState(false);

  const current = cases[step];
  const lastAnswer = answers.find((a) => a.caseIdx === step) ?? null;

  function pick(guessedPhish: boolean): void {
    if (revealed) return;
    setAnswers((prev) => {
      const others = prev.filter((a) => a.caseIdx !== step);
      return [...others, { caseIdx: step, guessedPhish }];
    });
    setRevealed(true);
  }

  function next(): void {
    setRevealed(false);
    setStep((s) => s + 1);
  }

  function restart(): void {
    setAnswers([]);
    setStep(0);
    setRevealed(false);
  }

  if (step >= cases.length) {
    const correct = answers.filter((a) => {
      const c = cases[a.caseIdx];
      return a.guessedPhish === c.isPhish;
    }).length;

    let verdict = "Cần luyện thêm — đọc lại Module 2 nhé.";
    if (correct === cases.length) verdict = "Hoàn hảo! Bạn đã có mắt phát hiện lừa đảo cứng cựa.";
    else if (correct >= cases.length - 1) verdict = "Rất tốt — chỉ trượt 1 câu thôi.";
    else if (correct >= cases.length / 2) verdict = "Khá ổn, nhưng bạn vẫn có thể bị lừa vài chiêu.";

    return (
      <div className="pq">
        <div className="pq-result">
          <span className="pq-result-score">{correct}/{cases.length}</span>
          <h3>{verdict}</h3>
          <p>
            Khi nghi ngờ, quy tắc vàng: <strong>không bấm link, không cho OTP, gọi lại số chính thức để xác minh</strong>.
          </p>
          <button type="button" className="pq-btn pq-btn-primary" onClick={restart}>
            Làm lại
          </button>
          <a href="/khoa-hoc/" className="pq-btn pq-btn-ghost">
            Vào học Module 2 →
          </a>
        </div>
        {renderStyles()}
      </div>
    );
  }

  return (
    <div className="pq">
      <div className="pq-progress" aria-label={`Tin nhắn ${step + 1} / ${cases.length}`}>
        <span>Tin nhắn {step + 1} / {cases.length}</span>
        <div className="pq-progress-bar">
          <div
            className="pq-progress-fill"
            style={{ width: `${(step / cases.length) * 100}%` }}
          />
        </div>
      </div>

      <article className="pq-card">
        <header className="pq-card-head">
          <span className="pq-channel">{current.channel}</span>
          <span className="pq-sender">{current.sender}</span>
        </header>
        <p className="pq-preview"><strong>{current.preview}</strong></p>
        <p className="pq-body">{current.body}</p>
      </article>

      {!revealed ? (
        <div className="pq-actions">
          <button
            type="button"
            className="pq-btn pq-btn-bad"
            onClick={() => pick(true)}
          >
            <Flag size={18} strokeWidth={2.2} aria-hidden="true" />
            Đây là lừa đảo
          </button>
          <button
            type="button"
            className="pq-btn pq-btn-good"
            onClick={() => pick(false)}
          >
            <Check size={18} strokeWidth={2.5} aria-hidden="true" />
            Cái này thật
          </button>
        </div>
      ) : (
        <div className="pq-feedback">
          <div
            className={`pq-verdict ${
              lastAnswer && lastAnswer.guessedPhish === current.isPhish
                ? "is-correct"
                : "is-wrong"
            }`}
          >
            <strong>
              {lastAnswer && lastAnswer.guessedPhish === current.isPhish
                ? "Đúng!"
                : "Sai rồi —"}
            </strong>{" "}
            {current.isPhish ? "Đây là lừa đảo." : "Cái này là tin nhắn thật."}
          </div>

          {current.isPhish ? (
            <ul className="pq-flags">
              <li className="pq-flags-head">Dấu hiệu lừa đảo:</li>
              {current.redFlags.map((flag, i) => (
                <li key={i}>
                  <Flag size={14} strokeWidth={2.2} className="pq-flag-icon" aria-hidden="true" />
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="pq-legit">{current.whyLegit}</p>
          )}

          <button type="button" className="pq-btn pq-btn-primary" onClick={next}>
            {step === cases.length - 1 ? "Xem kết quả →" : "Tin tiếp theo →"}
          </button>
        </div>
      )}

      {renderStyles()}
    </div>
  );
}

function renderStyles() {
  return (
    <style>{`
      .pq { display: flex; flex-direction: column; gap: 20px; }
      .pq-progress { display: flex; flex-direction: column; gap: 8px; font-size: 0.84rem; color: var(--ink-muted); font-weight: 600; }
      .pq-progress-bar { height: 6px; background: var(--surface-sunken); border-radius: 999px; overflow: hidden; }
      .pq-progress-fill { height: 100%; background: linear-gradient(90deg, var(--primary), var(--accent)); transition: width 250ms ease-out; border-radius: 999px; }
      .pq-card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 1px 2px rgba(11,25,41,0.04), 0 4px 16px rgba(11,25,41,0.06);
      }
      .pq-card-head {
        display: flex;
        gap: 12px;
        align-items: center;
        margin-bottom: 14px;
        font-size: 0.84rem;
        flex-wrap: wrap;
        padding-bottom: 12px;
        border-bottom: 1px dashed var(--border);
      }
      .pq-channel {
        background: var(--primary-soft);
        color: var(--primary);
        font-family: var(--font-display);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        font-size: 0.7rem;
        padding: 3px 10px;
        border-radius: 999px;
      }
      .pq-sender {
        color: var(--ink-muted);
        font-weight: 500;
      }
      .pq-preview { font-size: 1rem; margin-bottom: 10px; line-height: 1.45; color: var(--ink-strong); }
      .pq-body { line-height: 1.7; color: var(--ink); white-space: pre-line; font-size: 0.95rem; }
      .pq-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
      .pq-btn {
        padding: 14px 18px;
        border-radius: 12px;
        border: 1px solid var(--border);
        font: inherit;
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 0.98rem;
        cursor: pointer;
        text-decoration: none;
        text-align: center;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        background: var(--surface);
        color: var(--ink);
        transition: transform 150ms cubic-bezier(0.16, 1, 0.3, 1), background 150ms, border-color 150ms, box-shadow 150ms;
      }
      .pq-btn:hover { transform: translateY(-1px); }
      .pq-btn-bad { border-color: var(--danger); color: var(--danger); }
      .pq-btn-bad:hover { background: var(--danger-soft); box-shadow: 0 4px 14px rgba(225, 29, 72, 0.18); }
      .pq-btn-good { border-color: var(--success); color: var(--success); }
      .pq-btn-good:hover { background: var(--success-soft); box-shadow: 0 4px 14px rgba(16, 185, 129, 0.18); }
      .pq-btn-primary { background: var(--primary); color: #fff; border-color: var(--primary); box-shadow: 0 4px 14px rgba(11, 95, 255, 0.28); }
      .pq-btn-primary:hover { background: var(--primary-hover); color: #fff; box-shadow: 0 6px 20px rgba(11, 95, 255, 0.36); }
      .pq-btn-ghost { background: transparent; border-color: var(--border); }
      .pq-btn-ghost:hover { border-color: var(--primary); color: var(--primary); }
      .pq-feedback { display: flex; flex-direction: column; gap: 14px; }
      .pq-verdict {
        padding: 14px 16px;
        border-radius: 12px;
        font-size: 0.95rem;
        line-height: 1.55;
      }
      .pq-verdict strong { font-family: var(--font-display); }
      .pq-verdict.is-correct {
        background: var(--success-soft);
        border-left: 3px solid var(--success);
        color: #065F46;
      }
      .pq-verdict.is-wrong {
        background: var(--danger-soft);
        border-left: 3px solid var(--danger);
        color: #9F1239;
      }
      .pq-flags {
        list-style: none;
        padding: 18px 20px;
        margin: 0;
        background: var(--surface-soft);
        border: 1px solid var(--border);
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 0.92rem;
        line-height: 1.6;
      }
      .pq-flags-head { font-family: var(--font-display); font-weight: 700; color: var(--danger); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; }
      .pq-flags li {
        display: flex;
        align-items: flex-start;
        gap: 10px;
      }
      .pq-flags li.pq-flags-head { display: block; }
      .pq-flag-icon {
        color: var(--danger);
        flex-shrink: 0;
        margin-top: 4px;
      }
      .pq-legit {
        padding: 16px 18px;
        background: var(--accent-soft);
        border: 1px solid color-mix(in oklab, var(--accent) 22%, transparent);
        border-radius: 12px;
        line-height: 1.7;
        font-size: 0.94rem;
      }
      .pq-result {
        text-align: center;
        padding: 40px 24px;
        background: linear-gradient(135deg, var(--surface) 0%, var(--surface-soft) 100%);
        border: 1px solid var(--border);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .pq-result-score {
        font-family: var(--font-display);
        font-size: 3.5rem;
        font-weight: 800;
        color: var(--primary);
        letter-spacing: -0.02em;
        line-height: 1;
      }
      .pq-result h3 { font-size: 1.25rem; color: var(--ink-strong); }
      .pq-result p { color: var(--ink-muted); line-height: 1.7; margin-bottom: 8px; }
      .pq-result .pq-btn { align-self: center; min-width: 200px; }
      @media (max-width: 480px) {
        .pq-actions { grid-template-columns: 1fr; }
        .pq-result-score { font-size: 2.8rem; }
      }
    `}</style>
  );
}
