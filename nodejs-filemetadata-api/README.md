# File Metadata Microservice

## Description

This is #5 Project of [5 Projects](https://github.com/KhaledTolba/5-microservice-APIs) from [FreeCodeCamp](https://www.freecodecamp.org/) Back End Development and APIs Certification.

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

|                 |                               |
| :-------------: | :---------------------------: |
| [`File`](#File) | [`Upload`](#Upload-File) File |

# API

## File

### Upload-File

You can submit a form that includes a file upload.

- Route: POST /api/fileanalyse

- Access: Public

- Request: The form file input field has the name attribute set to upfile

- respond:
  - JSON object with:
    - the file name, type, and size in bytes.
    Example Output:
    ```json
    {
      "name":"Photo.png",
      "type":"image/png",
      "size":17926
    }
    ```
