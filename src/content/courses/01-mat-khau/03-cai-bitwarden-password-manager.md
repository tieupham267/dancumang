---
module:
  id: 1
  title: "Mật khẩu & Tài khoản"
  description: "Tạo mật khẩu mạnh, bật xác thực 2 lớp, quản lý tài khoản an toàn"
  icon: "lock"
  color: "#0F3460"

title: "Hướng dẫn cài Bitwarden — Password Manager miễn phí từ A-Z"
description: "Cài đặt Bitwarden trên máy tính + điện thoại, import mật khẩu cũ và tạo Master Password an toàn"
order: 3
duration: "10 phút"
difficulty: "cơ bản"
publishedDate: 2026-05-11
tags: ["password manager", "bitwarden", "hướng dẫn", "cài đặt"]

quiz:
  - question: "Master Password (mật khẩu chủ) của Bitwarden bị quên — chuyện gì xảy ra?"
    options:
      - "Bấm 'quên mật khẩu', Bitwarden gửi link reset qua email"
      - "Liên hệ hỗ trợ Bitwarden để khôi phục"
      - "KHÔNG khôi phục được. Toàn bộ vault sẽ phải tạo lại từ đầu"
      - "Bitwarden có sẵn câu hỏi bảo mật để reset"
    correct: 2
    explanation: "Bitwarden mã hóa vault bằng Master Password — kể cả nhân viên Bitwarden cũng không có chìa. Quên là mất hết. Đây là tính năng bảo mật chứ không phải lỗi. Vì vậy phải tạo Master Password vừa MẠNH vừa DỄ NHỚ, và lưu mã khôi phục."

  - question: "Sau khi cài Bitwarden, bạn nên làm gì với mật khẩu Chrome đã lưu sẵn?"
    options:
      - "Để nguyên cho an toàn — dự phòng nếu Bitwarden hỏng"
      - "Import vào Bitwarden, rồi XÓA hết khỏi Chrome"
      - "Chỉ cần tắt tính năng lưu mật khẩu Chrome"
      - "Copy mật khẩu sang Notes để có 3 chỗ lưu"
    correct: 1
    explanation: "Lưu mật khẩu ở 2 chỗ = rủi ro x2. Chrome dễ bị đọc bởi malware (file là dạng dễ giải mã). Sau khi import xong, phải XÓA khỏi Chrome + TẮT tính năng auto-save. Notes thì càng tệ vì không mã hóa."
---

## Tại sao chọn Bitwarden?

Bài [Mật khẩu mạnh](/courses/01-mat-khau/02-tao-mat-khau-manh) đã nói: mỗi tài khoản một mật khẩu riêng. Nhưng bạn có hàng chục tài khoản — nhớ làm sao?

**Password Manager** = app nhớ hộ. Bạn chỉ cần nhớ 1 mật khẩu chủ (Master Password). Các mật khẩu khác app tự tạo, tự nhớ, tự điền.

Có nhiều password manager: 1Password, LastPass, Dashlane, Keeper... **Bitwarden** được khuyên dùng vì:

- ✅ **Miễn phí** không giới hạn số mật khẩu, không giới hạn thiết bị
- ✅ **Mã nguồn mở** — bất kỳ ai cũng kiểm tra được code, không có cửa hậu
- ✅ Đồng bộ giữa máy tính, điện thoại, browser
- ✅ Có ở mọi nền tảng: Windows, macOS, Linux, iOS, Android, Chrome, Firefox, Edge, Safari

> ⚠️ **Không khuyên dùng:** LastPass đã bị hack 2022 lộ vault người dùng. Tránh các app password manager Việt Nam ít tên tuổi — không kiểm chứng được bảo mật.

## Bước 1: Đăng ký tài khoản Bitwarden

