FROM ubuntu:xenial

EXPOSE 8080 5601
#5601 - default kibana port

#get dependencies
RUN apt-get update && apt-get install -y \
    apt-transport-https \
    software-properties-common \
    wget \
    default-jre \
    default-jdk 
RUN add-apt-repository ppa:webupd8team/java
RUN apt-get update
RUN echo "oracle-java8-installer shared/accepted-oracle-license-v1-1 select true" | debconf-set-selections
RUN apt-get install -y oracle-java8-installer
ENV JAVA_HOME="/usr/lib/jvm/java-8-oracle"

#install elk
RUN wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | apt-key add -
RUN echo "deb https://artifacts.elastic.co/packages/5.x/apt stable main" | tee -a /etc/apt/sources.list.d/elastic-5.x.list
RUN apt-get update && apt-get install -y elasticsearch

RUN apt-get install kibana

RUN apt-get install logstash

#enable on-boot start for elk
RUN systemctl enable elasticsearch
RUN systemctl enable kibana

CMD ["systemctl", "restart", "elasticsearch", "kibana"]