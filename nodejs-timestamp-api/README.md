# Timestamp Microservice

## Description

This is #1 Project of [5 Projects](https://github.com/KhaledTolba/5-microservice-APIs) from [FreeCodeCamp](https://www.freecodecamp.org/) Back End Development and APIs Certification.

Using [Node.js](https://nodejs.org/en/docs) with [Express](https://expressjs.com/) framework.

## Installation

```bash
$ npm install
```

## Running the app

before run the App:

- Create .env file
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

|                                   |                                     |
| :-------------------------------: | :---------------------------------: |
| [`date`](#Timestamp) | [`Get-Date`](#Get-Date) from Unix number |

# API

## date

### Get-Date

A request with a valid date should return a JSON object with a Unix timestamp of the input date in milliseconds, and a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT

- Route: GET /api/:date?

- Access: Public

- Request:
    - parameter: date

- respond:
    - JSON object with:
        - a unix key that is a Unix timestamp of the input date in milliseconds (as type Number).
        - a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT.
        Example Output:
        ```json
        {
            "unix":1451001600000,
            "utc":"Fri, 25 Dec 2015 00:00:00 GMT"
        }
        ```
