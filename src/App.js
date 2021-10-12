import React from "react";

import { ColorsProvider } from "./contexts/colors.context";
import { ToastProvider } from "react-toast-notifications";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastProvider autoDismiss={true}>
        <ColorsProvider>
          <Header />
          <Main></Main>
          <Footer />
        </ColorsProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
