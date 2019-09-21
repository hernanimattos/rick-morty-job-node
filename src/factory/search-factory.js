import Http from '../http';

class GetCharDimension {
  async getCharByName(name) {
    const response = await Http.get(`character/?name=${name}`);
    const {
      data: {
        results,
      },
    } = response || {};

    return this.getLocationChar(results);
  }


  getLocationChar(data) {
    const names = data.map((itemLocation) => {
      const {
        location: {
          name,
        },
      } = itemLocation;

      return name;
    });

    return this.filterDimensionsCount(names);
  }


  filterDimensionsCount(names = []) {
    const filterDuplicateValues = new Set(names);
    return [...filterDuplicateValues].length;
  }
}

export default new GetCharDimension();
