import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { InsertWord } from "../InsertWord/InsertWord";
import { ListOfWords } from "../ListOfWords/ListOfWords";
import { Contact } from "../Contact/Contact";
import { About } from "../About/About";
import "./Page.css";

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
    path: "/insert/:word?",
    component: InsertWord,
  },
];

export const Page = () => {
  return (
    <main className="page">
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} exact path={route.path} component={route.component} />
        ))}
        <Redirect to="/insert" />
      </Switch>
    </main>
  );
};
