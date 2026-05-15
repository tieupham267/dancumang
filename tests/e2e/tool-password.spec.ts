import { test, expect } from "@playwright/test";

test.describe("tool — password strength meter", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cong-cu/kiem-tra-mat-khau/");
  });

  test("empty state shows 'Chưa nhập'", async ({ page }) => {
    await expect(page.locator(".psm-summary strong").first()).toContainText(/Chưa nhập/);
    // No entropy / crack time when empty.
    await expect(page.locator(".psm-summary")).not.toContainText(/Entropy/);
  });

  test("a known-common password is flagged as 'Quá yếu'", async ({ page }) => {
    const input = page.locator("input[type=password], input[type=text]").first();
    await input.fill("123456");
    await expect(page.locator(".psm-summary strong").first()).toContainText(/Quá yếu|Yếu/);
    await expect(page.locator(".psm-fixes")).toBeVisible();
    await expect(page.locator(".psm-fixes")).toContainText(/phổ biến/i);
  });

  test("a strong passphrase rates 'Mạnh' or 'Rất mạnh'", async ({ page }) => {
    const input = page.locator("input").first();
    await input.fill("conMeoNamTrenMaiNha!2024-xK9z");
    await expect(page.locator(".psm-summary strong").first()).toContainText(/Mạnh|Rất mạnh/);
    await expect(page.locator(".psm-wins")).toBeVisible();
    // Entropy line should appear.
    await expect(page.locator(".psm-summary")).toContainText(/Entropy/);
  });

  test("'Hiện/Ẩn' toggle swaps input type", async ({ page }) => {
    const input = page.locator(".psm-input-row input");
    await expect(input).toHaveAttribute("type", "password");

    const toggle = page.locator(".psm-input-row button");
    await expect(toggle).toHaveText(/Hiện/);
    await toggle.click();
    await expect(input).toHaveAttribute("type", "text");
    await expect(toggle).toHaveText(/Ẩn/);
    await toggle.click();
    await expect(input).toHaveAttribute("type", "password");
  });

  test("short password gets 'Quá ngắn' feedback", async ({ page }) => {
    const input = page.locator("input").first();
    await input.fill("ab12");
    await expect(page.locator(".psm-fixes")).toContainText(/ngắn/i);
  });

  test("privacy notice is shown", async ({ page }) => {
    await expect(page.locator(".psm-privacy")).toContainText(/không rời khỏi trình duyệt/i);
  });
});
