# 1. Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy only package files first to cache dependencies
COPY package*.json ./
RUN npm ci

# Copy app and build
COPY . .
RUN npm run build

# 2. Production stage
FROM node:20-alpine

WORKDIR /app

# Install serve only
RUN npm install -g serve

# Copy built app only
COPY --from=build /app/dist ./dist

EXPOSE 5000

CMD ["serve", "-s", "dist", "-l", "5000"]
