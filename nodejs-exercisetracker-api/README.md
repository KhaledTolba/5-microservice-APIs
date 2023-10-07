# Exercise Tracker

## Description

This is #4 Project of [5 Projects](https://github.com/KhaledTolba/5-microservice-APIs) from [FreeCodeCamp](https://www.freecodecamp.org/) Back End Development and APIs Certification.

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

|                           |                                                       |
|           :---:           |                          :---:                        |
| [`User`](#User)           | [`Create`](#Create-User) and [`get`](#Get-All-Users) Users |
| [`Excercise`](#Excercise) | [`Create`](#Create-Excercise) and [`get`](#Get-Specific-Exercises) Excercises           |

# API

## User

### Create-User

You can POST with postman or form data username to create a new user.

- Route: POST /api/users

- Access: Public

- JSON Request:
```json
{
  "username": "fcc_test"
}
```
- respond:
```json
{
  "username": "fcc_test",
  "_id": "5fb5853f734231456ccb3b05"
}
```

### Get-All-Users

You can make a GET request to get a list of all users.

- Route: GET /api/users

- Access: Public

- respond:
```json
[
    {
        "username": "fcc_test",
        "_id": "5fb5853f734231456ccb3b05"
    }
]
```

## Excercise

### Create-Excercise

You can POST with postman or form data description, duration, and optionally date.
(If no date is supplied, the current date will be used)

- Route: POST /api/users/:_id/exercises
    - _id refers to user's id

- Access: Public

- JSON Request:
```json
{
  "description": "test",
  "duration": 60,
  "date": "Mon Jan 01 1990",
}
```

- respond:

```json
{
  "username": "fcc_test",
  "description": "test",
  "duration": 60,
  "date": "Mon Jan 01 1990",
  "_id": "5fb5853f734231456ccb3b05"
}
```

### Get-Specific-Exercises
You can make a GET request to retrieve a full exercise log of any user.

- Route: GET /api/users/:_id/logs?[from][&amp;to][&amp;limit]:
   > - _id refers to user's id
   > - [ ] = optional
   > - from, to = dates (yyyy-mm-dd); limit = number

- Access: Public

- respond:
```json
{
  "username": "fcc_test",
  "count": 1,
  "_id": "5fb5853f734231456ccb3b05",
  "log": [{
    "description": "test",
    "duration": 60,
    "date": "Mon Jan 01 1990",
  }]
}
```