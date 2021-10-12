# Backend dependencies

FROM python:3.8

ENV PYTHONUNBUFFERED 1

WORKDIR /app

ADD ./hha_prj /app

COPY ./hha_prj/requirements.txt /app/requirements.txt

RUN pip install -r /app/requirements.txt

# Front end dependencies

RUN apt-get update && apt-get upgrade -y && \
    apt-get install npm -y

COPY ./package.json /app/package.json

RUN npm i /app/package.json