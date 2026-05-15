---
module:
  id: 4
  title: "Bảo vệ Thiết bị"
  description: "Giữ máy tính, điện thoại và dữ liệu của bạn an toàn trước virus, mất trộm và truy cập trái phép"
  icon: "shield"
  color: "#16A085"

title: "Sao lưu dữ liệu: Phòng khi mất điện thoại hoặc bị mã độc"
description: "Quy tắc 3-2-1, cách bật iCloud / Google Drive cho ảnh và danh bạ, và sao lưu offline cho dữ liệu quan trọng"
order: 4
duration: "7 phút"
difficulty: "cơ bản"
publishedDate: 2026-05-15
tags: ["backup", "icloud", "google drive", "ransomware"]

quiz:
  - question: "Quy tắc 3-2-1 trong sao lưu nghĩa là gì?"
    options:
      - "3 mật khẩu, 2 lớp xác thực, 1 lần check tuần"
      - "3 bản sao dữ liệu, 2 loại lưu trữ khác nhau, 1 bản offsite"
      - "3 thiết bị, 2 nhà mạng, 1 SIM"
      - "Không có quy tắc này"
    correct: 1
    explanation: "Quy tắc 3-2-1: 3 bản sao (gốc + 2 backup), 2 loại lưu trữ (vd ổ cứng + cloud), 1 bản đặt offsite (không cùng chỗ với máy gốc) để chống cháy, trộm, ransomware."

  - question: "Bạn bị ransomware mã hóa toàn bộ file. Có backup trên Google Drive đồng bộ tự động. Backup có cứu được bạn?"
    options:
      - "Có — Google Drive cứ thế khôi phục"
      - "Có thể không — vì file mã hóa cũng đã được đồng bộ lên Drive đè lên bản tốt"
      - "Không bao giờ"
      - "Chỉ khi trả tiền cho hacker"
    correct: 1
    explanation: "Backup 'đồng bộ' (sync) sẽ đồng bộ luôn cả file đã bị mã hóa. Cần dùng backup có 'version history' (Google Drive có lưu phiên bản cũ tới 30 ngày) hoặc backup offline."
---

## Câu hỏi 1 giây: nếu mất điện thoại ngay bây giờ, bạn mất gì?

- Ảnh con đẻ ra → mất.
- Tin nhắn quan trọng với khách hàng → mất.
- Danh bạ 500 số → mất.
- Note công thức nấu ăn của bà → mất.

Cảm giác đó rất quen với hàng nghìn người Việt mỗi tháng. **Backup là việc duy nhất giải quyết vấn đề này.**

## Quy tắc 3-2-1

Đây là quy tắc kinh điển trong ngành CNTT:

- **3** — Có ít nhất 3 bản dữ liệu (1 bản gốc + 2 backup).
- **2** — Trên 2 loại lưu trữ khác nhau (vd: điện thoại + ổ cứng ngoài, hoặc điện thoại + cloud).
- **1** — Ít nhất 1 bản **offsite** (không cùng nhà với bản gốc — phòng cháy / trộm / ngập).

Nghe phức tạp, nhưng người dùng thông thường chỉ cần:
1. **Bản gốc** trên điện thoại / máy tính.
2. **Cloud** (iCloud / Google Drive) — đây là bản offsite tự động.
3. **Ổ cứng ngoài** cho dữ liệu cực quan trọng (ảnh cưới, tài liệu công ty).

## Phần 1 — Bật backup tự động cho điện thoại

### iPhone:

**Cài đặt → [Tên bạn] → iCloud → iCloud Backup → Bật.**

iPhone sẽ tự động backup khi:
- Cắm sạc.
- Khóa màn hình.
- Có Wi-Fi.

iCloud miễn phí cho **5GB**. Nếu nhiều ảnh:
- Mua iCloud+ 50GB (29.000đ/tháng) hoặc 200GB (60.000đ/tháng).
- Hoặc dùng song song Google Photos (15GB miễn phí kèm Gmail).

