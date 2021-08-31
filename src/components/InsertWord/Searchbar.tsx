import React, { useState, useEffect } from "react";
import BEMHelper from "react-bem-helper";
import "./Searchbar.css";
import { Form, Row, Col, Button } from "react-bootstrap";

const classes = new BEMHelper({
  name: "searchbar",
});

interface ISearchbarProps {
  onSearch: Function;
}

export const Searchbar: React.FC<ISearchbarProps> = ({ onSearch }) => {
  const [input, setInput] = useState("učitel"); // vymazat inicializaci

  useEffect(() => {
    const listener = (event: any) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        search();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  const search = () => {
    onSearch(input);
  };
  search(); // vymazat inicializaci

  return (
    <Form
      {...classes()}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Row>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputWord" visuallyHidden>
            Input
          </Form.Label>
          <Form.Control
            {...classes("input")}
            id="inlineFormInputWord"
            placeholder="e. q. učitel"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Col>
        <Col>
          <Button {...classes("button")} type="submit" onClick={search}>
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
