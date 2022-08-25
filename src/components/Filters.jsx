import React, { useState, useContext, useEffect } from 'react';
import filterPlanetsContext from '../context/filterPlanetsContext';
import OptionCard from './OptionCard';

function Filters() {
  const {
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumbericValues,
    selectedFilters,
    setSelectedFilters,
    columnOptions,
    setColumnOptions,
  } = useContext(filterPlanetsContext);

  const {
    column,
    comparison,
    value,
  } = filterByNumericValues;

  const {
    setColumn,
    setComparison,
    setValue,
  } = setFilterByNumbericValues;

  const removeColumnOptionFromSelect = () => {
    const columnOptionsAfterDeletion = columnOptions
      .filter((option) => option !== column);
    /*       console.log(columnOptionsAfterDeletion); */
    setColumnOptions(columnOptionsAfterDeletion);
  };

  const onClickSaveNewFilter = () => {
    setSelectedFilters([...selectedFilters, { column, comparison, value }]);

    removeColumnOptionFromSelect();
    setColumn(columnOptions[1]);
  };

  const onClickRemoveAllFilters = () => {
    setSelectedFilters([]);
  };

  const renderColumnOptions = (
    columnOptions.map((option) => (
      <OptionCard key={ option } columnName={ option } />
    ))
  );
  /*
  useEffect(() => {
    const removeColumnOptionFromSelect = () => {
      const columnOptionsAfterDeletion = columnOptions
        .filter((option) => option ===);
      console.log(columnOptionsAfterDeletion);
      setColumnOptions(columnOptionsAfterDeletion);
    };

    removeColumnOptionFromSelect();
  }, [selectedFilters]); */

  return (
    <>
      <label htmlFor="name-filter">
        Pesquisar por nome:
        <input
          name="filterByName"
          value={ filterByName }
          onChange={ ({ target }) => setFilterByName(target.value) }
          id="name-filter"
          data-testid="name-filter"
          type="text"
        />
      </label>
      <label htmlFor="column-filter">
        Pesquisar por:
        <select
          name="column"
          value={ column }
          onChange={ ({ target }) => setColumn(target.value) }
          id="column-filter"
          data-testid="column-filter"
        >
          { renderColumnOptions }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          name="comparasion"
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target }) => setComparison(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          type="number"
          placeholder="Quantidade"
          data-testid="value-filter"
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ onClickSaveNewFilter }
      >
        Filtrar
      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ onClickRemoveAllFilters }
      >
        Remover filtros
      </button>
    </>
  );
}

export default Filters;
