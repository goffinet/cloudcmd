FROM almalinux/9-base

RUN dnf -y module install nodejs:20/common && \
    dnf -y install python3 make automake gcc gcc-c++

LABEL maintainer="goffinet"

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm config set package-lock false && \
    npm install --production && \
    npm i gritty && \
    npm i madrun && \
    npm cache clean --force

COPY . /usr/src/app

RUN npm run build

WORKDIR /

ENV cloudcmd_terminal true
ENV cloudcmd_terminal_path gritty
ENV cloudcmd_open false

EXPOSE 8000

ENTRYPOINT ["/usr/src/app/bin/cloudcmd.mjs"]