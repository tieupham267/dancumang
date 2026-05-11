---
title: "Tại sao mật khẩu yếu nguy hiểm?"
description: "Tìm hiểu cách hacker crack mật khẩu yếu trong vài giây và tại sao '123456' là món quà cho kẻ xấu."
module:
  id: "01-mat-khau-va-tai-khoan"
  title: "Mật khẩu & Tài khoản"
  icon: "🔐"
order: 1
duration: 5
difficulty: "beginner"
tags: ["mật khẩu", "bảo mật cơ bản", "hack"]
publishedAt: 2026-04-01
hasQuiz: true
---

## Bạn có đang dùng mật khẩu này không?

Mỗi năm, các chuyên gia bảo mật công bố danh sách mật khẩu phổ biến nhất thế giới. Và mỗi năm, kết quả đều đáng lo:

1. `123456`
2. `password`
3. `123456789`
4. `12345678`
5. `qwerty`

Nếu mật khẩu của bạn nằm trong danh sách trên — hoặc là tên con, ngày sinh, số điện thoại — thì bạn đang **để cửa nhà mở toang** trên mạng.

## Hacker crack mật khẩu như thế nào?

Hãy tưởng tượng bạn có một ổ khóa số 4 chữ số. Kẻ trộm chỉ cần thử từ 0000 đến 9999 — tổng cộng 10.000 lần. Với tay người thì lâu, nhưng **máy tính thử được hàng tỷ lần mỗi giây**.

<!-- Chỗ này sẽ nhúng Excalidraw diagram: brute-force-flow.svg -->
<!-- ![Sơ đồ brute-force attack](../../assets/diagrams/brute-force-flow.svg) -->

Có 3 cách phổ biến:

### 🔨 Tấn công vét cạn (Brute Force)

Máy tính thử **tất cả** tổ hợp có thể. Mật khẩu 6 ký tự chỉ gồm chữ thường? Crack trong **vài giây**. Thêm chữ hoa, số, ký tự đặc biệt và tăng lên 12 ký tự? Cần **hàng nghìn năm**.

### 📖 Tấn công từ điển (Dictionary Attack)

Thay vì thử mọi tổ hợp, hacker dùng danh sách hàng triệu mật khẩu phổ biến. Nếu mật khẩu của bạn là `iloveyou`, `matkhau123`, hay `nguyenvana` — nó nằm sẵn trong danh sách rồi.

### 🎣 Lừa bạn tự đưa (Phishing)

Không cần crack gì cả — hacker chỉ cần **lừa bạn gõ mật khẩu** vào một trang web giả. Chúng ta sẽ học về cách này ở Module 2.

## Mật khẩu dài bao nhiêu mới đủ?

| Độ dài | Chỉ chữ thường | Chữ hoa + thường + số + ký tự đặc biệt |
|--------|---------------|----------------------------------------|
| 6 ký tự | Vài giây | Vài phút |
| 8 ký tự | Vài giờ | Vài ngày |
| 12 ký tự | Vài trăm năm | Hàng nghìn năm |
| 16 ký tự | Hàng triệu năm | Không thể crack |

> **Quy tắc đơn giản:** Mật khẩu tối thiểu **12 ký tự**, kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt.

## Mẹo tạo mật khẩu mạnh mà dễ nhớ

Thay vì nhớ `X#9kL!2mP`, hãy dùng **cụm từ**:

```
ConMeoToi@AnCom#2024
```

Đây là mật khẩu **20 ký tự**, có chữ hoa, chữ thường, ký tự đặc biệt, số — cực kỳ mạnh, nhưng bạn có thể nhớ được vì nó là một câu có nghĩa.

Công thức: **[Chủ ngữ] + [Ký tự đặc biệt] + [Hành động] + [Ký tự đặc biệt] + [Số]**

## Tóm tắt bài học

- ❌ Không dùng mật khẩu ngắn, đơn giản, hoặc thông tin cá nhân
- ✅ Dùng ít nhất 12 ký tự
- ✅ Kết hợp chữ hoa, chữ thường, số, ký tự đặc biệt
- ✅ Dùng cụm từ dễ nhớ thay vì ký tự ngẫu nhiên
- ✅ Mỗi tài khoản một mật khẩu khác nhau (bài tiếp sẽ nói cách quản lý)

<!-- Quiz component sẽ được nhúng ở đây -->
<!-- <PhishingQuiz client:visible quizId="password-strength" /> -->
