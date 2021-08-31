export interface DefinitionData {
  id: number;
  slovo: string;
  preklad: string;
  urovne: string;
  a2_substantivum: string | null;
  b1_substantivum: string | null;
  b2_substantivum: string | null;
  popis_derivace: string;
  a2_verbum: string | null;
  b1_verbum: string | null;
  b2_verbum: string | null;
  cz_definice: string;
  en_definice: string;
  tag1: string | null;
  tag2: string | null;
  tag3: string | null;
  prikladove_vety_a2: string | null;
  prikladove_vety_b1: string | null;
  prikladove_vety_b2: string | null;
}

export const defaultData: DefinitionData = {
  id: -1,
  slovo: "default",
  preklad: "default",
  urovne: "default",
  a2_substantivum: null,
  b1_substantivum: null,
  b2_substantivum: null,
  popis_derivace: "default",
  a2_verbum: null,
  b1_verbum: null,
  b2_verbum: null,
  cz_definice: "default",
  en_definice: "default",
  tag1: null,
  tag2: null,
  tag3: null,
  prikladove_vety_a2: null,
  prikladove_vety_b1: null,
  prikladove_vety_b2: null,
};
