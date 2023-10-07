# Request Header Parser Microservice

## Description

This is #2 Project of [5 Projects](https://github.com/KhaledTolba/5-microservice-APIs) from [FreeCodeCamp](https://www.freecodecamp.org/) Back End Development and APIs Certification.

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
| [`Header-Parser`](#Header-Parser) | [`Get-Data`](#Get-Data) from Header |

# API

## Header-Parser

### Get-Data

A request should return a JSON object with your IP address, your preferred language, and your software.

- Route: GET /api/whoami

- Access: Public

- Request: The form file input field has the name attribute set to upfile

- respond:
    - JSON object with:
        - your IP address in the ipaddress key.
        - your preferred language in the language key.
        - your software in the software key.
        Example Output:
        ```json
        {
        "ipaddress": "::ffff:159.20.14.100",
        "language": "en-US,en;q=0.5",
        "software": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
        }
        ```
