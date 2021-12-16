import React from "react";
import "./App.css";
import { Menu } from "./components/Menu/Menu";
import { Page } from "./components/Page/Page";
import { Header } from "./components/Header/Header";
import { RecoilRoot } from "recoil";
import { LanguageProvider } from "./utils/useTranslation";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <RecoilRoot>
        <LanguageProvider>
          <div className="main-container ">
            <Menu />
            <Header />
            <Page />
            <Footer />
          </div>
        </LanguageProvider>
      </RecoilRoot>
    </Router>
  );
}

export default App;
