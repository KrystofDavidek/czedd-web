import React, { useState, useEffect } from "react";
import BEMHelper from "react-bem-helper";
import "./Searchbar.css";
import { Form, Row, Col } from "react-bootstrap";
import Select from "react-select";
import { removeFormat } from "../../utils/stringUtils";

const classes = new BEMHelper({
  name: "searchbar",
});

interface ISearchbarProps {
  onSearch: Function;
  initialWord?: string;
  words: string[];
}

type Option = { label: string; value: string };

export const Searchbar: React.FC<ISearchbarProps> = ({ onSearch, words, initialWord }) => {
  const options: Option[] = words.map((word) => {
    return {
      value: removeFormat(word),
      label: removeFormat(word),
    };
  });
  const [selectedOption, setSelectedOption] = useState({ label: "", value: "" });

  const handleChange = (option: any) => {
    if (option) {
      setSelectedOption(option);
    } else {
      setSelectedOption({ label: "", value: "" });
    }
  };

  useEffect(() => {
    if (initialWord) {
      setSelectedOption({ label: initialWord, value: initialWord });
    } else {
      setSelectedOption({ label: "", value: "" });
    }
  }, [initialWord]);

  useEffect(() => {
    onSearch(selectedOption.value);
  }, [selectedOption]);

  return (
    <Form {...classes()}>
      <Row>
        <Col {...classes("input")}>
          <Select
            placeholder="e. q. učitel"
            isClearable
            value={selectedOption.value ? selectedOption : null}
            onChange={(option) => handleChange(option)}
            options={options}
          />
        </Col>
      </Row>
    </Form>
  );
};
