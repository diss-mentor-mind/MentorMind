import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from "./components/Header";

function App() {
  return (

      <><Heading title1="Hello username" title2="MentorMind" buttonText1="Settings" buttonText2="Log Out"/>


        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </>


  );
}

export default App;