Bật riêng cho ảnh: **Ảnh → Bật "Ảnh iCloud"**.

### Android:

**Cài đặt → Google → Backup → Bật "Backup by Google One".**

Backup gồm: ảnh, danh bạ, tin nhắn SMS, dữ liệu app, cài đặt thiết bị.

Bật riêng cho ảnh: **Google Photos → Cài đặt → Backup → Bật**.

## Phần 2 — Backup máy tính

### Mac:

- **Time Machine** — tính năng tích hợp sẵn. Cắm ổ cứng ngoài, Mac hỏi có muốn dùng làm Time Machine → đồng ý. Từ đó nó tự backup hàng giờ.

### Windows:

- **Windows Backup** (File History) — Settings → Update & Security → Backup → Add a drive → chọn ổ cứng ngoài.
- Hoặc dùng **Veeam Agent for Windows (Free)** — backup mạnh hơn.

### Cloud cho file văn phòng:

- **Google Drive** — 15GB miễn phí, sync 2 chiều.
- **OneDrive** — 5GB miễn phí, mặc định nếu dùng Office 365.
- **Dropbox** — 2GB miễn phí.

## Phần 3 — Cảnh giác với "backup giả an toàn"

### Sync không phải Backup

Google Drive / iCloud **đồng bộ** — nếu bạn xóa nhầm file ở điện thoại, file ở cloud cũng bị xóa. Nếu virus mã hóa file → file mã hóa được đồng bộ luôn.

**Giải pháp:**
- Cả Google Drive và iCloud đều có **"Version history"** — vào trang web Google Drive → bấm chuột phải file → "Manage versions" → khôi phục bản cũ. Trong 30 ngày.
- Cho dữ liệu cực quan trọng → backup ra **ổ cứng ngoài** không cắm thường xuyên (chống ransomware lan ra).

### Sao chép vào cùng ổ cứng không phải Backup

Nếu ổ cứng máy tính hỏng → cả file gốc lẫn "backup" đều mất. Phải sao ra **thiết bị khác**.

## Phần 4 — Backup cho dữ liệu nhạy cảm đặc biệt

### Mật khẩu Password Manager:

- **Bitwarden** có chức năng **Export** — xuất ra file `.json` mã hóa, lưu trên ổ cứng offline. Làm 6 tháng/lần.

### Ví crypto:

- Seed phrase (12–24 từ) → **viết tay** ra giấy, cất ở 2 chỗ. **Không** chụp ảnh, không lưu Google Drive.

### Tài liệu pháp lý (sổ đỏ, giấy tờ):

- Scan màu, lưu Google Drive (đặt thư mục riêng, chỉ chia sẻ khi cần).
- Bản giấy gốc cất ở 1 chỗ an toàn, không cùng chỗ với laptop.

## Phần 5 — Kiểm tra backup có thực sự hoạt động

Backup chỉ có giá trị nếu **khôi phục được**. Mỗi 3 tháng:

1. **Kiểm tra ngày backup gần nhất** (iCloud / Google Drive đều hiển thị).
2. **Thử khôi phục 1 file ngẫu nhiên** — đảm bảo có thể mở được.
3. **Đếm tổng dung lượng** — có giảm bất ngờ không (có thể app bị tắt backup mà bạn không biết).

## Tóm tắt bài học

- Quy tắc **3-2-1**: 3 bản, 2 loại lưu trữ, 1 bản offsite.
- **iPhone:** bật **iCloud Backup**. **Android:** bật **Google One Backup**.
- Sync ≠ Backup. Cho dữ liệu cực quan trọng → ổ cứng ngoài + Version history.
- Crypto seed phrase / sổ đỏ: viết tay / giấy gốc, không chụp ảnh điện thoại.
- **Kiểm tra backup mỗi 3 tháng** — backup chỉ có giá trị nếu khôi phục được.

---

*Bài tiếp theo: [Khi bị mất / trộm điện thoại — Làm gì trong 30 phút đầu](/khoa-hoc/04-bao-ve-thiet-bi/05-mat-trom-dien-thoai)*
