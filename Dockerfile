FROM node:9

ENV PORT=8080

ENV HOST=0.0.0.0

ENV PATH /app/node_modules/.bin:$PATH

EXPOSE "8080:8080"

WORKDIR app

COPY app/ .

RUN ["yarn", "install"]

RUN ["yarn", "build"]

CMD ["yarn", "serve"]
