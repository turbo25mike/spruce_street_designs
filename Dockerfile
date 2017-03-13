FROM microsoft/dotnet:latest

RUN apt-get update
RUN apt-get install -y build-essential nodejs nodejs-legacy

WORKDIR /app

COPY . /app

RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]

EXPOSE 5001/tcp

ENTRYPOINT ["dotnet", "run", "--server.urls", "http://0.0.0.0:5001"]
