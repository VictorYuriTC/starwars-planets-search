import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import mockData from './helpers/mockData'

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
  });

  it('should fetch the correct API after component mounting', async () => {
    render(<App />)
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockData),
    }));

    const planet = await screen.findByText(/alderaan/i);
    const climate = await screen.findByText(/temperate/i); 
    const terrain = await screen.findByText(/grasslands, mountains/i);
    const orbitalPeriod = await screen.findByText(/364/i);
    const diameter = await screen.findByText(/12500/i);
    const gravity = await screen.findByText(/1 standard/i);
    const surfaceWater = await screen.findByText(/40/i);
    const population = await screen.findByText(/2000000000/i);
    const films = await screen.findByText(/alderaan/i);
    const created = await screen.findByText(/alderaan/i); 
    const edited = await screen.findByText(/alderaan/i); 
    const url = await screen.findByText(/alderaan/i);
  })
});