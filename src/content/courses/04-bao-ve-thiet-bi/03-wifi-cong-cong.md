---
module:
  id: 4
  title: "Bảo vệ Thiết bị"
  description: "Giữ máy tính, điện thoại và dữ liệu của bạn an toàn trước virus, mất trộm và truy cập trái phép"
  icon: "shield"
  color: "#16A085"

title: "Wi-Fi công cộng: Nguy hiểm hơn bạn nghĩ"
description: "Cách Wi-Fi miễn phí ở quán cà phê có thể trở thành cái bẫy đánh cắp tài khoản và tiền của bạn"
order: 3
duration: "6 phút"
difficulty: "cơ bản"
publishedDate: 2026-05-15
tags: ["wifi", "công cộng", "vpn", "man in the middle"]

quiz:
  - question: "Bạn đang dùng Wi-Fi miễn phí ở sân bay. Việc nào KHÔNG nên làm?"
    options:
      - "Đọc báo, xem YouTube"
      - "Lướt Google Maps tìm địa chỉ"
      - "Đăng nhập app ngân hàng, chuyển khoản"
      - "Gọi điện qua Zalo"
    correct: 2
    explanation: "Wi-Fi công cộng có thể bị giả mạo (rogue access point). Tránh các thao tác nhạy cảm như đăng nhập ngân hàng. Nếu cần — dùng 4G/5G hoặc bật VPN."

  - question: "Wi-Fi 'StarbucksFree' và 'STARBUCKS_GUEST' đều hiển thị. Cái nào đáng tin?"
    options:
      - "StarbucksFree — nghe gần gũi"
      - "STARBUCKS_GUEST — chữ hoa nghe chính thức"
      - "Cả 2 — chọn cái nào cũng được"
      - "Hỏi nhân viên xem cái nào là Wi-Fi thật của quán"
    correct: 3
    explanation: "Kẻ xấu hay đặt tên Wi-Fi giả gần giống tên quán. Luôn hỏi nhân viên / xem tờ giấy in tên Wi-Fi chính thức của quán."
---

## "Free Wi-Fi" — quà tặng hay cái bẫy?

Bạn đến quán cà phê, mở điện thoại, thấy 3 Wi-Fi miễn phí:
- `Starbucks_Guest`
- `STARBUCKS-FREE`
- `Free_Wifi_Coffee`

Bạn chọn cái nào? **Cả 3 đều có thể là bẫy** — đặc biệt nếu không có cái nào trùng với Wi-Fi chính thức quán in trên menu.

## Tại sao Wi-Fi công cộng nguy hiểm?

### Nguy cơ 1: Wi-Fi giả mạo (Evil Twin / Rogue AP)

Kẻ xấu mang một thiết bị nhỏ (bằng cục pin sạc) đến quán cà phê, phát Wi-Fi tên giống quán. Bạn kết nối → toàn bộ traffic đi qua máy của hắn:
- Hắn thấy bạn vào website nào.
- Hắn có thể chèn nội dung giả (vd: trang đăng nhập Facebook fake).
- Hắn cài đặt được mã độc vào thiết bị (qua các lỗ hổng cũ chưa vá).

### Nguy cơ 2: Sniffing — bắt gói tin

Trên Wi-Fi cùng quán, kẻ xấu có thể "nghe lén" traffic không mã hóa (websites HTTP, một số app cũ).

**Tin tốt:** đa số website hiện đại (Facebook, Gmail, ngân hàng) dùng HTTPS — kẻ xấu chỉ thấy bạn vào `facebook.com` chứ không thấy mật khẩu.

**Tin xấu:** vài app cũ, một số ứng dụng nội bộ vẫn truyền dữ liệu chưa mã hóa.

### Nguy cơ 3: Captive portal giả

Khi bạn mới kết nối, một trang "đăng ký Wi-Fi" hiện ra, yêu cầu:
- Đăng nhập Facebook / Google.
- Nhập số điện thoại + mã OTP.

→ Đây là trang **lừa đảo lấy tài khoản**, không phải đăng ký Wi-Fi thật.

## Quy tắc khi dùng Wi-Fi công cộng

### ✅ NÊN làm:

