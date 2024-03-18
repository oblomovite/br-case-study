// apiService.js

import { SimulationParams, SimulationResult } from "../types/models";


/**
 * Function to submit simulation parameters and fetch results.
 * @param {Object} params Parameters for the simulation.
 * @returns {Promise<SimulationResults>} The fetched results.
 */
export async function fetchSimulationResults(params: SimulationParams): Promise<SimulationResult[]> {
  try {
    const response = await fetch('http://localhost:8000/api/simulate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Assuming the API returns an object with the results
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error; // Re-throw the error so it can be caught and handled by the caller
  }
}
