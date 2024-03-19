// apiService.js

import { SimulationParams, SimulationResponse } from '../types/models';

/**
 * Function to submit simulation parameters and fetch results.
 * @param {Object} params Parameters for the simulation.
 * @returns {Promise<SimulationResponse>} The fetched response including results and possibly an error message.
 */
export async function fetchSimulationResults(
  params: SimulationParams
): Promise<SimulationResponse> {
  console.log('Sending payload:', JSON.stringify(params));

  try {
    const response = await fetch('http://localhost:8000/api/simulate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      // Attempt to parse the error message from the response body
      const errorBody = await response.json();
      throw new Error(errorBody.detail || 'An unexpected error occurred');
    }

    const data: SimulationResponse = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    // Ensure the error is of type Error for consistent error handling
    throw error instanceof Error ? error : new Error('An unknown error occurred');
  }
}
