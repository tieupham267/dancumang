---
module:
  id: 4
  title: "Bảo vệ Thiết bị"
  description: "Giữ máy tính, điện thoại và dữ liệu của bạn an toàn trước virus, mất trộm và truy cập trái phép"
  icon: "shield"
  color: "#16A085"

title: "5 thói quen bảo vệ máy tính khỏi bị xâm nhập"
description: "Khóa màn hình, cập nhật phần mềm, tránh USB lạ — những việc đơn giản giúp máy tính của bạn an toàn"
order: 1
duration: "6 phút"
difficulty: "cơ bản"
publishedDate: 2026-05-11
tags: ["máy tính", "bảo mật", "windows", "cơ bản"]

quiz:
  - question: "Bạn rời bàn làm việc đi pha cà phê 5 phút. Việc gì nên làm với máy tính?"
    options:
      - "Để nguyên, 5 phút thôi mà"
      - "Tắt máy hoàn toàn"
      - "Khóa màn hình (Windows + L hoặc Ctrl+Cmd+Q trên Mac)"
      - "Đóng tất cả ứng dụng đang mở"
    correct: 2
    explanation: "Khóa màn hình mất 1 giây và yêu cầu mật khẩu để mở lại. 5 phút là đủ để ai đó cắm USB cài mã độc, đọc email, hoặc copy file. Tắt máy thì mất thời gian khởi động lại."

  - question: "Bạn vừa nhặt được USB ngoài bãi xe công ty, có dán nhãn 'Lương 2026'. Nên làm gì?"
    options:
      - "Cắm vào máy ngay để xem ai đánh rơi"
      - "Cắm vào máy ở nhà để xem trước, an toàn hơn"
      - "Không cắm. Đưa cho bộ phận bảo vệ/IT xử lý"
      - "Chỉ mở 1 file để xem, không sao đâu"
    correct: 2
    explanation: "Đây là kỹ thuật tấn công kinh điển: kẻ xấu cố tình đánh rơi USB chứa mã độc, lợi dụng sự tò mò. Chỉ cần cắm vào là máy có thể bị nhiễm — không cần mở file nào. 'Máy ở nhà' cũng không an toàn hơn."
---

## Máy tính của bạn là kho báu

Trong máy tính bạn có gì? Email, mật khẩu đã lưu, ảnh gia đình, tài liệu công việc, lịch sử trình duyệt, có thể cả app ngân hàng. Mất quyền kiểm soát máy = mất hết.

Tin tốt: bảo vệ máy tính không cần kỹ thuật phức tạp. **5 thói quen** dưới đây — làm hằng ngày — đã chặn được phần lớn rủi ro.

## Thói quen #1: Luôn khóa màn hình khi rời máy

Bạn đứng dậy pha cà phê 5 phút — đủ thời gian cho:
- Đồng nghiệp tò mò đọc email/chat riêng tư
- Khách hàng đi ngang nhìn thấy báo cáo nội bộ
- Kẻ xấu cắm USB cài mã độc trong 30 giây

**Phím tắt khóa màn hình:**

| Hệ điều hành | Phím tắt |
|---|---|
| Windows | `Windows` + `L` |
| macOS | `Control` + `Command` + `Q` |
| Linux | `Super` + `L` (hoặc `Ctrl` + `Alt` + `L`) |

**Mẹo:** Cài đặt máy tự khóa sau 5 phút không hoạt động:
- Windows: Settings → Accounts → Sign-in options → Require sign-in
- macOS: System Settings → Lock Screen

<!-- TODO: Verify behavior — Test xem TeamViewer/AnyDesk có thể remote vào máy tính khi màn hình đang Lock hay không? Nếu có thì cần bổ sung cảnh báo về việc thoát hẳn ứng dụng remote khi rời máy. -->

## Thói quen #2: Cập nhật hệ điều hành và phần mềm

> "Update sau, đang bận."

Câu nói tốn hàng triệu đô-la mỗi năm trên toàn thế giới. **WannaCry** năm 2017 lây 200.000 máy tính chỉ vì người dùng chưa update Windows — bản vá đã có sẵn 2 tháng trước đó.

**Cập nhật những gì:**
- ✅ Hệ điều hành (Windows Update / macOS Software Update)
- ✅ Trình duyệt (Chrome, Edge, Firefox — thường tự update)
- ✅ Phần mềm văn phòng (Microsoft Office, Adobe Reader)
- ✅ App ngân hàng / ví điện tử trên máy tính
- ✅ Phần mềm diệt virus

