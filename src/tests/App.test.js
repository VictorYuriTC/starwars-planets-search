import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import FilterPlanetsProvider from '../context/FilterPlanetsProvider';

describe('Filters component suite tests', () => {
  it('should filter planets by name', () => {
      render(
        <FilterPlanetsProvider>
          <App />
        </FilterPlanetsProvider>
      );

      const nameFilter = screen.getByTestId('name-filter');
      userEvent.type(nameFilter, 'Naboo')
  });

  it('should filter planets by numeric info', async () => {
    render(
    <FilterPlanetsProvider>
      <App />
    </FilterPlanetsProvider>
    );

      const columnFilter = screen.getByTestId('column-filter');
      const comparisonFilter = screen.getByTestId('comparison-filter');
      const valueFilter = screen.getByTestId('value-filter');
      const buttonFilter = screen.getByTestId('button-filter');
    
      userEvent.selectOptions(columnFilter, 'population')
      userEvent.selectOptions(comparisonFilter, 'maior que')
      userEvent.type(valueFilter, '1000')
      userEvent.click(buttonFilter)

      userEvent.selectOptions(columnFilter, 'population')
      userEvent.selectOptions(comparisonFilter, 'menor que')
      userEvent.type(valueFilter, '10000')
      userEvent.click(buttonFilter)

      userEvent.selectOptions(columnFilter, 'population')
      userEvent.selectOptions(comparisonFilter, 'igual a')
      userEvent.type(valueFilter, '10000')
      userEvent.click(buttonFilter)

      userEvent.selectOptions(columnFilter, 'rotation_period')
      userEvent.selectOptions(comparisonFilter, 'maior que')
      userEvent.type(valueFilter, '1000')
      userEvent.click(buttonFilter)

      userEvent.selectOptions(columnFilter, 'rotation_period')
      userEvent.selectOptions(comparisonFilter, 'menor que')
      userEvent.type(valueFilter, '10000')
      userEvent.click(buttonFilter)

      userEvent.selectOptions(columnFilter, 'rotation_period')
      userEvent.selectOptions(comparisonFilter, 'igual a')
      userEvent.type(valueFilter, '10000')
      userEvent.click(buttonFilter)

      userEvent.selectOptions(columnFilter, 'orbital_period')
      userEvent.selectOptions(comparisonFilter, 'maior que')
      userEvent.type(valueFilter, '1000')
      userEvent.click(buttonFilter)

      userEvent.selectOptions(columnFilter, 'orbital_period')
      userEvent.selectOptions(comparisonFilter, 'menor que')
      userEvent.type(valueFilter, '10000')
      userEvent.click(buttonFilter)

      userEvent.selectOptions(columnFilter, 'orbital_period')
      userEvent.selectOptions(comparisonFilter, 'igual a')
      userEvent.type(valueFilter, '10000')
      userEvent.click(buttonFilter)

      userEvent.selectOptions(columnFilter, 'diameter')
      userEvent.selectOptions(comparisonFilter, 'maior que')
      userEvent.type(valueFilter, '1000')
      userEvent.click(buttonFilter)

      userEvent.selectOptions(columnFilter, 'diameter')
      userEvent.selectOptions(comparisonFilter, 'menor que')
      userEvent.type(valueFilter, '10000')
      userEvent.click(buttonFilter)

      userEvent.selectOptions(columnFilter, 'diameter')
      userEvent.selectOptions(comparisonFilter, 'igual a')
      userEvent.type(valueFilter, '10000')
      userEvent.click(buttonFilter)

      userEvent.selectOptions(columnFilter, 'surface_water')
      userEvent.selectOptions(comparisonFilter, 'maior que')
      userEvent.type(valueFilter, '1000')
      userEvent.click(buttonFilter)

      userEvent.selectOptions(columnFilter, 'surface_water')
      userEvent.selectOptions(comparisonFilter, 'menor que')
      userEvent.type(valueFilter, '10000')
      userEvent.click(buttonFilter)

      userEvent.selectOptions(columnFilter, 'surface_water')
      userEvent.selectOptions(comparisonFilter, 'igual a')
      userEvent.type(valueFilter, '10000')
      userEvent.click(buttonFilter)

      await waitFor(() => expect(screen.findByText(/naboo/i)).toBeInTheDocument())
  });
});