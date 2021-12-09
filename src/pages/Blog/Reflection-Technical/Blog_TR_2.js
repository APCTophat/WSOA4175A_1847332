import React, { Component } from 'react'
import backGroundImage from '../../../assets/Background-2.png';
import '../../../styles/Blog.css';

export default class Blog_TR_2 extends Component {
    render() {
        return (
            <div  className="BGI" style={{ backgroundImage: `url(${backGroundImage})`}}>
            <div id="Blog-ContentArea">
  <div id="PageHeader">
    <h2 id="Blog-Heading">I am not happy with it, Technical Reflection as of 08/11/2021</h2>
  </div> 

  <div id="BlogContentArea">
  <p>
        Let’s begin by addressing the lack of the big fat elephant in the room. There is no React.JS on the website currently. Why? Well to put it simply I ran out of time, panicked, and stuck to what I knew. I have been busy with a lot stuff outside of IM and by the time I could devote time to this assignment I realised I was going to fail if I had to try and learn how to use React.JS whilst still trying to build the website. Frankly I feel I still failed. 
    </p>
    <p>
        The Pet-Experiment, my next internet artwork never got made. The plans and idea are there but I could not devote the time needed to make it whilst there was still a whole website to build. This is also a failure on my part.
    </p>
    <p>
        So, what technically speaking did I succeed in? Frankly I believe it is just my navigation bar. I created a dropdown navigation bar and that is about it. That is all that is technically different from last assignment and this one. Whoop de doo.
    </p>
    <p>
        I wanted to try and make sure the sight works on more form factors than just my monitor. So where I could I have tried to keep setting fixed pixel sized to a minimum and mainly rely on adaptive scale values like % and vW. I would have like to include proper form factor coding but I did not have the time to do so.
    </p>
  </div>
  </div>
  </div>
        )
    }
}
