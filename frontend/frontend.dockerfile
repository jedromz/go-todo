# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# Build the app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Set the startup command
CMD ["npm", "start"]
