import React, { useContext } from 'react';
import filterPlanetsContext from '../context/filterPlanetsContext';
import Filters from './Filters';
import PlanetTableRowCard from './PlanetTableRowCard';
import useNumericFilters from '../hooks/useNumericFilters';

function Table() {
  const { selectedFilters, setSelectedFilters } = useContext(filterPlanetsContext);
  const filteredPlanets = useNumericFilters();

  const renderFilteredPlanets = (
    filteredPlanets.map((planet) => (
      <PlanetTableRowCard
        key={ planet.url }
        planet={ planet }
      />))
  );
  return (
    <>
      <Filters />
      {/* problem solved according to Braddock's explanation :)
      Source: https://trybecourse.slack.com/archives/C0370KS57QW/p1661280523886229 */}
      { selectedFilters.map((filter, index) => (
        <button
          type="button"
          key={ index }
          data-testid="filter"
          onClick={ () => {
            const cloneArray = [...selectedFilters];
            cloneArray.splice(index);
            setSelectedFilters(cloneArray);
          } }
        >
          {filter.column}
          {' '}
          {filter.comparison}
          {' '}
          {filter.value}
        </button>
      )) }
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
