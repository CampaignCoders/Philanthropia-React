import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Home from "./pages/Home";
import Campaigns from "./pages/Campaigns";
import NewCampaigns from "./pages/NewCampaigns"
import Detail from "./pages/Detail";
//import Loading from ".pages/Loading";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


//import Loadable from 'react-loadable';
//import WebFont from 'webfontloader';

//import AppConstants from "./constants.js";

// Our Routed Pages
//import Loading from "./routes/Loading";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Campaigns} />
        <Route exact path="/campaigns" component={Campaigns} />
        <Route exact path="/campaigns/:id" component={Detail} />
        <Route exact path="/NewCampaigns" component={NewCampaigns}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
