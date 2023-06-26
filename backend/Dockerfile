# pull official base image
FROM python:3.10-alpine

# set work directory
WORKDIR /backend/food_item

COPY ./requirements.txt ./


# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install psycopg2 dependencies
RUN apk update \
 && apk add gcc python3-dev

# install python dependencies
COPY requirements.txt /app/requirements.txt
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# copy project
COPY . .

# listen to a specific port.
EXPOSE 8000