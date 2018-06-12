FROM node
RUN mkdir -p /usr/src/app
COPY index3.py /usr/src/app
EXPOSE 5000
RUN apt-get update && apt-get install -y \
    python-pip \
    net-tools
RUN pip install Flask
ENV FLASK_APP=/usr/src/app/index3.py
CMD [ "flask", "run" ]

#RUN git clone https://github.com/Azure-Samples/python-docs-hello-world
#RUN cd python-docs-hello-world && pip install -r requirements.txt
#CMD [ "python", "/python-docs-hello-world/main.py" ]
