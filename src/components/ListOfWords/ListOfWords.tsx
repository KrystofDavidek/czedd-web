import React from "react";
import BEMHelper from "react-bem-helper";
import "./ListOfWords.css";

const classes = new BEMHelper({
  name: "list-page",
});

export const ListOfWords = () => {
  return (
    <div {...classes()}>
      <p>Work in progress...</p>
    </div>
  );
};
