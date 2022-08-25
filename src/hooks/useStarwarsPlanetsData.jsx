import { useState, useEffect, useContext } from 'react';
import filterPlanetsContext from '../context/filterPlanetsContext';

const useStarwarsPlanetsData = () => {
  const [starwarsData, setStarwarsData] = useState([]);
  const [starwarsFilteredPlanets, setStarwarsFilteredPlanets] = useState([]);
  const {
    setIsFilteringByNumbericInfo,
    filterByName,
  } = useContext(filterPlanetsContext);

  const { selectedFilters } = useContext(filterPlanetsContext);

  useEffect(() => {
    setIsFilteringByNumbericInfo(false);
  }, [filterByName]);

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

      const planetsWithoutResidentsObject = resultsEntries
        .map((entry) => Object.fromEntries(entry));

      setStarwarsFilteredPlanets(planetsWithoutResidentsObject);
      setStarwarsData(planetsWithoutResidentsObject);
    };
    getStarwarsPlanetsDataFromAPI();
  }, [selectedFilters]);

  useEffect(() => {
    const filterPlanetsByName = () => {
      setStarwarsFilteredPlanets(starwarsData
        .filter((planet) => planet.name.includes(filterByName)));
    };

    filterPlanetsByName();
  }, [filterByName]);

  // dynamically working thankfully to Lala :)

  useEffect(() => {
    const filterBySelectedColumn = () => {
      selectedFilters.forEach(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          const filteredPlanets = starwarsData
            .filter((planet) => Number(planet[column]) > Number(value));
          setStarwarsData(filteredPlanets);
        }

        if (comparison === 'igual a') {
          const filteredPlanets = starwarsData
            .filter((planet) => Number(planet[column]) === Number(value));
          setStarwarsFilteredPlanets(filteredPlanets);
        }

        if (comparison === 'menor que') {
          const filteredPlanets = starwarsData
            .filter((planet) => Number(planet[column]) < Number(value));
          setStarwarsFilteredPlanets(filteredPlanets);
        }
      });
    };

    filterBySelectedColumn();
  }, [selectedFilters]);

  useEffect(() => {
    const removeAllFilters = () => {
      if (selectedFilters.length === 0) {
        setStarwarsFilteredPlanets(starwarsData);
      }
    };

    removeAllFilters();
  }, [selectedFilters]);

  return starwarsFilteredPlanets;
};

export default useStarwarsPlanetsData;
