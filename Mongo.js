const Collection = require('./Collection.js');

const Mongo = (function() {

  this.Collection = Collection;
  this.client = null;
  this.db = null;

  this.setClient = (client) => {
    this.client = client;
  }

  this.getClient = () => {
    return this.client;
  }

  this.setDb = (db) => {
    this.db = db;
  }

  this.getDb = () => {
    return this.db;
  }

  return this;

})();

module.exports = Mongo;