**Mẹo:** Bật **tự động cập nhật** cho mọi thứ. Đặt máy tự update vào ban đêm hoặc cuối tuần — không phá ngang công việc.

## Thói quen #3: Cài phần mềm diệt virus uy tín

Trên Windows, **Windows Defender** (có sẵn) đã đủ tốt cho người dùng cá nhân — miễn phí và luôn cập nhật. Bạn **không cần** mua thêm các bộ "siêu bảo mật" đắt tiền nếu chỉ dùng máy thông thường.

Nếu muốn thêm lớp bảo vệ:
- **Malwarebytes** (bản miễn phí) — quét theo yêu cầu
- **Bitdefender Free** — antivirus nhẹ, ít làm chậm máy

⚠️ **Tránh xa:**
- Phần mềm "diệt virus" cài kèm khi tải torrent / crack
- App quảng cáo "máy bạn nhiễm 47 virus, bấm để diệt" — đa số chính là virus
- Diệt virus "miễn phí" yêu cầu nhập thẻ tín dụng

## Thói quen #4: Không cắm USB lạ vào máy

Kỹ thuật **USB Drop Attack** đơn giản đến đáng sợ: kẻ tấn công cố tình đánh rơi USB ngoài bãi xe, hành lang công ty, quán cà phê. Người nhặt thường tò mò cắm vào để xem có gì.

Chỉ cần **cắm USB vào máy** — chưa cần mở bất kỳ file nào — mã độc đã có thể tự chạy nhờ tính năng `autorun`. Trong vài giây:
- Cài keylogger ghi lại mọi phím bạn gõ
- Mở cổng cho hacker truy cập từ xa
- Mã hóa toàn bộ file để đòi tiền chuộc (ransomware)

**Quy tắc:**
- Chỉ cắm USB **của bạn** hoặc **người bạn tin tưởng tuyệt đối**
- USB từ khách hàng/đối tác → quét virus trên máy "rác" trước
- USB nhặt được → đưa cho bộ phận IT / bỏ vào thùng rác
- Tắt **autorun** trong Windows (Settings → Devices → AutoPlay → Off)

## Thói quen #5: Cẩn thận với Wi-Fi công cộng

Wi-Fi quán cà phê, sân bay, khách sạn — **miễn phí nhưng không an toàn**. Trên cùng một mạng Wi-Fi, kẻ xấu có thể:
- Nhìn thấy bạn đang truy cập trang web nào
- Chặn và sửa dữ liệu (man-in-the-middle attack)
- Tạo Wi-Fi giả tên "Free_Coffee_Wifi" để dụ bạn kết nối

**Khi buộc phải dùng Wi-Fi công cộng:**

✅ **Nên:**
- Chỉ duyệt web thông thường (đọc báo, Google Maps)
- Đảm bảo trang web có **HTTPS** (biểu tượng khóa trên thanh địa chỉ)
- Tắt **chia sẻ file** trong cài đặt mạng

❌ **Không:**
- Đăng nhập ngân hàng / ví điện tử
- Vào email công ty / tài khoản quan trọng
- Chuyển tiền, mua sắm online
- Cài đặt phần mềm mới

**Giải pháp an toàn nhất:** Dùng **4G/5G điện thoại** thay vì Wi-Fi lạ. Hoặc bật **VPN** uy tín nếu thực sự cần dùng Wi-Fi công cộng.

## Checklist tự kiểm tra

- [ ] Có thói quen **khóa màn hình** (Windows+L) khi rời máy
- [ ] Máy tự khóa sau **5 phút** không hoạt động
- [ ] Windows / macOS đã bật **tự động cập nhật**
- [ ] Trình duyệt đang ở **phiên bản mới nhất**
- [ ] Đã bật **Windows Defender** (hoặc antivirus uy tín)
- [ ] Không cắm USB lạ vào máy
- [ ] Không đăng nhập tài khoản quan trọng trên **Wi-Fi công cộng**

## Tóm tắt

- 🔒 **Khóa màn hình** (Win+L) ngay cả khi chỉ rời 1 phút
- 🔄 **Cập nhật** hệ điều hành và phần mềm thường xuyên
- 🛡️ Windows Defender là **đủ tốt** — không cần phần mềm diệt virus đắt tiền
- 🔌 **Không cắm USB lạ** — kể cả USB "nhặt được"
- 📶 **Wi-Fi công cộng** chỉ để lướt web — không đăng nhập tài khoản quan trọng

---

*Bài tiếp theo: [Bảo vệ điện thoại — Khóa bằng vân tay, app từ store chính thống](/courses/04-bao-ve-thiet-bi/02-bao-ve-dien-thoai)*
