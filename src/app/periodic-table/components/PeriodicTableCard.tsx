'use client';

import { ElementData } from '@/types/type';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useState, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import dynamic from 'next/dynamic';
import { convertTemperature } from '@/utils/calculations';

// Dynamically import Three.js components with no SSR
const AtomCanvas = dynamic(() => import('@/components/three/AtomCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-[15vw] h-[25vh] bg-gray-800 rounded-lg flex items-center justify-center">
      <p className="text-white text-center">Loading 3D View...</p>
    </div>
  ),
});

interface PeriodicTableCardProps {
  selectedElement: ElementData | null;
}

const PeriodicTableCard = (props: PeriodicTableCardProps) => {
  const [selectedTemperatureUnit, setSelectedTemperatureUnit] = useState('kelvin');
  const [activePopup, setActivePopup] = useState<string | null>(null);
  
  const handlePopup = (popupID: string) => {
    setActivePopup(popupID);
  };
  
  const closePopup = () => {
    setActivePopup(null);
  };
  
  if (!props.selectedElement) return null;
  
  const convertedBoilTemperature = convertTemperature(
    props.selectedElement.boil ?? 0,
    selectedTemperatureUnit
  );
  const convertedMeltTemperature = convertTemperature(
    props.selectedElement.melt ?? 0,
    selectedTemperatureUnit
  );
  
  return (
    <div className="h-full">
      <ScrollArea className="h-[450px] overflow-y-auto pt-0 mb-6 text-gray-300 pr-3">
        {props.selectedElement ? (
          <div>
            <div className="flex">
              <img
                src={props.selectedElement.image?.url}
                alt={props.selectedElement.name}
                className="h-60 max-w-72 object-cover mb-4"
              />
              <Suspense fallback={
                <div className="w-[15vw] h-[25vh] bg-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-white text-center">Loading 3D View...</p>
                </div>
              }>
                <AtomCanvas electronConfig={props.selectedElement.electron_configuration} />
              </Suspense>
            </div>
            <h2 className="text-3xl font-bold mb-2">
              {props.selectedElement.name}
            </h2>
            {props.selectedElement.summary}
          </div>
        ) : (
          <p className="text-center">Select an element to see details</p>
        )}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <section className="grid grid-rows-10 gap-y-1 px-2 py-1 border border-gray-500 rounded-md text-gray-300">
        <div className="flex justify-between border-b-2 border-gray-800 pb-1">
          <p>Appearance</p>
          <div className="flex">
            {props.selectedElement?.color_rgba &&
            props.selectedElement?.color_rgba.length > 0 ? (
              props.selectedElement.color_rgba.map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border border-black transition-colors duration-300"
                  style={{
                    backgroundColor: color || 'rgba(255, 255, 255, 0.3)',
                  }}
                ></div>
              ))
            ) : (
              <p>None</p>
            )}
          </div>
        </div>
        <div className="flex justify-between border-b-2 border-gray-800 pb-1">
          <p>Group</p>
          <div>{props.selectedElement?.group_block}</div>
        </div>
        <div className="flex justify-between border-b-2 border-gray-800 pb-1">
          <p>Atomic Mass</p>
          <div>{props.selectedElement?.atomic_mass}</div>
        </div>
        <div className="flex justify-between border-b-2 border-gray-800 pb-1">
          <p>Density</p>
          <div>
            {props.selectedElement?.density} g/cm<sup>3</sup>
          </div>
        </div>
        <div className="flex justify-between border-b-2 border-gray-800 pb-1">
          <p>Melting Point</p>
          <div className="flex flex-row items-center space-x-2">
            <span className="">
              {convertedMeltTemperature.toFixed(2)}{' '}
              {selectedTemperatureUnit === 'kelvin'
                ? 'K'
                : selectedTemperatureUnit === 'celsius'
                  ? '°C'
                  : '°F'}
            </span>
          </div>
        </div>
        <div className="flex justify-between border-b-2 border-gray-800 pb-1">
          <span>Boiling Point</span>
          <span className="">
            {convertedBoilTemperature.toFixed(2)}{' '}
            {selectedTemperatureUnit === 'kelvin'
              ? 'K'
              : selectedTemperatureUnit === 'celsius'
                ? '°C'
                : '°F'}
          </span>
        </div>
        <div className="flex justify-between border-b-2 border-gray-800 pb-1">
          <p>Discovered By</p>
          <div>{props.selectedElement?.discovered_by}</div>
          <p>in</p>
          <div>{props.selectedElement?.year_discovered}</div>
        </div>
        <div className="flex justify-between border-b-2 border-gray-800 pb-1">
          <p>Oxidation States</p>
          <div>{props.selectedElement?.oxidation_state}</div>
        </div>
        <div className="flex justify-between border-b-2 border-gray-800 pb-1">
          <p>Electronegativity</p>
          <div>{props.selectedElement?.electronegativity_pauling}</div>
        </div>
        <div className="flex justify-between border-b-2 border-gray-800 pb-1">
          <p>Electron Affinity</p>
          <div>{props.selectedElement?.electron_affinity} kJ/mol</div>
        </div>
      </section>
      <section className="flex justify-end space-x-1">
        <Button onClick={() => handlePopup('unitsPopup')}>Change Units</Button>
        <Button onClick={() => handlePopup('detailsPopup')}>Details</Button>
        {activePopup && (
          <div className="fixed inset-0 bg-periodicBackground-dark bg-opacity-50  z-50 flex items-center justify-center">
            <div className="bg-periodicBackground-light rounded-lg p-6 max-w-80p max-h-80p shadow-lg relative text-white opacity-95 flex justify-center">
              <Button
                onClick={() => closePopup()}
                className="absolute top-2 right-2 hover:text-gray-500 transition w-10 h-10"
              >
                ✖
              </Button>
              {activePopup === 'unitsPopup' && (
                <div>
                  <section className="mb-2 pr-7">
                    <div className="mb-3 font-bold">Temperature Units</div>
                    <ToggleGroup
                      type="single"
                      onValueChange={value => {
                        setSelectedTemperatureUnit(value);
                      }}
                      defaultValue={selectedTemperatureUnit}
                      className="space-x-2"
                    >
                      <ToggleGroupItem value="kelvin" aria-label="Toggle kelvin">
                        <div className="">Kelvin (K)</div>
                      </ToggleGroupItem>
                      <ToggleGroupItem value="celsius" aria-label="Toggle celsius">
                        <div className="">Celsius (℃)</div>
                      </ToggleGroupItem>
                      <ToggleGroupItem value="fahrenheit" aria-label="Toggle fahrenheit">
                        <div className="">Fahrenheit (F)</div>
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </section>
                </div>
              )}
              {activePopup === 'detailsPopup' && (
                <div className="pr-7 py-4">
                  <ScrollArea className="h-full overflow-y-auto px-4">
                    <img
                      src={props.selectedElement.image?.url}
                      alt={props.selectedElement.name}
                      className="h-60 max-w-72 object-cover mb-4"
                    />
                    <h2 className="text-3xl font-bold mb-2">{props.selectedElement.name}</h2>
                    {props.selectedElement.summary}
                    <section className="grid grid-rows-10 gap-y-1 px-2 py-1 my-2 border border-gray-500 rounded-md text-gray-300">
                      <div className="flex justify-between border-b-2 border-gray-800 pb-1">
                        <p>Appearance</p>
                        <div className="flex">
                          {props.selectedElement?.color_rgba &&
                          props.selectedElement?.color_rgba.length > 0 ? (
                            props.selectedElement.color_rgba.map((color, index) => (
                              <div
                                key={index}
                                className="w-6 h-6 rounded-full border border-black transition-colors duration-300"
                                style={{
                                  backgroundColor: color || 'rgba(255, 255, 255, 0.3)',
                                }}
                              ></div>
                            ))
                          ) : (
                            <p>None</p>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between border-b-2 border-gray-800 pb-1">
                        <p>Group</p>
                        <div>{props.selectedElement?.group_block}</div>
                      </div>
                      <div className="flex justify-between border-b-2 border-gray-800 pb-1">
                        <p>Atomic Mass</p>
                        <div>{props.selectedElement?.atomic_mass}</div>
                      </div>
                      <div className="flex justify-between border-b-2 border-gray-800 pb-1">
                        <p>Density</p>
                        <div>
                          {props.selectedElement?.density} g/cm<sup>3</sup>
                        </div>
                      </div>
                      <div className="flex justify-between border-b-2 border-gray-800 pb-1">
                        <p>Melting Point</p>
                        <div className="flex flex-row items-center space-x-2">
                          <span className="">
                            {convertedMeltTemperature.toFixed(2)}{' '}
                            {selectedTemperatureUnit === 'kelvin'
                              ? 'K'
                              : selectedTemperatureUnit === 'celsius'
                                ? '°C'
                                : '°F'}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between border-b-2 border-gray-800 pb-1">
                        <span>Boiling Point</span>
                        <span className="">
                          {convertedBoilTemperature.toFixed(2)}{' '}
                          {selectedTemperatureUnit === 'kelvin'
                            ? 'K'
                            : selectedTemperatureUnit === 'celsius'
                              ? '°C'
                              : '°F'}
                        </span>
                      </div>
                      <div className="flex justify-between border-b-2 border-gray-800 pb-1">
                        <p>Discovered By</p>
                        <div>{props.selectedElement?.discovered_by}</div>
                        <p>in</p>
                        <div>{props.selectedElement?.year_discovered}</div>
                      </div>
                      <div className="flex justify-between border-b-2 border-gray-800 pb-1">
                        <p>Oxidation States</p>
                        <div>{props.selectedElement?.oxidation_state}</div>
                      </div>
                      <div className="flex justify-between border-b-2 border-gray-800 pb-1">
                        <p>Electronegativity</p>
                        <div>{props.selectedElement?.electronegativity_pauling}</div>
                      </div>
                      <div className="flex justify-between border-b-2 border-gray-800 pb-1">
                        <p>Electron Affinity</p>
                        <div>{props.selectedElement?.electron_affinity} kJ/mol</div>
                      </div>
                    </section>
                  </ScrollArea>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default PeriodicTableCard;
