import { useState, useContext, useEffect } from 'react';
import filterPlanetsContext from '../context/filterPlanetsContext';
import useStarwarsPlanetsData from './useStarwarsPlanetsData';

const useNumericFilters = () => {
  const { filterByNumericValues } = useContext(filterPlanetsContext);
  const starwarsData = useStarwarsPlanetsData();
  const [starwarsFilteredPlanets, setStarwarsFilteredPlanets] = useState([]);
  const {
    column,
    comparison,
    value,
  } = filterByNumericValues;

  useEffect(() => {
    const filterByPopulation = () => {
      if (column !== 'population') return;

      if (comparison === 'maior que') {
        setStarwarsFilteredPlanets(starwarsData
          .filter(({ population }) => Number(population) > Number(value)));
      }

      if (comparison === 'igual a') {
        setStarwarsFilteredPlanets(starwarsData
          .filter(({ population }) => Number(population) === Number(value)));
      }

      if (comparison === 'menor que') {
        setStarwarsFilteredPlanets(starwarsData
          .filter(({ population }) => Number(population) < Number(value)));
      }
    };

    filterByPopulation();
  }, [starwarsData, column, comparison, value]);

  useEffect(() => {
    const filterByOrbitalPeriod = () => {
      if (column !== 'orbital_period') return;

      if (comparison === 'maior que') {
        setStarwarsFilteredPlanets(starwarsData
          .filter((planet) => Number(planet.orbital_period) > Number(value)));
      }

      if (comparison === 'igual a') {
        setStarwarsFilteredPlanets(starwarsData
          .filter((planet) => Number(planet.orbital_period) === Number(value)));
      }

      if (comparison === 'menor que') {
        setStarwarsFilteredPlanets(starwarsData
          .filter((planet) => Number(planet.orbital_period) < Number(value)));
      }
    };

    filterByOrbitalPeriod();
  }, [starwarsData, column, comparison, value]);

  useEffect(() => {
    const filterByDiameter = () => {
      if (column !== 'diameter') return;

      if (comparison === 'maior que') {
        setStarwarsFilteredPlanets(starwarsData
          .filter(({ diameter }) => Number(diameter) > Number(value)));
      }

      if (comparison === 'igual a') {
        setStarwarsFilteredPlanets(starwarsData
          .filter(({ diameter }) => Number(diameter) === Number(value)));
      }

      if (comparison === 'menor que') {
        setStarwarsFilteredPlanets(starwarsData
          .filter(({ diameter }) => Number(diameter) < Number(value)));
      }
    };

    filterByDiameter();
  }, [starwarsData, column, comparison, value]);

  useEffect(() => {
    const filterByRotationPeriod = () => {
      if (column !== 'rotation_period') return;

      if (comparison === 'maior que') {
        setStarwarsFilteredPlanets(starwarsData
          .filter((planet) => Number(planet.rotation_period) > Number(value)));
      }

      if (comparison === 'igual a') {
        setStarwarsFilteredPlanets(starwarsData
          .filter((planet) => Number(planet.rotation_period) === Number(value)));
      }

      if (comparison === 'menor que') {
        setStarwarsFilteredPlanets(starwarsData
          .filter((planet) => Number(planet.rotation_period) < Number(value)));
      }
    };

    filterByRotationPeriod();
  }, [starwarsData, column, comparison, value]);

  useEffect(() => {
    const filterBySurfaceWater = () => {
      if (column !== 'surface_water') return;

      if (comparison === 'maior que') {
        setStarwarsFilteredPlanets(starwarsData
          .filter((planet) => Number(planet.surface_water) > Number(value)));
      }

      if (comparison === 'igual a') {
        setStarwarsFilteredPlanets(starwarsData
          .filter((planet) => Number(planet.surface_water) === Number(value)));
      }

      if (comparison === 'menor que') {
        setStarwarsFilteredPlanets(starwarsData
          .filter((planet) => Number(planet.surface_water) < Number(value)));
      }
    };

    filterBySurfaceWater();
  }, [starwarsData, column, comparison, value]);

  return starwarsFilteredPlanets;
};

export default useNumericFilters;
