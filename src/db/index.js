import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017';

mongoose.connect(uri, (err, db) => {
  if (err) return new Error(err);

  if (db) console.log('Conexão com banco ok!');

  return true;
});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

export default mongoose;
