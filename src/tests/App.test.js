import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Filters component suite tests', () => {
  it('should filter planets by name', () => {
    render(<App />);
      
    const nameFilter = screen.getByTestId('name-filter')
    
    userEvent.type(nameFilter, 'Naboo')
  });
});