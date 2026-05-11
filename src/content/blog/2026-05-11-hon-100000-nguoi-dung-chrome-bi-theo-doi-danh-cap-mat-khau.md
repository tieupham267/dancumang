---
title: "Hơn 100.000 người dùng Chrome bị theo dõi và đánh cắp mật khẩu nghiêm trọng"
description: "Symantec vừa phát hiện 4 tiện ích mở rộng độc hại trên Chrome Web Store với hơn 100.000 lượt cài đặt, có khả năng theo dõi hoạt động, đọc clipboard, đánh cắp mật khẩu và tráo đổi địa chỉ ví tiền điện tử."
category: "cảnh báo"
publishedDate: 2026-05-11
tags: ["chrome", "extension", "tiện ích", "bảo mật", "mã độc", "symantec", "clipboard", "mật khẩu"]
featured: true
readTime: "4 phút đọc"
coverImage: "https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2026/1/27/chrome-1769482610070-17694826107411296443089.jpg"
---

Theo *Neowin*, cửa hàng trực tuyến Chrome (Chrome Web Store) một lần nữa trở thành tâm điểm của sự chỉ trích, sau khi các nhà nghiên cứu từ Symantec phát hiện ra những lỗ hổng bảo mật nghiêm trọng. Theo báo cáo mới nhất, có ít nhất **4 tiện ích mở rộng** (extension) với tổng cộng hơn **100.000 lượt cài đặt** đang thực hiện các hành vi xâm nhập trái phép, đe dọa trực tiếp đến an toàn tài chính và quyền riêng tư của người dùng.

![Trình duyệt Chrome vừa bị 'phanh phui' sự cố bảo mật](https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2026/1/27/chrome-1769482610070-17694826107411296443089.jpg)

*Ảnh: Chụp màn hình The Hacker News*

## Trình duyệt Chrome lại dính 'phốt' bảo mật

Sự cố bảo mật lần này được đánh giá là đầy tinh vi. Đáng chú ý nhất phải kể đến tiện ích mang tên **DPS Websafe**. Công cụ này đã sử dụng hình ảnh và biểu tượng của Adblock Plus (ứng dụng chặn quảng cáo nổi tiếng) để chiếm lòng tin của người dùng. Tuy nhiên, sau khi được cài đặt, nó lại âm thầm chiếm quyền điều khiển các truy vấn tìm kiếm và theo dõi mọi hoạt động trực tuyến của nạn nhân.

Trong khi đó, tiện ích **Good Tab** — hiện vẫn còn xuất hiện trên cửa hàng — lại bị phát hiện có khả năng tự ý đọc và ghi vào bộ nhớ tạm (clipboard) của máy tính. Điều này cực kỳ nguy hiểm bởi tin tặc có thể **đánh cắp mật khẩu** bạn vừa sao chép hoặc **tráo đổi địa chỉ ví tiền điện tử** ngay khi bạn đang thực hiện giao dịch chuyển tiền.

Nghiêm trọng không kém là **Children Protection**, một tiện ích núp bóng bảo vệ trẻ em nhưng thực chất lại hoạt động như một hệ thống điều khiển từ xa. Nó có khả năng thu thập cookie để chiếm quyền điều khiển phiên làm việc và thực thi các mã độc JavaScript từ máy chủ lạ.

Ngoài ra, tiện ích **Stock Informer** cũng bị cảnh báo chứa lỗ hổng bảo mật **XSS** nghiêm trọng, cho phép kẻ tấn công thực thi mã từ xa trên máy tính của người dùng do thiếu các bước kiểm tra nguồn gốc dữ liệu.

## Danh sách 4 tiện ích cần gỡ ngay

| Tên tiện ích | Hành vi nguy hiểm |
|---|---|
| **DPS Websafe** | Giả mạo Adblock Plus, chiếm quyền tìm kiếm, theo dõi hoạt động |
| **Good Tab** | Đọc/ghi clipboard, đánh cắp mật khẩu và địa chỉ ví crypto |
| **Children Protection** | Thu thập cookie, chiếm phiên, thực thi JavaScript từ máy chủ lạ |
| **Stock Informer** | Lỗ hổng XSS, cho phép thực thi mã từ xa |

## Người dùng cần làm gì ngay?

Sự việc lần này là một gáo nước lạnh dội vào quy trình bảo mật của Google. Các chuyên gia khuyến cáo người dùng cần thực hiện **"tổng vệ sinh" trình duyệt ngay lập tức**:

1. **Kiểm tra danh sách tiện ích** đã cài tại `chrome://extensions/` và **gỡ bỏ ngay** 4 cái tên kể trên nếu có
2. **Đổi mật khẩu** các tài khoản quan trọng (email, ngân hàng, ví điện tử) đã đăng nhập gần đây
3. **Đăng xuất khỏi tất cả phiên** trên các dịch vụ nhạy cảm để vô hiệu hóa cookie có thể đã bị đánh cắp
4. **Kiểm tra lịch sử giao dịch** ví tiền điện tử, đặc biệt là các địa chỉ nhận tiền gần đây
5. **Chỉ cài tiện ích thực sự cần thiết**, ưu tiên các nhà phát triển uy tín và xem kỹ quyền truy cập trước khi đồng ý

## Lời cảnh báo

> **Ngay cả những tiện ích trông có vẻ đã được xác thực vẫn có thể chứa đựng rủi ro không lường trước.** Logo quen thuộc, đánh giá cao, hay số lượt cài đặt lớn đều không đảm bảo an toàn.

Trong bối cảnh trình duyệt là cánh cửa chính dẫn đến mọi tài khoản số của bạn, việc cẩn trọng với từng tiện ích cài thêm không còn là khuyến nghị — đó là điều **bắt buộc**.

---

*Nguồn: Báo Thanh Niên / Neowin / Symantec 2026*
