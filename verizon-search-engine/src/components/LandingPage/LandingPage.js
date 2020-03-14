import React, { Component } from 'react';
import '../../App.css';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import '../../styles/LandingPage.css'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import logo from '../../images/VerizonMediaLogo.png'
import { Col, Row } from 'antd'
import 'antd/dist/antd.css'
import TabComponent from '../TabComponents/TabComponent';
// To get data from the service.js which kind of acts like backend. This is done so that the frontend shouldnt become heavy
import { getData, getContact, getImages, getTweets, getSlacks } from '../../service'; 

// Landing Page

//Initialising global variables to store 
var contactDetails = [];
var imageDetails = [];
var slackDetails = [];
var tweetDetails = [];
const match_items = getData();

let MatchItemsJSON = [];
match_items.forEach(function (item) {
    MatchItemsJSON.push({
        title: item
    });
});

class LandingPage extends Component {

    //call the constructor method
    constructor(props) {
        //Call the constructor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.textBox = {}
        this.state = {
            matching_terms: MatchItemsJSON,
            searchQuery: "",
            resultSet: {
                tweetresultSet: [],
                contactsresultSet: [],
                slackresultSet: [],
                imageresultSet: [],
            },
            isNoResults: null
        }
        this.search = this.search.bind(this);
    }

 //This search is an onchange function and is triggered when something is selected from the dropdown on type into the search bar

    search = (event, value) => {

        contactDetails = [];
        tweetDetails = [];
        slackDetails = [];
        imageDetails = [];

        //This is done to get the exact value from the search bar and then it is checked against the data set.
        if(!value) value = this.textBox.getElementsByTagName('input')[0]['value'];
        
        //This is done for the validation that if the input isnt present in our database, it will show No matching items.
        if(!match_items.has(value))
        {
            this.setState({
                isNoResults:true
            })
            
        }
        else {
            //Pulling all the data which matches the searched matching_term                                                                                          
            let tempvalue = value
            if (tempvalue) {
                getContact().contacts.forEach(function (obj) {
                    if (obj.matching_terms.includes(tempvalue)) {
                        contactDetails.push(obj)
                    }
                });
                getImages().images.forEach(function (obj) {
                    if (obj.matching_terms.includes(tempvalue)) {
                        imageDetails.push(obj)
                    }
                });
                getSlacks().slacks.forEach(function (obj) {
                    if (obj.matching_terms.includes(tempvalue)) {
                        slackDetails.push(obj)
                    }
                });
                getTweets().tweets.forEach(function (obj) {
                    if (obj.matching_terms.includes(tempvalue)) {
                        tweetDetails.push(obj)
                    }
                });

            }

            //Creating a map structure to push it to the child component

            this.setState(state => {
                state.resultSet.contactsresultSet = contactDetails
                state.resultSet.tweetresultSet = tweetDetails
                state.resultSet.slackresultSet = slackDetails
                state.resultSet.imageresultSet = imageDetails
                state.isNoResults = false
                return state
            });

        }
        
    }


    render() {
        return (
            <div>
                <div>
                    <Row>
                        <Col span={5} >
                            <img src={logo} alt="Website logo" className="logo"></img>
                        </Col>
                        <Col span={1}>
                            <div style={{ width: 700 }}>
                                <Autocomplete
                                    id="free-solo-demo"
                                    freeSolo
                                    options={this.state.matching_terms.map(item => item.title)}
                                    onChange={this.search}
                                    ref={input => {
                                        this.textBox = input;
                                    }}
                                    renderInput={params => (
                                        <TextField {...params} label="Search Here" margin="normal" variant="outlined" />
                                    )}
                                />
                                <span><button className="btn btn-danger btn-lg searchbtn" onClick={this.search} > <i className="fas fa-search"></i></button></span>

                            </div>
                        </Col>
                    </Row>
                </div>
                
                {/* Sending props to child component */}
                <TabComponent props={this.state.resultSet} tweetresultSet={this.state.resultSet.tweetresultSet}
                    imageresultSet={this.state.resultSet.imageresultSet}
                    slackresultSet={this.state.resultSet.slackresultSet}
                    contactsresultSet={this.state.resultSet.contactsresultSet}
                    isNoResults={this.state.isNoResults}
                />
            </div>

        )
    }
}

export default LandingPage;