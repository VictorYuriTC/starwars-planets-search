import React, { useState } from 'react';
import filterPlanetsContext from '../context/filterPlanetsContext';

function Filters() {
  const [searchedName, setSearchedName] = useState('');

  return (
    <>
      <filterPlanetsContext.Provider value={ searchedName }>
        <label htmlFor="name-filter">
          <input
            onChange={ setSearchedName() }
            id="name-filter"
            data-testid="name-filter"
            type="text"
          />
        </label>
      </filterPlanetsContext.Provider>
      <input
        type="text"
      />
    </>
  );
}

export default Filters;
