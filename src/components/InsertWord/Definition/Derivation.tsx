import React from "react";
import BEMHelper from "react-bem-helper";
import "./Derivation.css";
import { format } from "../../../utils/stringUtils";
import parse from "html-react-parser";

const classes = new BEMHelper({
  name: "derivation",
});

export interface IDerivationProps {
  text: string;
}

export const Derivation: React.FC<IDerivationProps> = ({ text }) => {
  return (
    <div {...classes()}>
      <p {...classes("text")}>{parse(format(text))}</p>
    </div>
  );
};
