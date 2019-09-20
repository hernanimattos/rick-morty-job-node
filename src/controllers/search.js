
import mongoose from 'mongoose';
import dimensionsSchema from '../schema/dimensions';
import getChar from '../factory/search';

const saveCharacter = async (charName) => {
  const dimensions = mongoose.model('dimensions', dimensionsSchema);
  const charCount = await getChar.getCharByName(charName);

  const filter = { character: charName };
  const update = { dimensions_count: charCount };

  return dimensions.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true,
  });
};

const saveAllChars = async () => {
  const chars = ['rick', 'morty'];

  const saveCharsPromise = chars.map((char) => {
    return saveCharacter(char);
  });

  const response = await Promise.all(saveCharsPromise);

  if (response) console.log('Busca feita e salva');
};

const apiAllData = (req, res) => {

  const dimensions = mongoose.model('dimensions', dimensionsSchema);
  dimensions.find({}, (err, dim) => {
    res.send(dim);
  });
  
  return true
};

export {
  apiAllData,
  saveAllChars,
};
