import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import { Document, Page } from 'react-pdf';
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
  
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const resumeframe = "<iframe src='https://docs.google.com/document/d/e/2PACX-1vT9g8ltEAfkQsUR5FpzqVf-SMxNhNiwjYv8Tdk2gyZ1od3GFDzPVUFx8lIqazqn4w/pub?embedded=true'></iframe>";
    const { pageNumber, numPages } = this.state;
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
          <Route 
            path="/resume"
            exact strict
            render={props => (
              <div><Container>
                <br></br>
                <div class="doc-container">
                  
                
                <Document
                  file='resume.pdf'
                  onLoadSuccess={this.onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber} />
                  <p>Page {pageNumber} of {numPages}</p>
                </Document>

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
