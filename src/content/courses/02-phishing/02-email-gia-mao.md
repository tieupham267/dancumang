---
module:
  id: 2
  title: "Nhận diện Lừa đảo"
  description: "Phát hiện email giả, SMS lừa đảo, cuộc gọi mạo danh ngân hàng và công an"
  icon: "alert"
  color: "#E94560"

title: "Email giả mạo: Cách nhận biết trong 10 giây"
description: "5 dấu hiệu của email lừa đảo — chỉ cần liếc qua là biết ngay không cần bấm mở"
order: 2
duration: "7 phút"
difficulty: "cơ bản"
publishedDate: 2026-05-15
tags: ["email", "phishing", "lừa đảo", "spam"]

quiz:
  - question: "Email từ địa chỉ nào đáng tin cậy nhất khi cảnh báo về tài khoản ngân hàng VCB?"
    options:
      - "support@vcb-security.com"
      - "no-reply@vietcombank.com.vn"
      - "vcb.help@gmail.com"
      - "billing@vcb-online.top"
    correct: 1
    explanation: "Ngân hàng chỉ dùng domain chính thức của họ (vietcombank.com.vn). Các email '-security', '-online', kết hợp .com / .top hay gmail.com đều là giả mạo."

  - question: "Bạn nhận email 'Apple ID của bạn đã bị khóa, bấm vào đây để mở khóa'. Phản ứng tốt nhất?"
    options:
      - "Bấm link để xem chuyện gì đang xảy ra"
      - "Reply hỏi thêm chi tiết"
      - "Mở Safari → gõ apple.com → đăng nhập kiểm tra"
      - "Tắt máy và chờ"
    correct: 2
    explanation: "Không bao giờ bấm link trong email. Luôn gõ địa chỉ trang web chính thức thẳng vào trình duyệt và đăng nhập kiểm tra."
---

## "Hóa đơn iCloud 2.490.000đ" — bạn có hoảng không?

Bạn vừa mở Gmail và thấy:

> **From:** billing@apple-id-service.com
> **Subject:** [Apple] Hóa đơn iCloud Premium 2TB — 2.490.000đ
>
> Cảm ơn bạn đã thanh toán. Nếu không phải bạn, vui lòng bấm **"Hủy giao dịch"** trong **12 giờ** để hoàn tiền.

Bạn không nhớ đã mua gì. Tay bạn đã đặt lên link "Hủy giao dịch". **Dừng lại** — đây chính xác là phản ứng mà kẻ lừa đảo muốn.

## 5 dấu hiệu nhận biết email lừa đảo

### 1. Địa chỉ gửi (sender) — đọc thật kỹ

Email lừa đảo thường có địa chỉ gần giống domain thật, nhưng có thêm chữ:

| Thật | Giả |
|------|-----|
| `@apple.com` | `@apple-id-service.com` |
| `@vietcombank.com.vn` | `@vcb-secure.com` |
| `@google.com` | `@google-security.online` |

**Mẹo:** đọc phần sau dấu `@`. Mọi thứ trước `@` có thể giả mạo dễ dàng.

### 2. Tạo áp lực thời gian

> "Bạn còn **12 giờ** để hủy đơn hàng…"
> "Tài khoản sẽ bị khóa **trong 24 giờ** nếu không xác minh…"

Mục tiêu: làm bạn hoảng, không kịp suy nghĩ. **Mọi vấn đề thật không bao giờ chỉ cho bạn 12 giờ.**

### 3. Lỗi chính tả, ngữ pháp lạ

Email chính thống được kiểm duyệt. Email lừa đảo (đặc biệt loại dịch máy từ tiếng Anh sang Việt) thường có:

- Dấu thanh sai: "tài khoãn", "khẩn cãp"
- Văn phong cứng: "Quý khách hãy nhanh chóng tiến hành xác thực ngay lập tức"
- Viết hoa lung tung giữa câu

### 4. Yêu cầu nhập mật khẩu / OTP qua email

**Không có ngân hàng, công ty công nghệ nào yêu cầu mật khẩu qua email.** Nếu được hỏi, 100% là lừa.

### 5. Link không khớp với chữ hiển thị

Email lừa đảo:
> Bấm vào [vietcombank.com.vn](http://vcb-secure.vn-login.top) để xác minh

Chữ hiển thị là "vietcombank.com.vn" — nhưng link thật trỏ tới `vcb-secure.vn-login.top`.

**Mẹo trên máy tính:** rê chuột lên link (không bấm) — góc dưới trình duyệt hiện địa chỉ thật.
**Mẹo trên điện thoại:** nhấn giữ link, chọn "Copy link" để xem địa chỉ thật.

## Quy trình 10 giây của Dân Cư Mạng

Khi nhận email lạ:

1. **Liếc địa chỉ gửi** — có phải domain thật không?
2. **Có tạo áp lực thời gian không?** — nếu có, nghi ngờ ngay.
3. **Yêu cầu gì?** — nếu hỏi mật khẩu/OTP, vứt.
4. **Vẫn không chắc?** — đừng bấm link trong email. Mở app/web chính thức để kiểm tra.

> 💡 Hai từ khóa cứu mạng: **"Không bấm link"**. Đa số phishing chỉ thành công khi bạn bấm vào link và nhập thông tin.

## Khi bạn nghi ngờ một email cụ thể

- **Chuyển email vào thư mục spam** — giúp Gmail/Outlook học để chặn cho người khác.
- **Báo cho người gửi giả mạo:** nếu email giả VCB → forward đến `phishing@vietcombank.com.vn`. Nếu giả Apple → `reportphishing@apple.com`.
- **Không reply.** Việc bạn reply xác nhận email của bạn là active — bạn sẽ nhận thêm.

## Tóm tắt bài học

- Đọc kỹ **địa chỉ sau dấu @** — đây là chỗ khó giả nhất.
- **Áp lực thời gian = dấu hiệu đỏ.**
- **Không ai có quyền yêu cầu mật khẩu qua email.**
- Nghi ngờ → mở app/web chính thức kiểm tra, **không bấm link trong email**.

---

*Bài tiếp theo: [SMS & cuộc gọi lừa đảo — chiêu thức phổ biến tại Việt Nam](/khoa-hoc/02-phishing/03-sms-cuoc-goi-lua-dao)*
