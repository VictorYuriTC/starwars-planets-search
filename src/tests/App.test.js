import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Filters component suite tests', () => {
  it('should filter planets by name', () => {
      render(<App />);

      const nameFilter = screen.getByTestId('name-filter');
      userEvent.type(nameFilter, 'Naboo')
  });

  it('should filter planets by numeric info', () => {
    render(<App />);
      const columnFilter = screen.getByTestId('column-filter');
      const comparisonFilter = screen.getByTestId('comparison-filter');
      const valueFilter = screen.getByTestId('value-filter');
      const buttonFilter = screen.getByTestId('button-filter');
    
      userEvent.selectOptions(columnFilter, 'surface_water')
      userEvent.selectOptions(comparisonFilter, 'maior que')
      userEvent.type(valueFilter, '1000')
      userEvent.click(buttonFilter)
  })
});