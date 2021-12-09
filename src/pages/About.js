import React, { Component } from 'react';
import AboutImage from '../assets/Cycling-BMX-Freestyle.png';
import "../styles/About.css";

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="aboutTop" style={{backgroundImage: `url(${AboutImage})`}}></div>
                <div className="aboutBottom">
                    <h1>About</h1>
                    <p>This is the about us section, what are we about? Dunno hey, ain't that funny</p>
                </div>
            </div>
        )
    }
}
