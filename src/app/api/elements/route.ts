import { NextRequest, NextResponse } from 'next/server';
import periodicTableData from '@/data/periodicTableData.json';

interface Element {
  name: string;
  appearance: string | null;
  atomic_mass: number;
  boil: number | null;
  category: string;
  density: number;
  discovered_by: string | null;
  melt: number | null;
  molar_heat: number | null;
  named_by: string | null;
  number: number;
  period: number;
  group: number;
  phase: string;
  source: string;
  summary: string;
  symbol: string;
  xpos: number;
  ypos: number;
  shells: number[];
  electron_configuration: string;
  electron_configuration_semantic: string;
  electron_affinity: number | null;
  electronegativity_pauling: number | null;
  block: string;
}

interface PeriodicTableData {
  elements: Record<string, Element>;
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  // If an ID is provided, return just that element
  if (id) {
    const elements = (periodicTableData as unknown as PeriodicTableData).elements;
    const element = Object.values(elements).find(e => e.number === parseInt(id) || e.symbol === id);
    if (!element) {
      return NextResponse.json({ error: 'Element not found' }, { status: 404 });
    }
    return NextResponse.json(element);
  }
  // Otherwise return all elements (or paginated results)
  const elementsArray = Object.values((periodicTableData as unknown as PeriodicTableData).elements);
  return NextResponse.json(elementsArray);
}
