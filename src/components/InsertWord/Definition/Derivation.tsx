import React from "react";
import BEMHelper from "react-bem-helper";
import "./Derivation.css";
import { toBoldAndUnderline } from "../../../utils/stringUtils";
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
      <p {...classes("text")}>{parse(toBoldAndUnderline(text))}</p>
    </div>
  );
};
