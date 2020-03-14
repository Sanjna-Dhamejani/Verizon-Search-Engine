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
import { getData, getContact, getImages, getTweets, getSlacks } from '../../service';

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

 

    search = (event, value) => {

        contactDetails = [];
        tweetDetails = [];
        slackDetails = [];
        imageDetails = [];
        if(!value) value = this.textBox.getElementsByTagName('input')[0]['value'];
        
        if(!match_items.has(value))
        {
            this.setState({
                isNoResults:true
            })
            
        }
        else {
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