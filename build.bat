@echo off

docker build -t hnd-agent .
docker run --name=hnd-agent -p 5000:80 hnd-agent