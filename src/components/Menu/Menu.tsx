import React from "react";
import BEMHelper from "react-bem-helper";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useTranslation, useLanguage } from "../../utils/useTranslation";
import "./Menu.css";

const classes = new BEMHelper({
  name: "menu",
});

export const Menu = () => {
  const [language, setLanguage] = useLanguage();
  const t = useTranslation();

  return (
    <Nav {...classes()} variant="pills">
      <div {...classes("navs")}>
        <Nav.Item {...classes("item")}>
          <NavLink activeClassName="is-active" to="/about">
            {t("about")}
          </NavLink>
        </Nav.Item>
        <Nav.Item {...classes("item")}>
          <NavLink activeClassName="is-active" to="/insert">
            {t("search")}
          </NavLink>
        </Nav.Item>
        <Nav.Item {...classes("item")}>
          <NavLink activeClassName="is-active" to="/contact">
            {t("contact")}
          </NavLink>
        </Nav.Item>
      </div>
      <div {...classes("language-switcher")}>
        <Nav.Item {...classes("item")} onClick={() => setLanguage("en")}>
          <span className={"menu__lang-button " + (language === "en" ? "is-active" : "")}>EN</span>
        </Nav.Item>
        <Nav.Item {...classes("item")} onClick={() => setLanguage("cs")}>
          <span className={"menu__lang-button " + (language === "cs" ? "is-active" : "")}>CS</span>
        </Nav.Item>
      </div>
    </Nav>
  );
};
