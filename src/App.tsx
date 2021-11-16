import React from "react";
import "./App.css";
import { Menu } from "./components/Menu/Menu";
import { Page } from "./components/Page/Page";
import { Header } from "./components/Header/Header";
import { RecoilRoot } from "recoil";
import { LanguageProvider } from "./utils/useTranslation";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <RecoilRoot>
        <LanguageProvider>
          <Menu />
          <Header />
          <Page />
        </LanguageProvider>
      </RecoilRoot>
    </Router>
  );
}

export default App;
