import Mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017';

Mongoose.connect(uri, (err, db) => {
  if (err) return new Error(err);

  if (db) console.log('Conexão com banco ok!');

  return true;
});

Mongoose.set('useNewUrlParser', true);
Mongoose.set('useFindAndModify', false);
Mongoose.set('useCreateIndex', true);

export default Mongoose.connection;
