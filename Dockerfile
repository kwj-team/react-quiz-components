FROM node:16

RUN mkdir /app
WORKDIR /app

ENV PORT ${PORT:-80}
ENV NODE_PATH=src

COPY yarn.lock /app/yarn.lock
COPY package.json /app/package.json
RUN yarn

COPY rollup.config.js /app/rollup.config.js
COPY tsconfig.json /app/tsconfig.json
COPY public /app/public
COPY src /app/src
COPY .storybook /app/.storybook

EXPOSE $PORT
CMD [ "yarn", "run", "storybook"]