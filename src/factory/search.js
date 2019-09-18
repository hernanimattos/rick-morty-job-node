import Http from '../http';

class GetCharDimension {
  async getCharByName(name) { // eslint-disable-line class-methods-use-this
    const response = await Http.get(`character/?name=${name}`);
    const {
      data: {
        results,
      },
    } = response || {};

    return this.getLocationChar(results);
  }


  getLocationChar(data) { // eslint-disable-line class-methods-use-this
    const names = data.map((itemLocation) => {
      const {
        location: {
          name,
        },
      } = itemLocation;

      return name;
    });

    return GetCharDimension.filterDimensionsCount(names);
  }


  static filterDimensionsCount(names = []) {
    const filterDuplicateValues = new Set(names);
    return [...filterDuplicateValues].length;
  }
}

export default new GetCharDimension();
