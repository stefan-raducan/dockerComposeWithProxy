
If docker-compose runs very slow, add to /etc/hosts
127.0.0.1 localunixsocket.local

/opt/logstash/bin/logstash –f apache.config --config.reload.automatic
/etc/pki/tls/certs/logstash-beats.crt


docker build -t web1 ./web1
docker build -t web2 ./web2
docker build -t web3 ./web3
docker build -t elk ./elk
docker-compose up --build
