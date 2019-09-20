import {
    apiAllData,
    saveAllChars,
} from './search';

import mongoose from 'mongoose'


describe('check search',   () => {
  it('ckeck if saveCharacter is called ', () => {
    // const apiAllData = jest.fn()
    const mongoose = {
      model: jest.fn(()=>({ find: jest.fn({}, ()=>jest.fn())})),
     
    }
   const Schema = {};
    const req = {};
    const res = {
      send: jest.fn()
    };

    expect(apiAllData(req, res)).toBeTruthy()
    expect(mongoose.model('dimensions', Schema)).toHaveBeenCalled()
   
  });
});
