FROM node:slim

ENV NODE_ENV=development

WORKDIR /myExpressApp

COPY . .

RUN npm install

CMD [ "npm" , "start" ]

EXPOSE 3000