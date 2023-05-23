# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /src
COPY package.json package-lock.json ./
COPY . .
RUN npm install 
CMD ["npm", "build", "strapi"]
EXPOSE 1337