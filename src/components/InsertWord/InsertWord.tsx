import React from "react";
import BEMHelper from "react-bem-helper";
import "./InserWord.css";
import data1 from "../../assets/data/zpracování_-tel.json";
import data2 from "../../assets/data/zpracování_-ík_-ník.json";

import { DefinitionData, defaultData, Data } from "../../models/DefinitionData";
import { Searchbar } from "./Searchbar";
import { Definition } from "./Definition/Definition";
import { compareStrings } from "../../utils/stringUtils";
import { useRecoilState } from "recoil";
import { searchedDefinitionState } from "../../store/atoms";

const classes = new BEMHelper({
  name: "insert-page",
});

const data = { "-tel": data1, "-ík_-ník": data2 };

const getData = (): DefinitionData[] => {
  let definitionData: DefinitionData[] = [];
  Object.entries(data).forEach(([key, value]) => {
    const dataArray = value as Data;
    definitionData = definitionData.concat(dataArray[key]);
  });
  return definitionData;
};

export const InsertWord = () => {
  const [definition, setDefinition] = useRecoilState(searchedDefinitionState);
  const definitions: DefinitionData[] = getData();
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
