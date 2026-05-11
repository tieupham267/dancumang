---
module:
  id: 1
  title: "Mật khẩu & Tài khoản"
  description: "Tạo mật khẩu mạnh, bật xác thực 2 lớp, quản lý tài khoản an toàn"
  icon: "lock"
  color: "#0F3460"

title: "Thói quen vàng — Checklist bảo vệ tài khoản"
description: "5 thói quen đơn giản giúp tài khoản của bạn an toàn 99% — kể cả khi không phải dân kỹ thuật"
order: 6
duration: "5 phút"
difficulty: "cơ bản"
publishedDate: 2026-05-11
tags: ["tài khoản", "thói quen", "checklist", "cơ bản"]

quiz:
  - question: "Bạn đăng nhập Facebook ở máy bạn mượn của đồng nghiệp. Việc đầu tiên cần làm khi xong là gì?"
    options:
      - "Tắt trình duyệt là đủ"
      - "Đăng xuất khỏi tài khoản trước khi rời máy"
      - "Xóa lịch sử trình duyệt"
      - "Khởi động lại máy"
    correct: 1
    explanation: "Tắt trình duyệt không đăng xuất bạn — phiên đăng nhập vẫn được lưu. Phải bấm 'Đăng xuất' rõ ràng. Xóa lịch sử chỉ giấu dấu vết, không bảo vệ tài khoản."

  - question: "SMS từ '+84...' báo 'Tài khoản ngân hàng của bạn bị khóa, bấm vào link để xác minh'. Bạn làm gì?"
    options:
      - "Bấm link để kiểm tra ngay"
      - "Gọi lại số trong tin nhắn để xác nhận"
      - "Không bấm. Mở app ngân hàng chính thức để kiểm tra"
      - "Trả lời tin nhắn yêu cầu thông tin"
    correct: 2
    explanation: "Đây là phishing kinh điển. Ngân hàng không bao giờ gửi link yêu cầu xác minh qua SMS. Số gọi lại cũng có thể là kẻ lừa đảo. Luôn mở app/web chính thức bạn vẫn dùng — không bấm link trong tin nhắn."
---

## Bạn không cần là chuyên gia bảo mật

Bạn không cần biết hacking, không cần học mã hóa. Chỉ cần **5 thói quen** dưới đây — lặp lại đủ lâu thành phản xạ — là 99% kẻ xấu sẽ bỏ cuộc và đi tìm con mồi dễ hơn.

Đây là checklist tổng hợp những gì bạn đã học ở các bài trước, gom lại thành 5 việc làm hằng ngày.

## Thói quen #1: Mật khẩu mạnh, mỗi nơi một cái

> **Quy tắc:** Mật khẩu kết hợp **chữ + số + ký tự đặc biệt**, dài tối thiểu 12 ký tự, và **không dùng chung** giữa các tài khoản.

Cách dễ nhất: dùng **Password Manager** (xem [bài 3](/courses/01-mat-khau/03-password-manager)). Bạn chỉ cần nhớ 1 mật khẩu "chủ", phần còn lại app tự tạo và tự nhớ.

⚠️ **Đừng:**
- Dùng `123456`, `password`, tên + năm sinh
- Dùng chung 1 mật khẩu cho Facebook + Gmail + ngân hàng
- Chia sẻ mật khẩu qua tin nhắn, kể cả cho người thân

## Thói quen #2: Bật xác thực 2 bước (2FA)

Mật khẩu có bị lộ thì kẻ xấu vẫn cần **mã trên điện thoại bạn** mới đăng nhập được. Đây là lớp khóa thứ hai — gần như miễn phí và mất 2 phút để bật.

**Bật 2FA ngay cho:** Gmail, Facebook, Zalo, app ngân hàng, ví điện tử.

Chi tiết: xem bài [Xác thực 2 yếu tố](/courses/01-mat-khau/04-xac-thuc-2-yeu-to).

## Thói quen #3: Đăng xuất khi dùng máy lạ

