---
module:
  id: 2
  title: "Nhận diện Lừa đảo"
  description: "Phát hiện email giả, SMS lừa đảo, cuộc gọi mạo danh ngân hàng và công an"
  icon: "alert"
  color: "#E94560"

title: "Bài tập thực hành: Nhận diện tin nhắn thật và giả"
description: "Tổng hợp Module 2 — Quy trình 5 giây để quyết định một tin nhắn có lừa đảo không"
order: 6
duration: "5 phút"
difficulty: "cơ bản"
publishedDate: 2026-05-15
tags: ["thực hành", "checklist", "phishing"]

quiz:
  - question: "Áp dụng quy trình 5 giây: 'SMS từ VCB-Bank: Tài khoản bị khóa, bấm http://vcb-vn.top trong 12h.' Cờ đỏ chính?"
    options:
      - "Brand SMS"
      - "Áp lực thời gian + link không chính thức + yêu cầu hành động qua link"
      - "Chỉ là spam thông thường"
      - "Không có cờ đỏ nào"
    correct: 1
    explanation: "Có 3 cờ đỏ: (1) áp lực thời gian 12h, (2) link không phải domain chính thức của VCB, (3) yêu cầu hành động qua link. Đủ 1 cờ đã đáng nghi, 3 cờ = chắc chắn lừa đảo."

  - question: "Tin nhắn nào KHÔNG phải lừa đảo?"
    options:
      - "Mẹ ơi con kẹt tiền cho con mượn 5tr chuyển vào số 09xx của cô A nhé"
      - "Google: Phát hiện đăng nhập mới từ Hà Nội. Nếu không phải bạn, hãy mở account.google.com"
      - "Trúng thưởng iPhone 16, đóng 500k phí ship"
      - "Anh là công an, anh em mình cài app này để hợp tác điều tra"
    correct: 1
    explanation: "Đáp án 2 là cảnh báo đăng nhập tiêu chuẩn của Google — không yêu cầu mật khẩu, chỉ thông báo và hướng dẫn đến trang chính thức. Các đáp án khác đều có cờ đỏ rõ rệt."
---

## Đã đến lúc tổng kiểm tra

Bạn đã đi qua 5 bài về các chiêu phishing phổ biến. Bài này không có thông tin mới — chỉ có một **quy trình 5 giây** để bạn áp dụng khi đối mặt tin nhắn lạ.

> 💡 Mẹo: chia sẻ trang này với bố mẹ, người thân — họ là mục tiêu chính của các chiêu lừa đảo.

## Quy trình 5 giây của Dân Cư Mạng

Mỗi lần nhận tin nhắn / email / cuộc gọi đáng nghi, áp dụng **5 câu hỏi**:

### 1. Người gửi có đáng tin không?

- Đối với **email:** đọc kỹ phần sau dấu `@`. Phải là domain chính thức.
- Đối với **SMS:** brand name có thể bị giả mạo dễ dàng — không tin chỉ vì brand đẹp.
- Đối với **cuộc gọi:** số gọi đến có thể bị fake (caller ID spoofing). Không tin chỉ vì hiển thị "Vietcombank".

### 2. Họ yêu cầu gì?

❌ **Nguy hiểm:**
- Mật khẩu / OTP
- Số CVV thẻ
- Mã PIN
- Cài app qua link

✅ **Bình thường:**
- Thông báo (không yêu cầu hành động)
- Hướng dẫn đến app/web chính thức (không kèm link)

### 3. Có áp lực thời gian không?

> "Trong 24h", "ngay lập tức", "trước khi tài khoản bị khóa…"

→ **90% lừa đảo có áp lực thời gian.** Việc thật không bao giờ chỉ cho bạn 12h.

### 4. Có link / app cần bấm không?

- **Link:** đọc domain (phần `xxx.yyy.zz` sau `://`). Domain lạ = nghi ngờ.
- **App:** chỉ cài từ **App Store** (iPhone) hoặc **Google Play** (Android). Không cài `.apk` từ link.

### 5. Tôi có cách xác minh khác không?

- Email ngân hàng → mở app ngân hàng kiểm tra.
- Cuộc gọi "công an" → gọi 113 / đến công an khu vực.
- Tin nhắn bạn bè mượn tiền → gọi điện thoại trực tiếp.
- Đơn hàng → mở app Shopee / Lazada chính thức.

**Nếu có cách xác minh khác → luôn chọn cách đó. Không tin tin nhắn đầu tiên.**

## Bảng quyết định nhanh

| Tình huống | Phản ứng |
|------------|----------|
| SMS có link → bấm xác minh tài khoản | ❌ Không bấm. Mở app chính thức. |
| Cuộc gọi xưng công an, yêu cầu cài app | ❌ Cúp máy. Gọi 113. |
| Bạn nhắn FB mượn tiền gấp | ❌ Chưa chuyển. Gọi điện thoại xác nhận. |
| Email "trúng thưởng đóng phí ship" | ❌ Xóa. Không có giải thưởng nào yêu cầu phí. |
| QR thanh toán có tên người nhận lạ | ❌ Hủy. Hỏi nhân viên kiểm tra QR. |
| Google báo đăng nhập mới, KHÔNG yêu cầu hành động | ✅ Bình thường. Nếu nghi → mở account.google.com kiểm tra. |
| App ngân hàng báo giao dịch thành công sau khi bạn vừa chuyển | ✅ Bình thường. |

## Lập "phòng tuyến" cho bản thân

Đặt sẵn vài quy tắc cứng để não tự động phòng vệ:

1. **"OTP của tôi không bao giờ rời khỏi tay tôi."** — kể cả bố mẹ ruột.
2. **"Trước khi chuyển tiền cho ai, tôi phải gọi điện xác nhận."** — không có ngoại lệ.
3. **"App tôi cài chỉ từ App Store / Google Play."** — không cài qua link.
4. **"Tôi không bấm link trong SMS / email."** — luôn mở app/web chính thức.

## Lập "phòng tuyến" cho người thân

Người lớn tuổi và trẻ em là đối tượng dễ bị lừa nhất. Việc bạn cần làm:

1. **Cài đặt giúp bố mẹ:** 2FA cho email, ngân hàng, FB.
2. **Lưu hotline ngân hàng** vào danh bạ của họ.
3. **Cài "Bảo vệ tài khoản nâng cao"** trên các app ngân hàng (yêu cầu xác nhận thiết bị mới).
4. **Trao đổi với họ về 6 chiêu phổ biến** — kể cụ thể, đừng nói chung chung "cẩn thận".

## Tóm tắt Module 2

- Phishing dựa vào **cảm xúc** (hoảng, tham, tin tưởng), không dựa vào kỹ thuật cao siêu.
- **5 câu hỏi cứu mạng:** Người gửi? Yêu cầu gì? Có áp lực thời gian? Có link/app? Có cách xác minh khác?
- **3 quy tắc tuyệt đối:** Không cho OTP. Gọi điện trước khi chuyển tiền. App chỉ cài từ store chính thức.
- Bảo vệ người thân = bảo vệ chính mình (vì hacker dùng tài khoản người thân để lừa bạn).

---

🎉 **Hoàn thành Module 2!** Tiếp theo: [Module 3 — An toàn Mạng xã hội](/khoa-hoc/03-mang-xa-hoi/01-oversharing-tren-mang)
