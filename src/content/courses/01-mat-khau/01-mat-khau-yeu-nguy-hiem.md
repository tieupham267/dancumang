---
module:
  id: 1
  title: "Mật khẩu & Tài khoản"
  description: "Tạo mật khẩu mạnh, bật xác thực 2 lớp, quản lý tài khoản an toàn"
  icon: "lock"
  color: "#0F3460"

title: "Tại sao mật khẩu yếu nguy hiểm?"
description: "Hiểu vì sao '123456' có thể bị bẻ khóa trong 1 giây và hậu quả thật sự khi tài khoản bị hack"
order: 1
duration: "5 phút"
difficulty: "cơ bản"
publishedDate: 2026-04-01
tags: ["mật khẩu", "cơ bản", "tài khoản"]

quiz:
  - question: "Mật khẩu nào dưới đây an toàn nhất?"
    options:
      - "123456789"
      - "nguyenvana1990"
      - "Tr@ng_M3o!xanh42"
      - "password123"
    correct: 2
    explanation: "Mật khẩu mạnh cần kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt, đồng thời không chứa thông tin cá nhân dễ đoán."

  - question: "Hacker thường mất bao lâu để crack mật khẩu '123456'?"
    options:
      - "Khoảng 1 ngày"
      - "Khoảng 1 giờ"
      - "Dưới 1 giây"
      - "Không thể crack được"
    correct: 2
    explanation: "Các mật khẩu phổ biến như '123456' nằm sẵn trong danh sách mà hacker thử đầu tiên, nên chúng bị bẻ khóa gần như ngay lập tức."
---

## Bạn nghĩ mật khẩu của mình an toàn?

Hãy thử tưởng tượng: bạn khóa cửa nhà bằng ổ khóa mà **ai cũng có chìa**. Nghe vô lý đúng không? Nhưng đó chính xác là điều xảy ra khi bạn dùng mật khẩu như `123456` hay `password`.

## 10 mật khẩu phổ biến nhất — và tại sao bạn không nên dùng

Mỗi năm, các chuyên gia bảo mật công bố danh sách mật khẩu bị lộ nhiều nhất. Dưới đây là top 10 thường xuyên xuất hiện:

1. `123456`
2. `password`
3. `123456789`
4. `12345678`
5. `qwerty`
6. `abc123`
7. `111111`
8. `1234567`
9. `password1`
10. `iloveyou`

Nếu mật khẩu của bạn nằm trong danh sách này — **hãy đổi ngay sau khi đọc xong bài này**.

## Chuyện gì xảy ra khi tài khoản bị hack?

Khi kẻ xấu có được mật khẩu của bạn, chúng có thể:

- **Đọc tin nhắn riêng tư** trên Zalo, Facebook, email
- **Lừa đảo bạn bè và người thân** bằng cách giả làm bạn nhắn tin mượn tiền
- **Truy cập tài khoản ngân hàng** nếu bạn dùng chung mật khẩu
- **Đánh cắp danh tính** — đăng ký dịch vụ, vay tiền bằng tên bạn

> 💡 **Câu chuyện thật:** Chị Lan ở Hà Nội dùng mật khẩu `lan1985` cho tất cả tài khoản. Khi một trang mua sắm bị lộ dữ liệu, kẻ xấu thử mật khẩu đó trên Facebook, email, và cả app ngân hàng — tất cả đều vào được. Chị mất 15 triệu đồng trong vòng 2 giờ.

## Hacker bẻ khóa mật khẩu bằng cách nào?

Không cần là "thiên tài", hacker dùng các phương pháp đơn giản:

### 1. Thử danh sách mật khẩu phổ biến (Dictionary Attack)
Máy tính tự động thử hàng triệu mật khẩu thường gặp. Nếu bạn dùng `123456` — nó bị crack trong **chưa đầy 1 giây**.

### 2. Thử tất cả tổ hợp (Brute Force)
Thử từng ký tự một: `a`, `b`, `c`... `aa`, `ab`... Mật khẩu càng ngắn, càng nhanh bị tìm ra.

### 3. Dùng thông tin cá nhân của bạn
Tên + năm sinh = `lan1985`. Tên con + số điện thoại = `minh0912345678`. Đây là những thứ hacker tìm được dễ dàng trên mạng xã hội.

## Mật khẩu mạnh trông như thế nào?

| Mật khẩu | Thời gian crack | Đánh giá |
|----------|----------------|----------|
| `123456` | < 1 giây | ❌ Cực yếu |
| `nguyenvana` | Vài phút | ❌ Yếu |
| `NguyenVan@2024` | Vài giờ | ⚠️ Trung bình |
| `Tr@ng_M3o!xanh42` | Hàng trăm năm | ✅ Mạnh |

**Quy tắc đơn giản:** Mật khẩu tốt thì **dài, lạ, và khó đoán** — nhưng không nhất thiết phải khó nhớ. Bài tiếp theo sẽ hướng dẫn bạn cách tạo mật khẩu vừa mạnh vừa dễ nhớ.

## Tóm tắt bài học

- Mật khẩu phổ biến bị crack trong **chưa đầy 1 giây**
- Dùng chung 1 mật khẩu cho nhiều tài khoản = mất hết nếu 1 cái bị lộ
- Hacker không cần giỏi — chúng dùng máy tính thử tự động
- Mật khẩu mạnh cần **dài + đa dạng ký tự + không liên quan thông tin cá nhân**

---

*Bài tiếp theo: [Cách tạo mật khẩu mạnh mà vẫn dễ nhớ](/courses/01-mat-khau/02-tao-mat-khau-manh)*
