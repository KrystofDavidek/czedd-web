import React, { useEffect, useMemo } from "react";
import BEMHelper from "react-bem-helper";
import "./InserWord.css";
import { data } from "../../utils/mapper";

import { DefinitionData, defaultData, Data } from "../../models/DefinitionData";
import { Searchbar } from "./Searchbar";
import { Definition } from "./Definition/Definition";
import { compareStrings } from "../../utils/stringUtils";
import { useRecoilState } from "recoil";
import { searchedDefinitionState } from "../../store/atoms";
import { useParams, useHistory, useLocation } from "react-router-dom";

const classes = new BEMHelper({
  name: "insert-page",
});

const getData = (): DefinitionData[] => {
  let definitionData: DefinitionData[] = [];
  Object.entries(data).forEach(([key, value]) => {
    const dataArray = value as unknown as Data;
    definitionData = definitionData.concat(dataArray[key]);
  });
  return definitionData;
};

export const InsertWord = () => {
  const [definition, setDefinition] = useRecoilState(searchedDefinitionState);
  const { word } = useParams<{ word: string }>();
  const { push } = useHistory();
  const location = useLocation();
  const definitions: DefinitionData[] = useMemo(() => getData().filter((definition) => !!definition), []);

  console.log(definition);

  useEffect(() => {
    if (word) {
      search(word);
    } else {
      setDefinition(defaultData);
    }
  }, []);

  useEffect(() => {
    if (location.pathname === "/insert") {
      setDefinition(defaultData);
    }
  }, [location]);

  const search = (input: string) => {
    const selectedDefinition = definitions.find((def: DefinitionData) => {
      return compareStrings(def.slovo, input);
    });
    if (selectedDefinition) {
      setDefinition(selectedDefinition);
      push(`/insert/${input}`);
    } else {
      setDefinition(defaultData);
      push("/insert");
    }
  };

  return (
    <div {...classes()}>
      <Searchbar
        initialWord={word ? word : undefined}
        onSearch={search}
        words={definitions.map((definition) => definition.slovo)}
      />
      {(definition.id !== -1 || definition === undefined) && <Definition definition={definition} />}
    </div>
  );
};
