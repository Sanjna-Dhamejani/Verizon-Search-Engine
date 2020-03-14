import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage.js';

//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
                <Route path="/search" component={LandingPage}/>
                </div>
                )
            }
        }
        //Export The Main Component
export default Main;