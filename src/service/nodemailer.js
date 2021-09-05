const nodemailer = require('nodemailer');

class NodeMailer {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  sendEmail(messageOptions) {
    return this._transporter.sendMail(messageOptions);
  }
}

module.exports = NodeMailer;
