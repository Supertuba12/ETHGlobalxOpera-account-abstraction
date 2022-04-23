class Users {
 constructor(db) {
  this.collection = db.collection('walletDb');
 }
 async addUser(user) {
  return await this.collection.insertOne(user);
 }
 async findUser(user) {
  return await this.collection.find(user);
 }
}
module.exports = Users;
