/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import BEMHelper from "react-bem-helper";
import "./Searchbar.css";
import { Form, Row, Col } from "react-bootstrap";
import Select from "react-select";
import { removeFormat } from "../../utils/stringUtils";
import { useTranslation } from "../../utils/useTranslation";

const classes = new BEMHelper({
  name: "searchbar",
});

interface ISearchbarProps {
  onSearch: Function;
  initialWord?: string;
  words: string[];
  onClose: any;
}

type Option = { label: string; value: string };

export const Searchbar: React.FC<ISearchbarProps> = ({ onSearch, words, initialWord, onClose }) => {
  const t = useTranslation();
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
      onClose();
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
    if (selectedOption.value.length > 0) {
      onSearch(selectedOption.value);
    }
  }, [selectedOption]);

  return (
    <Form {...classes()}>
      <Row>
        <Col {...classes("input")}>
          <Select
            placeholder={t("example")}
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
