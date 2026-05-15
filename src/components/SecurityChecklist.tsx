import { useEffect, useMemo, useState } from "react";

interface ChecklistItem {
  id: string;
  group: string;
  label: string;
  hint?: string;
  href?: string;
}

const ITEMS: ChecklistItem[] = [
  {
    id: "pm",
    group: "Mật khẩu",
    label: "Cài Password Manager (Bitwarden, 1Password, KeePass)",
    hint: "Một app nhớ hết mật khẩu, bạn chỉ cần nhớ 1 mật khẩu chính.",
    href: "/khoa-hoc/01-mat-khau/03-cai-bitwarden-password-manager/",
  },
  {
    id: "pw-unique",
    group: "Mật khẩu",
    label: "Đổi mật khẩu chung — mỗi tài khoản một mật khẩu khác nhau",
    hint: "Bắt đầu từ email và ngân hàng. Password Manager tự sinh mật khẩu mạnh cho bạn.",
  },
  {
    id: "pw-strong",
    group: "Mật khẩu",
    label: "Mật khẩu chính của Password Manager ≥ 16 ký tự, dạng passphrase",
    hint: "Đây là mật khẩu duy nhất bạn cần nhớ. Hãy làm nó thật mạnh.",
    href: "/cong-cu/kiem-tra-mat-khau/",
  },
  {
    id: "2fa-email",
    group: "Xác thực 2 lớp",
    label: "Bật 2FA cho email chính (Gmail, Outlook, Yahoo)",
    hint: "Email = chìa khóa khôi phục tất cả tài khoản khác. Bảo vệ nó trước nhất.",
    href: "/khoa-hoc/01-mat-khau/04-huong-dan-bat-2fa/",
  },
  {
    id: "2fa-bank",
    group: "Xác thực 2 lớp",
    label: "Bật 2FA / Smart OTP cho app ngân hàng",
  },
  {
    id: "2fa-fb",
    group: "Xác thực 2 lớp",
    label: "Bật 2FA cho Facebook, Zalo, Messenger",
  },
  {
    id: "haveibeenpwned",
    group: "Kiểm tra",
    label: "Kiểm tra email đã bị lộ trên Have I Been Pwned",
    href: "/khoa-hoc/01-mat-khau/05-kiem-tra-tai-khoan-bi-lo/",
  },
  {
    id: "review-apps",
    group: "Kiểm tra",
    label: "Gỡ các app lạ đã cài trên điện thoại trong 6 tháng qua",
    hint: "Đặc biệt các app .apk cài ngoài Google Play hoặc TestFlight không rõ nguồn.",
  },
  {
    id: "privacy-fb",
    group: "Mạng xã hội",
    label: "Khóa quyền riêng tư Facebook: bài viết, danh sách bạn, tìm kiếm SĐT",
    href: "/khoa-hoc/03-mang-xa-hoi/02-quyen-rieng-tu-fb-zalo-tiktok/",
  },
  {
    id: "privacy-zalo",
    group: "Mạng xã hội",
    label: "Tắt 'cho phép tìm tôi qua số điện thoại' trên Zalo",
  },
  {
    id: "lock-screen",
    group: "Thiết bị",
    label: "Đặt mật khẩu khóa màn hình điện thoại (≥ 6 chữ số hoặc vân tay/Face ID)",
  },
  {
    id: "find-device",
    group: "Thiết bị",
    label: "Bật 'Find My iPhone' / 'Tìm thiết bị của tôi' (Android)",
    href: "/khoa-hoc/04-bao-ve-thiet-bi/02-bao-ve-dien-thoai/",
  },
  {
    id: "updates",
    group: "Thiết bị",
    label: "Bật tự cập nhật hệ điều hành và app",
    hint: "90% mã độc khai thác lỗ hổng đã có bản vá — chỉ cần cập nhật là an toàn.",
  },
  {
    id: "backup",
    group: "Thiết bị",
    label: "Sao lưu danh bạ, ảnh quan trọng (iCloud / Google Photos)",
  },
  {
    id: "share-elders",
    group: "Người thân",
    label: "Chia sẻ trang này với bố mẹ / ông bà — họ là mục tiêu chính của lừa đảo",
  },
];

const STORAGE_KEY = "dcm-checklist-v1";

function loadDone(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw) as string[];
    return new Set(Array.isArray(arr) ? arr : []);
  } catch (_) {
    return new Set();
  }
}

function persist(done: Set<string>): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(done)));
  } catch (_) {}
}

