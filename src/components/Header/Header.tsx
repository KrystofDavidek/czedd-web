import React from "react";
import BEMHelper from "react-bem-helper";
import { useTranslation } from "../../utils/useTranslation";
import "./Header.css";

const classes = new BEMHelper({
  name: "header",
});

export const Header = () => {
  const t = useTranslation();

  return (
    <div {...classes()}>
      <div {...classes("title")}>
        <h1 {...classes("title-highlight")}>CZEDD</h1>
        <p {...classes("subtitle")}>({t("title")})</p>
      </div>
    </div>
  );
};
