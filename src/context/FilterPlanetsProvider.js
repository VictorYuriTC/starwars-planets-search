import React, { useState } from 'react';
import PropTypes from 'prop-types';
import filterPlanetsContext from './filterPlanetsContext';

function FilterPlanetsProvider({ children }) {
  const [filterByName, setFilterByName] = useState('');
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [column, setColumn] = useState(columnOptions[0]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [isFilteringByNumericInfo, setIsFilteringByNumbericInfo] = useState(false);
  const filterByNumericValues = { column, comparison, value };
  const setFilterByNumbericValues = { setColumn, setComparison, setValue };
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [starwarsFilteredPlanets, setStarwarsFilteredPlanets] = useState([]);
  // inspired by Braddock's weather App class :)

  const contextValue = {
    filterByName,
    setFilterByName,
    isFilteringByNumericInfo,
    setIsFilteringByNumbericInfo,
    filterByNumericValues,
    setFilterByNumbericValues,
    selectedFilters,
    setSelectedFilters,
    starwarsFilteredPlanets,
    setStarwarsFilteredPlanets,
    columnOptions,
    setColumnOptions,
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
