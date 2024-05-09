import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/bar/Header";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRoutes";
import Header from "./components/bar/Header";

function App() {
  return (
    <>
      <Header
        title1={"Hello, Name"}
        title2={"MentorMind"}
        buttonText1={"Settings"}
        buttonText2={"Log Out"}
      />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
