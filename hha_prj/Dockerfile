FROM python:3

ENV PYTHONUNBUFFERED 1

WORKDIR /app

ADD . /app

COPY ./requirements.txt /app/requirements.txt

RUN pip install -r requirements.txt

RUN apt-get update && apt-get upgrade -y && \
    apt-get install npm -y

RUN npm install

COPY . /app

RUN python manage.py makemigrations

RUN python manage.py migrate

RUN python manage.py runserver