import React from "react";
import BEMHelper from "react-bem-helper";
import "./Derivation.css";
import { containsStar, highlightDerivation } from "../../../utils/stringUtils";
import parse from "html-react-parser";
import { Bubble } from "./Bubble";
import { searchedDefinitionState } from "../../../store/atoms";
import { useRecoilState } from "recoil";

const classes = new BEMHelper({
  name: "derivation",
});

export interface IDerivationProps {
  text: string;
}

export const Derivation: React.FC<IDerivationProps> = ({ text }) => {
  const [activeDefinition] = useRecoilState(searchedDefinitionState);
  const derivation: string[] = text.split("#").map((row) => row.trim());
  const isBubble = !containsStar(activeDefinition.cz_definice);
  let partWithBubbles;

  if (isBubble) {
    const [verbum, substantivum] = derivation[0].split("→");
    partWithBubbles = (
      <>
        <span data-tip data-for="verbum">
          {parse(highlightDerivation(verbum))}
        </span>
        <span>→</span>
        <span data-tip data-for="substantivum">
          {parse(highlightDerivation(substantivum))}
        </span>
      </>
    );
  }

  return (
    <div {...classes()}>
      <div {...classes("main")}>
        {derivation[0] && (
          <span {...classes("text")}> {isBubble ? partWithBubbles : parse(highlightDerivation(derivation[0]))}</span>
        )}
        {derivation.slice(1).map((part, index) => (
          <span key={index} {...classes("process")}>
            {parse(highlightDerivation(part))}
          </span>
        ))}
      </div>
      {(activeDefinition.a2_verbum || activeDefinition.b1_verbum || activeDefinition.b2_verbum) && (
        <Bubble
          id="verbum"
          relatedWords={{ a2: activeDefinition.a2_verbum, b1: activeDefinition.b1_verbum, b2: activeDefinition.b2_verbum }}
        />
      )}
      {(activeDefinition.a2_substantivum || activeDefinition.b1_substantivum || activeDefinition.b2_substantivum) && (
        <Bubble
          id="substantivum"
          relatedWords={{
            a2: activeDefinition.a2_substantivum,
            b1: activeDefinition.b1_substantivum,
            b2: activeDefinition.b2_substantivum,
          }}
        />
      )}
    </div>
  );
};
