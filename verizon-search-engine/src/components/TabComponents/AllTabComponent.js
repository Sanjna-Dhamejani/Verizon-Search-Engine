import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import PinnedTabComponent from './PinnedTabComponent'
import { Link } from 'react-router-dom';

//Component displaying Tweets and Slacks containing the matching_terms

//TO DO Alter display results according to dismissedItems array

class AllTabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pinnedItems: [],
            dismissedItems: []
        }
        this.pinTweet = this.pinTweet.bind(this);
        this.pinSlack = this.pinSlack.bind(this);
        this.dismissTweet = this.dismissTweet.bind(this);
        this.dismissSlack = this.dismissSlack.bind(this);
    }

    //Adding tweets and slacks to pinnedItems array so tas to show them in a separate tab.

    pinTweet = (event) => {
        const target = event.target;
        const id = target.id;
        if (!this.state.pinnedItems.includes(this.props.tweetresultSet[id])) {
            this.setState({
                pinnedItems: this.state.pinnedItems.concat(this.props.tweetresultSet[id])
            })
        }
    }

    pinSlack = (event) => {
        const target = event.target;
        var id = target.id
        if (!this.state.pinnedItems.includes(this.props.slackresultSet[id])) {
            this.setState({
                pinnedItems: this.state.pinnedItems.concat(this.props.slackresultSet[id])
            })
        }
    }

    //Adding tweets and slacks to dismissedItems array so tas to alter display results.


    dismissTweet = (event) => {
        const target = event.target;
        const id = target.id;
        if (!this.state.dismissedItems.includes(this.props.tweetresultSet[id])) {
            this.setState({
                dismissedItems: this.state.dismissedItems.concat(this.props.tweetresultSet[id])
            })
        }
    }

    dismissSlack = (event) => {

        const target = event.target;
        const id = target.id;
        if (!this.state.dismissedItems.includes(this.props.slackresultSet[id])) {
            this.setState({
                dismissedItems: this.state.dismissedItems.concat(this.props.slackresultSet[id])
            })
        }
    }

    //Mapping for Tweet results

    render() {
        let tweetList = this.props.tweetresultSet.map((tweet, index) => {
            return (
                <Col span={8} key={index}>
                    <Card className="card-container border" title={tweet.user} bordered={false}>
                        <span><Link id={index} className={index} onClick={this.pinTweet}><i id={index} className="fas fa-thumbtack fa-icon"></i></Link></span>
                        <span><Link id={index} className={index} onClick={this.dismissTweet}><i id={index} className="fas fa-minus-square fa-icon pr-1"></i></Link></span>
                        {tweet.message}
                        <br></br>
                        <b className="card-module">Twitter</b>{tweet.timestamp}
                    </Card>

                </Col>


            )

        });

        //Maping for slacks Results

        let slacksList = this.props.slackresultSet.map((slack, index) => {
            return (
                <div className="p-2 slack-content-container" className="alert alert-warning" role="alert" key={index}>
                    <span><Link id={index} className={index} onClick={this.pinSlack}><i id={index} className="fas fa-thumbtack fa-icon"></i></Link></span>
                    <span><Link id={index} className={index} onClick={this.dismissSlack}><i id={index} className="fas fa-minus-square fa-icon pr-1"></i></Link></span>
                    <h6>@{slack.channel}</h6>
                    <span>
                        <p><b>{slack.author} : </b>{slack.message}</p>
                    </span>

                    <p>{slack.timestamp}</p>
                </div>
                )
        });

        return (
            <div className={this.props.isNoResults === null || this.props.isNoResults === true ? "hide-tab" : ""}>
                <div>
                    <h4>Results from Twitter</h4>
                </div>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        {tweetList}
                    </Row>
                </div>
                <div>
                    <div>
                        <h4>Results from Slack</h4>
                    </div>
                    <div>
                        {slacksList}
                    </div>
                </div>

                <PinnedTabComponent pinnedresultSet={this.state.pinnedItems} />
            </div>
        )
    }
}

export default AllTabComponent;