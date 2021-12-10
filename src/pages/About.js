import React, { Component } from 'react';
import backGroundImage from '../assets/Background-2.png';
import '../styles/Blog.css';
export default class About extends Component {
    render() {
        return (
            <div  className="BGI" style={{ backgroundImage: `url(${backGroundImage})`}}>
            <div id="Blog-ContentArea">
            <div id="PageHeader">
            <h2 id="Blog-Heading">About me and the Projects</h2>
            </div> 

        <div id="BlogContentArea">
            <h3>Me</h3>
            <p>I am Alexandre Carvalho a 4th year Wits university student, and this is the website I created for my Interactive Media course.</p>
            <p>On this website you can find 3 pieces of internet artworks and several blogs detailing my engagement with the course work and the website itself. Hope you enjoy. </p>
            <h3>The website</h3>
            <p>My website was meant to showcase the creation of a piece of internet art, utilising the React.JS framework. </p>
            <p>My main piece of internet art revolves around a quite cheeky space otter who like to show up around the site. I have themed the sight around space for my furry little friend.</p>
            <p>
            The website should support full navigation, responsive design and a showcase of how I have gone about making it through my blogposts
            </p>
        </div>
    </div>
  </div>
        )
    }
}
