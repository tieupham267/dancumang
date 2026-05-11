# Content Authoring Guide

Hướng dẫn viết bài cho Dân Cư Mạng — schema, conventions, và style guide.

## Mục lục

- [Cấu trúc thư mục content](#cấu-trúc-thư-mục-content)
- [Schema bài học (courses)](#schema-bài-học-courses)
- [Schema bài blog](#schema-bài-blog)
- [Quy ước đặt tên file](#quy-ước-đặt-tên-file)
- [Style writing](#style-writing)
- [Template frontmatter](#template-frontmatter)
- [Quiz format](#quiz-format)
- [Link giữa các bài](#link-giữa-các-bài)
- [Nhúng hình ảnh & diagram](#nhúng-hình-ảnh--diagram)
- [Markdown extensions](#markdown-extensions)
- [Common pitfalls](#common-pitfalls)

---

## Cấu trúc thư mục content

```text
src/content/
├── config.ts              ← Schema TypeScript (Zod)
├── courses/               ← Khóa học
│   ├── 01-mat-khau/      ← Mỗi thư mục = 1 module
│   │   ├── 01-{slug}.md
│   │   ├── 02-{slug}.md
│   │   └── ...
│   ├── 02-phishing/
│   ├── 03-mang-xa-hoi/
│   └── 04-bao-ve-thiet-bi/
└── blog/                  ← Blog & tin tức
    └── YYYY-MM-DD-{slug}.md
```

**Quy tắc:**

- Tên thư mục module: `{order}-{slug-kebab-case}` (vd: `02-phishing`)
- Tên file bài học: `{order}-{slug-kebab-case}.md`
- Tên file blog: `{YYYY-MM-DD}-{slug}.md`
- Slug không dấu, kebab-case, ngắn gọn (≤ 60 ký tự)

---

## Schema bài học (courses)

Schema chính thức trong [src/content/config.ts](../src/content/config.ts). Frontmatter YAML bắt buộc:

```yaml
---
# Thông tin module (LẶP LẠI cho mọi bài trong cùng module)
module:
  id: 1                                        # number, thứ tự module
  title: "Mật khẩu & Tài khoản"                # string, tên module
  description: "Mô tả ngắn cho module"         # string
  icon: "lock"                                 # string, icon identifier
  color: "#0F3460"                             # string, mã màu hex

# Thông tin bài học
title: "Tiêu đề bài học"                       # string
description: "1 câu mô tả ngắn"                # string
order: 1                                       # number, thứ tự trong module
duration: "5 phút"                             # string, ước lượng thời gian đọc
difficulty: "cơ bản"                           # "cơ bản" | "trung bình" | "nâng cao"

# Meta
publishedDate: 2026-05-11                      # date (YYYY-MM-DD)
updatedDate: 2026-05-15                        # date, tùy chọn
tags: ["tag1", "tag2"]                         # array of string
draft: false                                   # boolean, mặc định false
coverImage: "/cover.png"                       # string, tùy chọn

# Quiz (tùy chọn nhưng KHUYẾN KHÍCH)
quiz:
  - question: "Câu hỏi?"
    options:
      - "Đáp án A"
      - "Đáp án B"
      - "Đáp án C"
      - "Đáp án D"
    correct: 2                                  # number, index của đáp án đúng (0-based)
    explanation: "Vì sao đáp án này đúng..."   # string
---

Nội dung bài học viết bằng Markdown ở đây...
```

### Lưu ý quan trọng

- `module.id` là **number** (`1`, `2`...) chứ không phải string
- `module.title`, `module.description`, `module.icon`, `module.color` phải **giống hệt** giữa các bài cùng module — copy y nguyên từ bài có sẵn
- `difficulty` phải là chuỗi tiếng Việt có dấu: `"cơ bản"`, `"trung bình"`, `"nâng cao"`
- `duration` là **chuỗi**, không phải số: `"5 phút"`, `"10 phút"`
- `publishedDate` không có quote — Astro tự parse thành Date

---

## Schema bài blog

```yaml
---
title: "Tiêu đề bài viết"
description: "Mô tả ngắn"
category: "cảnh báo"                # "cảnh báo" | "hướng dẫn" | "tin tức" | "phân tích"
publishedDate: 2026-04-15            # date
updatedDate: 2026-04-20              # date, tùy chọn
tags: ["zalo", "lừa đảo"]
draft: false
featured: true                       # boolean, mặc định false — hiện trên trang chủ
readTime: "3 phút đọc"               # string
coverImage: "/blog/cover.png"        # string, tùy chọn
---
```

---

## Quy ước đặt tên file

| Loại | Quy ước | Ví dụ |
|---|---|---|
| Module folder | `{order}-{slug}` | `01-mat-khau/` |
| Bài học | `{order}-{slug}.md` | `04-huong-dan-bat-2fa.md` |
| Blog post | `{YYYY-MM-DD}-{slug}.md` | `2026-04-15-lua-dao-zalo-gia-mao-cong-an.md` |
| Diagram | `{topic}-{purpose}.svg` | `phishing-flow.svg`, `2fa-process.svg` |

**Slug guidelines:**

- Bỏ dấu tiếng Việt: `mật khẩu` → `mat-khau`
- Dùng `-`, không dùng `_` hay space
- Tối đa 60 ký tự
- Không bắt đầu bằng số (trừ phần `order` ở đầu file)
- Mô tả nội dung, không phải tiêu đề đầy đủ:
  - ✅ `huong-dan-bat-2fa`
  - ❌ `huong-dan-bat-xac-thuc-hai-yeu-to-cho-gmail-facebook-zalo-va-ngan-hang`

---

## Style writing

### Giọng văn

Dân Cư Mạng hướng đến **ba mẹ, người lớn tuổi, người mới dùng smartphone** — viết như đang nói chuyện với họ, không như đang viết tài liệu kỹ thuật.

**Quy tắc:**

| ✅ Nên | ❌ Không nên |
|---|---|
| "Hãy tưởng tượng bạn khóa cửa nhà..." | "Theo nguyên lý cryptographic hashing, ta thấy..." |
| "Hacker không cần giỏi — chỉ cần kiên nhẫn" | "Threat actors leverage automated tooling..." |
| "Gọi ngược lên tổng đài chính thức" | "Verify the source via out-of-band communication" |
| Câu chuyện thật, có tên, có địa điểm VN | Số liệu abstract toàn cầu không thuộc về ai |

### Cấu trúc bài lý thuyết

```text
1. Hook mở bài (1 câu chuyện / câu hỏi gây tò mò)
2. Giải thích vấn đề (3-5 đoạn)
3. Ví dụ cụ thể (Việt Nam, có chi tiết)
4. Cách phòng tránh (concrete, làm được ngay)
5. Tóm tắt (3-5 bullet)
6. Quiz (1-3 câu)
7. Link bài tiếp theo
```

### Cấu trúc bài hướng dẫn (tutorial)

```text
1. Mục tiêu: cuối bài bạn làm được gì
2. Chuẩn bị: cần app/tài khoản gì
3. Bước 1: ...
4. Bước 2: ...
5. ...
6. Bẫy thường gặp / lưu ý
7. Checklist tự kiểm
8. Tóm tắt
9. Quiz
```

Xem [04-huong-dan-bat-2fa.md](../src/content/courses/01-mat-khau/04-huong-dan-bat-2fa.md) làm reference.

### Cấu trúc bài checklist/wrap-up

```text
1. Giới thiệu (vì sao cần checklist này)
2. 3-5 mục chính, mỗi mục có:
   - Tên rõ ràng
   - Tại sao cần
   - Cách làm cụ thể
3. Checklist tự đánh dấu
4. Tóm tắt
5. Quiz
```

Xem [06-thoi-quen-bao-ve-tai-khoan.md](../src/content/courses/01-mat-khau/06-thoi-quen-bao-ve-tai-khoan.md) làm reference.

### Độ dài

- Bài học: **500-1200 từ** (5-10 phút đọc)
- Bài blog tin tức: **300-700 từ**
- Bài blog phân tích: tối đa **1500 từ**

### Heading hierarchy

- `#` (H1) **không dùng trong body** — title đã ở frontmatter
- `##` (H2) cho section chính (3-7 cái mỗi bài)
- `###` (H3) cho subsection
- Không dùng `####` trở xuống — nếu phải dùng thì cấu trúc bài đang quá phức tạp

---

## Template frontmatter

Copy-paste khi tạo bài mới:

### Bài học

```yaml
---
module:
  id: 1
  title: "Mật khẩu & Tài khoản"
  description: "Tạo mật khẩu mạnh, bật xác thực 2 lớp, quản lý tài khoản an toàn"
  icon: "lock"
  color: "#0F3460"

title: "..."
description: "..."
order: 0
duration: "5 phút"
difficulty: "cơ bản"
publishedDate: 2026-05-11
tags: []

quiz:
  - question: "..."
    options:
      - "..."
      - "..."
      - "..."
      - "..."
    correct: 0
    explanation: "..."
---
```

### Blog

```yaml
---
title: "..."
description: "..."
category: "cảnh báo"
publishedDate: 2026-05-11
tags: []
featured: false
readTime: "3 phút đọc"
---
```

---

## Quiz format

Quiz là **field tùy chọn nhưng khuyến khích** — giúp người đọc nhớ lâu hơn và biết mình có thật sự hiểu không.

### Quy tắc viết câu hỏi

1. **Test hiểu, không test thuộc** — câu hỏi nên là tình huống, không phải định nghĩa
2. **4 đáp án** — không nên ít hơn (quá dễ) hay nhiều hơn (overwhelming)
3. **Đáp án sai phải hợp lý** — không gài bẫy với đáp án vô lý
4. **Giải thích cụ thể** — không chỉ "đáp án X là đúng", mà giải thích **vì sao** + **các đáp án khác sai vì sao**

### Ví dụ tốt

```yaml
quiz:
  - question: "Bạn nhận SMS từ '+84...' báo 'Tài khoản ngân hàng của bạn bị khóa, bấm vào link để xác minh'. Bạn làm gì?"
    options:
      - "Bấm link để kiểm tra ngay"
      - "Gọi lại số trong tin nhắn để xác nhận"
      - "Không bấm. Mở app ngân hàng chính thức để kiểm tra"
      - "Trả lời tin nhắn yêu cầu thông tin"
    correct: 2
    explanation: "Đây là phishing kinh điển. Ngân hàng không bao giờ gửi link yêu cầu xác minh qua SMS. Số gọi lại cũng có thể là kẻ lừa đảo. Luôn mở app/web chính thức bạn vẫn dùng — không bấm link trong tin nhắn."
```

### Ví dụ KHÔNG nên

```yaml
quiz:
  - question: "2FA là gì?"             # Test thuộc, không test hiểu
    options:
      - "Two Factor Authentication"
      - "Bún bò Huế"                   # Đáp án sai vô lý
      - "Hai-Mặt-Phụ"
      - "Cả ba đúng"                   # Tùy chọn lười
    correct: 0
    explanation: "Đáp án đúng là A."   # Giải thích nghèo nàn
```

---

## Link giữa các bài

Astro tự generate route từ slug file. Quy tắc:

- **Route bài học:** `/khoa-hoc/{folder-name}/{file-slug-no-ext}`
- **Ví dụ:** `src/content/courses/01-mat-khau/02-tao-mat-khau-manh.md` → `/khoa-hoc/01-mat-khau/02-tao-mat-khau-manh`

> ⚠️ **Tránh hardcode route** — nếu có thay đổi cấu trúc URL trong tương lai, dùng `getStaticPaths` để generate tự động và đừng dựa vào path string trong content.

### Cú pháp link

```markdown
*Bài tiếp theo: [Cách tạo mật khẩu mạnh](/khoa-hoc/01-mat-khau/02-tao-mat-khau-manh)*

Xem thêm bài [Phishing là gì?](/khoa-hoc/02-phishing/01-phishing-la-gi).
```

### Footer chuẩn cuối bài

Cuối mỗi bài học, link đến bài tiếp theo theo `order`:

```markdown
---

*Bài tiếp theo: [Tên bài tiếp](/khoa-hoc/{module}/{slug})*
```

Hoặc nếu là bài cuối module:

```markdown
---

*Module tiếp theo: [Tên module tiếp](/khoa-hoc/{next-module}/01-{first-lesson})*
```

---

## Nhúng hình ảnh & diagram

### Hình ảnh thường

Lưu vào `src/assets/images/{lesson-slug}/` rồi reference:

```markdown
![Mô tả alt text](../../assets/images/{lesson-slug}/screenshot.png)
```

**Quy tắc:**

- Luôn có **alt text** mô tả (cho screen reader)
- Định dạng: PNG cho screenshot, WebP/AVIF cho ảnh thật
- Max width 1200px
- Max file size 500KB — nén trước (TinyPNG, Squoosh)

### Diagram Excalidraw

1. Vẽ trên [excalidraw.com](https://excalidraw.com)
2. **File → Save As** → lưu `.excalidraw` vào `src/assets/diagrams/` (để chỉnh sửa sau)
3. **File → Export as SVG** → lưu cùng tên, đuôi `.svg`
4. Nhúng:

```markdown
![Sơ đồ phishing](../../assets/diagrams/phishing-flow.svg)
```

### Screenshot UI app

- **iPhone:** chế độ Light, full screen, ẩn battery/notification
- **Android:** chế độ Light, ẩn status bar (developer options)
- **Browser:** Chrome DevTools → device toolbar → chọn iPhone 14 hoặc Pixel 6
- Crop sát mép, không có viền browser dày

---

## Markdown extensions

Astro với `@astrojs/mdx` hỗ trợ:

### GitHub Flavored Markdown

- **Tables** ✅
- **Task lists** (`- [x]`, `- [ ]`) ✅
- **Strikethrough** (`~~text~~`) ✅
- **Autolinks** ✅
- **Fenced code blocks với language** ✅

### Callout / Blockquote

Theo style site, dùng `>` blockquote cho cảnh báo / câu chuyện:

```markdown
> ⚠️ **Quan trọng:** Đừng bao giờ chia sẻ mã OTP cho bất kỳ ai.

> 💡 **Câu chuyện thật:** Chị Lan ở Hà Nội dùng mật khẩu `lan1985` cho tất cả tài khoản. Khi một trang mua sắm bị lộ...
```

### Code blocks

Luôn chỉ rõ language để Shiki highlight đúng:

````markdown
```bash
npm install
npm run dev
```

```yaml
title: "..."
```

```text
# Khi không có ngôn ngữ cụ thể, dùng "text"
```
````

---

## Common pitfalls

### 1. Schema mismatch

**Triệu chứng:** `npm run build` báo lỗi `ZodError`.

**Nguyên nhân thường gặp:**

- `module.id` viết thành string thay vì number
- `difficulty` viết tiếng Anh (`"beginner"`) thay vì tiếng Việt (`"cơ bản"`)
- Thiếu field bắt buộc (`title`, `description`, `order`, `publishedDate`...)
- `quiz[].correct` viết thành string thay vì number

**Cách debug:** Đọc message lỗi ZodError — nó chỉ rõ field nào sai.

### 2. Order trùng

**Triệu chứng:** Bài hiển thị sai thứ tự, hoặc 2 bài có cùng `order`.

**Fix:** Mỗi bài trong cùng module phải có `order` duy nhất. Nếu chèn bài vào giữa, update `order` các bài sau.

### 3. Link vỡ giữa các bài

**Triệu chứng:** Link trỏ tới `/khoa-hoc/{module}/{slug}` nhưng 404.

**Fix:** Slug phải khớp **chính xác** với tên file (không có `.md`).

### 4. Hình ảnh không hiện

**Triệu chứng:** Markdown `![](...)` render thành text broken.

**Fix:** Path phải tương đối từ file `.md` — `../../assets/...` (lên 2 cấp từ `courses/{module}/`).

### 5. Frontmatter không parse

**Triệu chứng:** Cả file hiện ra như text raw, không có style.

**Fix:** Frontmatter phải:

- Bắt đầu và kết thúc bằng `---` ở đầu dòng (không có space trước)
- YAML hợp lệ (indent đúng, không tab)
- Không có ký tự đặc biệt chưa escape trong string

---

## Câu hỏi thường gặp

**Q: Tôi có thể dùng tiếng Anh trong bài không?**

A: Có, nhưng giải thích bằng tiếng Việt ngay lập tức. Ví dụ: *"Đây gọi là **credential stuffing** — kỹ thuật thử mật khẩu lộ ở trang A trên trang B."*

**Q: Tôi muốn dùng React component trong bài (vd: Quiz tương tác)?**

A: Đổi đuôi file thành `.mdx` và import component:

```mdx
---
title: "..."
---

import Quiz from '../../components/Quiz.astro'

## Nội dung...

<Quiz questions={quiz} />
```

Hiện tại component Quiz chưa được implement — xem [roadmap](../README.md#roadmap-tính-năng).

**Q: Có spell check không?**

A: Chưa có CI tự động, nhưng nên dùng `cspell` hoặc plugin "Vietnamese Spelling" của VSCode trước khi submit PR.

---

## Reference

- [Astro Content Collections docs](https://docs.astro.build/en/guides/content-collections/)
- [Zod schema docs](https://zod.dev/) (cho hiểu schema TypeScript)
- [Markdown Guide](https://www.markdownguide.org/cheat-sheet/)
- [src/content/config.ts](../src/content/config.ts) — Schema gốc
