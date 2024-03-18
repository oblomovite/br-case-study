
export interface SimulationParams {
  x0: number | String;
  y0: number | String;
  z0: number | String;
  sigma: number | String;
  rho: number | String;
  beta: number | String;
  delta_t: number | String;
}
export interface SimulationResult{
      x: number;
      y: number;
      z: number;
}

export interface SimulationFormProps {
  onResults: (data: SimulationParams) => void;
}