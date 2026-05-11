---
module:
  id: 1
  title: "Mật khẩu & Tài khoản"
  description: "Tạo mật khẩu mạnh, bật xác thực 2 lớp, quản lý tài khoản an toàn"
  icon: "lock"
  color: "#0F3460"

title: "Hướng dẫn kiểm tra tài khoản đã bị lộ chưa"
description: "Dùng Have I Been Pwned + Google Password Checkup để biết email/mật khẩu của bạn có nằm trong vụ rò rỉ dữ liệu nào không"
order: 5
duration: "7 phút"
difficulty: "cơ bản"
publishedDate: 2026-05-11
tags: ["data breach", "haveibeenpwned", "rò rỉ", "kiểm tra", "hướng dẫn"]

quiz:
  - question: "Bạn check haveibeenpwned, email mình bị lộ trong vụ Canva 2019. Việc đầu tiên cần làm là gì?"
    options:
      - "Xóa luôn tài khoản Canva để xóa dấu vết"
      - "Đổi mật khẩu Canva — và đổi MỌI tài khoản KHÁC đang dùng chung mật khẩu đó"
      - "Báo cảnh sát"
      - "Đợi xem có gì bất thường rồi xử lý sau"
    correct: 1
    explanation: "Rủi ro lớn nhất từ data breach là 'credential stuffing': hacker dùng cặp email+password lộ ở trang A để thử Facebook, Gmail, ngân hàng của bạn. Đổi password Canva chỉ giải quyết 1 phần — phải đổi MỌI nơi đang dùng chung password đó. (Nếu dùng password manager 1-tài-khoản-1-mật-khẩu thì chỉ cần đổi 1 chỗ.)"

  - question: "haveibeenpwned.com yêu cầu bạn nhập email để check. Có an toàn không?"
    options:
      - "Không. Nhập email lên trang lạ là rủi ro"
      - "An toàn. HIBP là dự án bảo mật uy tín, không lưu/bán email bạn check"
      - "Chỉ nên dùng email phụ để test"
      - "Phải dùng VPN khi check"
    correct: 1
    explanation: "Have I Been Pwned do Troy Hunt (chuyên gia bảo mật Microsoft) vận hành từ 2013, có chính sách privacy rõ ràng và được FBI, EU, chính phủ Anh dùng chính thức. Trang chỉ check email đã có sẵn trong dataset breach công khai, không thêm email bạn check vào database."
---

## Bạn không biết mình đã bị lộ

Hàng tỷ tài khoản bị rò rỉ mỗi năm:
- **Facebook 2019** — 533 triệu user (cả Việt Nam)
- **LinkedIn 2021** — 700 triệu user
- **Yahoo** — 3 tỷ tài khoản (vụ rò rỉ lớn nhất lịch sử)
- **Canva 2019** — 137 triệu user
- **Adobe 2013** — 153 triệu user

Khi 1 trang web bị hack, **email + mật khẩu** của bạn xuất hiện trên các diễn đàn hacker. Hacker dùng cặp này thử trên **Facebook, Gmail, ngân hàng** của bạn — gọi là **credential stuffing**.

Tin tốt: có công cụ MIỄN PHÍ giúp bạn kiểm tra trong **30 giây**.

---

## Công cụ 1: Have I Been Pwned (HIBP)

Trang web do Troy Hunt — chuyên gia bảo mật Microsoft — vận hành từ 2013. **An toàn**, được FBI và nhiều chính phủ tin dùng.

### Bước 1.1 — Check email

