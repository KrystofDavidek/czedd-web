import React from "react";
import BEMHelper from "react-bem-helper";
import "./Derivation.css";
import { highlightAndFormat, format } from "../../../utils/stringUtils";
import parse from "html-react-parser";

const classes = new BEMHelper({
  name: "derivation",
});

export interface IDerivationProps {
  text: string;
}

export const Derivation: React.FC<IDerivationProps> = ({ text }) => {
  const derivation: string[] = text.split(",").map((row) => row.trim());

  if (derivation.length === 3) {
    derivation[2] = format(derivation[2]);
  }

  return (
    <div {...classes()}>
      <div {...classes("main")}>
        {derivation[0] && <span {...classes("text")}> {parse(highlightAndFormat(derivation[0]))}</span>}
        {derivation[1] && <span {...classes("process")}> {parse(highlightAndFormat(derivation[1]))}</span>}
      </div>
      {derivation[2] && <span {...classes("text-warning")}> {parse(highlightAndFormat(derivation[2]))}</span>}
    </div>
  );
};
