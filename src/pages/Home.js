import React, { Component } from 'react'
import "../styles/Home.css";
import HomepageBanner from '../assets/Background-2.png';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="home" style={{ backgroundImage: `url(${HomepageBanner})`}}>
                <div className="headerContainer">
                    <h1>Some Filler stuff</h1>
                    <p>Look more filler stuff</p>
                    <Link to="/Menu">
                    <button>Press the Button</button>
                    </Link>
                </div>
            </div>
        )
    }
}
