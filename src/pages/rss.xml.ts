import type { APIContext } from "astro";
import { getCollection } from "astro:content";

const SITE = "https://dancumang.vn";
const TITLE = "Dân Cư Mạng — Cảnh báo & tin tức bảo mật";
const DESCRIPTION =
  "Cảnh báo lừa đảo, lộ dữ liệu, tin bảo mật cho người dùng phổ thông Việt Nam.";

function escape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(_context: APIContext): Promise<Response> {
  const posts = (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime());

  const items = posts
    .map((post) => {
      const url = `${SITE}/blog/${post.id}/`;
      return `    <item>
      <title>${escape(post.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escape(post.data.description)}</description>
      <category>${escape(post.data.category)}</category>
      <pubDate>${post.data.publishedDate.toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(TITLE)}</title>
    <link>${SITE}</link>
    <description>${escape(DESCRIPTION)}</description>
    <language>vi</language>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
