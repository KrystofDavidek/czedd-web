import { defaultData, DefinitionData } from "./../models/DefinitionData";
import { atom } from "recoil";

export const searchedDefinitionState = atom<DefinitionData>({
  key: "searchedDefinition",
  default: defaultData,
});

export const definitionsState = atom<DefinitionData[]>({
  key: "definitions",
  default: [],
});
