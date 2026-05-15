import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ============================================================
// KHÓA HỌC — Mỗi file .md/.mdx là một BÀI HỌC
// Cấu trúc thư mục: courses/{module-slug}/{lesson-slug}.md
// ============================================================
const courses = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/courses' }),
  schema: z.object({
    // ---- Thông tin module ----
    module: z.object({
      id: z.number(),                          // Thứ tự module: 1, 2, 3...
      title: z.string(),                       // "Mật khẩu & Tài khoản"
      description: z.string(),                 // Mô tả ngắn module
      icon: z.string().default('shield'),      // Icon identifier
      color: z.string().default('#0F3460'),    // Màu chủ đạo module
    }),

    // ---- Thông tin bài học ----
    title: z.string(),                          // Tiêu đề bài học
    description: z.string(),                    // Mô tả ngắn
    order: z.number(),                          // Thứ tự trong module: 1, 2, 3...
    duration: z.string().default('5 phút'),     // Thời lượng đọc ước tính
    difficulty: z.enum(['cơ bản', 'trung bình', 'nâng cao']).default('cơ bản'),

    // ---- Quiz (tùy chọn) ----
    quiz: z.array(z.object({
      question: z.string(),
      options: z.array(z.string()),
      correct: z.number(),                     // Index đáp án đúng (0-based)
      explanation: z.string(),                 // Giải thích khi trả lời
    })).optional(),

    // ---- Meta ----
    draft: z.boolean().default(false),
    publishedDate: z.date(),
    updatedDate: z.date().optional(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// ============================================================
// BLOG / TIN TỨC — Bài viết về bảo mật, cảnh báo, hướng dẫn
// ============================================================
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['cảnh báo', 'hướng dẫn', 'tin tức', 'phân tích']),
    publishedDate: z.date(),
    updatedDate: z.date().optional(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    readTime: z.string().default('3 phút đọc'),
  }),
});

export const collections = { courses, blog };
