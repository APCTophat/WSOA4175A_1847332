import React, { Component } from 'react'
import backGroundImage from '../../../assets/Background-2.png';
import '../../../styles/Blog.css';
import OtterIcon from "../../../assets/Otter-Button-Icon.png";
export default class Blog_TR_3 extends Component {
    render() {
        return (
            <div  className="BGI" style={{ backgroundImage: `url(${backGroundImage})`}}>
            <div id="Blog-ContentArea">
  <div id="PageHeader">
    <h2 id="Blog-Heading">The final technical state of the website 10/12/2021</h2>
  </div> 

  <div id="BlogContentArea">
      <p>I am in two minds when it comes with the technical capabilities of my website so I will separate my ideas in two categories, The fundamentals and React.js . I am doing this as my opinion about my website in these two different categories ranges wildly.</p>

      <h3>The fundamentals</h3>
      <p>In terms of the fundamentals of a website, that being the Semantic markup, Metadata tags, CSS/Js separation from HTML and the Responsive design for 3 form factors, I feel that I have done a pretty decent job. I use sematic markup and metadata tags throughout the website. For styling I have tried to keep my files organised and create specific pages to call upon when needed. Then for the 3 form factors, I have used general good practice tools of not setting images or text to fixed sizes, so they can shrink with the screen size, and I have also used media queries to affect the css of the Nav bar element to make sure it stays functional.</p>
  <a href="https://www.youtube.com/watch?v=4w2icYjruEY" target="_blank"> <img alt='illustration of an otter wearing a space helmet' src={OtterIcon}/></a>
  <p>Overall, in terms of the fundamental I feel that I have done a good job with it and I feel it meets most of the standards I would like. With the three form factors being something I could always improve upon if I had the time afforded to me.</p>

            <h3>React.js</h3>
            <p>When considering my websites use of React.js I am frustrated and disappointed with myself. I understand React.js as a concept, building these functional nested components that perform their own tasks that can be called about into any portion of the website. I understand that. What I am ashamed to admit is that I do not understand ‘the writing of the code’ for it, I feel I do not fully grasp the how you write React code. I would blame this on a lack of time with the language, as well as a luck on time to explore it. </p>
            <p>
            What I mean to say is, When I want to create a certain feature in JS, I can think about how I will do, thinking along the lines of “I can use a for loop hear, an addEventlister hear to check for this” things like that. But trying to translate those thoughts into React just doesn’t happen. I don’t know if it is just a completely different way about going about it but I do not understand and Unfortunately for my website, I just didn’t have the time with two other major project to set down and learn.
            </p>
            <p>
            The long and the short of it is that my website got dumber when I ported it over to React.js. My second text-experiment completely doesn’t work because I lack the knowledge needed to translate the code from a JS format to functional JSX and believe me I tried. So in terms of React I feel I haven’t grasp the coding of it well enough.
            </p>


  </div>
  </div>
  </div>
        )
    }
}
