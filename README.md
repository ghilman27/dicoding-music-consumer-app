# Submission Dicoding Belajar Fundamental Aplikasi Backend (Consumer App)

## How to run

### Clone this repository

```bash
$ git clone <thisrepourl>.git
$ cd <repofolder>
```

### Install all dependencies
```bash
$ npm install
```

### Setup environment variables

```bash
$ cp .env.example .env
```
Open `.env` files and configure the app with your local environment variables

**Description of each variables**
| Variables | Description |
| :---: | :-: |
| HOST | Server host (default `localhost`) |
| PORT | Server port (default `5000`) |
| PGHOST | Postgres host |
| PGPORT | Postgres port |
| PGDATABASE | Postgres database |
| PGUSER | Postgres username |
| PGPASSWORD | Postgres password |
| RABBITMQ_SERVER | Rabbit MQ server url |
| RABBITMQ_QUEUE | Rabbit MQ subscription queue name |
| MAIL_HOST | Node mailer host (default `stmp.gmail.com`) |
| MAIL_PORT | Node mailer port (default `465`) |
| MAIL_ADDRESS | Node mailer sender email address |
| MAIL_PASSWORD | Node mailer sender email password |

### Infrastructure
This app assume that you have every infrastructures required to be ready, such as:
- PostgreSQL database
- RabbitMQ server
- An Email Service

You can setup this in the [producer app](https://github.com/ghilman27/dicoding-open-music-api#setup-the-required-infrastructure)


### Start the server in development mode
```bash
$ npm run start-dev
```
