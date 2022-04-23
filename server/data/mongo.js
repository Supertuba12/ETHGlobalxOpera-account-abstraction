const { MongoClient } = require('mongodb');
const Users = require('./Users');

class MongoBot {
 constructor() {
  const url = "mongodb://localhost:27017";

  this.client = new MongoClient(url);
 }
 async init() {
  await this.client.connect();
  console.log('connected');

  this.db = this.client.db("walletEb");
  this.Users = new Users(this.db);
 }
}

module.exports = new MongoBot();
