import React from 'react';
import logo from './segmenta-logo.png';
import './App.css';

import {Tabs} from './layout-tools';
import NpsQuestion from "./Questions/NpsQuestion";
import NpsQuestionResults from './Questions/NpsQuestionResults';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Tabs>
          <div label="NPS Questions">
            <NpsQuestion title={"How much would a wood chuck chuck if a wood chuck could chuck wood?"}/>
          </div>
          <div label="Results">
            <NpsQuestionResults />
            After &apos;while, <em>Crocodile</em>!
          </div>
        </Tabs>
      </header>
    </div>
  );
}

export default App;
