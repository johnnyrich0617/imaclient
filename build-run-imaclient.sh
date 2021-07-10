#!/bin/bash
# Build the Docker Image
docker build --no-cache --rm -t jrichardson.snhu.com/ima-client-app .
# Create the system docker network if it does not already exist
docker network inspect jrichardson.snhu.network >/dev/null 2>&1 || docker network create --driver bridge imadomain
# Start the application container
docker run --name imaclient-test --net jrichardson.snhu.network -d -p 4300:80 jrichardson.snhu.com/ima-client-app
