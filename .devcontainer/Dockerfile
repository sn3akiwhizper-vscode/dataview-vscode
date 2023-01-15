FROM node:10-alpine

RUN apk add --update git bash
RUN npm install -g yo generator-code

USER node

ENTRYPOINT /bin/bash

WORKDIR /home/node

#base format from: https://www.codependentcodr.com/building-a-vs-code-extension-without-installing-node-by-docker-magic.html
