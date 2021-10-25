import React from "react";
import BEMHelper from "react-bem-helper";
import "./Derivation.css";
import { highlightAndToBold, toItalic } from "../../../utils/stringUtils";
import parse from "html-react-parser";

const classes = new BEMHelper({
  name: "derivation",
});

export interface IDerivationProps {
  text: string;
}

export const Derivation: React.FC<IDerivationProps> = ({ text }) => {
  const derivation: string[] = text.split(",").map((row) => row.trim());

  if (derivation[0]) {
    derivation[0] = `<strong>${derivation[0]}</strong>`;
  }
  if (derivation[1]) {
    derivation[1] = `<strong>${derivation[1]}</strong>`;
  }
  if (derivation.length === 3) {
    derivation[2] = derivation[2].replace(/\*([^*]+?)\*/g, "<strong>$1</strong>");
  }

  return (
    <div {...classes()}>
      {derivation.map((row) => (
        <p key={row} {...classes("text")}>
          {parse(toItalic(highlightAndToBold(row)))}
        </p>
      ))}
    </div>
  );
};
