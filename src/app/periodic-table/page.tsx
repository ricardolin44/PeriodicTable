'use client';

import { useState } from 'react';
import periodicTableData from '@/data/periodicTableData.json';
import { ElementData, PeriodicTableData } from '@/types/type';
import PeriodicTableCard from './components/PeriodicTableCard';
import PeriodicTable from './components/PeriodicTable';
import Header from '@/components/Header';

function PeriodicTablePage() {
  const data: PeriodicTableData = periodicTableData;
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);
  return (
    <div className="bg-periodicBackground-dark min-h-screen w-screen flex flex-col">
      <Header />
      <div className="flex flex-grow p-10">
        {/* Periodic Table */}
        <div className="w-3/4 flex flex-grow justify-center pr-8">
          <PeriodicTable data={data} setSelectedElement={setSelectedElement} />
        </div>
        {/* Element Details */}
        <div className="w-1/4">
          <PeriodicTableCard selectedElement={selectedElement} />
        </div>
      </div>
    </div>
  );
}

export default PeriodicTablePage;
