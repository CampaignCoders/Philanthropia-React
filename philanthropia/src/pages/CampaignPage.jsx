import React, { Component } from 'react';
/*import Footer from '../components/Footer.jsx';*/
/*import Footer from '../components/Footer'*/
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import CampaignCard from "../components/CampaignCard";
import campaigns from "../campaigns.json";
import Title from "../components/Title";

let correctGuesses = 0;
let topScore = 0;
let message = "Go ahead! Start Clicking!";

class CampaignPage extends Component {
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
        <div>
          <Navbar />
          <div className="container">
          <Jumbotron title="Campaigns" subtitle="This page lists all of our active fundraising campaigns"/>
            <Title />
            {this.state.campaigns.map(campaign => (
              <CampaignCard
                pickCampaign={this.pickCampaign}
                id={campaign.id}
                key={campaign.id}
                name={campaign.name}
                image={campaign.image}
              />
            ))}
          </div>
        </div>
    );
  }
}

export default CampaignPage

