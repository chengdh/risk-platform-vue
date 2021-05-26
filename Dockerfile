# Test
FROM node
#RUN apk add --no-cache --virtual .gyp python make g++
#RUN apk add --no-cache bash git openssh
#ENV NODE_ENV=development
RUN npm config set registry http://registry.npm.taobao.org
WORKDIR /app

COPY package*.json /app/

# CI and release builds should use npm ci to fully respect the lockfile.
# Local development may use npm install for opportunistic package updates.
#RUN npm install 

COPY . .
#CMD ["next", "start"]
