import React from 'react';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
       <div>
         {/* App Component Has a Child Component called Main*/}
         <Main/>
      </div>
      </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
