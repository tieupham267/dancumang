# Architecture

Tài liệu mô tả cấu trúc kỹ thuật, data flow, và quyết định thiết kế của Dân Cư Mạng.

## Mục lục

- [Tổng quan](#tổng-quan)
- [Tech stack & lý do chọn](#tech-stack--lý-do-chọn)
- [Cấu trúc folder](#cấu-trúc-folder)
- [Content Collections](#content-collections)
- [Routing](#routing)
- [Layout system](#layout-system)
- [Components](#components)
- [Styling strategy](#styling-strategy)
- [Build pipeline](#build-pipeline)
- [Performance](#performance)
- [Known issues & technical debt](#known-issues--technical-debt)

---

## Tổng quan

Dân Cư Mạng là **static site** được build bằng Astro. Toàn bộ nội dung là Markdown trong `src/content/`, được type-check bằng Content Collections (Zod schema). Output là HTML/CSS/JS thuần — không cần server, không database, không API.

```text
┌─────────────────────────────────────────┐
│  Markdown content (src/content/*)       │
│  ↓                                       │
│  Astro Content Collections (config.ts)  │
│  ↓                                       │
│  Astro pages (src/pages/*)               │
│  ↓                                       │
│  Static HTML/CSS/JS (dist/)              │
│  ↓                                       │
│  CDN (Cloudflare Pages / Vercel / etc.)  │
└─────────────────────────────────────────┘
```

**Lý do chọn static site:**

- ✅ Zero hosting cost với free tier Cloudflare Pages / Netlify
- ✅ Tốc độ tối đa — Lighthouse perfect score khả thi
- ✅ Không có attack surface server-side
- ✅ Dễ scale (CDN làm hết)
- ❌ Đánh đổi: không có comment / user account (cố ý — không cần)

---

## Tech stack & lý do chọn

| Tech | Version | Lý do |
|---|---|---|
| **Astro** | `^5.x` | Best-in-class cho content sites: islands architecture, partial hydration, content collections, MDX |
| **MDX** | `@astrojs/mdx ^4.x` | Cho phép React component trong Markdown (Quiz, Alert...) |
| **React** | `^19.x` | Component tương tác — chỉ ship JS cho component nào cần |
| **TypeScript** | (qua Astro) | Type-check schema content + props component |
| **Zod** | (qua Astro) | Validate frontmatter content collections |
| **Shiki** | (qua Astro) | Syntax highlighting code blocks ở build time, không cần JS client |

**Tại sao không chọn các tech khác:**

- **Next.js / Remix:** Quá mạnh cho nhu cầu content site, bundle size lớn
- **Hugo / Jekyll:** Nhanh build nhưng template language hạn chế, khó tích hợp React
- **Gatsby:** GraphQL overhead không cần thiết
- **VitePress / Docusaurus:** Định hướng tech docs, không phù hợp magazine-style content
- **Plain HTML/CSS:** Không có content collections, type safety

---

## Cấu trúc folder

```text
dancumang/
├── astro.config.mjs              ← Cấu hình Astro: integrations, site URL, markdown
├── package.json                  ← Dependencies + scripts
├── tsconfig.json                 ← (tự generate bởi Astro)
│
├── public/                       ← Static assets phục vụ as-is
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── content/
│   │   ├── config.ts            ← Định nghĩa schema collections (Zod)
│   │   ├── courses/             ← Collection: bài học
│   │   └── blog/                ← Collection: tin tức
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro     ← HTML skeleton, head, fonts, global CSS
│   │
│   ├── pages/                   ← File-based routing
│   │   ├── index.astro          ← /
│   │   ├── khoa-hoc/
│   │   │   ├── index.astro      ← /khoa-hoc
│   │   │   └── [...slug].astro  ← /khoa-hoc/{slug} (dynamic)
│   │   └── blog/                ← (chưa implement)
│   │
│   ├── components/              ← Astro + React components
│   │   └── ... (sẽ thêm Quiz, Alert, Callout, etc.)
│   │
│   └── assets/                  ← Astro-processed assets
│       ├── images/
│       └── diagrams/            ← Excalidraw SVG exports
│
└── docs/                        ← Tài liệu cho developer (bạn đang đọc)
```

---

## Content Collections

### Định nghĩa

Astro Content Collections là cách type-safe để quản lý Markdown. Định nghĩa schema trong `src/content/config.ts` bằng Zod:

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    module: z.object({
      id: z.number(),
      title: z.string(),
      // ...
    }),
    title: z.string(),
    order: z.number(),
    publishedDate: z.date(),
    quiz: z.array(z.object({
      question: z.string(),
      options: z.array(z.string()),
      correct: z.number(),
      explanation: z.string(),
    })).optional(),
  }),
});

export const collections = { courses, blog };
```

### Cách hoạt động

1. Astro scan toàn bộ file `.md` / `.mdx` trong `src/content/{collection}/`
2. Parse frontmatter YAML từng file
3. Validate bằng Zod schema — **nếu sai, build fail**
4. Generate types TypeScript cho từng collection (`.astro/types.d.ts`)
5. Pages có thể `import { getCollection } from 'astro:content'` để query

### Query content

```typescript
// Trong .astro file
import { getCollection } from 'astro:content';

// Lấy tất cả bài (kể cả draft)
const allLessons = await getCollection('courses');

// Filter + sort
const publishedLessons = (await getCollection('courses'))
  .filter((l) => !l.data.draft)
  .sort((a, b) => a.data.order - b.data.order);

// Lấy 1 bài theo slug
const lesson = await getEntry('courses', '01-mat-khau/02-tao-mat-khau-manh');
```

### Render Markdown

```astro
---
import { getEntry } from 'astro:content';

const lesson = await getEntry('courses', Astro.params.slug);
const { Content } = await lesson.render();
---

<article>
  <h1>{lesson.data.title}</h1>
  <Content />
</article>
```

---

## Routing

Astro dùng **file-based routing** trong `src/pages/`:

| File | Route |
|---|---|
| `pages/index.astro` | `/` |
| `pages/khoa-hoc/index.astro` | `/khoa-hoc` |
| `pages/khoa-hoc/[...slug].astro` | `/khoa-hoc/*` (dynamic) |

### Dynamic routes với getStaticPaths

Trang bài học `[...slug].astro` phải khai báo tất cả slug có thể có ở build time:

```typescript
export async function getStaticPaths() {
  const lessons = await getCollection('courses');
  return lessons.map((lesson) => ({
    params: { slug: lesson.slug },         // slug = "01-mat-khau/02-tao-mat-khau-manh"
    props: { lesson },                      // pass lesson object as prop
  }));
}
```

Tại build time, Astro generate **1 file HTML cho mỗi slug** → output là 100% static.

---

## Layout system

### BaseLayout.astro

Layout chung cho mọi page — `<head>`, fonts, OG meta, global CSS:

```astro
---
interface Props {
  title: string;
  description?: string;
}
const { title, description = "..." } = Astro.props;
---

<html lang="vi">
  <head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <!-- Fonts, viewport, etc. -->
  </head>
  <body>
    <slot />
  </body>
</html>

<style is:global>
  /* Global typography, color, reset */
</style>
```

**Cách dùng:**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Tiêu đề" description="...">
  <main>...</main>
</BaseLayout>
```

### Mở rộng layout

Khi cần layout khác cho blog / landing, tạo:

- `layouts/BlogLayout.astro` — wrap BaseLayout + sidebar
- `layouts/LandingLayout.astro` — wrap BaseLayout + nav + footer marketing

---

## Components

### Astro components (`.astro`)

Default — không ship JS xuống browser:

```astro
---
// Frontmatter: chỉ chạy server-side / build time
const { items } = Astro.props;
---

<ul>
  {items.map(item => <li>{item}</li>)}
</ul>

<style>
  ul { padding: 0; }
</style>
```

### React Islands (cho component tương tác)

Component cần state / event handler dùng React:

```astro
---
import Quiz from '../components/Quiz.tsx';
---

<Quiz client:visible questions={lesson.data.quiz} />
```

**Hydration directives:**

| Directive | Khi nào load JS |
|---|---|
| `client:load` | Ngay khi page load |
| `client:idle` | Khi browser rảnh |
| `client:visible` | Khi component scroll vào viewport (khuyến nghị cho Quiz) |
| `client:media={query}` | Khi media query match |
| `client:only="react"` | Skip SSR, chỉ render client (last resort) |

**Quy tắc:** Default `client:visible` cho component không trên fold đầu. Tiết kiệm bundle.

### Component planning

| Component | Status | Notes |
|---|---|---|
| `BaseLayout.astro` | ✅ Có | Layout chung |
| `Quiz.tsx` (React) | ⏳ Roadmap | Tương tác với câu hỏi trong frontmatter |
| `Callout.astro` | ⏳ Cân nhắc | Cảnh báo / lưu ý kiểu `> ⚠️` |
| `LessonNav.astro` | ✅ Inline trong [...slug].astro | Prev/Next bài (đang inline, có thể tách ra) |
| `ModuleCard.astro` | ✅ Inline trong index.astro | Card 1 module (có thể tách) |
| `SearchBar.tsx` | ⏳ Roadmap | Pagefind integration |

---

## Styling strategy

### Scoped CSS

Mặc định trong Astro components, `<style>` là **scoped** — chỉ apply cho component đó:

```astro
<style>
  /* Chỉ áp dụng cho .card trong component này */
  .card { padding: 16px; }
</style>
```

### Global CSS

Dùng `is:global` cho typography, reset, theme:

```astro
<style is:global>
  body { font-family: "Be Vietnam Pro", sans-serif; }
  h1, h2, h3 { font-family: "Playfair Display", serif; }
</style>
```

Global CSS hiện đặt trong `BaseLayout.astro` — sau này có thể tách ra `src/styles/global.css`.

### Style markdown content (`.prose`)

Content từ `<Content />` được render thành plain HTML — style bằng `:global()` selector:

```astro
<div class="lesson-content prose">
  <Content />
</div>

<style>
  .lesson-content :global(h2) { font-size: 1.4rem; }
  .lesson-content :global(blockquote) { border-left: 4px solid red; }
  .lesson-content :global(table) { /* ... */ }
</style>
```

### Design tokens

Hiện chưa centralize design tokens. Khi mở rộng, nên gom vào `src/styles/tokens.css`:

```css
:root {
  --color-bg: #fdfaf6;
  --color-text: #2d2d3a;
  --color-accent: #0f3460;
  --color-danger: #e94560;
  --font-body: "Be Vietnam Pro", system-ui, sans-serif;
  --font-display: "Playfair Display", Georgia, serif;
}
```

---

## Build pipeline

```text
npm run build
  ↓
1. Astro reads src/content/config.ts → defines collections
2. Astro scans src/content/**/*.md → validates frontmatter via Zod
3. Astro scans src/pages/**/*.astro → identifies routes
4. For each page:
   a. Run getStaticPaths (if dynamic)
   b. Render Astro component → HTML
   c. Process MDX → React component → HTML (server-rendered)
   d. Bundle client islands (only components with client:* directive)
   e. Process <style> → scoped CSS classes
   f. Process Markdown → HTML via remark/rehype
   g. Syntax highlight code blocks via Shiki
5. Optimize:
   a. Minify HTML/CSS/JS
   b. Generate critical CSS inline
   c. Compress images (if used Astro <Image>)
6. Output to dist/
```

### Outputs trong `dist/`

```text
dist/
├── index.html                              ← / (homepage)
├── khoa-hoc/
│   ├── index.html                          ← /khoa-hoc
│   └── 01-mat-khau/
│       ├── 01-mat-khau-yeu-nguy-hiem/
│       │   └── index.html
│       └── ...
├── _astro/                                 ← Hashed JS/CSS bundles
│   └── *.js, *.css
└── favicon.ico
```

---

## Performance

### Mục tiêu (theo rule web/performance.md)

| Metric | Target |
|---|---|
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |
| FCP | < 1.5s |
| TBT | < 200ms |
| JS bundle (gzipped) | < 80kb cho microsite, < 150kb cho landing |

### Strategy

1. **Zero JS by default** — Astro chỉ ship HTML/CSS. JS chỉ load cho React islands.
2. **Font loading** — Hiện dùng Google Fonts với `display=swap`. TODO: subset hoặc self-host để giảm latency.
3. **Image** — Khi thêm Image component dùng `<Image>` của Astro để auto-optimize.
4. **Code splitting** — Astro tự split per-route + per-island.
5. **Critical CSS** — Astro inline critical CSS tự động.

### Đo lường

```bash
npm run build
npx lighthouse http://localhost:4321 --view
```

Hoặc dùng [PageSpeed Insights](https://pagespeed.web.dev/) sau khi deploy.

---

## Known issues & technical debt

> ⚠️ Các vấn đề kỹ thuật hiện có — cần fix khi có thời gian.

### 1. `[...slug].astro` dùng sai schema fields

File [src/pages/khoa-hoc/[...slug].astro](../src/pages/khoa-hoc/[...slug].astro) reference các field không có trong schema hiện tại:

| Field code dùng | Field schema thực | Sửa |
|---|---|---|
| `lesson.data.difficulty === "beginner"` | `difficulty: "cơ bản" \| "trung bình" \| "nâng cao"` | Đổi comparison sang tiếng Việt |
| `lesson.data.updatedAt` | `updatedDate` | Rename |
| `lesson.data.duration` (dùng như number, append "phút") | `duration: string` (đã có "phút") | Bỏ append |

### 2. `index.astro` dùng sai schema

File [src/pages/khoa-hoc/index.astro](../src/pages/khoa-hoc/index.astro):

- Reference `lesson.data.hasQuiz` — schema không có field này, mà có `lesson.data.quiz` (optional array)
- Reference `lesson.data.duration` như number — đã là string

**Cách fix:** Đổi sang `lesson.data.quiz && lesson.data.quiz.length > 0` và bỏ append "phút".

### 3. Component Quiz chưa implement

Frontmatter có `quiz` field nhưng chưa có component render quiz tương tác. Hiện quiz hoàn toàn không hiển thị trên web — chỉ tồn tại trong content collection.

**Plan:**

- Tạo `src/components/Quiz.tsx` (React)
- Trong `[...slug].astro`, render sau `<Content />`:

  ```astro
  {lesson.data.quiz && (
    <Quiz client:visible questions={lesson.data.quiz} />
  )}
  ```

### 4. Trang chủ `pages/index.astro` chưa có

Chỉ có `/khoa-hoc/*`. Cần thêm landing page giới thiệu dự án + featured posts.

### 5. Blog routing chưa có

Collection `blog` đã có schema và 1 file mẫu, nhưng chưa có `pages/blog/`.

### 6. No analytics

Cần quyết định: Plausible, Umami self-hosted, hay không có analytics. Tránh GA4 (privacy + bloat).

### 7. No CI/CD

Chưa có GitHub Actions để:

- Type-check + build trên mỗi PR
- Deploy preview cho PR
- Auto deploy `main` lên production

### 8. No tests

Chưa có test framework. Cân nhắc:

- **Visual regression** — Playwright screenshot
- **Build test** — `astro check` + `astro build` trên CI
- **Link check** — Lychee để check broken links

---

## Decision log

| Quyết định | Ngày | Lý do |
|---|---|---|
| Astro thay Next.js | 2026-04 | Static-first, ít bundle size cho content site |
| Content Collections thay folder convention thuần | 2026-04 | Type safety cho frontmatter |
| Markdown + frontmatter quiz thay CMS riêng | 2026-04 | Đơn giản, git-friendly, không cần backend |
| Be Vietnam Pro + Playfair Display | 2026-04 | Hỗ trợ dấu tiếng Việt tốt + phân biệt body/heading |
| Module = thư mục, lesson = file | 2026-04 | Mapping 1-1 trực quan, dễ tổ chức |
| Slug = `{order}-{name}.md` | 2026-04 | Sort tự nhiên trong file explorer + đảm bảo thứ tự build |

---

## Reference

- [Astro docs](https://docs.astro.build/)
- [Content Collections guide](https://docs.astro.build/en/guides/content-collections/)
- [Astro Islands architecture](https://docs.astro.build/en/concepts/islands/)
- [MDX in Astro](https://docs.astro.build/en/guides/integrations-guide/mdx/)
