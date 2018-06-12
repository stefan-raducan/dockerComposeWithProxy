FROM node

EXPOSE 8080
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/logs && touch /usr/src/app/logs/log1.log

# #install &setup filebeat
# RUN curl -L -O https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-6.2.2-amd64.deb
# RUN dpkg -i filebeat-6.2.2-amd64.deb
# RUN rm /etc/filebeat/filebeat.yml
# COPY filebeat.yml /etc/filebeat
# # RUN sed -i 's/#output.logstash:/output.logstash:/g' /etc/filebeat/filebeat.yml
# # RUN sed -i 's/#hosts: ["localhost:5044"]/hosts: ["elk:5044"]/g' /etc/filebeat/filebeat.yml

# COPY start.sh /

#setup node app
COPY index1.js /usr/src/app
RUN cd /usr/src/app && npm install node-netcat
#start node & filebeat
CMD [ "node", "/usr/src/app/index1.js" ]