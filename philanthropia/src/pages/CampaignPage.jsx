import React, { Component } from 'react';
/*import Footer from '../components/Footer.jsx';*/
/*import Footer from '../components/Footer'*/
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import CampaignCard from "../components/CampaignCard";
import campaigns from "../campaigns.json";
import Wrapper from "../components/Wrapper";
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
      <Wrapper> 
      <div className='container'>
        <Navbar />
        <Jumbotron title="Campaigns" subtitle="This page lists all of our active fundraising campaigns"/>
        <div className="container">
          <h2>Campaigns</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat orci eu nulla sagittis, pulvinar dignissim lectus consequat. Etiam in lobortis ligula, vitae ornare lacus. Vivamus scelerisque lorem arcu, vitae eleifend ex commodo a. Quisque rutrum, augue sit amet egestas efficitur, magna nulla lacinia elit, sed suscipit tortor erat vitae enim. Donec egestas odio id aliquet rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque mi dolor, egestas nec lacinia non, sodales eu lacus. Donec ultricies nec elit ac ornare. Quisque fermentum ligula ut feugiat cursus. Aliquam auctor suscipit ex a lacinia. Mauris sollicitudin, justo quis fringilla finibus, dui diam ullamcorper nulla, sit amet placerat justo neque quis quam. Praesent nec nibh at tortor ornare dignissim. Morbi tincidunt fringilla turpis at luctus. Vivamus dapibus ligula eget pellentesque luctus. Maecenas ut consectetur lacus, non dignissim nisi. Praesent sodales tellus sit amet faucibus tempus.
          </p>
          <p>
            Maecenas dapibus, est posuere eleifend rutrum, lectus ligula gravida urna, at pretium dui turpis non lorem. Donec pretium lorem ipsum, at fermentum nibh consequat facilisis. Sed maximus massa est, vel porta diam placerat id. Vivamus imperdiet lorem eget dolor bibendum, eget gravida tellus interdum. Sed lectus odio, condimentum eu porttitor vel, euismod sit amet urna. Nam quis dui a nibh rhoncus aliquam vitae in metus. Nam sit amet semper turpis. Suspendisse eu malesuada tortor, vel lacinia nisl. Phasellus ultrices vehicula magna, sed tempor neque dapibus quis. Phasellus urna justo, sollicitudin ac odio eget, convallis varius nulla. Vivamus in lacinia lorem, at eleifend nulla. Nulla nec luctus purus. Integer id purus mauris. Phasellus finibus ultricies erat a tempus. Nulla luctus sem nec justo venenatis, eu faucibus purus congue.
          </p>
        </div>
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
      </Wrapper>
    );
  }
}

export default CampaignPage

