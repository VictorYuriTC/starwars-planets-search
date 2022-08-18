import { useState, useEffect, useContext } from 'react';
import filterPlanetsContext from '../context/filterPlanetsContext';

const useStarwarsPlanetsData = () => {
  const [starwarsData, setStarwarsData] = useState([]);
  const { filterByName } = useContext(filterPlanetsContext);

  useEffect(() => {
    const getStarwarsPlanetsDataFromAPI = async () => {
      const starwarsPlanetsURL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const starwarsPlanetsResponse = await fetch(starwarsPlanetsURL);
      const starwarsPlanetsData = await starwarsPlanetsResponse.json();

      const INDEX_OF_RESIDENTS_OBJECT = 9;
      const AMOUNT_OF_ITEMS_TO_BE_REVOVED_FROM_ARRAY = 1;
      const { results } = starwarsPlanetsData;

      const resultsEntries = results
        .map((result) => Object.entries(result));

      resultsEntries.forEach((entry) => entry
        .splice(INDEX_OF_RESIDENTS_OBJECT, AMOUNT_OF_ITEMS_TO_BE_REVOVED_FROM_ARRAY));

      const objectResultsWithoutResidents = resultsEntries
        .map((entry) => Object.fromEntries(entry));

      setStarwarsData(objectResultsWithoutResidents
        .filter((planet) => planet.name.includes(filterByName)));
    };
    getStarwarsPlanetsDataFromAPI();
  }, [filterByName]);

  return starwarsData;
};

export default useStarwarsPlanetsData;
