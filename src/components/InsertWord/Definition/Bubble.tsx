import React, { useRef } from "react";
import BEMHelper from "react-bem-helper";
import "./Bubble.css";
import ReactTooltip from "react-tooltip";
import { Container, Row, Col } from "react-bootstrap";
import parse from "html-react-parser";
import { toNewLinesAndSpaces, format, removeFormat, compareStrings } from "../../../utils/stringUtils";
import { useTranslation } from "../../../utils/useTranslation";
import { useRecoilState } from "recoil";
import { definitionsState, searchedDefinitionState } from "../../../store/atoms";
import { useHistory } from "react-router-dom";

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

export const Bubble: React.FC<IBubbleProps> = ({ id, word, relatedWords }) => {
  const [, setDefinition] = useRecoilState(searchedDefinitionState);
  const { push } = useHistory();
  const [definitions] = useRecoilState(definitionsState);

  const t = useTranslation();
  const tooltip = useRef(null);

  const findWord = (w: string) => {
    return definitions.find((def) => {
      return compareStrings(def.slovo, removeFormat(w));
    });
  };

  const getMappedRelatedWords = (words: string) => {
    return words
      .replaceAll("#", "^#")
      .split("^")
      .map((w) => {
        const def = findWord(w);
        return def ? (
          <span
            key={def.slovo}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setDefinition(def);
              push(`/insert/${removeFormat(w)}`);
            }}
          >
            {parse(format(toNewLinesAndSpaces(w)))}
          </span>
        ) : (
          parse(format(toNewLinesAndSpaces(w)))
        );
      });
  };

  const a2 = relatedWords.a2 ? (
    <Col {...classes("col")}>
      <h2 {...classes("title")}>A2</h2>
      <p {...classes("text")}>{getMappedRelatedWords(relatedWords.a2)}</p>
    </Col>
  ) : (
    <></>
  );
  const b1 = relatedWords.b1 ? (
    <Col {...classes("col")}>
      <h2 {...classes("title")}>B1</h2>
      <p {...classes("text")}>{getMappedRelatedWords(relatedWords.b1)}</p>
    </Col>
  ) : (
    <></>
  );
  const b2 = relatedWords.b2 ? (
    <Col {...classes("col")}>
      <h2 {...classes("title")}>B2</h2>
      <p {...classes("text")}>{getMappedRelatedWords(relatedWords.b2)}</p>
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
