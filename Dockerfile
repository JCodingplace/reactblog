FROM node:13.12.0-alpine

COPY ./reactblog /reactblog

WORKDIR /reactblog
RUN npm install
ENV PATH /node_modules/.bin:$PATH
