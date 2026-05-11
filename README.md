# 🛡️ Dân Cư Mạng — dancumang.vn

> Kiến thức bảo mật cho mọi người. Miễn phí, bằng tiếng Việt, không thuật ngữ phức tạp.

## Cấu trúc dự án

```
dancumang/
├── src/
│   ├── content/
│   │   ├── config.ts              ← Schema định nghĩa cho khóa học + blog
│   │   ├── courses/               ← Nội dung khóa học (Markdown)
│   │   │   ├── 01-mat-khau/       ← Module 1: Mật khẩu & Tài khoản
│   │   │   │   ├── 01-mat-khau-yeu-nguy-hiem.md
│   │   │   │   ├── 02-tao-mat-khau-manh.md
│   │   │   │   ├── 03-password-manager.md
│   │   │   │   ├── 04-xac-thuc-2-yeu-to.md
│   │   │   │   └── 05-kiem-tra-tai-khoan-bi-lo.md
│   │   │   ├── 02-phishing/       ← Module 2: Nhận diện Lừa đảo
│   │   │   │   ├── 01-phishing-la-gi.md
│   │   │   │   └── ...
│   │   │   ├── 03-mang-xa-hoi/    ← Module 3: An toàn Mạng xã hội
│   │   │   └── 04-bao-ve-thiet-bi/ ← Module 4: Bảo vệ Thiết bị
│   │   └── blog/                  ← Blog & tin tức bảo mật
│   │       └── 2026-04-15-lua-dao-zalo-gia-mao-cong-an.md
│   ├── assets/
│   │   └── diagrams/              ← Excalidraw SVG minh họa bài học
│   ├── components/                ← React/Astro components (Quiz, Nav, etc.)
│   ├── layouts/                   ← Layout templates
│   └── pages/                     ← Astro pages (routing)
├── public/                        ← Static assets (favicon, images)
├── astro.config.mjs
├── package.json
└── README.md
```

## Content Collections

### Khóa học (`courses`)

Mỗi file `.md` trong `courses/` là **một bài học**. Frontmatter chứa:

```yaml
---
module:
  id: 1                           # Thứ tự module
  title: "Mật khẩu & Tài khoản"  # Tên module
  description: "..."              # Mô tả module
  icon: "lock"                    # Icon identifier
  color: "#0F3460"                # Màu chủ đạo

title: "Tiêu đề bài học"
description: "Mô tả ngắn"
order: 1                          # Thứ tự bài trong module
duration: "5 phút"
difficulty: "cơ bản"              # cơ bản | trung bình | nâng cao
publishedDate: 2026-04-01
tags: ["mật khẩu", "cơ bản"]

quiz:                             # Quiz cuối bài (tùy chọn)
  - question: "Câu hỏi?"
    options: ["A", "B", "C", "D"]
    correct: 2                    # Index đáp án đúng (0-based)
    explanation: "Giải thích"
---

Nội dung bài học viết bằng Markdown ở đây...
```

### Blog (`blog`)

```yaml
---
title: "Tiêu đề bài viết"
description: "Mô tả"
category: "cảnh báo"              # cảnh báo | hướng dẫn | tin tức | phân tích
publishedDate: 2026-04-15
tags: ["zalo", "lừa đảo"]
featured: true                    # Hiện trên trang chủ
readTime: "3 phút đọc"
---
```

## Thêm bài học mới

1. Tạo file `.md` mới trong thư mục module tương ứng
2. Copy frontmatter template từ bài học có sẵn
3. Cập nhật `order` để đúng thứ tự
4. Viết nội dung bằng Markdown
5. (Tùy chọn) Thêm quiz vào frontmatter
6. (Tùy chọn) Vẽ diagram trên excalidraw.com → export SVG → bỏ vào `assets/diagrams/`

## Thêm module mới

1. Tạo thư mục mới: `src/content/courses/05-ten-module/`
2. Tạo bài học đầu tiên với `module.id` mới
3. Astro sẽ tự nhận diện module mới

## Chạy local

```bash
npm install
npm run dev        # Dev server tại localhost:4321
npm run build      # Build static site
npm run preview    # Preview bản build
```

## Minh họa bằng Excalidraw

1. Mở [excalidraw.com](https://excalidraw.com)
2. Vẽ diagram (phishing flow, 2FA process, v.v.)
3. File → Export as SVG
4. Lưu file `.excalidraw` gốc trong `assets/diagrams/` để chỉnh sửa sau
5. Nhúng SVG trong Markdown:
   ```md
   ![Sơ đồ phishing](../../assets/diagrams/phishing-flow.svg)
   ```

## Roadmap nội dung

### Module 1: Mật khẩu & Tài khoản
- [x] Bài 1: Tại sao mật khẩu yếu nguy hiểm?
- [x] Bài 2: Cách tạo mật khẩu mạnh mà vẫn dễ nhớ
- [ ] Bài 3: Password Manager — ứng dụng nhớ mật khẩu hộ bạn
- [ ] Bài 4: Xác thực 2 yếu tố (2FA) là gì?
- [ ] Bài 5: Kiểm tra xem tài khoản đã bị lộ chưa

### Module 2: Nhận diện Lừa đảo
- [x] Bài 1: Phishing là gì? Cách nhận biết tin nhắn lừa đảo
- [ ] Bài 2: Thực hành — Phân biệt tin nhắn thật và giả
- [ ] Bài 3: Lừa đảo qua cuộc gọi (Vishing)
- [ ] Bài 4: Lừa đảo trên mạng xã hội
- [ ] Bài 5: Bạn đã bị lừa? Hành động ngay
- [ ] Bài 6: Bảo vệ người thân lớn tuổi

### Module 3: An toàn Mạng xã hội
- [ ] Bài 1: Bạn đang chia sẻ gì trên mạng?
- [ ] Bài 2: Cài đặt quyền riêng tư Facebook / Zalo / TikTok
- [ ] Bài 3: Deepfake và tin giả
- [ ] Bài 4: An toàn cho trẻ em trên mạng

### Module 4: Bảo vệ Thiết bị
- [ ] Bài 1: Cập nhật phần mềm — tại sao quan trọng?
- [ ] Bài 2: Cài app an toàn, tránh app lạ
- [ ] Bài 3: Wi-Fi công cộng và rủi ro
- [ ] Bài 4: Sao lưu dữ liệu
- [ ] Bài 5: Bị mất / trộm điện thoại — làm gì?

## TODO

- [ ] **Nghiên cứu các khóa học của Quạ HD**: Trích dẫn nội dung từ các khóa học của Quạ HD để phân tích, tìm ra phong cách giải thích và trình bày dẫn dắt người nghe. Phong cách của Quạ HD rất dễ hiểu, đáng học hỏi và áp dụng cho nội dung Dân Cư Mạng.

---

**Dân Cư Mạng** — Vì một cộng đồng mạng Việt Nam an toàn hơn 🇻🇳
