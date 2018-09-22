FROM node:9

ENV PORT=8080

ENV HOST=0.0.0.0

ENV PATH /node_modules/.bin:$PATH

EXPOSE "8080:8080"

WORKDIR app

COPY package.json package.json

RUN ["yarn", "install"]

CMD ["yarn", "start"]
