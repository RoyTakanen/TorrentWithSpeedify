FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get upgrade

RUN apt-get -y install python3-pip nodejs npm git wget

COPY . /app

WORKDIR /app

RUN rm -rf node_modules package-lock.json

RUN npm install

RUN mkdir /downloads

#Speedify

RUN wget -qO- https://get.speedify.com | bash -

CMD ["bash", "start.sh"]

