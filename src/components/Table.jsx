import React, { useContext } from 'react';
import filterPlanetsContext from '../context/filterPlanetsContext';
import Filters from './Filters';
import PlanetTableRowCard from './PlanetTableRowCard';

function Table() {
  const { starwarsFilteredPlanets } = useContext(filterPlanetsContext);

  const renderFilteredPlanets = (
    starwarsFilteredPlanets.map((planet) => (
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
