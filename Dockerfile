# 構建階段
FROM node:20-alpine AS builder

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm ci

# 複製其餘源代碼
COPY . .

# 構建應用
RUN npm run build

# 生產階段
FROM node:20-alpine AS runner

WORKDIR /app

# 設置環境變量
ENV NODE_ENV=production

# 只複製必要的文件
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# 暴露端口
EXPOSE 3000

# 啟動應用
CMD ["node", "server.js"] 