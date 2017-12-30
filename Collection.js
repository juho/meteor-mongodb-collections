class Collection {
  
  constructor(name) {
    
    this.name = name;
    this.collection = null;
    this.Mongo = null;

  }

  _getDb() {
    if(!this.Mongo) this.Mongo = require('./Mongo.js');
    return this.Mongo.getDb();
  }

  _getCollection() {
    const db = this._getDb();
    if(!this.collection) this.collection = db.collection(this.name);
  }

  async findOne(query, opts) {
    this._getCollection();
    try {
      return await this.collection.findOne(query, opts);
    }
    catch (e) {
      throw e;
    }
  }

  async find(query, opts) {
    this._getCollection();
    try {
      return await this.collection.find(query, opts).toArray();
    }
    catch (e) {
      throw e;
    }
  }

  async update(query, operation, options) {

    this._getCollection();
    try {
      return await this.collection.update(query, operation, options);
    }
    catch (e) {
      throw e;
    }

  }

  async insert(query, options) {

    this._getCollection();
    try {
      return await this.collection.insertOne(query, options);
    }
    catch (e) {
      throw e;
    }

  }

  async insertMany(query, options) {

    this._getCollection();
    try {
      return await this.collection.insertMany(query, options);
    }
    catch (e) {
      throw e;
    }

  }

  async remove(query, options) {

    this._getCollection();
    try {
      return await this.collection.remove(query, options);
    }
    catch (e) {
      throw e;
    }

  }

}

module.exports = Collection;

