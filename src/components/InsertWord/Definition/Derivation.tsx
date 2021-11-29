import React from "react";
import BEMHelper from "react-bem-helper";
import "./Derivation.css";
import { highlightDerivation } from "../../../utils/stringUtils";
import parse from "html-react-parser";

const classes = new BEMHelper({
  name: "derivation",
});

export interface IDerivationProps {
  text: string;
}

export const Derivation: React.FC<IDerivationProps> = ({ text }) => {
  const derivation: string[] = text.split("#").map((row) => row.trim());

  return (
    <div {...classes()}>
      <div {...classes("main")}>
        {derivation[0] && <span {...classes("text")}> {parse(highlightDerivation(derivation[0]))}</span>}
        {derivation[1] && <span {...classes("process")}> {parse(highlightDerivation(derivation[1]))}</span>}
        {derivation[2] && <span {...classes("process")}> {parse(highlightDerivation(derivation[2]))}</span>}
      </div>
    </div>
  );
};
