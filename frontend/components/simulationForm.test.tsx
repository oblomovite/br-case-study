import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SimulationForm from './simulationForm'
import { fetchSimulationResults } from '@/app/services/api';

jest.mock('@/app/services/api', () => ({
  fetchSimulationResults: jest.fn(),
}));

describe('SimulationForm', () => {
  beforeEach(() => {
    fetchSimulationResults.mockClear();
  });

  it('renders the form', () => {
    render(<SimulationForm />);
    expect(screen.getByLabelText(/x₀/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/y₀/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/z₀/i)).toBeInTheDocument();
    // Add checks for other form fields
  });

});
