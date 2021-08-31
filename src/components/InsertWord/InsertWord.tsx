import React, { useState } from "react";
import BEMHelper from "react-bem-helper";
import "./InserWord.css";
import data from "../../assets/data/zpracování_-tel_30.8.json";
import { DefinitionData, defaultData } from "../../models/DefinitionData";
import { Searchbar } from "./Searchbar";
import { Definition } from "./Definition/Definition";
import { compareStrings } from "../../utils/stringUtils";

const classes = new BEMHelper({
  name: "insert-page",
});

export const InsertWord = () => {
  const [definition, setDefinition] = useState(defaultData);
  const definitions: DefinitionData[] = data["-tel"] as DefinitionData[];
  let selectedDefinition: DefinitionData | undefined;

  const search = (input: string) => {
    selectedDefinition = definitions.find((def: DefinitionData) => {
      return compareStrings(def.slovo, input);
    });
    if (selectedDefinition) {
      setDefinition(selectedDefinition);
    }
  };

  return (
    <div {...classes()}>
      <Searchbar onSearch={search} />
      {definition.id !== -1 && <Definition definition={definition} />}
    </div>
  );
};
