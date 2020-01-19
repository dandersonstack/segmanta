import React, {useState} from 'react';
import logo from './segmenta-logo.png';
import './App.css';

import {Tabs} from './layout-tools';
import NpsQuestion from "./Questions/NpsQuestion";
import NpsQuestionResults from './Questions/NpsQuestionResults';

function App() {
  // const updateTotal = ()=>{console.log('add some logic here to handle the state')};
  const [total, updateTotal] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Tabs>
          <div label="NPS Questions">
            <NpsQuestion title={"How much would a wood chuck chuck if a wood chuck could chuck wood?"}
                          submit={updateTotal}/>
          </div>
          <div label="Results">
            <NpsQuestionResults total={47}/>
          </div>
        </Tabs>
      </header>
    </div>
  );
}

export default App;
