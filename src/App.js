import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import {
  Container,
  Columns,
  Footer,
  Content,
  Column,
  Icon
} from "bloomer";
import Menubar from './components/Menubar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Menubar/>
          <Route 
            path="/"
            exact strict
            render={props => (
              <div><Container>
                
              </Container>
              <br></br></div>
            )}
          />
        </div>
      </Router>
    )
  }
}

export default App;
