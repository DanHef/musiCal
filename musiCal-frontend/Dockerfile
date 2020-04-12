FROM node:10
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/public
COPY package.json /usr/src/app
RUN npm install
CMD ["npm","build"]