#!/bin/bash

node /usr/src/app/index1.js
sleep 30s
service filebeat start
#filebeat setup --template -E output.logstash.enabled=false -E 'output.elasticsearch.hosts=["elk:9200"]'
