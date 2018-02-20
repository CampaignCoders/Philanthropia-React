import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
/*import Wrapper from "./components/Wrapper";*/
/*import Navbar from "./components/Navbar";*/
/*import Navbar from 'react-bootstrap/lib/Navbar';*/
/*import Button from 'react-bootstrap/lib/Button';*/
/*import logo from "./logo.svg"*/
import './App.css';
import Home from './pages/Home.jsx';
import CampaignPage from './pages/CampaignPage.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer'


class App extends Component {	      

  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/CampaignPage" component={CampaignPage}/>
            <Route path="/contact" component={Contact}/>
            <Footer />
          </div>
        </Router>

    )}
  }


/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/
export default App;
