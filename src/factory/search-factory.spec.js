import GetCharDimension from './search-factory';
import Http from '../http';

describe('searchFactory test', () => {
  it('', () => {
    GetCharDimension.filterDimensionsCount = jest.fn();

    const dataArray = [{
      location: {
        name: 'nois',
      },
    }];

    GetCharDimension.getLocationChar(dataArray);

    expect(GetCharDimension.filterDimensionsCount).toHaveBeenCalledWith(['nois']);
  });

  it('getCharByName expect GetCharDimension.getLocationChar be called', async () => {
    GetCharDimension.getLocationChar = jest.fn();

    const response = {
      data: {
        results: {},
      },
    };
    Http.get = jest.fn(() => Promise.resolve(response));

    await GetCharDimension.getCharByName('rick');

    expect(GetCharDimension.getLocationChar).toHaveBeenCalled();
  });
});
