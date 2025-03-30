export const periodicTableColors = {
  periodicBackground: {
    DEFAULT: '#1C1F26',
    light: '#2B2E36',
    dark: '#0F1825',
  },
  alkali: {
    DEFAULT: '#FF00FF',
    light: '#FF66FF',
    dark: '#CC00CC',
  },
  alkaline: {
    DEFAULT: '#AA00FF',
    light: '#BB33FF',
    dark: '#8800CC',
  },
  transition: {
    DEFAULT: '#00FFFF',
    light: '#66FFFF',
    dark: '#00CCCC',
  },
  basicMetal: {
    DEFAULT: '#8000FF',
    light: '#9933FF',
    dark: '#6600CC',
  },
  nonmetal: {
    DEFAULT: '#39FF14',
    light: '#66FF41',
    dark: '#2ECC10',
  },
  semimetal: {
    DEFAULT: '#00FFAA',
    light: '#33FFC4',
    dark: '#00CC88',
  },
  halogen: {
    DEFAULT: '#FFFF00',
    light: '#FFFF66',
    dark: '#CCCC00',
  },
  nobleGas: {
    DEFAULT: '#FFA500',
    light: '#FFB733',
    dark: '#CC8400',
  },
  lanthanoid: {
    DEFAULT: '#99FF33',
    light: '#ADFF66',
    dark: '#7ACC29',
  },
  actinoid: {
    DEFAULT: '#FF4500',
    light: '#FF7040',
    dark: '#CC3700',
  },
  accent: {
    DEFAULT: '#B0C4DE',
    light: '#C0D4EE',
    dark: '#90A4BE',
  },
  border: {
    DEFAULT: '#333333',
    light: '#4D4D4D',
    dark: '#1A1A1A',
  },
  metalloid: {
    DEFAULT: '#008080',
    light: '#339999',
    dark: '#006666',
  },
  postTransitionMetal: {
    DEFAULT: '#4682B4',
    light: '#6B9FC1',
    dark: '#366A85',
  },
  otherNonmetal: {
    DEFAULT: '#228B22',
    light: '#45A245',
    dark: '#186618',
  },
  superheavy: {
    DEFAULT: '#FF1493',
    light: '#FF5FAF',
    dark: '#CC117A',
  },
  unknown: {
    DEFAULT: '#708090',
    light: '#8A9AA7',
    dark: '#5A6B77',
  },
};

export const colors = {
  text: {
    DEFAULT: '#FFFFFF',
    muted: '#CCCCCC',
    inverted: '#000000',
  },
};

export const groupBlockToColor: Record<string, keyof typeof periodicTableColors> = {
  'alkali metal': 'alkali',
  'alkaline earth metal': 'alkaline',
  'transition metal': 'transition',
  metal: 'basicMetal',
  nonmetal: 'nonmetal',
  // semimetal: 'semimetal',
  halogen: 'halogen',
  'noble gas': 'nobleGas',
  lanthanoid: 'lanthanoid',
  actinoid: 'actinoid',
  metalloid: 'metalloid',
  'post-transition metal': 'postTransitionMetal',
  // superheavy: 'superheavy',
  '': 'unknown',
};
