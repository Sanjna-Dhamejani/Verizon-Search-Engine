import React, { Component } from 'react';
import { Card, Col } from 'antd';

class ContactsTabComponent extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        
        let contactList = this.props.contactsresultSet.map((contacts,index) => {
            return (
                   
                    <Col span={7} className="col-5 mr-3" key={index}>
                        <Card title={contacts.name} bordered={true}>
                            Company: {contacts.company}<br></br>
                            Email: {contacts.emails}<br></br>
                            Phone: {contacts.phones}<br></br>
                        </Card>
                        <br></br>
                    </Col>     
                                    
                
            )
            
        });
        return (
            <div>
            <div>
                <h4>Contact Results</h4>
            </div>
                <div className="row">
                {contactList}

                </div>
            </div>
        )
    }
}

export default ContactsTabComponent;