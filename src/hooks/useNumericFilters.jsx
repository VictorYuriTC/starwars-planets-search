import { useContext, useEffect } from 'react';
import filterPlanetsContext from '../context/filterPlanetsContext';
import useStarwarsPlanetsData from './useStarwarsPlanetsData';

const useNumericFilters = () => {
  const { selectedFilters,
    starwarsFilteredPlanets,
    setStarwarsFilteredPlanets,
  } = useContext(filterPlanetsContext);

  const starwarsData = useStarwarsPlanetsData();

  // dynamically working thankfully to Lala :)

  useEffect(() => {
    const filterBySelectedColumn = () => {
      selectedFilters.forEach(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          const filteredPlanets = starwarsFilteredPlanets
            .filter((planet) => Number(planet[column]) > Number(value));
          setStarwarsFilteredPlanets(filteredPlanets);
        }

        if (comparison === 'igual a') {
          const filteredPlanets = starwarsFilteredPlanets
            .filter((planet) => Number(planet[column]) === Number(value));
          setStarwarsFilteredPlanets(filteredPlanets);
        }

        if (comparison === 'menor que') {
          const filteredPlanets = starwarsFilteredPlanets
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

export default useNumericFilters;
