import React from "react";
import BEMHelper from "react-bem-helper";
import "./Header.css";

const classes = new BEMHelper({
  name: "header",
});

export const Header = () => {
  return (
    <div {...classes()}>
      <div {...classes("title")}>
        <h1 {...classes("title-highlight")}>CZEDD</h1>
        <p {...classes("subtitle")}>(Czech Electronic Derivational Dictionary)</p>
      </div>
    </div>
  );
};
