---
module:
  id: 4
  title: "Bảo vệ Thiết bị"
  description: "Giữ máy tính, điện thoại và dữ liệu của bạn an toàn trước virus, mất trộm và truy cập trái phép"
  icon: "shield"
  color: "#16A085"

title: "Bảo vệ điện thoại — Khóa máy, app chính thống, tìm thiết bị từ xa"
description: "Điện thoại là chìa khóa vào tất cả tài khoản của bạn — bảo vệ nó như bảo vệ ví tiền"
order: 2
duration: "6 phút"
difficulty: "cơ bản"
publishedDate: 2026-05-11
tags: ["điện thoại", "android", "iphone", "bảo mật", "cơ bản"]

quiz:
  - question: "Điện thoại bạn bị mất ở quán cà phê. Việc đầu tiên cần làm là gì?"
    options:
      - "Đăng tin lên Facebook hỏi xem ai nhặt được"
      - "Chờ vài giờ xem có người liên hệ không"
      - "Vào Find My iPhone / Find My Device để khóa máy từ xa ngay"
      - "Mua điện thoại mới rồi đăng nhập lại tài khoản"
    correct: 2
    explanation: "Điện thoại chứa email, tài khoản ngân hàng, mã 2FA của bạn — kẻ xấu có vài giờ để khai thác. Phải khóa từ xa NGAY (Find My iPhone hoặc android.com/find), đặt thông báo trên màn hình, và đổi mật khẩu các tài khoản quan trọng. Đăng Facebook xong rồi nhưng máy đã bị mở."

  - question: "Một người bạn gửi link 'app theo dõi giá xăng siêu hay, tải về .apk này nha'. Bạn dùng Android, nên làm gì?"
    options:
      - "Tải về cài thử — bạn mình giới thiệu mà"
      - "Cài nhưng tắt quyền internet sau khi cài"
      - "Tìm app cùng tên trên CH Play — nếu không có thì bỏ qua"
      - "Cài trong chế độ ẩn danh là an toàn"
    correct: 2
    explanation: "File .apk cài từ ngoài CH Play (sideload) có thể chứa mã độc đánh cắp OTP ngân hàng — đây là chiêu lừa đảo phổ biến nhất ở VN năm 2024-2025. Bạn của bạn có thể đã bị hack tài khoản và đang gửi link tự động. Luôn tải app từ CH Play / App Store."
---

## Điện thoại là chìa khóa vào cuộc sống số của bạn

Trong điện thoại bạn có:
- 📧 **Email** — dùng để khôi phục mọi tài khoản khác
- 🏦 **App ngân hàng** + Smart OTP
- 💬 **Zalo, Messenger, Telegram** — tin nhắn riêng tư, mã xác thực
- 📸 **Ảnh cá nhân**, danh bạ, lịch sử cuộc gọi
- 🔐 **Mã 2FA** cho hàng chục tài khoản

Mất điện thoại = kẻ xấu có 30 phút để **rút sạch tài khoản ngân hàng** và **chiếm hết tài khoản mạng xã hội** trước khi bạn kịp khóa.

Đừng để điều đó xảy ra. **5 thói quen** sau đây mất tổng cộng 10 phút để cài đặt — bảo vệ bạn cả đời.

## Thói quen #1: Khóa máy bằng vân tay / khuôn mặt + mã PIN

**Bắt buộc:** Đặt mã mở máy. Không có ngoại lệ.

Theo thứ tự an toàn:

| Phương thức | An toàn | Tiện lợi |
|---|---|---|
| Không khóa | ❌ Cực kỳ nguy hiểm | — |
| Vẽ hình (pattern) | ⚠️ Dễ bị nhìn lén | Tiện |
| Mã PIN 4 số | ⚠️ Yếu, dễ đoán | Tiện |
| **Mã PIN 6 số trở lên** | ✅ Tốt | Tiện |
| **Vân tay / khuôn mặt** | ✅ Tốt nhất | Rất tiện |

**Mẹo:**
- Bật **cả vân tay + mã PIN** — dùng vân tay hằng ngày, PIN khi vân tay không nhận
- Đặt thời gian tự khóa **30 giây** sau khi tắt màn hình
- Tránh PIN dễ đoán: `1234`, `0000`, năm sinh, ngày sinh nhật

## Thói quen #2: Chỉ tải app từ kho chính thức

- **iPhone:** App Store
- **Android:** Google Play (CH Play)

**Tuyệt đối không:**
- ❌ Cài file `.apk` gửi qua Zalo / Messenger / email
- ❌ Cài app từ trang web "tải nhanh", "app crack", "app mod"
- ❌ Cài app theo hướng dẫn của "nhân viên ngân hàng" gọi điện
- ❌ Bấm vào quảng cáo "tải app này nhận 100k miễn phí"

> 💡 **Câu chuyện thật (2024):** Anh T. ở TP.HCM nhận được cuộc gọi từ "cán bộ thuế" yêu cầu cài app "VNeID giả" để cập nhật thông tin. App là Trojan đọc được mã OTP — trong 2 giờ, hơn 800 triệu đồng bị chuyển khỏi tài khoản. Hơn 1.000 nạn nhân tương tự trong năm 2024.

