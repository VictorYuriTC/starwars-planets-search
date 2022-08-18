import React, { useEffect, useContext } from 'react';
import filterPlanetsContext from '../context/filterPlanetsContext';
import useNumericFilters from '../hooks/useNumericFilters';
import useStarwarsPlanetsData from '../hooks/useStarwarsPlanetsData';
import Filters from './Filters';
import PlanetTableRowCard from './PlanetTableRowCard';

function Table() {
  const starwarsPlanetsData = useStarwarsPlanetsData();
  const starwarsPlanetsFilteredByNumericInfo = useNumericFilters();
  const { isFilteringByNumericInfo } = useContext(filterPlanetsContext);

  const planetsToBeRendered = () => {
    if (!isFilteringByNumericInfo) {
      return starwarsPlanetsData;
    }
    if (isFilteringByNumericInfo) {
      return starwarsPlanetsFilteredByNumericInfo;
    }
  };

  useEffect(() => {
  }, [starwarsPlanetsData]);

  const renderFilteredPlanets = (
    planetsToBeRendered().map((planet) => (
      <PlanetTableRowCard
        key={ planet.url }
        planet={ planet }
      />))
  );

  return (
    <>
      <Filters />
      <table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Rotation Period
            </th>
            <th>
              Orbital Period
            </th>
            <th>
              Diameter
            </th>
            <th>
              Climate
            </th>
            <th>
              Gravity
            </th>
            <th>
              Terrain
            </th>
            <th>
              Surface Water
            </th>
            <th>
              Population
            </th>
            <th>
              Films
            </th>
            <th>
              Created
            </th>
            <th>
              Edited
            </th>
            <th>
              URL
            </th>
          </tr>
        </thead>
        <tbody>
          {
            renderFilteredPlanets
          }
        </tbody>
      </table>
    </>
  );
}

export default Table;
