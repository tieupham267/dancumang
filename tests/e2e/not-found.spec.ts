import { test, expect } from "@playwright/test";

test.describe("404 — unknown routes", () => {
  test("unknown path renders the custom 404 page", async ({ page }) => {
    const res = await page.goto("/this-path-does-not-exist-123/");
    expect(res?.status()).toBe(404);
    await expect(page.locator(".nf-code")).toHaveText("404");
    await expect(page.locator("main h1")).toContainText(/Không tìm thấy/i);
  });

  test("404 page offers home + courses + blog links", async ({ page }) => {
    await page.goto("/nope/");
    const actions = page.locator(".nf-actions a");
    await expect(actions).toHaveCount(3);
    await expect(actions.nth(0)).toHaveAttribute("href", "/");
    await expect(actions.nth(1)).toHaveAttribute("href", "/khoa-hoc/");
    await expect(actions.nth(2)).toHaveAttribute("href", "/blog/");
  });
});
