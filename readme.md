

# Project Architecture:
![Project architecture](https://github.com/stefan-raducan/dockerComposeWithProxy/blob/master/architecture.png)

Running the project:
------

```bash
git clone https://github.com/stefan-raducan/dockerComposeWithProxy.git

docker build -t web1 ./web1
docker build -t web2 ./web2
docker build -t web3 ./web3
docker build -t elk ./elk

docker-compose up --build
```

### Test it

localhost:80/web1

Redirects:

localhost:80/web1 -> web1:8080
localhost:80/web2 -> web2:3000
localhost:80/web3 -> web3:5000
localhost:80/kib -> elk:5601

### Issues


Couldn't figure out why service filebeat start would not run so run this after containers are up:
```
docker exec -it web1 service filebeat start
```

Filebeat running on web1 container cannot correctly send logs to Logstash on elk container.


### If docker-compose runs very slow, add to /etc/hosts
```
127.0.0.1 localunixsocket.local
```