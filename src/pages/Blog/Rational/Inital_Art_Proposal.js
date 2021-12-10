import React, { Component } from 'react';
import backGroundImage from '../../../assets/Background-2.png';
import '../../../styles/Blog.css';
import DiagramImg from '../../../assets/Pet-Experiment-Diagram.png';

export default class Inital_Art_Proposal extends Component {
    render() {
        return (
            <div  className="BGI" style={{ backgroundImage: `url(${backGroundImage})`}}>
            <div id="Blog-ContentArea">
            <div id="PageHeader">
            <h2 id="Blog-Heading">Internet Artwork proposal and revised description</h2>
            </div> 

        <div id="BlogContentArea">
                <p>What I wanted to achieve was to have a digital pet that followed the users cursor around the screen as they attempted to navigate around the website. I was aiming to create an experience of a pet bugging you whilst you were trying to work. I hope was that the user could play with the pet, the pet would either follow the cursor around or do its own activities on the side. This is a diagram I made to try and explain my thinking of how it would work</p>
                <img id="OldDiagram" src={DiagramImg}/>
                <p>In this diagram the screen is separated into four major quadrants, the pet most of the time would want to be in the same quadrant as the cursor. So here in this diagram the pet is moving from the yellow quadrant to the blue one as that is where the cursor is. Once there it would roam around, try interacting with the cursor or just sleep if it wanted to, all these activities accompanied by animations.</p>
                <p>This however never happened, this is not what my final piece of internet art is but I so would have wanted it to be this.</p>
        </div>
    </div>
  </div>
        )
    }
}

