export interface SimulationParams {
  x0: number | null;
  y0: number | null;
  z0: number | null;
  sigma: number | null;
  rho: number | null;
  beta: number | null;
  delta_t: number | null;
}
export interface SimulationResult{
      x: number | string;
      y: number | string;
      z: number | string;
}
export interface SimulationResponse {
  results: SimulationResult[];
  error?: string;
}