const amqp = require('amqplib');

class RabbitMQ {
  constructor() {
    this._serverUrl = process.env.RABBITMQ_SERVER;
  }

  _isInitialized() {
    if (!this._connection || !this._channel) {
      return false;
    }
    return true;
  }

  async init() {
    const isInitialized = this._isInitialized();
    if (isInitialized) return;

    this._connection = await amqp.connect(this._serverUrl);
    this._channel = await this._connection.createChannel();
  }

  async consume(queue, onMessage, options = { noAck: true }) {
    this._isInitialized();
    await this._channel.assertQueue(queue, {
      durable: true,
    });
    return this._channel.consume(queue, onMessage, options);
  }
}

module.exports = RabbitMQ;