- **Hỏi nhân viên** Wi-Fi chính thức tên gì.
- **Chỉ làm việc nhẹ:** đọc báo, xem YouTube, dùng Google Maps.
- **Bật VPN** trước khi kết nối Wi-Fi lạ.
- **Tắt "tự động kết nối Wi-Fi quen"** — kẻ xấu có thể giả mạo Wi-Fi nhà bạn ở chỗ công cộng.

### ❌ KHÔNG nên làm:

- **Đăng nhập app ngân hàng, chuyển tiền.**
- **Mua hàng online nhập số thẻ.**
- **Đăng nhập email công ty / VPN công ty.**
- **Đăng nhập tài khoản nhạy cảm** (Facebook chính, Gmail chính).

Nếu cần làm những việc trên → **dùng 4G/5G** (luôn an toàn hơn Wi-Fi công cộng) hoặc **bật VPN**.

## VPN — bảo vệ thế nào?

VPN (Virtual Private Network) tạo "đường hầm" mã hóa giữa thiết bị của bạn và máy chủ VPN. Trên Wi-Fi công cộng, kẻ xấu chỉ thấy bạn đang nói chuyện với máy chủ VPN — không thấy bạn đang vào website gì.

### Chọn VPN nào?

✅ **Đáng tin (trả phí):**
- **Mullvad** — không cần email, chỉ cần số tài khoản.
- **Proton VPN** — có gói miễn phí giới hạn.
- **IVPN** — đặt ở Thụy Sĩ, không log.

❌ **TRÁNH:**
- VPN miễn phí từ app store lạ — nhiều cái bán dữ liệu người dùng.
- VPN từ nhà cung cấp Trung Quốc hoặc không rõ chủ.

### Cách dùng cơ bản:

1. Cài app VPN → đăng nhập.
2. Trước khi kết nối Wi-Fi công cộng → bật VPN.
3. Khi xong việc → tắt VPN (để tiết kiệm pin).

## Wi-Fi nhà bạn — cũng cần bảo mật

Đừng quên rằng "Wi-Fi nhà" cũng có thể bị xâm nhập:

### Việc cần làm:

1. **Đổi mật khẩu mặc định của router.** Mật khẩu Wi-Fi và mật khẩu admin router là 2 thứ khác nhau — đổi cả 2.
2. **Dùng WPA3 hoặc WPA2** — không bao giờ WEP (đã lỗi thời, dễ crack).
3. **Đổi tên Wi-Fi** đừng để lộ tên gia đình hoặc địa chỉ (vd: "NhaAnhTuan_KP3" → kẻ xấu biết bạn là ai).
4. **Tắt WPS** — tính năng "kết nối nhanh bằng nút bấm" có lỗ hổng cũ.
5. **Cập nhật firmware router** — vào trang admin (thường là 192.168.1.1 hoặc 192.168.0.1), tìm "Update firmware".

## Khi sạc điện thoại ở chỗ công cộng

Cổng USB ở sân bay, quán cà phê có thể bị **"juice jacking"** — kẻ xấu thay đầu cáp để vừa sạc, vừa cài mã độc.

### Cách phòng:

- **Mang theo sạc dự phòng** của bạn.
- **Mang theo "data blocker"** — cục nhỏ cắm giữa cáp và điện thoại, chỉ cho điện qua, chặn dữ liệu (giá 50–100k).
- **Sạc qua ổ điện trực tiếp** (cắm củ sạc của bạn vào ổ tường) thay vì cắm cáp USB lạ.

## Tóm tắt bài học

- Wi-Fi công cộng có thể là **bẫy giả mạo** — hỏi nhân viên tên Wi-Fi chính thức.
- Trên Wi-Fi công cộng, **chỉ làm việc nhẹ**. Việc nhạy cảm → 4G/5G hoặc VPN.
- VPN đáng tin: **Mullvad, Proton VPN, IVPN**. Tránh VPN miễn phí lạ.
- Wi-Fi nhà: **đổi mật khẩu admin router, dùng WPA3/WPA2, tắt WPS**.
- Sạc điện thoại chỗ công cộng → mang theo sạc của bạn hoặc dùng data blocker.

---

*Bài tiếp theo: [Sao lưu dữ liệu: Phòng khi mất điện thoại](/khoa-hoc/04-bao-ve-thiet-bi/04-sao-luu-du-lieu)*
