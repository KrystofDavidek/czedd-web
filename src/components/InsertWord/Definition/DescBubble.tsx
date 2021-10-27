import ReactTooltip from "react-tooltip";
import { Container } from "react-bootstrap";
import "./DescBubble.css";
import BEMHelper from "react-bem-helper";

const classes = new BEMHelper({
  name: "desc-bubble",
});

interface IDescBubbleProps {
  id: string;
  text: string;
}

export const DescBubble: React.FC<IDescBubbleProps> = ({ id, text }) => {
  return (
    <ReactTooltip {...classes()} id={id} backgroundColor="var(--quaternary-font-color)">
      <Container {...classes("container")}>
        <span {...classes("text")}>{text}</span>
      </Container>
    </ReactTooltip>
  );
};
