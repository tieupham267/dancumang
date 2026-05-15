import { test, expect } from "@playwright/test";

const STATIC_ROUTES = [
  { path: "/", titleHint: /Dân Cư Mạng/i },
  { path: "/blog/", titleHint: /Blog|Cảnh báo/i },
  { path: "/khoa-hoc/", titleHint: /Khóa học/i },
  { path: "/cong-cu/", titleHint: /Công cụ/i },
  { path: "/cong-cu/kiem-tra-mat-khau/", titleHint: /mật khẩu/i },
  { path: "/cong-cu/quiz-phishing/", titleHint: /phishing|lừa đảo/i },
  { path: "/cong-cu/checklist/", titleHint: /Checklist/i },
];

test.describe("smoke — all primary routes render", () => {
  for (const { path, titleHint } of STATIC_ROUTES) {
    test(`GET ${path} returns 200 + correct title`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response, `no response for ${path}`).not.toBeNull();
      expect(response!.status(), `bad status for ${path}`).toBeLessThan(400);
      await expect(page).toHaveTitle(titleHint);
      // Layout must render header + main content.
      await expect(page.locator("header.masthead")).toBeVisible();
      await expect(page.locator("main")).toBeVisible();
    });
  }

  test("RSS feed is reachable and is XML", async ({ request }) => {
    const res = await request.get("/rss.xml");
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body).toContain("<rss");
    expect(body).toContain("Dân Cư Mạng");
  });
});
