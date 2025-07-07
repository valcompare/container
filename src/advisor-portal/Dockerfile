# Created by ../../.codegen/index.ts
FROM node:20-alpine

WORKDIR /usr/src/app

ARG NPM_TOKEN

ENV LOG_LEVEL="info" \
    POSTGRES_DATABASE="" \
    POSTGRES_HOST="" \
    POSTGRES_USER="" \
    POSTGRES_PASSWORD="" \
    POSTGRES_PORT="" \
    SLACK_OAUTH_TOKEN="" \
    RESEND_API_KEY=""

RUN npm config set "@studio-75:registry" https://npm.pkg.github.com/ \
    && npm config set "@valcompare:registry" https://npm.pkg.github.com/ \
    && npm config set "//npm.pkg.github.com/:_authToken" $NPM_TOKEN \
    && npm install -g @valcompare/app.portal.advisor

EXPOSE 3000

CMD ["advisor-portal"]
