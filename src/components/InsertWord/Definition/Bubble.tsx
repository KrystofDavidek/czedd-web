import React, { useRef } from "react";
import BEMHelper from "react-bem-helper";
import "./Bubble.css";
import ReactTooltip from "react-tooltip";
import { Container, Row, Col } from "react-bootstrap";
import parse from "html-react-parser";
import { toNewLinesAndSpaces, format } from "../../../utils/stringUtils";
import { useTranslation } from "../../../utils/useTranslation";

const classes = new BEMHelper({
  name: "bubble",
});

interface IRelatedWords {
  a2: string | null;
  b1: string | null;
  b2: string | null;
}

interface IBubbleProps {
  id: string;
  word?: string;
  relatedWords: IRelatedWords;
}

// type TooltipRef = { tooltipRef: null } | null;

export const Bubble: React.FC<IBubbleProps> = ({ id, word, relatedWords }) => {
  const t = useTranslation();
  const tooltip = useRef(null);

  const a2 = relatedWords.a2 ? (
    <Col {...classes("col")}>
      <h2 {...classes("title")}>A2</h2>
      <p {...classes("text")}>{parse(format(toNewLinesAndSpaces(relatedWords.a2)))}</p>
    </Col>
  ) : (
    <></>
  );
  const b1 = relatedWords.b1 ? (
    <Col {...classes("col")}>
      <h2 {...classes("title")}>B1</h2>
      <p {...classes("text")}>{parse(format(toNewLinesAndSpaces(relatedWords.b1)))}</p>
    </Col>
  ) : (
    <></>
  );
  const b2 = relatedWords.b2 ? (
    <Col {...classes("col")}>
      <h2 {...classes("title")}>B2</h2>
      <p {...classes("text")}>{parse(format(toNewLinesAndSpaces(relatedWords.b2)))}</p>
    </Col>
  ) : (
    <></>
  );

  return (
    <ReactTooltip
      clickable
      delayHide={100}
      globalEventOff="click"
      ref={tooltip}
      {...classes()}
      id={id}
      backgroundColor="var(--secondary-font-color)"
    >
      <Container {...classes("container")}>
        <Row>
          <Col>
            <h1 {...classes("title")}>{t("example_words")}</h1>
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
