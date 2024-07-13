FROM node:18-alpine

WORKDIR /usr/home/app/front

COPY package*.json .

EXPOSE 3005
