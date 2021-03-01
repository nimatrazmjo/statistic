# Statistic

## Initial Setup

## Install dependencies

```
npm install
```

## Start Development

```
npm run dev
```

## Run Test

```
npm test
```

## Start production

```
npm run prod
```

# Used Dependencies

- `mongodb`: It used to connect to database.
- `joi`: It used to validate the request payload.
- `supertest`: For testing.
- `jest`: For testing.
- `nodemon`: It used for development purpose.
- `pm2`: It used in production `This package has to be installed globally in the server`.

# Endpoint

```
POST http://ec2-52-66-7-124.ap-south-1.compute.amazonaws.com:3000/api/statistics
```

Request payload data:

```
{
    "startDate": "2016-01-01",
    "endDate": "2017-01-02",
    "minCount":2700,
    "maxCount":3000
}
```
