FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npx prisma generate
RUN npm run build:backend

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json* .
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/index.js"]
