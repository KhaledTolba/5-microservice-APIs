# URL Shortener Microservice

## Description

This is #3 Project of [5 Projects](https://github.com/KhaledTolba/5-microservice-APIs) from [FreeCodeCamp](https://www.freecodecamp.org/) Back End Development and APIs Certification.

Using [Node.js](https://nodejs.org/en/docs) with [Express](https://expressjs.com/) framework and [MongoDB](https://www.mongodb.com/docs/).

## Installation

```bash
$ npm install
```

## Running the app

before run the App:

- Create .env file
- Add your connection string into Config/Key{MONGO_URI}
- Add port number to Config/Key{PORT} (default Port=3000)

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# API Summary

|                         |                                                  |
| :---------------------: | :----------------------------------------------: |
| [`Shorturl`](#shorturl) | [`Create`](#Create) and [`Get`](#Get) a Shorturl |

# API

## Shorturl

### Create

You can POST and get a JSON response with original_url and short_url properties.

- Route: POST /api/shorturl

- Access: Public

- Request:

  - parameter: date

- respond:
  - JSON object with:
    - a original_url key that is a original url.
    - a short_url key that is a short url.
      Example Output:
    ```json
    {
      "original_url": "https://freeCodeCamp.org",
      "short_url": 1
    }
    ```
### Get

You can visit the original URL When you send GET request.

- Route: GET /api/shorturl/<short_url>

- Access: Public

- respond:
  - you will be redirected to the original URL.
