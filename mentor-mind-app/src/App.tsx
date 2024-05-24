import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/bar/Header";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRoutes";
import Header from "./components/bar/Header";
import { load } from "./util/localStorage";

import { init } from '@amplitude/analytics-browser';

function App() {
  init('adbcba40b61f86b009c3f75e3a4df214');
  const userName = load("userName");
  return (
    <BrowserRouter>
      <Header
        title1={"Hello, " + (userName ? userName : "Name")}
        title2={"MentorMind"}
        buttonText1={"Settings"}
        buttonText2={"Log Out"}
      />
      {/*<BrowserRouter>*/}
        <AppRouter />
      {/*</BrowserRouter>*/}
    </BrowserRouter>
  );
}

export default App;
