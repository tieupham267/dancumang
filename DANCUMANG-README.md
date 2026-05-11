# 🛡️ Dân Cư Mạng — dancumang.vn

Kiến thức bảo mật cho mọi người. Miễn phí, bằng tiếng Việt, không thuật ngữ phức tạp.

## Cấu trúc dự án

```
dancumang/
├── src/
│   ├── content/
│   │   ├── config.ts              ← Schema cho content collections
│   │   │
│   │   ├── courses/               ← KHÓA HỌC
│   │   │   ├── 01-mat-khau-va-tai-khoan/
│   │   │   │   ├── 01-tai-sao-mat-khau-yeu-nguy-hiem.md
│   │   │   │   ├── 02-password-manager.md
│   │   │   │   └── 03-xac-thuc-2-yeu-to.md
│   │   │   ├── 02-nhan-dien-lua-dao/
│   │   │   ├── 03-an-toan-mang-xa-hoi/
│   │   │   └── 04-bao-ve-thiet-bi/
│   │   │
│   │   └── blog/                  ← BLOG & TIN TỨC
│   │       └── 2026-04-15-lua-dao-zalo-gia-mao-cong-an.md
│   │
│   ├── pages/
│   │   └── khoa-hoc/
│   │       ├── index.astro        ← /khoa-hoc (danh sách module)
│   │       └── [...slug].astro    ← /khoa-hoc/01-mat-khau.../01-tai-sao...
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro       ← Layout chung (head, fonts, global CSS)
│   │
│   ├── components/                ← React/Astro components (Quiz, Alert...)
│   │
│   └── assets/
│       └── diagrams/              ← Excalidraw SVG exports
│
└── README.md
```

## Cách thêm bài học mới

1. Tạo file `.md` trong thư mục module tương ứng
2. Thêm frontmatter theo schema:

```md
---
title: "Tiêu đề bài học"
description: "Mô tả ngắn"
module:
  id: "01-mat-khau-va-tai-khoan"
  title: "Mật khẩu & Tài khoản"
  icon: "🔐"
order: 4
duration: 5
difficulty: "beginner"
tags: ["tag1", "tag2"]
publishedAt: 2026-04-16
hasQuiz: false
---

Nội dung bài học viết bằng Markdown...
```

3. Astro tự generate route: `/khoa-hoc/{tên-thư-mục}/{tên-file}`

## Cách thêm bài blog

```md
---
title: "Tiêu đề bài viết"
description: "Mô tả ngắn"
category: "canh-bao"          # canh-bao | huong-dan | tin-tuc | giai-thich
tags: ["tag1", "tag2"]
publishedAt: 2026-04-16
urgency: "high"               # Chỉ dùng cho category: canh-bao
---

Nội dung bài viết...
```

## Nhúng Excalidraw diagram

1. Vẽ trên excalidraw.com
2. Export → SVG → lưu vào `src/assets/diagrams/`
3. Trong Markdown:

```md
![Mô tả diagram](../../assets/diagrams/ten-file.svg)
```

## Khởi chạy

```bash
# Tạo project Astro mới
npm create astro@latest -- --template minimal
# Copy các file từ project này vào

# Cài dependencies
npm install

# Dev server
npm run dev

# Build static
npm run build
```

## Tech stack

- **Astro** — Static site generator
- **Content Collections** — Typed Markdown content
- **Be Vietnam Pro + Playfair Display** — Typography
- **Excalidraw** — Diagram minh họa (export SVG)

## Roadmap

- [ ] Quiz component tương tác (React Island)
- [ ] Trang blog với filter theo category
- [ ] Công cụ kiểm tra mật khẩu (client-side)
- [ ] Phishing quiz simulator
- [ ] Dark mode
- [ ] Search (Pagefind)
- [ ] RSS feed cho cảnh báo bảo mật
- [ ] PWA support (đọc offline)
