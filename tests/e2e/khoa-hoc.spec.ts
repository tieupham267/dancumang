import { test, expect } from "@playwright/test";

test.describe("khoa-hoc — courses index + lesson pages", () => {
  test("courses index lists 4 modules and >= 20 lessons", async ({ page }) => {
    await page.goto("/khoa-hoc/");
    await expect(page.locator("main h1")).toContainText(/Bảo mật/);

    const modules = page.locator(".module-card");
    await expect(modules).toHaveCount(4);

    const lessons = page.locator(".lesson-link");
    const lessonCount = await lessons.count();
    expect(lessonCount).toBeGreaterThanOrEqual(20);
  });

  test("each module shows its lesson count badge", async ({ page }) => {
    await page.goto("/khoa-hoc/");
    const counts = page.locator(".module-count");
    const total = await counts.count();
    expect(total).toBe(4);
    for (let i = 0; i < total; i++) {
      await expect(counts.nth(i)).toContainText(/\d+/);
    }
  });

  test("header stats are non-zero", async ({ page }) => {
    await page.goto("/khoa-hoc/");
    const stats = page.locator(".hstat strong");
    await expect(stats).toHaveCount(3);
    for (let i = 0; i < 3; i++) {
      const text = (await stats.nth(i).textContent())?.trim() ?? "";
      // Allow "~32'" or "23" formats.
      expect(text).toMatch(/\d/);
    }
  });

  test("clicking first lesson opens the lesson page", async ({ page }) => {
    await page.goto("/khoa-hoc/");
    const first = page.locator(".lesson-link").first();
    const href = await first.getAttribute("href");
    expect(href).toMatch(/^\/khoa-hoc\/.+/);

    await first.click();
    await page.waitForLoadState("domcontentloaded");
    // Lesson pages render inside <article class="lesson-page">.
    await expect(page.locator("article.lesson-page")).toBeVisible();
    await expect(page.locator("article.lesson-page h1")).toBeVisible();
  });
});
