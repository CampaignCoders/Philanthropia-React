import React, { Component } from "react";
//import { Container } from 'react-grid-system';

import Jumbotron from "../../components/Jumbotron";
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
//import Navbar from '../../components/Navbar/Navbar';
//import API from "../../utils/API";
//import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
//import { FormBtn } from "../../components/Form";
//import Wrapper from "../components/Wrapper/Wrapper";
import ShareButtons from '../../components/ShareButtons/ShareButtons';

// Utilities
import queryString from 'query-string';

// Application Constants
import AppConstants from "../../constants.js";

const shareText = "Check this out: " + AppConstants.HERO_TITLE;

const heroimage = AppConstants.HERO_IMAGE;

class Home extends Component {

    render() {
        return (
            <div>
                <Nav />
                    <div className='container'>
                    <Jumbotron title="Welcome" subtitle="Donate to your favorite campaign or sign in"/>
                    <Container> 
                        <h1>{AppConstants.HERO_TITLE}</h1>
                        <h2>Browse our list of fundraising campaigns for your donation</h2>
                    </Container>
                    </div>
                    <div className="container">
                        <h3>Would you mind spreading the word via the social media and email links below?</h3>
                        <ShareButtons sharetext={shareText} />
                    </div>

                    <Footer beneficiary={AppConstants.FOOTER_BENEFICIARY} organization={AppConstants.FOOTER_ORGANIZATION} organization_subheading={AppConstants.FOOTER_ORGANIZATION_SUBHEADING} />  
            </div>
        )
    }
}
    


