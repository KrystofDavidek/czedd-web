import React from "react";
import BEMHelper from "react-bem-helper";
import { DefinitionData } from "../../../models/DefinitionData";
import { Card } from "./Card";
import { removeFormat, toNewLines, format } from "../../../utils/stringUtils";
import parse from "html-react-parser";
import { Derivation } from "./Derivation";
import "./Definition.css";

const classes = new BEMHelper({
  name: "definition",
});

interface IDefinitionProps {
  definition: DefinitionData;
}

export const Definition: React.FC<IDefinitionProps> = ({ definition }) => {
  const examples = { A2: [], B1: [], B2: [] } as any;
  let definitionCard;

  if (!definition.cz_definice && definition.preklad) {
    definitionCard = <Card title={[definition.slovo]} text={[definition.preklad]} isBubbleActive />;
  } else if (definition.en_definice && definition.preklad) {
    definitionCard = (
      <Card
        title={[definition.slovo, definition.cz_definice]}
        text={[definition.preklad.concat(" = ", definition.en_definice)]}
        isBubbleActive
      />
    );
  } else if (definition.preklad) {
    definitionCard = <Card title={[definition.slovo, definition.cz_definice]} text={[definition.preklad]} isBubbleActive />;
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
      <div {...classes("part")}>
        <span {...classes("description")}>found word</span>
        <span {...classes("found-word")}>{removeFormat(definition.slovo)}</span>
      </div>
      {}
      <div {...classes("part")}>
        <span {...classes("description")}>definition</span>
        {definitionCard}
      </div>
      <div {...classes("part")}>
        <span {...classes("description")}>language level</span>
        <div>
          {definition.tag1 && <span {...classes("tag-title")}>A2</span>}
          {definition.tag2 && <span {...classes("tag-title")}>, B1</span>}
          {definition.tag3 && <span {...classes("tag-title")}>, B2</span>}
        </div>
      </div>
      <div {...classes("part")}>
        <span {...classes("description")}>characteristic</span>
        <div>
          {definition.tag1 && <span {...classes("tag")}>#{definition.tag1}</span>}
          {definition.tag2 && <span {...classes("tag")}>#{definition.tag2}</span>}
          {definition.tag3 && <span {...classes("tag")}>#{definition.tag3}</span>}
        </div>
      </div>
      {definition.popis_derivace && (
        <div {...classes("part")}>
          <span {...classes("description")}>formation</span>
          <Derivation text={definition.popis_derivace} />
        </div>
      )}
      <div {...classes("part")}>
        <span {...classes("description")}>example sentences</span>
        <div>
          <div {...classes("example-level")}>
            {examples.A2.length > 0 ? <div {...classes("example-level-title")}>A2:</div> : undefined}
            <p>{examples.A2 && examples.A2}</p>
          </div>
          <div {...classes("example-level")}>
            {examples.B1.length > 0 ? <div {...classes("example-level-title")}>B1:</div> : undefined}
            <p>{examples.B1 && examples.B1}</p>
          </div>
          <div {...classes("example-level")}>
            {examples.B2.length > 0 ? <div {...classes("example-level-title")}>B2:</div> : undefined}
            <p>{examples.B2 && examples.B2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
