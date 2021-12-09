import React, { Component } from 'react'
import "../styles/Home.css";
import HomepageBanner from '../assets/Background-2.png';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="home" style={{ backgroundImage: `url(${HomepageBanner})`}}>
                <div className="headerContainer">
                    <p>Content is still to come for the home page</p>
                    
                </div>
            </div>
        )
    }
}
