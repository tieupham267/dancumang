import { test, expect } from "@playwright/test";

test.describe("navigation — header & footer", () => {
  test("header brand links back to home", async ({ page }) => {
    await page.goto("/blog/");
    await page.locator(".brand").click();
    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator("header.masthead")).toBeVisible();
  });

  test("primary nav links all reachable", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator(".masthead-nav");
    await expect(nav.locator("a", { hasText: "Trang chủ" })).toBeVisible();
    await expect(nav.locator("a", { hasText: "Khóa học" })).toBeVisible();
    await expect(nav.locator("a", { hasText: "Bài đọc" })).toBeVisible();
    await expect(nav.locator("a", { hasText: "Công cụ" })).toBeVisible();

    await nav.locator("a", { hasText: "Khóa học" }).click();
    await expect(page).toHaveURL(/\/khoa-hoc\/?$/);
    await expect(page.locator("main h1")).toContainText(/Bảo mật/i);

    await page.locator(".masthead-nav a", { hasText: "Công cụ" }).click();
    await expect(page).toHaveURL(/\/cong-cu\/?$/);
    await expect(page.locator("main h1")).toContainText(/Thực hành/i);
  });

  test("active link is highlighted on its page", async ({ page }) => {
    await page.goto("/khoa-hoc/");
    const active = page.locator(".masthead-nav a.active");
    await expect(active).toHaveCount(1);
    await expect(active).toHaveText(/Khóa học/);
  });

  test("ticker renders headlines", async ({ page }) => {
    await page.goto("/");
    const items = page.locator(".ticker-item");
    // Items duplicated for marquee — expect >= 6 total (3 unique × 2).
    expect(await items.count()).toBeGreaterThanOrEqual(6);
    await expect(items.first()).toBeVisible();
  });

  test("footer is present on every primary page", async ({ page }) => {
    for (const path of ["/", "/blog/", "/khoa-hoc/", "/cong-cu/"]) {
      await page.goto(path);
      await expect(page.locator("footer")).toBeVisible();
    }
  });
});
