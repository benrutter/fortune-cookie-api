const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const connect = async () => {
  await mongoose.connect('mongodb://localhost:27017/fortune-cookie',  {useNewUrlParser: true, useUnifiedTopology: true});
};

const drop = async () => {
  await mongoose.connection.db.dropDatabase();
}

const disconnect = async () => {
  await mongoose.disconnect();
};

FortuneSchema = new mongoose.Schema({
  fortune: {type: String, required: true}
})

FortuneSchema.statics.randomFortune = async function(callback) {
  //return this.findOne({}).sort('fortune').exec(callback);
  let docs = await this.countDocuments({}, function(err, count){
    return count;
  });
  const random = Math.floor(Math.random() * docs);
  return this.findOne({}).skip(random).exec(callback);
}


const Fortune = mongoose.model(
  'Fortune',
  FortuneSchema
);

const randomFortune = async () => {
  await connect();
  let result = await Fortune.randomFortune();
  await disconnect();
  return result.fortune;
}



module.exports = {connect, drop, disconnect, Fortune, randomFortune};
