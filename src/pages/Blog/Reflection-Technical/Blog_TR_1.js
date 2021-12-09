import React, { Component } from 'react';
import backGroundImage from '../../../assets/Background-2.png';
import '../../../styles/Blog.css';

export default class Blog_TR_1 extends Component {
    render() {
        return (
            <div  className="BGI" style={{ backgroundImage: `url(${backGroundImage})`}}>
            <div id="Blog-ContentArea">
  <div id="PageHeader">
    <h2 id="Blog-Heading">Where's the React.js? Technical Reflection as of 01/10/2021</h2>
  </div> 

  <div id="BlogContentArea">
  <p>I want to start by discussing the elephant in the room, React.js. This website does not include any of it. The website in its current form is technically very simple as it is predominantly made from Html and CSS and includes no JavaScript. This simplicity is born out of necessity as I have struggled to get React.js and GitHub to work together. I do plan to basically rebuild the website once I can integrate the two technologies. </p>
    <p>For now, though, the website functions as this simplistic skeleton, that while it does include some navigation functionality doesn’t offer much else. This is mainly due to time pressures and my issues with getting a grip on react.js. </p>
    <p>In terms of styling, I have used simple CSS properties such as Gridbox and Flexbox to construct the page layout. Then using other CSS properties to manipulate the presentation of other screen elements.</p>
    <p>This current iteration of the site is sort of like a developer prototype technically. It is constructed just enough to get the idea across, but it is by no means robust. A lot of styling and structure is “fine for this time”. For example, while elements have some responsive design to them, for example, regions are not based on fixed sizes but do scale. This a robust system it does not make. A final website would need additional styling codes for different aspect ratios, visual impairments, and other niche scenarios. </p>
    <p>My current site does not have these features as I have chosen to omit them in the favour of time management and the understanding that I will be rebuilding this site later. </p>
    <p>A small note on how I created my piece of <i>Internet Art</i>. I began by setting an area of the screen to be an edited screenshot of the ‘Cat’ Wikipedia page. Then I placed a paragraph element in a specific position that worked for my screen display. I have a string variable that contains the text I will populate the page with. An event listener checks if the user is typing, then runs a function that slowly adds texts to the screen element.</p>
    <p>The issue with this current artwork is that it should break with other displays. However, I did not feel it was an important issue to fix considering this is a temporary piece of art. It was fun to make, and I am happy with how it turned out.</p>
    <p>Overall, <i>Technically</i>, this sight is simple but effective in showcasing what a functioning site could look like. While nothing fancy is going on, it showcases the barebones needed to create a functioning website.</p>
  </div>
  </div>
  </div>
        )
    }
}

