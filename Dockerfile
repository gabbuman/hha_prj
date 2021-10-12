FROM python:3

ENV PYTHONUNBUFFERED 1

WORKDIR /app

ADD . /app

COPY ./hha_prj/requirements.txt /app/requirements.txt

RUN pip install -r requirements.txt

COPY ./package.json /app/package.json

RUN apt-get update && apt-get upgrade -y && \
    apt-get install npm -y

RUN npm i

COPY . /app