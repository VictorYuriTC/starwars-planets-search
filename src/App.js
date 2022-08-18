import React, { useState } from 'react';
import Table from './components/Table';
import filterPlanetsContext from './context/filterPlanetsContext';

function App() {
  const [filterByName, setFilterByName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [isFilteringByNumericInfo, setIsFilteringByNumbericInfo] = useState(false);
  const filterByNumericValues = { column, comparison, value };
  const setFilterByNumbericValues = { setColumn, setComparison, setValue };

  return (
    <filterPlanetsContext.Provider
      value={ {
        filterByName,
        setFilterByName,
        isFilteringByNumericInfo,
        setIsFilteringByNumbericInfo,
        filterByNumericValues,
        setFilterByNumbericValues,
      } }
    >
      <Table />
    </filterPlanetsContext.Provider>
  );
}

export default App;
