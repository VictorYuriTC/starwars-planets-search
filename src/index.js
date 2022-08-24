import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FilterPlanetsProvider from './context/FilterPlanetsProvider';

ReactDOM.render(
  <FilterPlanetsProvider>
    <App />
  </FilterPlanetsProvider>,
  document.getElementById('root'),
);
