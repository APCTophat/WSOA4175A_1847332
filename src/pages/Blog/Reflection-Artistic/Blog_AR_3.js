import React, { Component } from 'react'
import backGroundImage from '../../../assets/Background-2.png';
import '../../../styles/Blog.css';
import WireframeDiagram from '../../../assets/Wireframe Diagram.png';


export default class Blog_AR_3 extends Component {
    render() {
        return (
            <div  className="BGI" style={{ backgroundImage: `url(${backGroundImage})`}}>
            <div id="Blog-ContentArea">
            <div id="PageHeader">
            <h2 id="Blog-Heading">Final Artistic Reflection 08/11/2021</h2>
            </div> 

        <div id="BlogContentArea">
            <p>
            Building from what I had previously discussed in my artist reflection. I kept with the ‘Spacy’ colour scheme throughout the page. This colour scheme is used to colour code the navigation bar, the footer, buttons, and their highlights. There is one exception to these colour choices, that being the background for the blog posts on the site. I chose to use this muted cream colour as it would contrast nicely with the colour scheme of the sight and make the blog posts easier to read.
            </p>
            <p>
            Doubling down on the space theme, I created a background image that is meant to invoke the feeling of being in space. The colours I used for this background match the colours I used throughout the site. While not colourful, I find it give the site this calmness to it. I would have like to have added multiple background images that move slightly at different rates to create a sort of parallax affect, however I did not have the time to get to it.
            </p>
            <p>
            Then lets get to Patrick, my little good boi. I have been obsessed with otters recently, I find them to be this source of pure joy and love and this year has been anything but that. So, I wanted to incorporate otters into my site and so Patrick, the space otter was born. I refuse to say that my sight is in Otter Space but it is a funny pun nevertheless. I created these little illustrations of Patrick for he site and I feel they really tie the whole thing together, I feel the themes strongly link to the site now.
            </p>
            <p>In terms of the websites structure, I kept it very basic, a bar for navigation that is constantly at the top of the screen, the main content takes up a large middle section of the screen, then a footer to close off the screen space at the bottom of the page. This diagram shows this structure</p>
            <img id="WireFrame" src={WireframeDiagram}/>
        </div>
    </div>
  </div>
        )
    }
}