1. Vào [bitwarden.com](https://bitwarden.com) → bấm **Get Started** (hoặc **Bắt đầu**)
2. Nhập **email** bạn dùng thường xuyên nhất
3. Tạo **Master Password** (xem phần dưới — đây là bước quan trọng nhất)
4. Đặt **hint** (gợi ý) — không bắt buộc, nếu có thì đừng để lộ mật khẩu
5. Bấm **Create Account**

## Bước 2: Tạo Master Password an toàn

Đây là mật khẩu **duy nhất** bạn phải nhớ. Mất là mất hết.

### Quy tắc:

| Yêu cầu | Lý do |
|---|---|
| **Dài ≥ 14 ký tự** | Càng dài càng khó brute-force |
| **Là Passphrase (cụm từ)** | Dễ nhớ hơn ký tự lộn xộn |
| **CHƯA BAO GIỜ dùng ở đâu** | Trang khác hack lộ ra → Bitwarden cũng toang |
| **Không liên quan thông tin cá nhân** | Tên, ngày sinh = dễ đoán |

### Ví dụ Master Password tốt:

```
conMeoCuaToiTen$Mun_2018!
biaSaiGonNgonNhatLa@Hanoi
3conChimDauTrenDay_Dien
```

### ⚠️ Quan trọng: Lưu mã khôi phục

Sau khi đăng ký, vào **Settings → Account → Recovery Code** (hoặc Mã khôi phục). **In ra giấy** và cất ở:
- Két sắt nhà
- Người thân tin tưởng tuyệt đối
- Hộp tài liệu quan trọng (cùng giấy tờ nhà đất, hộ chiếu...)

Đừng lưu mã này trong điện thoại hoặc email — vì khi cần mã này là khi bạn đã không vào được.

## Bước 3: Cài extension cho trình duyệt

Đây là phần dùng **nhiều nhất** — Bitwarden tự điền mật khẩu cho bạn khi đăng nhập web.

### Chrome / Edge / Brave:

1. Vào [Chrome Web Store - Bitwarden](https://chromewebstore.google.com/) → tìm "Bitwarden"
2. Bấm **Add to Chrome** → **Add extension**
3. Bấm icon Bitwarden (góc phải trên) → đăng nhập bằng email + Master Password vừa tạo
4. **Ghim icon** Bitwarden: bấm puzzle 🧩 → ghim Bitwarden

### Firefox:

1. Vào [addons.mozilla.org](https://addons.mozilla.org/) → tìm "Bitwarden"
2. Bấm **Add to Firefox**
3. Đăng nhập

### Safari (macOS):

1. App Store → tìm "Bitwarden" → cài
2. Mở Safari → Preferences → Extensions → bật Bitwarden

## Bước 4: Cài app trên điện thoại

### iPhone:

1. App Store → tìm **Bitwarden** (nhà phát hành: "Bitwarden Inc.")
2. Cài → đăng nhập
3. Bật **AutoFill**: Cài đặt iPhone → Mật khẩu → AutoFill Passwords → chọn Bitwarden (BỎ chọn iCloud Keychain)

### Android:

1. CH Play → tìm **Bitwarden** (nhà phát hành: "Bitwarden Inc.")
2. Cài → đăng nhập
3. Bật **AutoFill**: Cài đặt → Hệ thống → Ngôn ngữ & nhập liệu → Dịch vụ AutoFill → chọn Bitwarden

## Bước 5: Import mật khẩu đã lưu trong trình duyệt

Hầu hết mọi người đã lưu sẵn hàng chục mật khẩu trong Chrome. Import sang Bitwarden để không phải gõ lại.

### Xuất từ Chrome:

1. Chrome → Settings → **Autofill → Password Manager**
2. Bấm dấu **⋮** (3 chấm) cạnh "Saved passwords" → **Export passwords**
3. Xác nhận mật khẩu Windows / macOS → lưu file `.csv` (lưu ý: file này chưa mã hóa!)

### Import vào Bitwarden:

1. Vào [vault.bitwarden.com](https://vault.bitwarden.com) → đăng nhập
2. Menu **Tools → Import Data**
3. **File Format:** chọn `Chrome (csv)`
4. Chọn file `.csv` vừa xuất → bấm **Import Data**

### 🔥 Bước CỰC QUAN TRỌNG sau khi import:

1. **XÓA file `.csv`** vừa xuất (kéo vào thùng rác → làm trống thùng rác)
2. **XÓA hết mật khẩu trong Chrome**: Settings → Password Manager → từng password → Remove
3. **TẮT lưu mật khẩu Chrome**: Settings → Autofill → Password Manager → tắt "Offer to save passwords"

> Lưu mật khẩu ở 2 chỗ = rủi ro nhân đôi. Chrome lưu mật khẩu dạng dễ giải mã — malware đọc 5 giây là xong.

## Bước 6: Trải nghiệm tính năng

### Tự điền mật khẩu

Vào trang đăng nhập bất kỳ (Facebook, Gmail) → Bitwarden hiện icon ở ô email → bấm → tự điền.

### Tạo mật khẩu mới

Khi đăng ký tài khoản mới:
1. Bấm icon Bitwarden trên ô mật khẩu
2. Chọn **Generate Password**
3. Mặc định: 14 ký tự, có chữ hoa/thường/số/ký tự đặc biệt → quá tốt
4. Bấm **Fill** → tự điền vào ô + lưu vào vault

### Lưu credit card, ghi chú bảo mật

Vault không chỉ lưu mật khẩu:
- **Cards:** số thẻ tín dụng, CVV (tự điền khi mua sắm online)
- **Identities:** thông tin cá nhân (CCCD, hộ chiếu)
- **Secure Notes:** ghi chú bí mật mã hóa (mã khôi phục 2FA, key license phần mềm)

## Tip nâng cao

### Bật 2FA cho chính Bitwarden

Bitwarden vault = chìa khóa của toàn bộ cuộc sống số. Phải bảo vệ thêm:

1. Vào [vault.bitwarden.com](https://vault.bitwarden.com) → **Settings → Security → Two-step Login**
2. Chọn **Authenticator App** (free) — dùng Google Authenticator hoặc Authy
3. Quét QR → nhập mã 6 số → lưu **Recovery Code** ra giấy

### Bitwarden Send

Cần gửi mật khẩu Wi-Fi nhà cho khách? Đừng nhắn qua Zalo. Dùng **Send**:
1. Bitwarden vault → **Send** → New Send
2. Nhập nội dung → đặt thời hạn (1 giờ, 1 ngày...) + số lần xem tối đa
3. Copy link → gửi cho người nhận
4. Sau thời hạn / vượt số lần xem → link tự hết hạn

## Checklist sau khi xong

- [ ] Đã đăng ký Bitwarden với email chính
- [ ] Master Password **dài ≥ 14 ký tự**, là passphrase, chưa từng dùng ở đâu khác
- [ ] Đã **in mã khôi phục** ra giấy, cất nơi an toàn
- [ ] Đã cài **extension** trên trình duyệt máy tính
- [ ] Đã cài **app** trên điện thoại + bật **AutoFill**
- [ ] Đã **import** mật khẩu từ Chrome
- [ ] Đã **XÓA** file CSV export + **XÓA** mật khẩu trong Chrome + **TẮT** lưu mật khẩu Chrome
- [ ] Đã bật **2FA** cho chính tài khoản Bitwarden

## Tóm tắt

- 🆓 Bitwarden **miễn phí + mã nguồn mở** — không giới hạn mật khẩu/thiết bị
- 🔑 **Master Password** là chìa duy nhất — phải mạnh và đừng quên
- 🌐 Cài **extension trình duyệt + app điện thoại** để tự điền tiện lợi
- 📥 **Import** mật khẩu Chrome xong → **xóa** khỏi Chrome ngay
- 🛡️ Bật **2FA** cho chính Bitwarden — bảo vệ kho báu

---

*Bài tiếp theo: [Hướng dẫn bật Xác thực 2 yếu tố (2FA)](/courses/01-mat-khau/04-huong-dan-bat-2fa) — lớp khóa thứ hai cho mọi tài khoản quan trọng.*
