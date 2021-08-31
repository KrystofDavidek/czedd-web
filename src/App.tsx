import React from "react";
import "./App.css";
import { Menu } from "./components/Menu/Menu";
import { Page } from "./components/Page/Page";
import { Header } from "./components/Header/Header";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <main className="content">
      <RecoilRoot>
        <Menu />
        <Header />
        <Page />
      </RecoilRoot>
    </main>
  );
}

export default App;
