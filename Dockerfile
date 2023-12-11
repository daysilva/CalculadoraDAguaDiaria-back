FROM node

WORKDIR /usr/app

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/daysilva/CalculadoraDAguaDiaria-back.git

RUN git checkout homolog

WORKDIR /usr/app/CalculadoraDAguaDiaria-back

EXPOSE 3000

CMD ["sh", "-c", "git pull origin homolog && npm install && npm run start"]
