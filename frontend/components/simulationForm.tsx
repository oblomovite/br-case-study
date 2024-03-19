'use client';
import React, { useState } from 'react';
import { fetchSimulationResults } from '@/app/services/api';
import { SimulationParams, SimulationResult } from '@/app/types/models';
import Form from 'react-bootstrap/Form';
import { Button, Row, Col, Toast, Container } from 'react-bootstrap';
import ResultsTable from './ResultsTable';

const paramLabels = {
  x0: 'x₀',
  y0: 'y₀',
  z0: 'z₀',
  sigma: 'σ (sigma)',
  rho: 'ρ (rho)',
  beta: 'β (beta)',
  delta_t: 'Δt (delta t)',
};

export default function SimulationForm(): React.JSX.Element {
  const [params, setParams] = useState<SimulationParams>({
    x0: 1,
    y0: 1,
    z0: 1,
    sigma: 1,
    rho: 1,
    beta: 1,
    delta_t: 0.1,
  });
  const [results, setResults] = useState<SimulationResult[] | null>(null);
  const [validated, setValidated] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setParams({ ...params, [name]: parseFloat(value) });
  };

const handleSubmit = async (event: { preventDefault: () => void; currentTarget: any; stopPropagation: () => void; }) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) {
    event.stopPropagation();
    setValidated(true);
  } else {
    try {
      const response = await fetchSimulationResults(params);
      if (response.error) {
        setToastMessage(response.error);
        setShowToast(true);
      } else {
        setShowToast(false);
      }
      setResults(response.results);
    } catch (error) {
      console.error('Error fetching results:', error);
      setValidated(true);

      let errorMessage = 'An unexpected error occurred. Please try again later.';
      setToastMessage(errorMessage);
      setShowToast(true);
    }
  }
};


  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <header className='bg-gray-800 text-white p-4'>
            <div className='max-w-5xl mx-auto flex justify-between items-center'>
              <h1>AI Labs | Full Stack Case Study</h1>
              <button
                type='submit'
                className='px-4 py-2 bg-primary hover:bg-primary-light active:bg-primary-dark text-white rounded hover:bg-blue-600'
                disabled={(e) => !e.target.form.checkValidity()}
              >
                Run
              </button>
            </div>
          </header>
        </Row>
        <Row className='mb-3'>
          {Object.entries(params).map(([key, value]) => (
            <Col key={key}>
              <Form.Group controlId={key} key={key}>
                <Form.Label>{paramLabels[key]}</Form.Label>
                <Form.Control
                  type='number'
                  name={key}
                  value={value.toString()}
                  onChange={handleChange}
                  isInvalid={
                    validated &&
                    (value === '' || (key === 'delta_t' && value === 0))
                  }
                  required
                />
                <Form.Control.Feedback type='invalid'>
                  {key === 'delta_t'
                    ? 'Δt cannot be 0.'
                    : 'Required'}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          ))}
        </Row>
      </Form>

      <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1050 }}>
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={4000}
          autohide
        >
          <Toast.Header>
            <strong className='me-auto'>Error Notification</strong>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </div>
      {results && <ResultsTable results={results} />}
    </>
  );
}
