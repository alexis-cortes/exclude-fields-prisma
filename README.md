# Prisma - Exclude fields

## _Alternative code solution to exclude fields in a prisma query_

## Description

This code is an example of a possible solution to be able to exclude fields in a query of Prisma.

Call the exclude function and send as parameters a string with the model name and an array with the fields to exclude.

```javascript
await prisma.user.findMany({
    select: {
      ...exclude("user", ["password", "otherField"]),
      profile: {
        select: {
          ...exclude("profile", ["bio", "otherField"]),
        },
      },
    },
});


const exclude = (modelName, fields) => {
  let modelFields = {
    ...Prisma[`${firstLetterUpperCase(modelName)}ScalarFieldEnum`],
  };
  fields.forEach((field) => delete modelFields[field]);
  Object.keys(modelFields).forEach((key) => (modelFields[key] = true));
  return modelFields;
};

```

## Installation

Connect your database by creating the .env file in the project root directory and set DATABASE_URL

This example was tested on a MySQL database.
example: DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"

In the official documentation of Prisma you can find the type of connector of your database -
[Database connectors](https://www.prisma.io/docs/concepts/database-connectors#overview)

```sh
cd exclude-fields-prisma
npm i
npm install @prisma/client
npx prisma migrate dev --name init
npx prisma generate
npx prisma db seed
npm start
```
