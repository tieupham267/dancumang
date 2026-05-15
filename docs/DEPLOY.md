# Deploy & Dev Environment

Hướng dẫn setup môi trường phát triển và deploy site lên production.

## Mục lục

- [Yêu cầu](#yêu-cầu)
- [Setup local dev](#setup-local-dev)
- [Scripts](#scripts)
- [Environment variables](#environment-variables)
- [Build production](#build-production)
- [Deploy: Docker / VPS (self-host)](#deploy-docker--vps-self-host)
- [Deploy: Cloudflare Pages (khuyến nghị)](#deploy-cloudflare-pages-khuyến-nghị)
- [Deploy: Vercel](#deploy-vercel)
- [Deploy: Netlify](#deploy-netlify)
- [Custom domain dancumang.vn](#custom-domain-dancumangvn)
- [CI/CD với GitHub Actions](#cicd-với-github-actions)
- [Troubleshooting](#troubleshooting)

---

## Yêu cầu

| Tool | Version | Cài đặt |
|---|---|---|
| **Node.js** | `>= 20.0.0` | [nodejs.org](https://nodejs.org) hoặc [nvm](https://github.com/nvm-sh/nvm) |
| **npm** | `>= 10` (đi kèm Node) | — |
| **Git** | bất kỳ | [git-scm.com](https://git-scm.com) |

**Khuyến nghị:**

- Editor: **VS Code** + extension **Astro** + **YAML** + **MDX**
- Terminal: PowerShell trên Windows / iTerm2 trên Mac / bất kỳ trên Linux
- Browser test: Chrome (DevTools) + Firefox + Safari/WebKit

### Kiểm tra Node version

```bash
node --version    # phải >= v20.0.0
npm --version     # phải >= 10
```

Nếu Node < 20, dùng nvm:

```bash
# Linux/Mac
nvm install 20
nvm use 20

# Windows (cài nvm-windows: github.com/coreybutler/nvm-windows)
nvm install 20.10.0
nvm use 20.10.0
```

---

## Setup local dev

```bash
# 1. Clone repo
git clone https://github.com/tieupham267/dancumang.git
cd dancumang

# 2. Cài dependencies
npm install

# 3. Chạy dev server
npm run dev

# → mở http://localhost:4321 trong browser
```

Dev server hỗ trợ **hot reload** — sửa file `.md` hoặc `.astro` sẽ tự refresh browser.

### Cấu hình port khác

```bash
npm run dev -- --port 3000
```

Hoặc set trong `astro.config.mjs`:

```javascript
export default defineConfig({
  server: { port: 3000 },
});
```

### Bind tới network để test trên điện thoại

```bash
npm run dev -- --host
```

Astro sẽ in ra IP local (vd `192.168.1.100:4321`) — mở trên điện thoại cùng Wi-Fi.

---

## Scripts

Định nghĩa trong [package.json](../package.json):

| Lệnh | Mục đích |
|---|---|
| `npm run dev` | Dev server với hot reload tại `localhost:4321` |
| `npm run build` | Build production static site → output vào `dist/` |
| `npm run preview` | Preview bản build local (sau khi `npm run build`) |
| `npx astro check` | Type-check + validate content collections (chưa thêm vào script) |
| `npx astro --help` | Liệt kê tất cả Astro CLI commands |

### Thêm script type-check (đề xuất)

Trong `package.json`:

```json
{
  "scripts": {
    "check": "astro check",
    "check:watch": "astro check --watch"
  }
}
```

Rồi `npm run check` trước khi commit để bắt lỗi schema sớm.

---

## Environment variables

Hiện dự án **không cần env vars** — toàn bộ là static content.

Khi cần thêm (vd: analytics token, GitHub API token):

1. Tạo file `.env` ở root (đã có trong `.gitignore`)
2. Đặt biến với prefix `PUBLIC_` nếu cần expose ra client:

   ```bash
   PUBLIC_PLAUSIBLE_DOMAIN=dancumang.vn
   GITHUB_TOKEN=ghp_xxx        # KHÔNG PUBLIC_ → chỉ build-time
   ```

3. Truy cập trong code:

   ```typescript
   const domain = import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN;
   const token = import.meta.env.GITHUB_TOKEN;  // chỉ available build-time
   ```

> ⚠️ Biến không có prefix `PUBLIC_` **chỉ available trong code chạy ở build time** (Astro frontmatter `---`). Không expose ra browser.

---

## Build production

```bash
npm run build
```

Output: `dist/` chứa HTML/CSS/JS hoàn chỉnh, sẵn sàng deploy.

### Kiểm tra build local

```bash
npm run preview
# → http://localhost:4321 (serve từ dist/)
```

### Kích thước output

Sau build, check size:

```bash
du -sh dist/                    # tổng size
find dist -name "*.html" | wc -l  # số file HTML đã generate
```

Target: <5MB tổng (toàn bộ site) cho phiên bản hiện tại.

---

## Deploy: Docker / VPS (self-host)

Phù hợp với tiêu chí "self-hosted, kiểm soát dữ liệu" trong project brief.
Repo có sẵn `Dockerfile`, `docker-compose.yml`, `deploy/nginx.conf` và `deploy/Caddyfile`.

### Kiến trúc

```
┌───────────────┐     ┌────────────────┐
│  Cloudflare   │ ──▶ │  VPS:80/443    │ ──▶ caddy ──▶ nginx ──▶ /usr/share/nginx/html
│  (DNS/proxy)  │     │  hoặc Tunnel   │     (TLS auto)  (static)
└───────────────┘     └────────────────┘
```

Image dùng **multi-stage**: stage 1 build Astro với Node 20, stage 2 serve bằng `nginx:1.27-alpine`. Output image ~50MB.

### Cách 1: đứng sau Cloudflare Tunnel (đơn giản nhất)

Không phải mở cổng 80/443 trên VPS — Cloudflare Tunnel chạy egress-only.

```bash
# Trên VPS
git clone https://github.com/tieupham267/dancumang.git
cd dancumang
cp .env.example .env       # giữ HTTP_PORT=8080
docker compose up -d        # site lắng nghe 127.0.0.1:8080

# Sau đó trỏ Cloudflare Tunnel → http://localhost:8080
```

### Cách 2: VPS công khai, Caddy tự lo TLS

```bash
# Tạo .env với domain + email Let's Encrypt
cat > .env <<EOF
DOMAIN=dancumang.vn
ACME_EMAIL=admin@dancumang.vn
EOF

# Khởi động cả nginx (web) và Caddy
docker compose --profile caddy up -d

# Mở firewall cổng 80 + 443 trên VPS
sudo ufw allow 80,443/tcp
```

DNS:

- `A` record `dancumang.vn` → IP VPS (proxy "DNS only" / cloud xám trên Cloudflare để Caddy issue được cert).
- `A` record `www.dancumang.vn` → IP VPS (Caddy tự redirect về apex).

Caddy lấy cert Let's Encrypt tự động sau 30–60 giây. Sau khi cert ổn định ~1 tuần, uncomment dòng HSTS trong `deploy/Caddyfile`.

### Cách 3: dùng reverse proxy khác có sẵn (Traefik, nginx-proxy-manager)

Bỏ profile `caddy`, expose `web` ra cổng nội bộ rồi cấu hình proxy trỏ về. Chỉ cần `docker compose up -d`.

### Build & deploy lần kế tiếp

```bash
git pull
docker compose build --no-cache web
docker compose up -d
# Verify
curl -I http://localhost:8080/        # 200 OK
curl http://localhost:8080/healthz    # ok
```

### Bảo mật container (đã cấu hình sẵn)

- `read_only: true` — filesystem container không ghi được (chỉ /tmp, /var/cache/nginx qua tmpfs).
- `no-new-privileges` + `cap_drop: ALL`, chỉ giữ caps tối thiểu cho nginx.
- HEALTHCHECK 30s — orchestrator (compose / docker swarm) tự restart container chết.
- nginx config có sẵn headers: CSP, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy, COOP.
- Block path lộ liễu `/.git`, `/.env`, `/.astro`, `/.vscode`, `/.idea`.

### Backup

Site là static — không có database. Chỉ cần backup repo (đã ở GitHub). Volume `caddy_data` chứa cert Let's Encrypt — backup nếu muốn tránh re-issue.

```bash
docker run --rm -v dancumang_caddy_data:/data -v $(pwd):/backup alpine \
  tar czf /backup/caddy-data-$(date +%F).tar.gz -C / data
```

### Update Node version trong image

Sửa `FROM node:20-alpine AS builder` trong `Dockerfile`, rebuild.

---

## Deploy: Cloudflare Pages (khuyến nghị)

**Lý do chọn:** Free tier hào phóng (500 build/tháng, unlimited bandwidth), CDN tốt ở VN, có DDoS protection, tích hợp domain `.vn` qua Cloudflare DNS.

### Setup lần đầu

1. Vào [dash.cloudflare.com](https://dash.cloudflare.com) → **Pages** → **Create application**
2. Chọn **Connect to Git** → authorize GitHub → chọn repo `tieupham267/dancumang`
3. Cấu hình build:

   | Field | Giá trị |
   |---|---|
   | Production branch | `main` |
   | Framework preset | `Astro` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | `/` (mặc định) |
   | Node version | `20` (set qua env var `NODE_VERSION=20`) |

4. Bấm **Save and Deploy**
5. Sau 1-2 phút, site live tại `dancumang.pages.dev`

### Auto deploy

- Mỗi push lên `main` → Cloudflare tự build + deploy production
- Mỗi PR → Cloudflare tự build + deploy preview URL (`pr-N.dancumang.pages.dev`)

### Custom domain

Xem [phần Custom domain bên dưới](#custom-domain-dancumangvn).

---

## Deploy: Vercel

### Setup

1. [vercel.com](https://vercel.com) → **Add New** → **Project** → Import từ GitHub
2. Astro được auto-detect → giữ nguyên config mặc định
3. Deploy

### Đặc điểm Vercel

- ✅ DX tốt nhất, log đẹp, deploy nhanh
- ❌ Bandwidth free tier giới hạn 100GB/tháng — overage tính phí
- ❌ CDN VN chậm hơn Cloudflare (đôi khi route qua Singapore/Tokyo)

---

## Deploy: Netlify

### Setup

1. [netlify.com](https://netlify.com) → **Add new site** → **Import existing project**
2. Connect GitHub → chọn repo
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy

### File `netlify.toml` (tùy chọn)

Tạo ở root để config rõ ràng:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/khoa-hoc/01-mat-khau-va-tai-khoan/*"
  to = "/khoa-hoc/01-mat-khau/:splat"
  status = 301
```

---

## Custom domain dancumang.vn

### Yêu cầu

- Đã mua domain `dancumang.vn` qua [PA Vietnam](https://pavietnam.vn) / [Mat Bao](https://www.matbao.net/) / [Tenten](https://tenten.vn/) hoặc nhà cung cấp khác
- Đã deploy site lên Cloudflare Pages / Vercel / Netlify

### Bước 1: Setup nameserver Cloudflare

> Khuyến nghị: dùng Cloudflare DNS để có DDoS protection + cache tốt + dễ quản lý.

1. Vào Cloudflare → **Add a Site** → nhập `dancumang.vn`
2. Cloudflare cấp **2 nameserver** (vd: `clara.ns.cloudflare.com`, `kerim.ns.cloudflare.com`)
3. Vào panel của nhà cung cấp domain → đổi nameserver → dán 2 nameserver Cloudflare
4. Chờ 1-24 giờ để DNS propagation hoàn tất

### Bước 2: Add custom domain trong host

**Cloudflare Pages:**

1. Pages project → **Custom domains** → **Set up a custom domain**
2. Nhập `dancumang.vn` → Cloudflare tự tạo CNAME / Apex record vì cùng platform
3. Thêm tiếp `www.dancumang.vn` để redirect www → apex (hoặc ngược lại)

**Vercel:**

1. Project → **Settings → Domains** → Add `dancumang.vn`
2. Vercel hiện DNS record cần thêm
3. Vào Cloudflare DNS → thêm:
   - `A` record: `@` → `76.76.21.21`
   - `CNAME` record: `www` → `cname.vercel-dns.com`
4. Trên Cloudflare, **tắt proxy** (cloud màu xám) cho record này để Vercel issue SSL trực tiếp

**Netlify:**

1. Site → **Domain management** → **Add custom domain**
2. Cloudflare DNS thêm `CNAME` record: `@` → `{site-name}.netlify.app` (qua ALIAS hoặc CNAME flattening)

### Bước 3: SSL certificate

- Cloudflare Pages / Vercel / Netlify tự issue Let's Encrypt SSL
- Trên Cloudflare DNS: chọn **SSL/TLS mode** = `Full` hoặc `Full (strict)` — KHÔNG dùng `Flexible` (gây redirect loop)

### Bước 4: Verify

```bash
curl -I https://dancumang.vn
# Phải trả về 200 OK với header SSL hợp lệ

nslookup dancumang.vn
# Phải resolve về IP của host
```

---

## CI/CD với GitHub Actions

Hiện chưa có CI. File mẫu cho `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install
        run: npm ci

      - name: Type check + content validation
        run: npx astro check

      - name: Build
        run: npm run build

      - name: Check broken links (optional)
        uses: lycheeverse/lychee-action@v2
        with:
          args: --no-progress --exclude-mail dist/**/*.html
        continue-on-error: true
```

**Lợi ích:**

- Mỗi PR tự chạy build + type check → bắt lỗi schema sớm
- Báo broken link trước khi merge

---

## Troubleshooting

### `npm install` fail với lỗi `EACCES`

**Nguyên nhân:** Quyền file system. Đừng dùng `sudo npm install`.

**Fix:** Xóa `node_modules` và `package-lock.json`, cài lại:

```bash
rm -rf node_modules package-lock.json
npm install
```

### `npm run dev` báo `Port 4321 is already in use`

**Fix:** Đổi port hoặc kill process:

```bash
# Đổi port
npm run dev -- --port 3000

# Hoặc kill process đang dùng port 4321
# Windows
netstat -ano | findstr :4321
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:4321 | xargs kill -9
```

### Build fail với `ZodError`

**Nguyên nhân:** Frontmatter sai schema.

**Fix:** Đọc message Zod — nó chỉ rõ file nào, field nào sai. Xem [CONTENT-GUIDE.md](CONTENT-GUIDE.md) phần Common pitfalls.

### Build fail vì missing dependency

```bash
npm install
# hoặc
npm ci    # cài đúng version trong package-lock.json
```

### Hot reload không hoạt động

1. Kiểm tra browser không chặn WebSocket
2. Restart dev server: `Ctrl+C` rồi `npm run dev`
3. Xóa cache Astro:

   ```bash
   rm -rf .astro node_modules/.vite
   npm run dev
   ```

### Site deploy thành công nhưng vẫn 404

1. Kiểm tra **build output directory** trong host setting = `dist` (không phải `build` hay `public`)
2. Kiểm tra `astro.config.mjs` có set `site` đúng URL production:

   ```javascript
   export default defineConfig({
     site: 'https://dancumang.vn',
   });
   ```

3. Kiểm tra DNS đã propagate:

   ```bash
   nslookup dancumang.vn
   ```

### SSL warning sau khi gắn custom domain

- Chờ 10-30 phút để Let's Encrypt issue cert
- Trên Cloudflare: chọn SSL mode = `Full` (không `Flexible`)
- Trên Vercel/Netlify: refresh page trong dashboard

---

## Reference

- [Astro deployment guides](https://docs.astro.build/en/guides/deploy/)
- [Cloudflare Pages docs](https://developers.cloudflare.com/pages/)
- [Vercel + Astro](https://vercel.com/docs/frameworks/astro)
- [Netlify + Astro](https://docs.netlify.com/integrations/frameworks/astro/)
