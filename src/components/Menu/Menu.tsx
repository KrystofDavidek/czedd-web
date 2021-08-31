import React from "react";
import BEMHelper from "react-bem-helper";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Menu.css";

const classes = new BEMHelper({
  name: "menu",
});

export const Menu = () => {
  return (
    <>
      <Nav {...classes()} variant="pills">
        <Nav.Item {...classes("item")}>
          <NavLink activeClassName="is-active" to="/about">
            About CZEDD
          </NavLink>
        </Nav.Item>
        <Nav.Item {...classes("item")}>
          <NavLink activeClassName="is-active" to="/list">
            List of Derived Words
          </NavLink>
        </Nav.Item>
        <Nav.Item {...classes("item")}>
          <NavLink activeClassName="is-active" to="/insert">
            Insert Word
          </NavLink>
        </Nav.Item>
        <Nav.Item {...classes("item")}>
          <NavLink activeClassName="is-active" to="/contact">
            Contact Us
          </NavLink>
        </Nav.Item>
      </Nav>
    </>
  );
};
