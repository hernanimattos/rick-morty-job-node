import mongoose from 'mongoose';
import searchController from './search';
import getCharDimension from '../factory/search-factory';
import dimensionsModel from '../models/dimensions';


describe('check search controller', () => {
  it('ckeck if saveAllChars is called ', () => {
    dimensionsModel.find = jest.fn();
    const req = {};
    const resp = {};
    searchController.apiAllData(req, resp);
    expect(dimensionsModel.find).toHaveBeenCalled();
  });

  it('check if model and request be called in saveCharcter', async () => {
    const nameChar = 'rick';
    getCharDimension.getCharByName = jest.fn();

    await searchController.saveCharacter(nameChar);
    expect(dimensionsModel.findOneAndUpdate).toHaveBeenCalled();
    expect(getCharDimension.getCharByName).toHaveBeenCalledWith(nameChar);
  });

  it('ckeck if saveAllChars is called ', () => {
    searchController.saveCharacter = jest.fn();
    searchController.saveAllChars();
    expect(searchController.saveCharacter).toHaveBeenCalled();
  });


  it('ckeck if saveCharacter is called ', async () => {
    searchController.saveCharacter = jest.fn();

    await searchController.saveAllChars();
    expect(searchController.saveCharacter).toHaveBeenCalled();
    expect(searchController.saveCharacter.mock.calls.length).toBe(2);
  });
});
