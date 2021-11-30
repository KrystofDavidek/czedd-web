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
        {derivation.slice(1).map((part, index) => (
          <span key={index} {...classes("process")}>
            {parse(highlightDerivation(part))}
          </span>
        ))}
      </div>
    </div>
  );
};
