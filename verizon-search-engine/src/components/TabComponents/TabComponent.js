import React, { Component } from 'react';
import AllTabComponent from './AllTabComponent';
import ImageTabComponent from './ImagesTabComponent';
import ContactsTabComponent from './ContactsTabComponent';
import PinnedTabComponent from './PinnedTabComponent'
import { Tabs } from 'antd';
const { TabPane } = Tabs;

//This is the component which acts as a parent to all mini sub modules like images, contacts, etc

class TabComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAllTabActive: true,
            isImageTabActive: false,
            isContactsTabActive: false,
        }

    }

//handlers to toggle views between different tabs.

    handleNoSearchResults = () => {
        this.setState({
            isAllTabActive: false,
            isImageTabActive: false,
            isContactsTabActive: false,
        });
    }

    handleTabs = (key) => {
        if(key==='1'){
            this.setState({
                isAllTabActive : true,
                isImageTabActive : false,
                isContactsTabActive : false,
            });
        }
        if(key==='2'){
            this.setState({
                isAllTabActive : false,
                isImageTabActive : true,
                isContactsTabActive : false,
            });
        }
        if(key==='3'){
            this.setState({
                isAllTabActive : false,
                isImageTabActive : false,
                isContactsTabActive : true,
            });
        }
    }

    render() {
        return (
            <div>
                <div>
                    <div className={this.props.isNoResults == null ? "" : this.props.isNoResults ? "hide-tab" : ""}>
                            <Tabs defaultActiveKey="1" onChange={this.handleTabs} size="large" >
                                <TabPane tab="All" key="1">
                            </TabPane>
                                <TabPane tab="Images" key="2">
                                </TabPane>
                                <TabPane tab="Contacts" key="3">
                                </TabPane>
                            </Tabs>
                    </div>
                    <div className={this.props.isNoResults ? "hide-tab" : ""}>
                        <div className="col-10 p-5">
                            <div className={this.state.isAllTabActive ? "all-tab show-tab" : "all-tab"}>

                                <AllTabComponent tweetresultSet={this.props.tweetresultSet} slackresultSet={this.props.slackresultSet} isNoResults={this.props.isNoResults} />
                            </div>
                            <div className={this.state.isImageTabActive ? "image-tab show-tab" : "image-tab"}>
                                <ImageTabComponent imageresultSet={this.props.imageresultSet} />
                            </div>
                            <div className={this.state.isContactsTabActive ? "contacts-tab show-tab" : "contacts-tab"}>
                                <ContactsTabComponent contactsresultSet={this.props.contactsresultSet} />
                            </div>
                            <div className={this.state.isPinnedTabActive ? "pinned-tab show-tab" : "pinned-tab"}>
                                <PinnedTabComponent/>
                            </div>
                        </div>
                    </div>
                    <div className={this.props.isNoResults ? "show-tab" : "hide-tab"}>
                        <h3 className="mgtp">No matching results</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default TabComponent;