import ReactTooltip from "react-tooltip";
import { Container } from "react-bootstrap";
import "./GenusBubble.css";
import BEMHelper from "react-bem-helper";
import { format, splitByFirstSpace, toNewLinesAndSpaces } from "../../../utils/stringUtils";
import parse from "html-react-parser";
import { Genus } from "../../../utils/useGenus";
import { AiOutlineMan } from "react-icons/ai";

const classes = new BEMHelper({
  name: "genus-bubble",
});

interface IGenusBubbleProps {
  id: string;
  text: string;
  genus: Genus;
}

export const GenusBubble: React.FC<IGenusBubbleProps> = ({ id, text, genus }) => {
  const [, sentence] = splitByFirstSpace(text.replaceAll("#", ""));

  return (
    <ReactTooltip {...classes()} id={id} backgroundColor="#CFE2F3">
      <Container {...classes("container")}>
        {genus === "m" && <AiOutlineMan {...classes("symbol")} />}
        <span {...classes("text")}>{parse(format(toNewLinesAndSpaces(sentence)))}</span>
      </Container>
    </ReactTooltip>
  );
};