**Kiểm tra app trước khi cài:**
- App có nhiều **lượt tải** + **đánh giá lâu năm** (>1 năm)
- Tên nhà phát triển **đúng chính chủ** (vd: ngân hàng Vietcombank → "Joint Stock Commercial Bank for Foreign Trade of Vietnam")
- Đọc **quyền truy cập** app yêu cầu — app máy tính bỏ túi đòi quyền đọc tin nhắn = đáng nghi

## Thói quen #3: Cập nhật hệ điều hành thường xuyên

iOS và Android phát hành **bản vá bảo mật** liên tục. Mỗi bản update vá hàng chục lỗ hổng — bỏ qua = để cửa mở cho hacker.

**Bật tự động cập nhật:**

- **iPhone:** Cài đặt → Cài đặt chung → Cập nhật phần mềm → Cập nhật tự động → Bật cả hai
- **Android:** Cài đặt → Hệ thống → Cập nhật phần mềm → Bật tự động (vị trí menu khác nhau theo hãng)

**Cập nhật cả các app quan trọng:**
- App ngân hàng, ví điện tử
- Zalo, Messenger, Telegram (nơi nhận mã OTP)
- Trình duyệt (Chrome, Safari)

## Thói quen #4: Bật "Tìm thiết bị" — Phòng khi mất máy

Đây là **việc quan trọng nhất** trong bài này. Mất 2 phút cài đặt, cứu bạn khi mất máy.

### iPhone: Find My iPhone

1. Cài đặt → Bấm vào tên bạn ở đầu → **Tìm**
2. Bật **Tìm iPhone**
3. Bật **Mạng Tìm** (tìm được kể cả khi máy tắt)
4. Bật **Gửi vị trí cuối**

### Android: Find My Device

1. Cài đặt → Google → **Tìm thiết bị của tôi** → Bật
2. Hoặc tìm "Find My Device" trong Settings
3. Đảm bảo định vị (GPS) đang bật

### Khi mất máy — làm ngay:

1. **Truy cập từ máy khác:**
   - iPhone: [icloud.com/find](https://www.icloud.com/find)
   - Android: [android.com/find](https://www.android.com/find)
2. **Khóa máy từ xa** + hiện thông báo "Liên hệ 09xx xxx xxx để trả thưởng"
3. **Đổi mật khẩu**: Email chính → Ngân hàng → Facebook → Zalo (theo thứ tự)
4. **Gọi nhà mạng** khóa SIM (để kẻ xấu không nhận được mã OTP qua SMS)
5. Nếu chắc không lấy lại được: **Xóa dữ liệu từ xa** trên iCloud/Find My Device

## Thói quen #5: Cẩn thận với quyền truy cập của app

Mỗi app khi cài đều xin quyền: vị trí, micro, camera, danh bạ, ảnh, tin nhắn. **Không phải app nào cũng cần** mọi thứ đó.

**Quy tắc:** Cấp quyền **vừa đủ** cho app làm việc của nó.

| App | Quyền hợp lý | Đáng nghi |
|---|---|---|
| Máy tính bỏ túi | Không cần quyền | Yêu cầu đọc tin nhắn, danh bạ |
| App chỉnh ảnh | Truy cập ảnh | Yêu cầu micro, vị trí |
| App ngân hàng | Camera (QR), vân tay | Yêu cầu đọc tin nhắn của app khác |
| Game | Lưu trữ | Yêu cầu danh bạ, micro, SMS |

**Kiểm tra & thu hồi quyền:**
- **iPhone:** Cài đặt → Quyền riêng tư & Bảo mật → từng quyền
- **Android:** Cài đặt → Quyền riêng tư → Trình quản lý quyền

Bỏ quyền cho **mọi app bạn không nhớ vì sao đã cài**.

## Checklist tự kiểm tra

- [ ] Điện thoại đang khóa bằng **vân tay/khuôn mặt + PIN ≥ 6 số**
- [ ] Tự khóa sau **30 giây** không dùng
- [ ] Không có app nào cài từ ngoài **App Store / CH Play**
- [ ] **Tự động cập nhật** hệ điều hành đang bật
- [ ] **Find My iPhone / Find My Device** đang bật và đã thử test
- [ ] Đã ghi sẵn **số tổng đài nhà mạng** ở đâu đó (để gọi khóa SIM khi mất máy)
- [ ] Mọi app **không nhớ vì sao cài** đã được gỡ
- [ ] App ngân hàng đang ở **phiên bản mới nhất**

## Tóm tắt

- 📱 Khóa máy bằng **vân tay/khuôn mặt + PIN ≥ 6 số**
- 🏪 Chỉ tải app từ **App Store / CH Play** — không cài file `.apk` lạ
- 🔄 Bật **tự động cập nhật** iOS / Android
- 🔍 Bật **Find My iPhone / Find My Device** ngay hôm nay
- 🛂 Kiểm tra **quyền truy cập** app — gỡ bớt quyền không cần thiết

---

*Bài tiếp theo: [Wi-Fi công cộng và rủi ro](/courses/04-bao-ve-thiet-bi/03-wifi-cong-cong) — cách dùng Wi-Fi miễn phí mà không mất tài khoản.*
