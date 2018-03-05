import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
//import Footer from '../../components/Footer/Footer';
import API from "../../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class NewCampaigns extends Component {
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.campaignName && this.state.campaignGoal) {
      API.saveCampaign({
        campaignName: this.state.campaignName,
        campaignPurpose: this.state.campaignPurpose,
        campaignGoal: this.state.campaignGoal,
        campaignExpiration: this.state.campaignExpiration,
        campaignImage: this.state.campaignImage
      })
        .then(res => this.loadCampaigns())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
            <Jumbotron title="Create a Campaign"/>
            <form>
              <Input
                value={this.state.campaignName}
                onChange={this.handleInputChange}
                name="campaignName"
                placeholder="Campaign Name (required)"
              />
              <TextArea
                value={this.state.campaignPurpose}
                onChange={this.handleInputChange}
                name="campaignPurpose"
                placeholder="Campaign Funding Purpose (required)"
              />
              <Input
                value={this.state.campaignGoal}
                onChange={this.handleInputChange}
                name="campaignGoal"
                placeholder="Campaign Funding Goal (required)"
              />
              <Input
                value={this.state.campaignExpiration}
                onChange={this.handleInputChange}
                name="campaignExpiration"
                placeholder="Expiration Date (required)"
              />
                <Input
                value={this.state.campaignImage}
                onChange={this.handleInputChange}
                name="campaignImage"
                placeholder="Attached an image (placeholder)"
              />
              <FormBtn
                disabled={!(this.state.campaignGoal && this.state.campaignName)}
                onClick={this.handleFormSubmit}
              >
                Submit Campaign
              </FormBtn>
            </form>
      </Container>
    );
  }
}

export default NewCampaigns;
