# 0.0.10

Added `updateOne`, `updateMany` and `bulkWrite`.

# 0.0.9

Enable projection via the `fields` parameter in the options passed to `find()`. This works like normal projection and is just passed to `project()` when it exists.

```js
  
  const docs = SomeCollection.find({
    _id: 1
  }, {
    fields: {
      someField: 1
    }
  });
  
```

# 0.0.8

Initial version.