export default function SecurityChecklist() {
  const [done, setDone] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    setDone(loadDone());
  }, []);

  const groups = useMemo(() => {
    const map = new Map<string, ChecklistItem[]>();
    for (const item of ITEMS) {
      const arr = map.get(item.group) ?? [];
      arr.push(item);
      map.set(item.group, arr);
    }
    return Array.from(map.entries());
  }, []);

  function toggle(id: string): void {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      persist(next);
      return next;
    });
  }

  function resetAll(): void {
    if (!window.confirm("Xóa toàn bộ tick? Trạng thái lưu trong trình duyệt này.")) return;
    const next = new Set<string>();
    setDone(next);
    persist(next);
  }

  const completed = done.size;
  const total = ITEMS.length;
  const percent = Math.round((completed / total) * 100);

  return (
    <div className="cl">
      <div className="cl-progress">
        <div className="cl-progress-meta">
          <strong>{completed}/{total}</strong> việc đã xong — <strong>{percent}%</strong> an toàn hơn.
        </div>
        <div className="cl-progress-bar">
          <div className="cl-progress-fill" style={{ width: `${percent}%` }} />
        </div>
        <p className="cl-progress-hint">
          Trạng thái lưu trên trình duyệt này (localStorage). Không gửi đi đâu cả.
          {completed > 0 && (
            <>
              {" "}
              <button type="button" className="cl-reset" onClick={resetAll}>
                Xóa hết tick
              </button>
            </>
          )}
        </p>
      </div>

      {groups.map(([group, items]) => {
        const groupDone = items.filter((i) => done.has(i.id)).length;
        return (
          <section key={group} className="cl-group">
            <header className="cl-group-head">
              <h3>{group}</h3>
              <span className="cl-group-count">{groupDone}/{items.length}</span>
            </header>
            <ul>
              {items.map((item) => {
                const checked = done.has(item.id);
                return (
                  <li key={item.id} className={checked ? "is-done" : ""}>
                    <label>
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle(item.id)}
                      />
                      <span className="cl-text">
                        <span className="cl-label">{item.label}</span>
                        {item.hint && <span className="cl-hint">{item.hint}</span>}
                        {item.href && (
                          <a href={item.href} className="cl-link">Hướng dẫn →</a>
                        )}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      <style>{`
        .cl { display: flex; flex-direction: column; gap: 24px; }
        .cl-progress {
          padding: 24px;
          background: linear-gradient(135deg, var(--surface) 0%, var(--primary-soft) 200%);
          border: 1px solid var(--border);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 1px 2px rgba(11,25,41,0.04), 0 4px 16px rgba(11,25,41,0.06);
        }
        .cl-progress-meta { font-size: 1.05rem; color: var(--ink); }
        .cl-progress-meta strong { color: var(--primary); font-family: var(--font-display); font-weight: 700; }
        .cl-progress-bar { height: 10px; background: var(--surface-sunken); border-radius: 999px; overflow: hidden; }
        .cl-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          transition: width 300ms ease-out;
          border-radius: 999px;
        }
        .cl-progress-hint { font-size: 0.85rem; color: var(--ink-muted); }
        .cl-reset {
          margin-left: 6px;
          background: none;
          border: none;
          color: var(--danger);
          cursor: pointer;
          font: inherit;
          font-weight: 600;
          padding: 0;
          text-decoration: underline;
        }
        .cl-group {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 4px 4px 12px;
          overflow: hidden;
        }
        .cl-group-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px 12px;
        }
        .cl-group-head h3 {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          color: var(--ink-strong);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .cl-group-count {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--ink-muted);
          background: var(--surface-soft);
          border: 1px solid var(--border);
          padding: 3px 10px;
          border-radius: 999px;
          font-weight: 600;
        }
        .cl-group ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .cl-group li {
          border-top: 1px solid var(--border);
          padding: 0;
        }
        .cl-group label {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 20px;
          cursor: pointer;
          transition: background 150ms;
        }
        .cl-group label:hover { background: var(--surface-soft); }
        .cl-group input[type="checkbox"] {
          margin-top: 4px;
          width: 20px;
          height: 20px;
          accent-color: var(--primary);
          flex-shrink: 0;
          cursor: pointer;
        }
        .cl-text { display: flex; flex-direction: column; gap: 4px; }
        .cl-label { font-weight: 600; line-height: 1.5; color: var(--ink); }
        .cl-hint { font-size: 0.86rem; color: var(--ink-muted); line-height: 1.6; }
        .cl-link {
          align-self: flex-start;
          font-size: 0.84rem;
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          margin-top: 6px;
        }
        .cl-link:hover { text-decoration: underline; }
        .is-done .cl-label {
          text-decoration: line-through;
          color: var(--ink-faint);
        }
        .is-done .cl-hint { opacity: 0.7; }
      `}</style>
    </div>
  );
}
