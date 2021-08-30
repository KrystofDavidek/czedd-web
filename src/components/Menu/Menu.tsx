import React from "react";
import BEMHelper from "react-bem-helper";
import { Nav } from "react-bootstrap";
import { InsertWord } from "../InsertWord/InsertWord";
import { ListOfWords } from "../ListOfWords/ListOfWords";
import { Contact } from "../Contact/Contact";
import { About } from "../About/About";

import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import "./Menu.css";

const classes = new BEMHelper({
  name: "menu",
});

const routes = [
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/list",
    component: ListOfWords,
  },
  {
    path: "/insert",
    component: InsertWord,
  },
];

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
      <Switch>
        {routes.map((route, i) => (
          <RouteComponent key={i} {...route} />
        ))}
        <Redirect to="/insert" />
      </Switch>
    </>
  );
};

const RouteComponent = (route: any) => {
  return <Route exact path={route.path} component={route.component} />;
};
