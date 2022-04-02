FROM node:14
ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install
EXPOSE 8080
COPY . .

CMD [ "npm", "start" ]