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
import Homepage from './components/Homepage';
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
  
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
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
                <br></br>
                <Homepage></Homepage>
              </Container>
              <br></br></div>
            )}
          />
          <Route 
            path="/resume"
            exact strict
            render={props => (
              <div><Container>
                <br></br>
                <div class=".doc-container">
                  <object data="https://drive.google.com/file/d/1pFVmTsUtscyBG9ZS0s7SQRIAdILuJbPD/preview" type="application/pdf" width="100%" height="750px"></object>
                </div>
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
