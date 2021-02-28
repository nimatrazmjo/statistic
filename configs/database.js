const mongoose = require('mongoose');
const debug = require('debug')('counts:server');
const mongoClient = require("mongodb").MongoClient;
// module.exports = async () => {
  // try {
  // const option = { useUnifiedTopology: true, useNewUrlParser: true, 'useFindAndModify': false };
  //   await mongoose.connect(`mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true`, option);
  //   // await mongoose.connect('mongodb://localhost:27017/getir', option);
  //   debug('Connected to MongoDB Database...');
  //   return mongoose;
  // } catch (error) {
  //   console.error(error);
  //   process.exit(1);
  // }

  // try {
  //   mongoClient.connect(`mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true`, option);
  //   debug('Connected to MongoDB Database...');
  //   db.db('records').find({}).then(result => console.info(result));
  // } catch (error) {
  //   console.error(error);
  //   process.exit(1);
  // }
  // .then(db => {
  //   debug('Connected to MongoDB Database...');

  // }).catch(error => {
  //   console.error(error);
  //   process.exit(1);
  // });
// }
