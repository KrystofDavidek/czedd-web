import React from "react";
import "./App.css";
import { Menu } from "./components/Menu/Menu";
import { Page } from "./components/Page/Page";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <main className="content">
      <Menu />
      <Header />
      <Page />
    </main>
  );
}

export default App;
