FROM node:10.15.3

WORKDIR /usr/src/menu_app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3005

CMD ["npm", "start"]
