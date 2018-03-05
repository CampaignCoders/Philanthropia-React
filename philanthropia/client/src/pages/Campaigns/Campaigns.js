import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Footer from '../../components/Footer/Footer';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
//import { Input, TextArea, FormBtn } from "../../components/Form";

// Application Constants
import AppConstants from "../../constants.js";

class Campaigns extends Component {
  state = {
    campaigns: [],
    campaignName: "",
    campaignPurpose: "",
    campaignGoal: "",
    campaignExpiration: "",
    campaignImage: ""
  };
  
  componentDidMount() {
    this.loadCampaigns();
  }

  loadCampaigns = () => {
    API.getCampaigns()
      .then(res =>
        this.setState({ campaigns: res.data, campaignName: "", campaignPurpose: "", campaignGoal: "", campaignExpiration: "", campaignImage: "" })
      )
      .catch(err => console.log(err));
  };

  deleteCampaign = id => {
    API.deleteCampaign(id)
      .then(res => this.loadCampaigns())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <div className='container'>
          <Jumbotron title="Welcome" subtitle="Choose a campaign to donate"/>
          <Container>
            <h1>Choose a campaign by clicking on the Campaign Name</h1>
                {this.state.campaigns.length ? (
                  <List>
                    {this.state.campaigns.map(campaign => (
                      <ListItem key={campaign._id}>
                        <Link to={"/campaigns/" + campaign._id}>
                          <h1><strong>{campaign.campaignName}</strong></h1>
                          </Link>
                          <p>Campaign Goal: {campaign.campaignGoal}</p>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              <p> </p>

          </Container>
        </div>
        <Footer beneficiary={AppConstants.FOOTER_BENEFICIARY} organization={AppConstants.FOOTER_ORGANIZATION} organization_subheading={AppConstants.FOOTER_ORGANIZATION_SUBHEADING} />
      </div>
    );
  }
}

export default Campaigns;
