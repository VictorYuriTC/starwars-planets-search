import { useState, useContext, useEffect } from 'react';
import filterPlanetsContext from '../context/filterPlanetsContext';
import useStarwarsPlanetsData from './useStarwarsPlanetsData';

const useNumericFilters = () => {
  const { selectedFilters } = useContext(filterPlanetsContext);
  const starwarsData = useStarwarsPlanetsData();
  const [starwarsFilteredPlanets, setStarwarsFilteredPlanets] = useState([]);

  useEffect(() => {
    const filterAllPlanets = () => {
      setStarwarsFilteredPlanets(starwarsData);
    };

    filterAllPlanets();
  }, [starwarsData]);

  /*   useEffect(() => {
    const filterByOrbitalPeriod = () => {
      selectedFilters.forEach(({ column, comparison, value }) => {
        if (column === 'orbital_period') {
          if (comparison === 'maior que') {
            const filteredPlanets = starwarsFilteredPlanets
              .filter((planet) => Number(planet.orbital_period) > Number(value));
            setStarwarsFilteredPlanets(filteredPlanets);
          }

          if (comparison === 'igual a') {
            const filteredPlanets = starwarsFilteredPlanets
              .filter((planet) => Number(planet.orbital_period) === Number(value));
            setStarwarsFilteredPlanets(filteredPlanets);
          }

          if (comparison === 'menor que') {
            const filteredPlanets = starwarsFilteredPlanets
              .filter((planet) => Number(planet.orbital_period) < Number(value));
            setStarwarsFilteredPlanets(filteredPlanets);
          }
        }
      });
    };

    filterByOrbitalPeriod();
  }, [selectedFilters]);

  useEffect(() => {
    const filterByDiameter = () => {
      selectedFilters.forEach(({ column, comparison, value }) => {
        if (column === 'diameter') {
          if (comparison === 'maior que') {
            const filteredPlanets = starwarsFilteredPlanets
              .filter(({ diameter }) => Number(diameter) > Number(value));
            setStarwarsFilteredPlanets(filteredPlanets);
          }

          if (comparison === 'igual a') {
            const filteredPlanets = starwarsFilteredPlanets
              .filter(({ diameter }) => Number(diameter) === Number(value));
            setStarwarsFilteredPlanets(filteredPlanets);
          }

          if (comparison === 'menor que') {
            const filteredPlanets = starwarsFilteredPlanets
              .filter(({ diameter }) => Number(diameter) < Number(value));
            setStarwarsFilteredPlanets(filteredPlanets);
          }
        }
      });
    };

    filterByDiameter();
  }, [selectedFilters]); */

  /* useEffect(() => {
    const filterByRotationPeriod = () => {
      selectedFilters.forEach(({ column, comparison, value }) => {
        if (column === 'rotation_period') {
          if (comparison === 'maior que') {
            const filteredPlanets = starwarsFilteredPlanets
              .filter((planet) => Number(planet.rotation_period) > Number(value));
            setStarwarsFilteredPlanets(filteredPlanets);
          }

          if (comparison === 'igual a') {
            const filteredPlanets = starwarsFilteredPlanets
              .filter((planet) => Number(planet.rotation_period) === Number(value));
            setStarwarsFilteredPlanets(filteredPlanets);
          }

          if (comparison === 'menor que') {
            const filteredPlanets = starwarsFilteredPlanets
              .filter((planet) => Number(planet.rotation_period) < Number(value));
            setStarwarsFilteredPlanets(filteredPlanets);
          }
        }
      });
    };

    filterByRotationPeriod();
  }, [selectedFilters]); */

  useEffect(() => {
    const filterBySurfaceWater = () => {
      selectedFilters.forEach(({ column, comparison, value }) => {
        /* if (column === 'surface_water') { */
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
        /* } */
      });
    };

    filterBySurfaceWater();
  }, [selectedFilters]);

  /* useEffect(() => {
    const filterByPopulation = () => {
      selectedFilters.forEach(({ column, comparison, value }) => {
        if (column === 'population') {
          if (comparison === 'maior que') {
            const filteredPlanets = starwarsFilteredPlanets
              .filter(({ population }) => Number(population) > Number(value));
            setStarwarsFilteredPlanets(filteredPlanets);
          }

          if (comparison === 'igual a') {
            const filteredPlanets = starwarsFilteredPlanets
              .filter(({ population }) => Number(population) === Number(value));
            setStarwarsFilteredPlanets(filteredPlanets);
          }

          if (comparison === 'menor que') {
            const filteredPlanets = starwarsFilteredPlanets
              .filter(({ population }) => Number(population) < Number(value));
            setStarwarsFilteredPlanets(filteredPlanets);
          }
        }
      });
    };

    filterByPopulation();
  }, [selectedFilters]);
 */
  return starwarsFilteredPlanets;
};

export default useNumericFilters;
