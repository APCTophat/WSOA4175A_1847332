import React, { Component } from 'react';
import '../../../styles/Blog.css';
import BlogImage from '../../../assets/Artistic Style Breakdown.png';
import backGroundImage from '../../../assets/Background-2.png';
import OtterIcon from "../../../assets/Otter-Button-Icon.png";

export default class Blog_AR_1 extends Component {
    render() {
        return (
            <div  className="BGI" style={{ backgroundImage: `url(${backGroundImage})`}}>
            <div id="Blog-ContentArea">
  <div id="PageHeader">
    <h2 id="Blog-Heading"> Its boring for now I swear, Artistic Reflection 01/10/2021</h2>
  </div> 

  <div id="BlogContentArea">
  <a href="https://www.youtube.com/watch?v=EE-xtCF3T94" target="_blank"> <img  alt='illustration of an otter wearing a space helmet' src={OtterIcon}/></a>
    <p>The artistic direction of this website is quite simplistic and straightforward. The intention for this is because I plan to redo this design later on once I can integrate react.js with the website.</p>
    <p>But breaking down this design. I separated the website into two regions “menu” (blue) and “content” (Red). The ‘menu area’ being populated with interactive buttons that facilitate the website’s navigation and takes up a column on the left side of the screen. The ‘content area’ populated with the relevant content I want to show for the page. This is situated in a wider column to the right of the “menu area” Below is a diagram of the layout. </p>
    <p>Noted: Included in the “content area” is a sub-area (Yellow) that is dedicated to titles if necessary for the page.</p>
    <img id="AR_1_IMG" alt="The general layout of the site at the time" src={BlogImage}/>
    <p>Colour: Because I do not plan on keeping this style, I kept my colour choices pretty simple. Using mainly blacks, greys and whites but I did make the blog buttons blue to test how my button design would work using actual colour. </p>
    <p>This moves me onto the Buttons. They are big, fat, clearly labelled and have a little bit of animation to them that shows interaction. Basically, they are everything I like in a basic started button. The CSS for them is straightforward and I saved time making them simple to work on other aspects of the sight.</p>
    <p>Surprisingly I like this “clean” or “clinical” look to the site. Don’t get me wrong, it is not appealing and probably shouldn’t be the final look for any website. It does, however, allow to focus on the other aesthetic elements of the sights without cluttering the page or taking too much time away from other elements. Keeping it simple for now to be improved on for later is what I feel this ‘style’ is.</p>
  </div>
  </div>
  </div>
        )
    }
}
