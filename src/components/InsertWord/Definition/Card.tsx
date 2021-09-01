import React from "react";
import BEMHelper from "react-bem-helper";
import "./Card.css";
import { toBoldAndUnderline, highlightAndToBold } from "../../../utils/stringUtils";
import parse from "html-react-parser";

const classes = new BEMHelper({
  name: "card",
});

export interface ICardProps {
  title: string;
  text: string[];
}

export const Card: React.FC<ICardProps> = ({ title, text }) => {
  return (
    <div {...classes()}>
      <h1>{parse(highlightAndToBold(title))}</h1>
      {text.map((textPart, index) => (
        <p key={index}>{parse(toBoldAndUnderline(textPart))}</p>
      ))}
    </div>
  );
};
