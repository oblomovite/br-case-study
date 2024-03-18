'use client';

import { fetchSimulationResults } from '@/app/services/api';
import {
  SimulationParams,
  SimulationResult,
} from '@/app/types/models';
import React, { useState } from 'react';

function Header() {
  return (
    <div className="flex justify-between items-center w-full max-w-5xl font-mono text-sm">
      <div className="flex-grow">
        <p>
          AI Labs | <strong> Full stack case study </strong>{' '}
        </p>
      </div>
      <button className="py-2 px-4 bg-gray-200 text-black rounded hover:bg-gray-300" type='submit' onClick={() => {console.log('Run')}}
      >
        Run
      </button>

    </div>
  );
}

function ResultsTable({ results }: { results: SimulationResult[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>N</th>
          <th>x</th>
          <th>y</th>
          <th>z</th>
        </tr>
      </thead>
      <tbody>
        {results.map((row, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{row.x}</td>
            <td>{row.y}</td>
            <td>{row.z}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// This component is a form that takes in the values for the equation and will send them to the backend as parameters for the simulation
export default function SimulationForm(): React.JSX.Element {
  // set the initial state of the input fields
  const [params, setParams] = useState<SimulationParams>({
    x0: '',
    y0: '',
    z0: '',
    sigma: '',
    rho: '',
    beta: '',
    delta_t: '',
  });

  const [results, setResults] = useState<SimulationResult[] | null>(null);

  // update the state when the input fields change
  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setParams({ ...params, [name]: parseFloat(value) });
  };

  // send the input values to the backend and handle the response
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const apiResults = await fetchSimulationResults(params);

      console.log('results: ', apiResults);
      // update the state with the results from the backend
      setResults(apiResults);
    } catch (error) {
      // Handle errors, possibly update the UI to inform the user
      console.error('Failed to fetch results:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Header />
        <input
          type="text"
          name="x0"
          placeholder="Value for x0"
          onChange={handleChange}
        />
        <input
          type="text"
          name="y0"
          placeholder="Value for y0"
          onChange={handleChange}
        />
        <input
          type="text"
          name="z0"
          placeholder="Value for z0"
          onChange={handleChange}
        />
        <input
          type="text"
          name="sigma"
          placeholder="Value for sigma"
          onChange={handleChange}
        />
        <input
          type="text"
          name="rho"
          placeholder="Value for rho"
          onChange={handleChange}
        />
        <input
          type="text"
          name="beta"
          placeholder="Value for beta"
          onChange={handleChange}
        />
        <input
          type="text"
          name="delta_t"
          placeholder="Value for delta_t"
          onChange={handleChange}
        />
        <button type="submit">Run Simulation</button>
      </form>

      {results ? <ResultsTable results={results} /> : null }

    </div>
  );
}
