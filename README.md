# 🛡️ Dân Cư Mạng — dancumang.vn

> Kiến thức bảo mật cho mọi người. Miễn phí, bằng tiếng Việt, không thuật ngữ phức tạp.

[![Made with Astro](https://img.shields.io/badge/Made%20with-Astro-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## Đây là gì?

**Dân Cư Mạng** là website giáo dục bảo mật miễn phí dành cho người dùng phổ thông Việt Nam — tập trung vào nội dung **dễ hiểu**, **thiết thực**, không kỹ thuật. Mỗi bài học mất 5-10 phút, có quiz cuối bài, có ví dụ thực tế từ Việt Nam.

**Đối tượng:** Người không phải dân IT — ba mẹ, người lớn tuổi, người mới dùng smartphone, hoặc bất kỳ ai muốn dùng internet an toàn hơn.

## Tech stack

- **[Astro](https://astro.build)** — Static site generator
- **[Content Collections](https://docs.astro.build/en/guides/content-collections/)** — Typed Markdown content
- **[MDX](https://mdxjs.com/)** — Markdown với React component
- **[React](https://react.dev/)** — Cho component tương tác (Quiz, Alert...)
- **Be Vietnam Pro + Playfair Display** — Typography
- **[Excalidraw](https://excalidraw.com/)** — Vẽ diagram (export SVG)

## Khởi chạy local

```bash
# Cài Node.js >= 20 trước

git clone https://github.com/tieupham267/dancumang.git
cd dancumang
npm install

npm run dev        # Dev server tại http://localhost:4321
npm run build      # Build static site → dist/
npm run preview    # Preview bản build
```

## Cấu trúc thư mục

```text
dancumang/
├── docs/                          ← Tài liệu cho developer
│   ├── CONTENT-GUIDE.md          ← Cách viết bài
│   ├── ARCHITECTURE.md           ← Cấu trúc kỹ thuật
│   └── DEPLOY.md                 ← Deploy & dev environment
│
├── src/
│   ├── content/
│   │   ├── config.ts              ← Schema content collections
│   │   ├── courses/               ← Khóa học (Markdown)
│   │   │   ├── 01-mat-khau/       ← Module 1: Mật khẩu & Tài khoản
│   │   │   ├── 02-phishing/       ← Module 2: Nhận diện Lừa đảo
│   │   │   ├── 03-mang-xa-hoi/    ← Module 3: An toàn Mạng xã hội
│   │   │   └── 04-bao-ve-thiet-bi/← Module 4: Bảo vệ Thiết bị
│   │   └── blog/                  ← Blog & tin tức bảo mật
│   │
│   ├── assets/
│   │   └── diagrams/              ← Excalidraw SVG minh họa
│   │
│   ├── components/                ← React/Astro components
│   ├── layouts/                   ← Layout templates
│   └── pages/                     ← Astro pages (routing)
│
├── public/                        ← Static assets (favicon, images)
├── astro.config.mjs
├── package.json
├── README.md                      ← (bạn đang đọc)
├── CONTRIBUTING.md                ← Cách đóng góp
└── dancumang-project-brief.md     ← Brief gốc của dự án
```

## Đóng góp

Có 3 cách đóng góp — kể cả khi bạn không biết code:

1. **Viết bài mới** — Markdown, 5-10 phút đọc. Xem [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md)
2. **Báo lỗi nội dung** — bài viết sai, link hỏng, hướng dẫn lỗi thời → mở issue
3. **Code** — bug fix, component mới, performance → xem [CONTRIBUTING.md](CONTRIBUTING.md)

## Thêm bài học mới (quick start)

1. Tạo file `.md` trong thư mục module: `src/content/courses/{module}/{order}-{slug}.md`
2. Copy frontmatter từ bài có sẵn (xem `01-mat-khau/02-tao-mat-khau-manh.md`)
3. Cập nhật `order` để đúng thứ tự
4. Viết nội dung bằng Markdown
5. (Tùy chọn) Thêm quiz vào frontmatter
6. `npm run dev` → kiểm tra tại `localhost:4321/khoa-hoc/`

Chi tiết schema, style writing, conventions → [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md)

## Roadmap nội dung

### Module 1: Mật khẩu & Tài khoản

- [x] Bài 1: Tại sao mật khẩu yếu nguy hiểm?
- [x] Bài 2: Cách tạo mật khẩu mạnh mà vẫn dễ nhớ
- [x] Bài 3: Hướng dẫn cài Bitwarden Password Manager
- [x] Bài 4: Hướng dẫn bật 2FA (Gmail / FB / Zalo / Bank)
- [x] Bài 5: Kiểm tra tài khoản đã bị lộ chưa
- [x] Bài 6: Thói quen vàng — Checklist bảo vệ tài khoản

### Module 2: Nhận diện Lừa đảo

- [x] Bài 1: Phishing là gì? Cách nhận biết tin nhắn lừa đảo
- [ ] Bài 2: Thực hành — Phân biệt tin nhắn thật và giả
- [ ] Bài 3: Lừa đảo qua cuộc gọi (Vishing)
- [ ] Bài 4: Lừa đảo trên mạng xã hội
- [ ] Bài 5: Bạn đã bị lừa? Hành động ngay
- [ ] Bài 6: Bảo vệ người thân lớn tuổi

### Module 3: An toàn Mạng xã hội

- [ ] Bài 1: Bạn đang chia sẻ gì trên mạng?
- [x] Bài 2: Cài đặt quyền riêng tư Facebook / Zalo / TikTok
- [ ] Bài 3: Deepfake và tin giả
- [ ] Bài 4: An toàn cho trẻ em trên mạng

### Module 4: Bảo vệ Thiết bị

- [x] Bài 1: 5 thói quen bảo vệ máy tính
- [x] Bài 2: Bảo vệ điện thoại — Khóa máy, app chính thống, tìm thiết bị từ xa
- [ ] Bài 3: Wi-Fi công cộng và rủi ro
- [ ] Bài 4: Sao lưu dữ liệu
- [ ] Bài 5: Bị mất / trộm điện thoại — làm gì?

## Roadmap tính năng

- [ ] Quiz component tương tác (React Island)
- [ ] Trang blog với filter theo category
- [ ] Công cụ kiểm tra mật khẩu (client-side, dùng zxcvbn)
- [ ] Phishing quiz simulator (drag & drop)
- [ ] Dark mode
- [ ] Search (Pagefind)
- [ ] RSS feed cho cảnh báo bảo mật
- [ ] PWA support (đọc offline)

## License

Mã nguồn: **MIT License** — dùng tự do.
Nội dung bài học: **CC BY-SA 4.0** — chia sẻ tự do, ghi nguồn, không cấm dùng thương mại.

## Liên hệ

- **Website:** [dancumang.vn](https://dancumang.vn)
- **GitHub Issues:** [tieupham267/dancumang/issues](https://github.com/tieupham267/dancumang/issues)

---

**Dân Cư Mạng** — Vì một cộng đồng mạng Việt Nam an toàn hơn 🇻🇳
