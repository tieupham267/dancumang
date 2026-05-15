### Stage 1 — build the static site
FROM node:20-alpine AS builder
WORKDIR /app

# Cài deps trước để cache layer khi chỉ thay đổi source
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copy source và build
COPY . .
RUN npm run build

### Stage 2 — serve với nginx
FROM nginx:1.27-alpine AS runner

# Bỏ default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy config + static output
COPY deploy/nginx.conf /etc/nginx/conf.d/dancumang.conf
COPY --from=builder /app/dist /usr/share/nginx/html

# Healthcheck đơn giản: trang chủ trả 200
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
