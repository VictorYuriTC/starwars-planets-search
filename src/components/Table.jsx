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

  useEffect(() => {
  }, [starwarsPlanetsData]);

  const renderFilteredPlanets = () => {
    if (isFilteringByNumericInfo) {
      return (
        starwarsPlanetsFilteredByNumericInfo.map((planet) => (
          <PlanetTableRowCard
            key={ planet.url }
            planet={ planet }
          />))
      );
    }

    if (!isFilteringByNumericInfo) {
      return starwarsPlanetsData.map((planet) => (
        <PlanetTableRowCard
          key={ planet.url }
          planet={ planet }
        />
      ));
    }
  };

  const renderPlanets = renderFilteredPlanets();

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
            renderPlanets
          }
        </tbody>
      </table>
    </>
  );
}

export default Table;
