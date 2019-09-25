FROM node:10

ARG UID=1000
ARG GID=1000

RUN apt-get update \
    && apt-get install -y zsh

# Install global node dependencies
RUN npm i -g --silent knex@^0.19 \
             @feathersjs/cli@^3.9

# Create app directory
WORKDIR /var/app

RUN chmod -R 777 /var/app

USER ${UID}:${GID}

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --silent
# If you are building your code for production
# RUN npm ci --only=production

ENV TERM xterm
ENV ZSH_THEME agnoster
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true

EXPOSE 3030
CMD ["npm", "run", "dev"]
