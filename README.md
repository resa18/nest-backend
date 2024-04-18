
## Description

Backend for test.

## Installation

```bash
$ npm install
```

```bash
$ docker compose up
```

## Database
```bash
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    latest_login TIMESTAMP,
    soft_delete BOOLEAN DEFAULT FALSE
);
```

## Running the app

```bash
# watch mode
$ npm run start:dev
```