1. Vào **[haveibeenpwned.com](https://haveibeenpwned.com)**
2. Nhập **email** vào ô tìm kiếm → bấm **pwned?**
3. Kết quả:
   - 🟢 **Good news — no pwnage found!** → Email chưa lộ. Yên tâm (nhưng vẫn nên cảnh giác).
   - 🔴 **Oh no — pwned!** → Email lộ trong N vụ rò rỉ. Cuộn xuống xem chi tiết.

### Bước 1.2 — Đọc kết quả

Mỗi vụ rò rỉ HIBP hiện ra:
- **Tên dịch vụ** (ví dụ: "Canva")
- **Ngày bị hack**
- **Số nạn nhân**
- **Loại dữ liệu bị lộ**: email, password, tên, số điện thoại, địa chỉ...

Quan tâm nhất: **dữ liệu có chứa "Passwords" hay không**.
- Có password → kẻ xấu đã có cặp email+pass → **đổi password NGAY ở tất cả nơi đang dùng chung**
- Chỉ email/tên → vẫn rủi ro phishing (kẻ xấu biết bạn dùng dịch vụ X) nhưng password chưa lộ

### Bước 1.3 — Check password

HIBP có công cụ riêng cho password — **không lộ password lên server**:

1. Vào **[haveibeenpwned.com/Passwords](https://haveibeenpwned.com/Passwords)**
2. Nhập mật khẩu bạn nghi → bấm **pwned?**
3. Kết quả: số lần mật khẩu này xuất hiện trong các vụ rò rỉ

> 🔧 **Kỹ thuật:** HIBP dùng kỹ thuật **k-Anonymity** — chỉ gửi 5 ký tự đầu của hash SHA-1 lên server, không gửi password gốc. An toàn ngay cả khi mạng bị nghe lén.

Nếu mật khẩu xuất hiện **>0 lần** → hacker đã có sẵn trong từ điển → **đổi NGAY**.

### Bước 1.4 — Bật thông báo tự động

Không muốn check thủ công mỗi tháng? Đăng ký thông báo:

1. Vào **[haveibeenpwned.com/NotifyMe](https://haveibeenpwned.com/NotifyMe)**
2. Nhập email → bấm **notify me of pwnage**
3. Xác nhận qua email
4. Từ giờ: mỗi khi email của bạn xuất hiện trong vụ rò rỉ mới, HIBP gửi email báo.

---

## Công cụ 2: Google Password Checkup

Google tự động kiểm tra **toàn bộ mật khẩu** bạn đã lưu trong Chrome / Google account, so với database các vụ rò rỉ.

### Bước 2.1 — Mở Password Checkup

**Trên trình duyệt:**
1. Vào **[passwords.google.com](https://passwords.google.com)** → đăng nhập
2. Bấm **Password Checkup** (Kiểm tra mật khẩu)
3. Bấm **Check passwords** → nhập lại mật khẩu Google

**Trên Android:**
1. Settings → Google → Manage your Google Account
2. Tab **Security** → **Password Manager**
3. Bấm **Password Checkup**

### Bước 2.2 — Đọc kết quả

Google chia thành 3 nhóm:

| Nhóm | Ý nghĩa | Hành động |
|---|---|---|
| 🔴 **Bị xâm phạm** | Password đã có trong dataset rò rỉ | Đổi NGAY |
| 🟡 **Bị tái sử dụng** | Cùng password dùng cho nhiều tài khoản | Đổi để mỗi nơi 1 password |
| 🟠 **Mật khẩu yếu** | Password ngắn/dễ đoán | Đổi sang passphrase mạnh |

Bấm vào từng cảnh báo → Google sẽ **mở thẳng** trang đổi mật khẩu của dịch vụ đó.

---

## Công cụ 3: Mozilla Firefox Monitor

Tương tự HIBP nhưng có giao diện tiếng Việt dễ dùng cho người mới:

1. Vào **[monitor.mozilla.org](https://monitor.mozilla.org)** → bấm **Tiếng Việt** ở footer nếu cần
2. Nhập email → kết quả tương tự HIBP
3. Đăng ký Firefox account → theo dõi nhiều email cùng lúc + nhận thông báo tự động

---

## Khi phát hiện đã bị lộ — Hành động ngay

### Trường hợp 1: Chỉ email bị lộ (không có password)

Rủi ro: **phishing có chủ đích** (kẻ xấu biết bạn dùng dịch vụ X, sẽ giả mạo X gửi email lừa)

**Hành động:**
- ✅ Cảnh giác hơn với email từ dịch vụ đó
- ✅ Bật 2FA cho dịch vụ đó (nếu chưa)
- ❌ Không cần đổi password (vì password chưa lộ)

### Trường hợp 2: Email + Password bị lộ

Rủi ro cao: **credential stuffing**.

**Hành động NGAY trong 30 phút tới:**

1. **Đổi password dịch vụ bị lộ** → sang password mới chưa từng dùng
2. **Đổi password TẤT CẢ tài khoản KHÁC** đang dùng chung password đó
3. **Bật 2FA** cho các tài khoản quan trọng (Gmail, Facebook, ngân hàng)
4. **Đăng xuất khỏi tất cả thiết bị** (Gmail → Bảo mật → Quản lý thiết bị → Sign out all)
5. **Check tài khoản ngân hàng**: có giao dịch bất thường không?

### Trường hợp 3: Mật khẩu xuất hiện nhiều lần trên HIBP Passwords

Mật khẩu đó **không phải của riêng bạn** — đã có trong "từ điển" hacker. Đổi ở **mọi tài khoản** đang dùng mật khẩu này.

---

## Bao lâu check lại một lần?

Khuyến nghị:
- **HIBP NotifyMe:** đã bật → tự động báo, không cần check thủ công
- **Google Password Checkup:** mỗi 3 tháng
- **Khi nghe tin có vụ rò rỉ lớn** (báo chí đưa tin) → check ngay

---

## Checklist tự kiểm tra

- [ ] Đã check **email chính** trên HIBP → ghi nhớ các vụ rò rỉ đã dính
- [ ] Đã check **email phụ + email công việc**
- [ ] Đã chạy **Google Password Checkup** → đổi hết password trong nhóm "Bị xâm phạm"
- [ ] Đã đăng ký **HIBP NotifyMe** → có thông báo tự động khi bị lộ
- [ ] Mật khẩu đang dùng cho ngân hàng / Gmail **không xuất hiện** trên HIBP Passwords
- [ ] Đã bật **2FA** cho các tài khoản dính vụ rò rỉ

## Tóm tắt

- 🌐 **haveibeenpwned.com** — check email/password lộ hay chưa, an toàn 100%
- 🔔 **HIBP NotifyMe** — đăng ký 1 lần, nhận thông báo tự động khi bị lộ
- 🔍 **Google Password Checkup** — quét tất cả password đã lưu trong Chrome
- 🚨 Bị lộ password → đổi password **MỌI nơi** đang dùng chung
- 🛡️ Cách phòng tốt nhất: dùng **Password Manager** (mỗi tài khoản 1 password riêng)

---

*Module tiếp theo: [Nhận diện Lừa đảo](/courses/02-phishing/01-phishing-la-gi) — phân biệt tin nhắn thật và giả mạo.*
