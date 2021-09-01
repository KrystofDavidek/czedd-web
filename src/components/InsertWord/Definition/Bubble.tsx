import React from "react";
import BEMHelper from "react-bem-helper";
import "./Bubble.css";
import ReactTooltip from "react-tooltip";
import { Container, Row, Col } from "react-bootstrap";
import parse from "html-react-parser";

const classes = new BEMHelper({
  name: "bubble",
});

interface IRealetedWords {
  a2: string | null;
  b1: string | null;
  b2: string | null;
}

export interface IBubbleProps {
  id: string;
  relatedWords: IRealetedWords;
}

export const Bubble: React.FC<IBubbleProps> = ({ id, relatedWords }) => {
  const a2 = relatedWords.a2 ? (
    <Col>
      <h2 {...classes("subtitle")}>A2</h2>
      <p {...classes("text")}>{parse(relatedWords.a2)}</p>
    </Col>
  ) : (
    <></>
  );
  const b1 = relatedWords.b1 ? (
    <Col>
      <h2 {...classes("subtitle")}>B1</h2>
      <p {...classes("text")}>{parse(relatedWords.b1)}</p>
    </Col>
  ) : (
    <></>
  );
  const b2 = relatedWords.b2 ? (
    <Col>
      <h2 {...classes("subtitle")}>B2</h2>
      <p {...classes("text")}>{parse(relatedWords.b2)}</p>
    </Col>
  ) : (
    <></>
  );

  return (
    <ReactTooltip {...classes()} id={id} backgroundColor="var(--secondary-font-color)">
      <Container>
        <Row>
          <Col>
            <h1 {...classes("title")}>Related Words</h1>
          </Col>
        </Row>
        <Row>
          {a2}
          {b1}
          {b2}
        </Row>
      </Container>
    </ReactTooltip>
  );
};
