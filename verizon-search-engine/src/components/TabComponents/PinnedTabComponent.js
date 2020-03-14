import React, { Component } from 'react';
import { Card, Col } from 'antd';

class PinnedTabComponent extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let pinnedList = [];
        if(this.props.pinnedresultSet)
        {
            pinnedList =  this.props.pinnedresultSet.map((pinned,index) => {
                if(pinned.user){
                    return (
                       
                        <Col span={8} key={index}>
                        <Card className="card-container border" title={pinned.user} bordered={false}>
                            {pinned.message}
                            <br></br>
                            <b className="card-module">Twitter</b>{pinned.timestamp}
                        </Card>
        
                    </Col>
                    )
                }
                else{
                    return(
                        <div className="p-2 slack-content-container" className="alert alert-warning" role="alert" key={index}>
                        <h6>@{pinned.channel}</h6>
                        <span>
                            <p><b>{pinned.author} : </b>{pinned.message}</p>
                        </span>
                        <p>{pinned.timestamp}</p>
                    </div>
                    )
                }
            });
        }
        
            
        return (
            <div>
            <div>
                <h4>Pinned Items</h4>
            </div>
                <div className="row">
                {pinnedList}

                </div>
            </div>
        )
    }
}

export default PinnedTabComponent;