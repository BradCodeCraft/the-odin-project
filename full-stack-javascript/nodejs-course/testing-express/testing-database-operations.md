# Testing Database Operations

## Introduction

## Unit tests - do you even need to?

Before diving in, you might want to consider whether or not the database
operations you’re testing even need to be tested in the first place. If you are
reading and writing straight from a database using `pg` or some other db
module, you might not really need to test that code.

If your queries are complicated, you might justify adding unit tests to make
sure that you are using them correctly and that the code you have written is
doing what you intend it to, and if you are using any of your own code to do
some filtering, sorting, or other manipulations of the data you will want to
test that as well. In the case of your own code, however, it would be better if
you could pull those things out into their own modules, separate from your
database operations so you can test them without messing with the database.

## Integration tests

There are cases, however, when you are going to want to test things that touch
your database.

Create a separate database for testing; prefix it with a `test_` for you to
easily identify with. You might want to run a prisma migrate by swapping out
the test database url. Afterwards, use a seed script on this database instance,
or you could manually insert data in a `beforeAll` function in your test suite.

```dotenv
NODE_ENV=development
DATABASE_URL=postgresql://<user>:<password>@localhost:3306/inventory_application
TEST_DATABASE_URL=postgresql://<user>:<password>@localhost:3306/test_inventory_application
```

```json
{
  // other stuff
  "scripts": {
    "dev": "NODE_ENV=development && node app.js",
    "test": "NODE_ENV=test && jest"
  }
  // even more stuff
}
```

```js
const databaseUrl =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL;

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: databaseUrl,
    },
  },
});
```
