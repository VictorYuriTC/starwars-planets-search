import React, { useEffect } from 'react';
import useStarwarsPlanetsData from '../hooks/useStarwarsPlanetsData';
import PlanetTableRowCard from './PlanetTableRowCard';

function Table() {
  const starwarsPlanetsData = useStarwarsPlanetsData();

  useEffect(() => {
  }, [starwarsPlanetsData]);

  return (
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
          starwarsPlanetsData.map((planet) => (
            <PlanetTableRowCard
              key={ planet.url }
              planet={ planet }
            />
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
