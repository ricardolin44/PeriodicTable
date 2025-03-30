import { NextResponse } from 'next/server';
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

export async function GET() {
  // Convert the object of elements into an array
  const elementsArray = Object.values((periodicTableData as unknown as PeriodicTableData).elements);
  return NextResponse.json(elementsArray);
}

export async function GET_ONE(request: Request) {
  const { searchParams } = new URL(request.url);
  const atomicNumber = searchParams.get('atomicNumber');

  if (!atomicNumber) {
    return NextResponse.json({ error: 'Atomic number is required' }, { status: 400 });
  }

  const elements = (periodicTableData as unknown as PeriodicTableData).elements;
  const element = Object.values(elements).find(e => e.number === parseInt(atomicNumber));

  if (!element) {
    return NextResponse.json({ error: 'Element not found' }, { status: 404 });
  }

  return NextResponse.json(element);
}
