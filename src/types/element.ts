export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  category: string;
  group: number;
  period: number;
  block: string;
  electronConfiguration: string;
  electronegativity: number;
  atomicRadius: number;
  meltingPoint: number;
  boilingPoint: number;
  density: number;
  description: string;
  discoveredBy?: string;
  yearDiscovered?: number;
  color: string;
}
