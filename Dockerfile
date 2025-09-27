# Build image
FROM node:20-alpine

WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm ci

# Copy the rest of the project
COPY . .

# Build Strapi admin panel (production build)
RUN npm run build

# Expose Strapi's default port
EXPOSE 1337

# Start Strapi in production mode
CMD ["npm", "run", "start"]
