import React from "react";
import BEMHelper from "react-bem-helper";
import { DefinitionData } from "../../../models/DefinitionData";
import "./Definition.css";

const classes = new BEMHelper({
  name: "definition",
});

interface IDefinitionProps {
  definition: DefinitionData;
}

export const Definition: React.FC<IDefinitionProps> = ({ definition }) => {
  console.log(definition);
  return <p>{definition.slovo}</p>;
};
