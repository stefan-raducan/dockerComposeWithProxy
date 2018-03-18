FROM sebp/elk

EXPOSE 5601 9200 9300 5044 
# 5601 (Kibana web interface)
# 9200 (Elasticsearch JSON interface)
# 9300 (Elasticsearch transport interface)
# 5044 (Logstash Beats interface)

FROM sebp/elk
EXPOSE 5601 9200 5044
RUN sed -i 's/ssl => true/ssl => false/g' /etc/logstash/conf.d/02-beats-input.conf
#COPY logstash.conf /
#CMD ["/etc/init.d/logstash", "-f /logstash.conf"]