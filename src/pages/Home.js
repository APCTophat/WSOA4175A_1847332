import React, { Component } from 'react'
import "../styles/Home.css";
import HomepageBanner from '../assets/Background-2.png';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="home" style={{ backgroundImage: `url(${HomepageBanner})`}}>
                <div className="headerContainer">
                    <p id="Quote">Somtimes life get tough, you get stressed and you feel you can't keep going. Then something so pure and special enters your life that gives you hope that everything will be alright. </p>
                
                </div>
            </div>
        )
    }
}
