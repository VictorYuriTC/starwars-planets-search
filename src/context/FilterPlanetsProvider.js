import React, { useState } from 'react';
import PropTypes from 'prop-types';
import filterPlanetsContext from './filterPlanetsContext';

function FilterPlanetsProvider({ children }) {
  const [filterByName, setFilterByName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [isFilteringByNumericInfo, setIsFilteringByNumbericInfo] = useState(false);
  const filterByNumericValues = { column, comparison, value };
  const setFilterByNumbericValues = { setColumn, setComparison, setValue };

  const contextValue = {
    filterByName,
    setFilterByName,
    isFilteringByNumericInfo,
    setIsFilteringByNumbericInfo,
    filterByNumericValues,
    setFilterByNumbericValues,
  };

  return (
    <filterPlanetsContext.Provider
      value={ contextValue }
    >
      { children }
    </filterPlanetsContext.Provider>
  );
}

FilterPlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FilterPlanetsProvider;
