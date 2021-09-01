import React from "react";
import BEMHelper from "react-bem-helper";
import { DefinitionData } from "../../../models/DefinitionData";
import { Card } from "./Card";
import { Derivation } from "./Derivation";
import "./Definition.css";

const classes = new BEMHelper({
  name: "definition",
});

interface IDefinitionProps {
  definition: DefinitionData;
}

export const Definition: React.FC<IDefinitionProps> = ({ definition }) => {
  const exampleCards = [];
  let definitionCard;
  console.log(definition);

  if (!definition.cz_definice) {
    definitionCard = <Card title={[definition.slovo]} text={[definition.preklad]} isBubbleActive={true} />;
  } else if (definition.en_definice) {
    definitionCard = (
      <Card
        title={[definition.slovo, definition.cz_definice]}
        text={[definition.preklad.concat(" = ", definition.en_definice)]}
        isBubbleActive={true}
      />
    );
  } else {
    definitionCard = <Card title={[definition.slovo, definition.cz_definice]} text={[definition.preklad]} isBubbleActive={true} />;
  }

  if (definition.prikladove_vety_a2 && definition.prikladove_vety_a2 !== "-") {
    exampleCards.push(<Card key={exampleCards.length} title={["A2"]} text={[definition.prikladove_vety_a2]} />);
  }

  if (definition.prikladove_vety_b1 && definition.prikladove_vety_b1 !== "-") {
    exampleCards.push(<Card key={exampleCards.length} title={["B1"]} text={[definition.prikladove_vety_b1]} />);
  }

  if (definition.prikladove_vety_b2 && definition.prikladove_vety_b2 !== "-") {
    exampleCards.push(<Card key={exampleCards.length} title={["B2"]} text={[definition.prikladove_vety_b2]} />);
  }

  return (
    <div {...classes()}>
      {definitionCard}
      <Derivation text={definition.popis_derivace} />
      {exampleCards.length > 0 ? (
        <h2 {...classes("examples-sentences")}>
          <strong>Příkladové věty</strong>
        </h2>
      ) : (
        <></>
      )}
      {exampleCards.map((card) => {
        return card;
      })}
    </div>
  );
};
