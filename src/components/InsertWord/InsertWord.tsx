import React from "react";
import BEMHelper from "react-bem-helper";
import "./InserWord.css";
import data from "../../assets/data/zpracování_-tel_30.8.json";
import { DefinitionData, defaultData } from "../../models/DefinitionData";
import { Searchbar } from "./Searchbar";
import { Definition } from "./Definition/Definition";
import { compareStrings } from "../../utils/stringUtils";
import { useRecoilState } from "recoil";
import { searchedDefinitionState } from "../../store/atoms";

const classes = new BEMHelper({
  name: "insert-page",
});

export const InsertWord = () => {
  const [definition, setDefinition] = useRecoilState(searchedDefinitionState);
  const definitions: DefinitionData[] = data["-tel"] as DefinitionData[];
  const search = (input: string) => {
    const selectedDefinition = definitions.find((def: DefinitionData) => {
      return compareStrings(def.slovo, input);
    });
    if (selectedDefinition) {
      setDefinition(selectedDefinition);
    } else {
      setDefinition(defaultData);
    }
  };

  return (
    <div {...classes()}>
      <Searchbar onSearch={search} />
      {(definition.id !== -1 || definition === undefined) && <Definition definition={definition} />}
    </div>
  );
};