Đăng nhập email/Facebook ở máy người khác (quán net, máy đồng nghiệp, máy in tiệm)?

✅ **Trước khi rời máy:**
1. Bấm **Đăng xuất** trong tài khoản (không phải chỉ tắt tab)
2. Nếu trình duyệt hỏi lưu mật khẩu → **Không lưu**
3. Xóa lịch sử + cookie nếu có thể

> **Lưu ý:** Tắt trình duyệt KHÔNG đồng nghĩa đăng xuất. Lần sau mở lên, tài khoản bạn vẫn đang đăng nhập.

## Thói quen #4: Không bấm link lạ

90% các vụ mất tài khoản bắt đầu từ **một cú bấm sai**. Trang đăng nhập giả nhìn giống y hệt thật — đến khi bạn gõ mật khẩu thì đã muộn.

**Cảnh giác với:**
- SMS/email báo "tài khoản bị khóa", "đơn hàng có vấn đề", "trúng thưởng"
- Tin nhắn từ Zalo/Messenger gửi link rút gọn (`bit.ly`, `tinyurl`)
- Trang đăng nhập có URL kỳ lạ: `face-book-login.xyz`, `vietcombank-secure.tk`

**Quy tắc vàng:** Cần kiểm tra tài khoản gì? **Tự mở app/web chính thức** bạn đã dùng — không bấm link trong tin nhắn.

## Thói quen #5: Đừng chia sẻ mật khẩu — kể cả cho "nhân viên ngân hàng"

Ngân hàng, Facebook, Google **không bao giờ** hỏi mật khẩu của bạn qua điện thoại hay tin nhắn. Nếu ai đó gọi/nhắn yêu cầu mật khẩu, mã OTP, mã PIN → **100% là lừa đảo**.

Ngay cả khi:
- Họ tự xưng là công an, cán bộ điều tra
- Họ đọc đúng tên, số CCCD, địa chỉ của bạn (thông tin có thể đã bị lộ trước đó)
- Họ hối thúc bạn "phải làm ngay không sẽ bị khóa tài khoản"

**Cứ cúp máy. Sau đó tự gọi lên số tổng đài chính thức để kiểm tra.**

## Checklist tự kiểm tra

In ra hoặc lưu lại — mỗi tháng xem lại 1 lần:

- [ ] Mật khẩu các tài khoản quan trọng đều **dài ≥ 12 ký tự**, có ký tự đặc biệt
- [ ] **Mỗi tài khoản 1 mật khẩu** riêng (hoặc đang dùng Password Manager)
- [ ] Đã bật **2FA** cho: Email chính, Facebook, Zalo, ngân hàng
- [ ] Đã lưu **mã khôi phục** 2FA ra giấy, cất nơi an toàn
- [ ] Không lưu mật khẩu ngân hàng trong **Notes / Tin nhắn / file Excel**
- [ ] Đã **đăng xuất** khỏi tất cả máy lạ đã dùng gần đây
- [ ] Trong **6 tháng qua**, không bấm link trong SMS/email lạ
- [ ] Không chia sẻ **mã OTP** cho bất kỳ ai, kể cả "nhân viên ngân hàng"

## Tóm tắt

- 🔐 Mật khẩu **mạnh + duy nhất** cho từng tài khoản
- 🛡️ Bật **2FA** cho mọi tài khoản quan trọng
- 🚪 **Đăng xuất** khi dùng máy lạ — không chỉ tắt tab
- 🔗 Không bấm link lạ — **tự mở app/web chính thức**
- 📵 Không chia sẻ **mật khẩu / OTP** cho bất kỳ ai

5 thói quen này — nếu giữ được — đã giúp bạn an toàn hơn **99% người dùng internet** ở Việt Nam.

---

*Module tiếp theo: [Nhận diện Lừa đảo](/courses/02-phishing/01-phishing-la-gi) — học cách phân biệt tin nhắn thật và giả.*
