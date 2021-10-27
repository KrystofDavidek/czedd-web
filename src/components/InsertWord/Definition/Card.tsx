import React from "react";
import BEMHelper from "react-bem-helper";
import "./Card.css";
import { format, highlightAndFormat, toNewLines } from "../../../utils/stringUtils";
import parse from "html-react-parser";
import { Bubble } from "./Bubble";
import { searchedDefinitionState } from "../../../store/atoms";
import { useRecoilState } from "recoil";

const classes = new BEMHelper({
  name: "card",
});

export interface ICardProps {
  title: string[];
  text: string[];
  isBubbleActive?: boolean;
}

export const Card: React.FC<ICardProps> = ({ title, text, isBubbleActive = false }) => {
  const [activeDefinition, setDefinition] = useRecoilState(searchedDefinitionState);
  const word = <>{parse(toNewLines(highlightAndFormat(title[0], "word")))}</>;
  const definition = title[1] ? (
    <>
      <span> = </span>
      {parse(toNewLines(highlightAndFormat(title[1], "definition")))}
    </>
  ) : (
    <></>
  );
  if (isBubbleActive) {
    return (
      <div {...classes()}>
        <span>
          {word}
          {definition}
        </span>
        {text.map((textPart, index) => (
          <p key={index}>{parse(toNewLines(format(textPart)))}</p>
        ))}
        {(activeDefinition.a2_substantivum || activeDefinition.b1_substantivum || activeDefinition.b2_substantivum) && (
          <Bubble
            id="word"
            relatedWords={{
              a2: activeDefinition.a2_substantivum,
              b1: activeDefinition.b1_substantivum,
              b2: activeDefinition.b2_substantivum,
            }}
          />
        )}
        {(activeDefinition.a2_verbum || activeDefinition.b1_verbum || activeDefinition.b2_verbum) && (
          <Bubble
            id="definition"
            relatedWords={{ a2: activeDefinition.a2_verbum, b1: activeDefinition.b1_verbum, b2: activeDefinition.b2_verbum }}
          />
        )}
      </div>
    );
  } else
    return (
      <div {...classes()}>
        <span>{parse(highlightAndFormat(title.toString()))}</span>
        {text.map((textPart, index) => (
          <p key={index}>{parse(toNewLines(format(textPart)))}</p>
        ))}
      </div>
    );
};
