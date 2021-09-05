require('dotenv').config();

const Nodemailer = require('./service/nodemailer');
const Postgres = require('./service/postgres');
const RabbitMQ = require('./service/rabbitmq');
const MessageListener = require('./service/listener');

const init = async () => {
  const mqClient = new RabbitMQ();
  const emailClient = new Nodemailer();
  const dbClient = new Postgres();
  const messageListener = new MessageListener({ emailClient, dbClient });

  await mqClient.init();
  mqClient.consume(process.env.RABBITMQ_QUEUE, messageListener.listen);
};

init();
