import { test, expect } from "@playwright/test";

test.describe("blog index + post pages", () => {
  test("blog index shows featured + post list", async ({ page }) => {
    await page.goto("/blog/");
    await expect(page.locator("main h1")).toContainText(/Tin bảo mật/i);

    // Featured card visible.
    const featured = page.locator(".featured-card");
    await expect(featured).toBeVisible();
    await expect(featured.locator("h2")).not.toBeEmpty();

    // At least one item in the rest list.
    const items = page.locator(".post-list-item");
    expect(await items.count()).toBeGreaterThan(0);

    // Category filters render with counts.
    const filters = page.locator(".cat-filter");
    await expect(filters.first()).toBeVisible();
    await expect(filters.first()).toHaveText(/Tất cả/);
  });

  test("category filter hides non-matching posts", async ({ page }) => {
    await page.goto("/blog/");
    const totalBefore = await page.locator("[data-category]:not([hidden])").count();

    // Click "cảnh báo" filter — must end up with at least 1 visible and <= totalBefore.
    const filter = page.locator(`.cat-filter[data-filter="cảnh báo"]`);
    await filter.click();
    await expect(filter).toHaveClass(/is-active/);

    const visible = page.locator("[data-category]:not([hidden])");
    const count = await visible.count();
    expect(count).toBeGreaterThan(0);
    expect(count).toBeLessThanOrEqual(totalBefore);

    // Each visible item must be "cảnh báo".
    for (const el of await visible.elementHandles()) {
      const cat = await el.getAttribute("data-category");
      expect(cat).toBe("cảnh báo");
    }
  });

  test("clicking featured card opens a post page", async ({ page }) => {
    await page.goto("/blog/");
    const featured = page.locator(".featured-card");
    const href = await featured.getAttribute("href");
    expect(href).toMatch(/^\/blog\/.+/);

    await featured.click();
    await expect(page).toHaveURL(new RegExp(href!.replace(/\//g, "\\/")));
    // Post pages render under <article class="post-page">.
    await expect(page.locator("article.post-page")).toBeVisible();
    await expect(page.locator("article.post-page h1")).toBeVisible();
  });

  test("RSS link is offered on blog index", async ({ page }) => {
    await page.goto("/blog/");
    const rss = page.locator(".rss-link");
    await expect(rss).toBeVisible();
    await expect(rss).toHaveAttribute("href", "/rss.xml");
  });
});
