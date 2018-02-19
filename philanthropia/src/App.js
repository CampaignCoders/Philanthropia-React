import React, { Component } from 'react';
import CampaignCard from "./components/CampaignCard";
import campaigns from "./campaigns.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
/*import logo from "./logo.svg"*/
import './App.css';

let correctGuesses = 0;
let topScore = 0;
let message = "Go ahead! Start Clicking!";

class App extends Component {
	    
  state = {
      campaigns,
      correctGuesses,
      topScore,
      message
  };

  pickcampaign = id => {

      const campaigns = this.state.campaigns;

      const clickedcampaign = campaigns.filter(campaign => campaign.id === id);

      if (clickedcampaign[0].clicked){
          correctGuesses = 0;
          message = "you guessed incorrectly"

          for (let i = 0 ; i < campaigns.length ; i++){
              campaigns[i].clicked = false;
          }
          this.setState({message});
          this.setState({ correctGuesses });
          this.setState({campaigns});

      } else {

          clickedcampaign[0].clicked = true;
          correctGuesses++;
          message = "you guessed correctly";

          if (correctGuesses > topScore){
              topScore = correctGuesses;
              this.setState({ topScore });
          }
          campaigns.sort(function(a, b){return 0.5 - Math.random()});
          this.setState({ campaigns });
          this.setState({correctGuesses});
          this.setState({message});
      }
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          message={this.state.message}
          correctGuesses={this.state.correctGuesses}
          topScore={this.state.topScore}
        />
        <Title/>
        {this.state.campaigns.map(campaign => (
          <CampaignCard
            pickCampaign={this.pickCampaign}
            id={campaign.id}
            key={campaign.id}
            name={campaign.name}
            image={campaign.image}
          />
        ))}
      </Wrapper>
    );
  }
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
