import { test, expect } from "@playwright/test";

const TOTAL = 8;

test.describe("tool — phishing quiz", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cong-cu/quiz-phishing/");
  });

  test("renders first card with both choice buttons", async ({ page }) => {
    await expect(page.locator(".pq-card")).toBeVisible();
    await expect(page.locator(".pq-progress")).toContainText(`1 / ${TOTAL}`);
    await expect(page.locator(".pq-btn-bad")).toContainText(/lừa đảo/i);
    await expect(page.locator(".pq-btn-good")).toContainText(/thật/i);
  });

  test("picking a choice reveals feedback, then 'next' advances", async ({ page }) => {
    // First case is the VCB SMS — known phish — picking "lừa đảo" is correct.
    await page.locator(".pq-btn-bad").click();
    const verdict = page.locator(".pq-verdict");
    await expect(verdict).toBeVisible();
    await expect(verdict).toHaveClass(/is-correct/);

    // After reveal, both choice buttons are gone — only 'next' remains.
    await expect(page.locator(".pq-btn-bad")).toHaveCount(0);
    await page.locator(".pq-btn-primary").click();
    await expect(page.locator(".pq-progress")).toContainText(`2 / ${TOTAL}`);
  });

  test("an obviously wrong answer shows is-wrong feedback", async ({ page }) => {
    // Case 1 is phish — picking "thật" is wrong.
    await page.locator(".pq-btn-good").click();
    await expect(page.locator(".pq-verdict")).toHaveClass(/is-wrong/);
  });

  test("complete all cases reaches the result screen with restart", async ({ page }) => {
    // Brute-force: always pick "lừa đảo" — won't be 8/8 but will complete the run.
    for (let i = 0; i < TOTAL; i++) {
      await page.locator(".pq-btn-bad").click();
      // Last card's primary button says "Xem kết quả →"; intermediate says "Tin tiếp theo →".
      await page.locator(".pq-btn-primary").click();
    }

    const result = page.locator(".pq-result");
    await expect(result).toBeVisible();
    await expect(result.locator(".pq-result-score")).toContainText(new RegExp(`/${TOTAL}`));

    // Restart returns to card 1.
    await page.locator(".pq-result button", { hasText: /Làm lại/ }).click();
    await expect(page.locator(".pq-progress")).toContainText(`1 / ${TOTAL}`);
    await expect(page.locator(".pq-card")).toBeVisible();
  });

  test("progress bar width grows with each answered card", async ({ page }) => {
    const fill = page.locator(".pq-progress-fill");
    const w0 = await fill.evaluate((el) => (el as HTMLElement).style.width);
    expect(w0).toMatch(/^0/);

    await page.locator(".pq-btn-bad").click();
    await page.locator(".pq-btn-primary").click();

    const w1 = await fill.evaluate((el) => (el as HTMLElement).style.width);
    expect(w1).not.toBe(w0);
  });
});
