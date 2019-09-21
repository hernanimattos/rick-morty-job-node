
import dimensionsModel from '../models/dimensions';
import getCharDimension from '../factory/search-factory';

class SearchController {
  async saveCharacter(charName) {
    const charCount = await getCharDimension.getCharByName(charName);

    const filter = { character: charName };
    const update = { dimensions_count: charCount };

    return dimensionsModel.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true,
    });
  }

  apiAllData(req, res, next) {
    return dimensionsModel.find({}, (err, dim) => {
      if (err) next(err);
      return res.send(dim);
    });
  }

  async saveAllChars() {
    const chars = ['rick', 'morty'];
    const saveCharsPromise = chars.map((char) => this.saveCharacter(char));
    const response = await Promise.all(saveCharsPromise);

    if (response) console.log('Busca feita e salva');
  }
}

export default new SearchController();
