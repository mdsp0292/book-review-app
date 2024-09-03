FROM python:3.11-slim

WORKDIR app

COPY app/requirements.txt /app/requirements.txt
COPY app/requirements.dev.txt /app/requirements.dev.txt

RUN apt update && apt install --no-install-recommends -y build-essential gcc && apt clean && rm -rf /var/lib/apt/lists/*
RUN pip install --upgrade pip
RUN pip install -r /app/requirements.dev.txt