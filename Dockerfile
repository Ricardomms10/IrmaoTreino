FROM jenkins/jenkins:lts

USER root

# instala docker cli + git
RUN apt-get update && \
    apt-get install -y docker.io git && \
    apt-get clean

USER jenkins
