import React, { useContext } from 'react';
import filterPlanetsContext from '../context/filterPlanetsContext';

function Filters() {
  const { filterByName, setFilterByName } = useContext(filterPlanetsContext);
  return (
    <label htmlFor="name-filter">
      Buscar planeta por nome:
      <input
        name="filterByName"
        value={ filterByName }
        onChange={ ({ target: { value } }) => setFilterByName(value) }
        id="name-filter"
        data-testid="name-filter"
        type="text"
      />
    </label>
  );
}

export default Filters;
