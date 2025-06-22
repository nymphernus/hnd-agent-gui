@echo off

start chrome --app=http://localhost:5000
docker start --attach hnd-agent

@REM pause