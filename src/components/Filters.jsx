import React, { useContext } from 'react';
import filterPlanetsContext from '../context/filterPlanetsContext';

function Filters() {
  const {
    filterByName,
    setFilterByName,
    setIsFilteringByNumbericInfo,
    filterByNumericValues,
    setFilterByNumbericValues,
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
          <option value="population">
            population
          </option>
          <option value="orbital_period">
            orbital_period
          </option>
          <option value="diameter">
            diameter
          </option>
          <option value="rotation_period">
            rotation_period
          </option>
          <option value="surface_water">
            surface_water
          </option>
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
        onClick={ () => { setIsFilteringByNumbericInfo(true); } }
      >
        Filtrar
      </button>
    </>
  );
}

export default Filters;
