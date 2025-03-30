export type ColorShades = {
  DEFAULT: string;
  light: string;
  dark: string;
};

export type ColorsType = {
  periodicBackground: ColorShades;
  text: ColorShades;
  alkali: ColorShades;
  alkaline: ColorShades;
  transition: ColorShades;
  basicMetal: ColorShades;
  nonmetal: ColorShades;
  semimetal: ColorShades;
  halogen: ColorShades;
  nobleGas: ColorShades;
  lanthanide: ColorShades;
  actinide: ColorShades;
  accent: ColorShades;
  border: ColorShades;
  metalloid: ColorShades;
  postTransitionMetal: ColorShades;
  otherNonmetal: ColorShades;
  superheavy: ColorShades;
  unknown: ColorShades;
};

export interface ElementData {
  name: string;
  appearance: string | null;
  atomic_mass: string;
  boil: number | null;
  category: string;
  density: number | null;
  discovered_by: string | null;
  melt: number | null;
  molar_heat: number | null;
  named_by: string | null;
  number: number;
  period: number;
  group: number;
  phase: string;
  source: string;
  bohr_model_image: string | null;
  bohr_model_3d: string | null;
  spectral_img: string | null;
  summary: string;
  symbol: string;
  xpos: number;
  ypos: number;
  wxpos: number;
  wypos: number;
  shells: number[];
  electron_configuration: string;
  electron_configuration_semantic: string;
  electron_affinity: number | null;
  electronegativity_pauling: number | null;
  ionization_energies: number[];
  cpkHex: string | null;
  image: {
    title: string;
    url: string;
    attribution: string;
  };
  block: string;
  atomic_radius: number | null;
  ion_radius: string;
  vanderwaals_radius: number | null;
  oxidation_state: string;
  year_discovered: number | null | string;
  group_block: string;
  bonding_type: string;
  color_rgba: string[];
}

export interface PeriodicTableData {
  [key: string]: ElementData;
}

type Group = {
  label: string;
  row: number;
  column: number;
  notation: string;
};

type Period = {
  label: string;
  row: number;
  column: number;
};

type Card = {
  label: string;
  row: number;
  column: number;
  range: string;
};

export type PeriodicTableLabel = {
  groups: Group[];
  periods: Period[];
  cards: Card[];
};
