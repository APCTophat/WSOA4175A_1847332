import React, { Component } from 'react'
import backGroundImage from '../../../assets/Background-2.png';
import '../../../styles/Blog.css';
import BlogImage from '../../../assets/Labeled-Colour-Swatch.png';

export default class Blog_AR_2 extends Component {
    render() {
        return (
            <div  className="BGI" style={{ backgroundImage: `url(${backGroundImage})`}}>
            <div id="Blog-ContentArea">
  <div id="PageHeader">
    <h2 id="Blog-Heading">A little progress in the right direction, Artistic Reflection 08/11/2021</h2>
    </div> 

        <div id="BlogContentArea">
        <p>The overall theme I want to go for is <i>Space</i>, I want the space of my website to incoke the feeling of being in space. This is for three main reasons, this will help tie in the theme of the pet-experiment to the rest of the website, it will help me create a 3D-feeling environment meaning the website doesn’t feel so flat and I just like space.</p>
        <img id="AR_2_IMG" alt="A labeled coour swatch" src={BlogImage}/>
        <p>This is the colour swatch I ended up with to best covey a ‘spacy’ feel, using mainly black and muted blue colours to keep the site quiet. I also included a quite background image that is meant to mimic stars, I wanted to add some movement affect to it however I did not have the time to do so. I have checked for colour blindness and these colours still stay relatively distinguishable.  </p>
        <p>
      I also shifted the navigation bar to be the top of the screen, changing it to be a more traditional form of a drop-down navigation bar. As well as including content containers to make the content visible on the site.
        </p>
        <p>
      But other than those things that is pretty much all I have managed to achieve.
        </p>
        </div>
            </div>
  </div>
        )
    }
}
