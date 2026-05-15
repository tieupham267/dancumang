import { test, expect } from "@playwright/test";

const STORAGE_KEY = "dcm-checklist-v1";

test.describe("tool — security checklist", () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each run.
    await page.goto("/cong-cu/checklist/");
    await page.evaluate((key) => window.localStorage.removeItem(key), STORAGE_KEY);
    await page.reload();
  });

  test("renders 15 checklist items and a 0% progress bar", async ({ page }) => {
    const items = page.locator(".cl-group input[type=checkbox]");
    await expect(items).toHaveCount(15);

    const meta = page.locator(".cl-progress-meta");
    await expect(meta).toContainText(/0\s*\/\s*15/);
    await expect(meta).toContainText(/0%/);
  });

  test("ticking items updates progress + persists to localStorage", async ({ page }) => {
    const checkboxes = page.locator(".cl-group input[type=checkbox]");
    await checkboxes.nth(0).check();
    await checkboxes.nth(1).check();
    await checkboxes.nth(2).check();

    await expect(page.locator(".cl-progress-meta")).toContainText(/3\s*\/\s*15/);

    // 3/15 = 20% (rounded).
    const meta = await page.locator(".cl-progress-meta").textContent();
    expect(meta).toMatch(/20%/);

    // Reload — state should persist.
    await page.reload();
    await expect(page.locator(".cl-progress-meta")).toContainText(/3\s*\/\s*15/);
    await expect(checkboxes.nth(0)).toBeChecked();
    await expect(checkboxes.nth(1)).toBeChecked();
    await expect(checkboxes.nth(2)).toBeChecked();

    // localStorage should contain 3 ids.
    const stored = await page.evaluate(
      (key) => window.localStorage.getItem(key),
      STORAGE_KEY,
    );
    expect(stored).not.toBeNull();
    const ids = JSON.parse(stored!);
    expect(ids).toHaveLength(3);
  });

  test("unticking removes from progress", async ({ page }) => {
    const checkboxes = page.locator(".cl-group input[type=checkbox]");
    await checkboxes.nth(0).check();
    await expect(page.locator(".cl-progress-meta")).toContainText(/1\s*\/\s*15/);
    await checkboxes.nth(0).uncheck();
    await expect(page.locator(".cl-progress-meta")).toContainText(/0\s*\/\s*15/);
  });

  test("reset clears all ticks after confirm", async ({ page }) => {
    const checkboxes = page.locator(".cl-group input[type=checkbox]");
    await checkboxes.nth(0).check();
    await checkboxes.nth(5).check();

    // Auto-accept the window.confirm dialog.
    page.once("dialog", (d) => d.accept());
    await page.locator(".cl-reset").click();

    await expect(page.locator(".cl-progress-meta")).toContainText(/0\s*\/\s*15/);
    await expect(checkboxes.nth(0)).not.toBeChecked();
    await expect(checkboxes.nth(5)).not.toBeChecked();
  });

  test("groups have counters that update", async ({ page }) => {
    const groups = page.locator(".cl-group");
    const groupCount = await groups.count();
    expect(groupCount).toBeGreaterThan(0);

    // Tick the first checkbox inside the first group, then verify that
    // group's counter changed.
    const firstGroup = groups.first();
    const counter = firstGroup.locator(".cl-group-count");
    const before = (await counter.textContent())?.trim();
    await firstGroup.locator("input[type=checkbox]").first().check();
    await expect(counter).not.toHaveText(before ?? "");
  });
});
