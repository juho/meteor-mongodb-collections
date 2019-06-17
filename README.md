# meteor-mongodb-collections

This module acts as a singleton that you can use with `async`/`await` in a Meteor-like "synchronous" fashion to interact with MongoDB collections.   

Intended usage is for CLI or "serverless" (Lambda/GCF) apps that need to interact with Meteor-based apps to generally make life easier while developing. There are no projections, all the `find`s are automatically returned as arrays.

I use this in my own internal projects so it's pretty simple, but feel free to contribute.

## Usage:

#### `Mongo.setDb(db);`   
Set the DB in the singleton.

#### `Mongo.setClient(client);`   
Set the Mongo client in the singleton. 

#### `Mongo.getDb();`   
Get the DB from the singleton.

#### `Mongo.getClient();`   
Get the Mongo client from the singleton.

#### `new Mongo.Collection('collection_name');`   
Create a new collection

## Example:

In your entry point:

#### `index.js`
```js

const Mongo = require('meteor-mongodb-collections'); // This creates the singleton.
const MongoClient = require('mongodb').MongoClient;
const doStuff = require('./doStuff.js');

async function connect() {

  try {

    const client = await MongoClient.connect(config.MONGO_URL);
    const db = client.db(client.s.options.dbName);

    Mongo.setDb(db);         // Set the db in the singleton.
    Mongo.setClient(client); // ..and the client.

    await doStuff();

  }
  catch(err) {
    console.error(err);
    process.exit();
  };

}

connect();
```

After that you can declare collections:

#### `collections/Users.js`
```js
const Mongo = require('meteor-mongodb-collections');
const Users = new Mongo.Collection("users");

module.exports = Users;
```

And use them:

#### `doStuff.js`
```js
const Users = require('./collections/Users.js');

async function doStuff() {
  const user = await Users.findOne({ "emails.address": "user@example.com" });
  console.log(user);

  const updateOp = await Users.update({
    "emails.address": "user@example.com"
  }, {
    $set: {
      "foo": "bar"
    }
  });
}

module.exports = doStuff;
```
