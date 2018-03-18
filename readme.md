


![Project architecture](https://github.com/stefan-raducan/dockerComposeWithProxy/blob/master/architecture.png)
======

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

If docker-compose runs very slow, add to /etc/hosts
------
```
127.0.0.1 localunixsocket.local
```