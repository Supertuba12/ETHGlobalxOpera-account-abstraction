class Users {
 constructor(db) {
  this.collection = db.collection('walletDb');
 }
 async addUser(userInfo) {
  return await this.collection.insertOne(userInfo);
 }
 async findUser(userInfo) {
  return await this.collection.find(userInfo);
 }
 async addGuardian(userInfo) {
  return await this.collection.updateOne(
   {username: userInfo.username},
   {
    $set: {guardians: userInfo.guardians},
    $currentDate: {lastModified: true}
   }
  )
 }
}

module.exports = Users;
