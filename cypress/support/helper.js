export class helper {
  
    /**
     * Returns a data object from a given fixture
     * @param  {string} fixture - fixture name
     * @return {JSON}
     * */
     getTestData = (fixture) => require('../fixtures/' + fixture);

}