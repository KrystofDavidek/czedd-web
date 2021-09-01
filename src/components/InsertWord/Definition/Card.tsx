import React from "react";
import BEMHelper from "react-bem-helper";
import "./Card.css";
import { toBoldAndUnderline, highlightAndToBold } from "../../../utils/stringUtils";
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
  const word = (
    <span data-tip data-for="word">
      {parse(highlightAndToBold(title[0]))}
    </span>
  );
  const definition = title[1] ? (
    <>
      <span> = </span>
      <span data-tip data-for="definition">
        {parse(highlightAndToBold(title[1]))}
      </span>
    </>
  ) : (
    <></>
  );

  if (isBubbleActive) {
    return (
      <div {...classes()}>
        <h1>
          {word}
          {definition}
        </h1>
        {text.map((textPart, index) => (
          <p key={index}>{parse(toBoldAndUnderline(textPart))}</p>
        ))}
        <Bubble
          id="word"
          relatedWords={{
            a2: activeDefinition.a2_substantivum,
            b1: activeDefinition.b1_substantivum,
            b2: activeDefinition.b2_substantivum,
          }}
        />
        <Bubble
          id="definition"
          relatedWords={{ a2: activeDefinition.a2_verbum, b1: activeDefinition.b1_verbum, b2: activeDefinition.b2_verbum }}
        />
      </div>
    );
  } else
    return (
      <div {...classes()}>
        <h1>{parse(highlightAndToBold(title.toString()))}</h1>
        {text.map((textPart, index) => (
          <p key={index}>{parse(toBoldAndUnderline(textPart))}</p>
        ))}
      </div>
    );
};
