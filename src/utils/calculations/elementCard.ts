import { periodicTableColors } from '@/data/predefined/colorConst';

export const getRandomColor = () => {
  const allColors = Object.values(periodicTableColors).flatMap(group => Object.values(group));
  return allColors[Math.floor(Math.random() * allColors.length)];
};

export const convertTemperature = (temp: number, unit: string): number => {
  if (unit === 'celsius') {
    return temp - 273.15;
  } else if (unit === 'fahrenheit') {
    return ((temp - 273.15) * 9) / 5 + 32;
  }
  return temp;
};

export function parseElectronConfiguration(config: string) {
  const parts = config.split(' ');
  const shells: Record<number, number> = {};
  for (const part of parts) {
    const shellNumber = parseInt(part.charAt(0));
    const electronCount = parseInt(part.slice(-1));
    shells[shellNumber] = (shells[shellNumber] || 0) + electronCount;
  }
  return shells;
}
