import React, { useContext } from 'react';
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

  const onClickSaveNewFilter = () => {
    setSelectedFilters([...selectedFilters, { column, comparison, value }]);
  };

  const onClickRemoveAllFilters = () => {
    setSelectedFilters([]);
  };

  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const renderColumnOptions = (
    columnOptions.map((option) => (
      <OptionCard key={ option } columnName={ option } />
    ))
  );

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
