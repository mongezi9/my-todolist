#LTS version
FROM node:8
# Create app directory
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8081
CMD ["npm","start"]
