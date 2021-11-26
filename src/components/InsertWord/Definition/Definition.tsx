import React from "react";
import BEMHelper from "react-bem-helper";
import { DefinitionData } from "../../../models/DefinitionData";
import { Card } from "./Card";
import { removeFormat, toNewLines, format } from "../../../utils/stringUtils";
import parse from "html-react-parser";
import { Derivation } from "./Derivation";
import "./Definition.css";
import { useLanguage, useTranslation } from "../../../utils/useTranslation";
import { GenusBubble } from "./GenusBubble";
import useGenus, { getGenusColor } from "../../../utils/useGenus";

const classes = new BEMHelper({
  name: "definition",
});

interface IDefinitionProps {
  definition: DefinitionData;
}

export const Definition: React.FC<IDefinitionProps> = ({ definition }) => {
  const [language, setLanguage] = useLanguage();
  const t = useTranslation();
  const genus = useGenus(definition.genre);
  const examples = { A2: [], B1: [], B2: [] } as any;
  let definitionCard;

  if (!definition.cz_definice && definition.preklad) {
    definitionCard = <Card title={[definition.slovo]} text={[definition.preklad]} isBubbleActive />;
  } else if (language === "en" && definition.en_definice && definition.preklad) {
    definitionCard = (
      <Card
        title={[definition.slovo, definition.cz_definice]}
        text={[definition.preklad.concat(" = ", definition.en_definice)]}
        isBubbleActive
      />
    );
  } else if (language === "en" && definition.preklad) {
    definitionCard = <Card title={[definition.slovo, definition.cz_definice]} text={[definition.preklad]} isBubbleActive />;
  } else if (language === "en" && !definition.preklad && definition.en_definice) {
    definitionCard = <Card title={[definition.slovo, definition.cz_definice]} text={[definition.en_definice]} isBubbleActive />;
  } else {
    definitionCard = <Card title={[definition.slovo, definition.cz_definice]} text={[]} isBubbleActive />;
  }

  if (definition.prikladove_vety_a2 && definition.prikladove_vety_a2 !== "-") {
    examples.A2.push(<span key={examples.A2.length}>{parse(toNewLines(format(definition.prikladove_vety_a2)))}</span>);
  }

  if (definition.prikladove_vety_b1 && definition.prikladove_vety_b1 !== "-") {
    examples.B1.push(<span key={examples.B1.length}>{parse(toNewLines(format(definition.prikladove_vety_b1)))}</span>);
  }

  if (definition.prikladove_vety_b2 && definition.prikladove_vety_b2 !== "-") {
    examples.B2.push(<span key={examples.B2.length}>{parse(toNewLines(format(definition.prikladove_vety_b2)))}</span>);
  }

  return (
    <div {...classes()}>
      <span {...classes("description")}>{t("found_word")}</span>
      <span data-tip data-for="found-word" style={getGenusColor(genus)} {...classes("found-word")}>
        {removeFormat(definition.slovo)}
      </span>

      <span data-tip data-for="desc-definition" {...classes("description")}>
        {t("desc_definition")}
      </span>
      {definitionCard}

      <span data-tip data-for="formation" {...classes("description")}>
        {t("formation")}
      </span>
      <Derivation text={language === "en" ? definition.popis_derivace_EN : definition.popis_derivace} />

      <span data-tip data-for="language-level" {...classes("description")}>
        {t("language_level")}
      </span>
      <div>{definition.urovne && <span {...classes("tag-title")}>{definition.urovne}</span>}</div>

      <span data-tip data-for="characteristic" {...classes("description")}>
        {t("characteristic")}
      </span>
      {language === "en" ? (
        <div>
          {definition.tag1_EN && <span {...classes("tag")}>#{definition.tag1_EN}</span>}
          {definition.tag2_EN && <span {...classes("tag")}>#{definition.tag2_EN}</span>}
          {definition.tag3_EN && <span {...classes("tag")}>#{definition.tag3_EN}</span>}
          {definition.tag4_EN && <span {...classes("tag")}>#{definition.tag4_EN}</span>}
        </div>
      ) : (
        <div>
          {definition.tag1 && <span {...classes("tag")}>#{definition.tag1}</span>}
          {definition.tag2 && <span {...classes("tag")}>#{definition.tag2}</span>}
          {definition.tag3 && <span {...classes("tag")}>#{definition.tag3}</span>}
          {definition.tag4 && <span {...classes("tag")}>#{definition.tag4}</span>}
        </div>
      )}

      <span data-tip data-for="example-sentences" {...classes("description")}>
        {t("example_sentences")}
      </span>
      <div {...classes("example-levels")}>
        {examples.A2.length > 0 ? (
          <div {...classes("example-level")}>
            <div {...classes("example-level-title")}>A2:</div>
            <p>{examples.A2}</p>
          </div>
        ) : undefined}
        {examples.B1.length > 0 ? (
          <div {...classes("example-level")}>
            <div {...classes("example-level-title")}>B1:</div>
            <p>{examples.B1}</p>
          </div>
        ) : undefined}
        {examples.B2.length > 0 ? (
          <div {...classes("example-level")}>
            <div {...classes("example-level-title")}>B2:</div>
            <p>{examples.B2}</p>
          </div>
        ) : undefined}
        <GenusBubble id="found-word" text={language === "en" ? definition.genre : definition.rod} genus={genus} />
      </div>
    </div>
  );
};
