---
module:
  id: 1
  title: "Mật khẩu & Tài khoản"
  description: "Tạo mật khẩu mạnh, bật xác thực 2 lớp, quản lý tài khoản an toàn"
  icon: "lock"
  color: "#0F3460"

title: "Cách tạo mật khẩu mạnh mà vẫn dễ nhớ"
description: "Phương pháp Passphrase và mẹo tạo mật khẩu an toàn không cần nhớ ký tự lộn xộn"
order: 2
duration: "6 phút"
difficulty: "cơ bản"
publishedDate: 2026-04-01
tags: ["mật khẩu", "hướng dẫn", "passphrase"]

quiz:
  - question: "Passphrase nào sau đây vừa mạnh vừa dễ nhớ?"
    options:
      - "P@ssw0rd!"
      - "conMeoNamTrenMaiNha!2024"
      - "abcdef"
      - "0912345678"
    correct: 1
    explanation: "Passphrase dùng một câu dài, có ý nghĩa với bạn nhưng vô nghĩa với người khác. Dài + đa dạng ký tự = mạnh."
---

## Quên mật khẩu kiểu "Xk#9@mP!" đi

Nhiều người nghĩ mật khẩu mạnh phải trông như mã hóa: `Xk#9@mP!2z`. Vấn đề là: **bạn cũng không nhớ nổi**. Kết quả? Bạn ghi vào giấy dán lên màn hình, hoặc quay lại dùng `123456`.

Có cách tốt hơn nhiều: **Passphrase** — mật khẩu bằng cụm từ.

## Passphrase là gì?

Thay vì dùng một từ ngắn + ký tự đặc biệt, bạn dùng **một câu dài mà chỉ bạn hiểu**:

| Cách cũ (khó nhớ) | Passphrase (dễ nhớ, mạnh hơn) |
|---|---|
| `Mk@2024!` | `conMeoNamTrenBanPhim!` |
| `Ng$yn123` | `baNoiThichAnCom_Chien99` |
| `P@ssw0rd` | `2conCa+1caiHo=vuiQua` |

**Tại sao passphrase mạnh hơn?** Vì nó **dài hơn rất nhiều**. Mật khẩu 8 ký tự lộn xộn dễ bị brute-force hơn một câu 25 ký tự đơn giản.

## Công thức tạo Passphrase

Bước 1: **Nghĩ ra một hình ảnh vui** mà chỉ bạn mới liên tưởng được

> Con mèo nhà tôi thích ngồi lên laptop

Bước 2: **Viết liền, thêm số và ký tự đặc biệt**

> `conMeoThichNgoiLenLaptop!3lan`

Bước 3: **Kiểm tra:**
- ✅ Dài hơn 16 ký tự
- ✅ Có chữ hoa + chữ thường
- ✅ Có số
- ✅ Có ký tự đặc biệt
- ✅ Không chứa tên, ngày sinh, số điện thoại
- ✅ Bạn nhớ được!

## Quy tắc vàng: Mỗi tài khoản một mật khẩu

Đây là quy tắc quan trọng nhất: **không bao giờ dùng chung mật khẩu**.

Nếu trang A bị hack → hacker thử mật khẩu đó trên Facebook, Gmail, ngân hàng → tất cả đều bị mở. Đây gọi là **credential stuffing** — và nó xảy ra mỗi ngày.

> "Nhưng tôi có hàng chục tài khoản, làm sao nhớ hết?"

Đó là lý do bài tiếp theo sẽ nói về **Password Manager** — ứng dụng nhớ mật khẩu hộ bạn.

## Mẹo nhanh nếu chưa muốn dùng Password Manager

Dùng một **passphrase gốc** + thêm tên dịch vụ:

- Facebook: `conMeoThichNgoiLenLaptop!FB`
- Gmail: `conMeoThichNgoiLenLaptop!GM`
- Ngân hàng: `conMeoThichNgoiLenLaptop!NH`

Không hoàn hảo bằng Password Manager, nhưng **tốt hơn rất nhiều** so với dùng 1 mật khẩu cho tất cả.

## Tóm tắt bài học

- **Passphrase** (cụm từ dài) mạnh hơn mật khẩu ngắn + ký tự lộn xộn
- Công thức: hình ảnh vui + viết liền + thêm số & ký tự đặc biệt
- **Mỗi tài khoản một mật khẩu** — quy tắc không có ngoại lệ
- Không cần nhớ hết — Password Manager sẽ giúp bạn (bài tiếp theo)

---

*Bài tiếp theo: [Password Manager — Ứng dụng nhớ mật khẩu hộ bạn](/courses/01-mat-khau/03-password-manager)*
