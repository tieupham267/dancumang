# Đóng góp cho Dân Cư Mạng

Cảm ơn bạn đã muốn góp sức cho dự án giáo dục bảo mật cộng đồng! Trang này hướng dẫn 3 cách đóng góp — kể cả khi bạn **không biết code**.

## Mục lục

- [Code of Conduct (Quy tắc ứng xử)](#code-of-conduct-quy-tắc-ứng-xử)
- [Cách 1: Viết bài mới (không cần code)](#cách-1-viết-bài-mới-không-cần-code)
- [Cách 2: Báo lỗi / đề xuất nội dung](#cách-2-báo-lỗi--đề-xuất-nội-dung)
- [Cách 3: Đóng góp code](#cách-3-đóng-góp-code)
- [Quy ước commit & PR](#quy-ước-commit--pr)
- [Quy trình review](#quy-trình-review)

---

## Code of Conduct (Quy tắc ứng xử)

Dự án này hướng đến người dùng phổ thông Việt Nam, nhiều người không có nền tảng kỹ thuật. Mọi đóng góp và thảo luận cần:

- **Tôn trọng** mọi đối tượng người đọc — không chê người mới
- **Trung thực** — không phóng đại rủi ro để gây sợ hãi
- **Có nguồn** — số liệu, vụ việc trích dẫn phải kiểm chứng được
- **Không quảng cáo** — không gợi ý sản phẩm trả phí trừ khi miễn phí cũng phục vụ tốt
- **Không thuật ngữ ngổn ngang** — nếu phải dùng từ tiếng Anh, giải thích bằng tiếng Việt ngay

Hành vi **không chấp nhận**: xúc phạm, công kích cá nhân, phân biệt đối xử, spam.

---

## Cách 1: Viết bài mới (không cần code)

Bạn có thể viết bài hoàn toàn bằng Markdown trên giao diện web GitHub — không cần cài Node, không cần biết Astro.

### Quy trình

1. **Chọn chủ đề** từ [roadmap nội dung](README.md#roadmap-nội-dung) (các mục `[ ]` chưa hoàn thành), hoặc đề xuất chủ đề mới qua [issue](https://github.com/tieupham267/dancumang/issues/new).
2. **Đọc** [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md) để hiểu:
   - Schema frontmatter
   - Quy ước đặt tên file
   - Style writing (giọng nhẹ, có câu chuyện thật VN, có quiz)
3. **Mở 1 bài có sẵn** làm template — gợi ý:
   - Bài lý thuyết: [02-tao-mat-khau-manh.md](src/content/courses/01-mat-khau/02-tao-mat-khau-manh.md)
   - Bài hướng dẫn step-by-step: [04-huong-dan-bat-2fa.md](src/content/courses/01-mat-khau/04-huong-dan-bat-2fa.md)
   - Bài checklist/wrap-up: [06-thoi-quen-bao-ve-tai-khoan.md](src/content/courses/01-mat-khau/06-thoi-quen-bao-ve-tai-khoan.md)
4. **Tạo file mới** trong thư mục module tương ứng theo quy ước `{order}-{slug}.md`
5. **Submit PR** với 1 commit duy nhất chứa file bài mới

### Checklist trước khi submit bài

- [ ] Frontmatter đầy đủ và đúng schema (xem [CONTENT-GUIDE](docs/CONTENT-GUIDE.md))
- [ ] `order` không trùng với bài khác trong cùng module
- [ ] Bài đọc trong **5-10 phút** (khoảng 500-1200 từ)
- [ ] Có **ít nhất 1 ví dụ** thực tế từ Việt Nam
- [ ] Có **quiz 1-3 câu** cuối bài (rất khuyến khích)
- [ ] Mọi link external đều **hoạt động**, không dẫn tới trang ngừng tồn tại
- [ ] Không có **thuật ngữ** mà không giải thích
- [ ] Đã đọc lại to thành tiếng — không lủng củng

---

## Cách 2: Báo lỗi / đề xuất nội dung

Mở [issue mới](https://github.com/tieupham267/dancumang/issues/new) với 1 trong các nhãn:

| Nhãn | Khi nào dùng |
|---|---|
| `content/error` | Bài viết có thông tin sai (kỹ thuật, sự kiện) |
| `content/outdated` | Hướng dẫn không còn đúng (UI app đã đổi) |
| `content/typo` | Lỗi chính tả, ngữ pháp |
| `content/broken-link` | Link external hỏng |
| `content/request` | Đề xuất chủ đề bài mới |
| `bug` | Lỗi kỹ thuật (build hỏng, layout vỡ) |
| `enhancement` | Đề xuất tính năng mới |

**Template báo lỗi nội dung:**

```text
**Bài bị ảnh hưởng:** [đường dẫn hoặc tiêu đề]

**Vấn đề:** [mô tả rõ]

**Bằng chứng / nguồn:** [link, screenshot, hoặc kinh nghiệm cá nhân]

**Gợi ý sửa:** [tùy chọn]
```

---

## Cách 3: Đóng góp code

### Setup môi trường

```bash
# Yêu cầu: Node.js >= 20
git clone https://github.com/tieupham267/dancumang.git
cd dancumang
npm install
npm run dev    # http://localhost:4321
```

Chi tiết: xem [docs/DEPLOY.md](docs/DEPLOY.md) và [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

### Loại đóng góp code phổ biến

1. **Bug fix** — sửa lỗi đã có issue mở
2. **Quiz component** — React Island cho phép user trả lời quiz ngay trên bài
3. **Search** — tích hợp Pagefind cho static search
4. **Trang blog** — implement `/blog/[...slug]` (hiện chưa có)
5. **Accessibility** — cải thiện a11y (contrast, keyboard nav, screen reader)
6. **Performance** — giảm bundle, lazy load
7. **Dark mode** — system + toggle

### Quy ước code

| Loại | Quy ước |
|---|---|
| TypeScript | Strict mode, không dùng `any` — dùng `unknown` rồi narrow |
| Astro components | PascalCase file name, props có type rõ |
| CSS | Scoped per component (mặc định của Astro), tránh `:global` trừ khi cần |
| Import order | 1) Astro / framework, 2) external libs, 3) internal aliases, 4) relative paths |
| Comment | Chỉ viết khi giải thích **TẠI SAO**, không viết "code làm gì" |

### Quy trình PR

1. **Fork** repo, **clone** về local
2. Tạo branch theo convention: `feat/quiz-component`, `fix/broken-link-bitwarden`, `content/module2-bai3-vishing`
3. Code / viết bài → test bằng `npm run dev` → `npm run build` đảm bảo không lỗi
4. Commit theo [convention bên dưới](#quy-ước-commit--pr)
5. Push lên fork → mở PR về `main` của upstream
6. Mô tả PR: vấn đề giải quyết, ảnh chụp màn hình nếu thay đổi UI, breaking changes nếu có
7. Đợi review — phản hồi feedback nếu có

---

## Quy ước commit & PR

### Commit message

Theo [Conventional Commits](https://www.conventionalcommits.org/vi/):

```text
<type>: <mô tả ngắn, dưới 70 ký tự>

<phần thân tùy chọn — giải thích chi tiết tại sao>
```

**Types:**

| Type | Khi nào dùng |
|---|---|
| `feat` | Thêm tính năng / component mới |
| `fix` | Sửa lỗi |
| `content` | Thêm/sửa bài học, blog |
| `docs` | Sửa documentation (README, docs/*, CONTRIBUTING) |
| `refactor` | Đổi code không đổi behavior |
| `style` | Format, đổi CSS không ảnh hưởng logic |
| `perf` | Tối ưu performance |
| `test` | Thêm/sửa test |
| `chore` | Cập nhật deps, config, build script |
| `ci` | Sửa GitHub Actions / CI config |

**Ví dụ:**

```text
content: thêm bài Module 2/03 — Lừa đảo qua cuộc gọi (Vishing)

Đưa case study vụ giả mạo công an 2024 ở TP.HCM, hướng dẫn cách
phản ứng khi nhận cuộc gọi đáng nghi, và checklist các số tổng đài
chính thức nên gọi ngược lại để xác minh.
```

### PR title

Tương tự commit format. PR có thể chứa nhiều commit nhưng title nên là `<type>: <tóm tắt>` ngắn gọn.

### PR description template

```markdown
## Tóm tắt
[1-3 dòng giải thích PR làm gì và vì sao]

## Thay đổi chính
- [bullet 1]
- [bullet 2]

## Test
- [ ] `npm run dev` chạy được
- [ ] `npm run build` không lỗi
- [ ] Đã test trên Chrome desktop
- [ ] Đã test trên mobile (responsive)

## Screenshot (nếu thay đổi UI)
[trước / sau]

## Liên quan
Fixes #[issue number]
```

---

## Quy trình review

- PR sẽ được review trong **vòng 7 ngày**
- Reviewer có thể yêu cầu sửa — đừng coi đó là chỉ trích cá nhân
- Sau khi approve, PR sẽ được **squash merge** vào `main`
- Branch của bạn có thể được xóa sau merge — bạn có thể `git pull` lại

### Tiêu chí approve

**Bài viết:**

- Đúng schema, build không lỗi
- Đúng style writing của dự án (xem [CONTENT-GUIDE](docs/CONTENT-GUIDE.md))
- Thông tin chính xác, có nguồn nếu trích dẫn
- Quiz hợp lý (không quá dễ, không gài bẫy)

**Code:**

- Không gây regression
- Bundle size không tăng đáng kể (kiểm tra bằng `npm run build`)
- A11y không bị giảm
- Type-safe (không `any`)

---

## Có câu hỏi?

- Mở issue với nhãn `question`
- Hoặc bình luận thẳng trong PR đang mở

Cảm ơn bạn đã đóng góp 🇻🇳
