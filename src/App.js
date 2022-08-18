import React, { useState } from 'react';
import Table from './components/Table';
import filterPlanetsContext from './context/filterPlanetsContext';

function App() {
  const [filterByName, setFilterByName] = useState('');

  return (
    <filterPlanetsContext.Provider value={ { filterByName, setFilterByName } }>
      <Table />
    </filterPlanetsContext.Provider>
  );
}

export default App;
