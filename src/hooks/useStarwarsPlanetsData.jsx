import { useState, useEffect } from 'react';

const useStarwarsPlanetsData = () => {
  const [starwarsData, setStarwarsData] = useState([]);

  useEffect(() => {
    const getStarwarsPlanetsDataFromAPI = async () => {
      const starwarsPlanetsURL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const starwarsPlanetsResponse = await fetch(starwarsPlanetsURL);
      const starwarsPlanetsData = await starwarsPlanetsResponse.json();
      const { results } = starwarsPlanetsData;

      const INDEX_OF_RESIDENTS_OBJECT = 9;
      const AMOUNT_OF_ITEMS_TO_BE_REVOVED_FROM_ARRAY = 1;

      const resultsEntriesWithoutResidents = results
        .map((result) => Object.entries(result));

      resultsEntriesWithoutResidents.forEach((entry) => entry
        .splice(INDEX_OF_RESIDENTS_OBJECT, AMOUNT_OF_ITEMS_TO_BE_REVOVED_FROM_ARRAY));

      const objectResultsWithoutResidents = resultsEntriesWithoutResidents
        .map((entry) => Object.fromEntries(entry));

      setStarwarsData(objectResultsWithoutResidents);
    };
    getStarwarsPlanetsDataFromAPI();
  }, []);

  return starwarsData;
};

export default useStarwarsPlanetsData;
