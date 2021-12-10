import React, { Component } from 'react';
import backGroundImage from '../../../assets/Background-2.png';
import '../../../styles/Blog.css';

export default class Internet_Art_Rational extends Component {
    render() {
        return (
            <div  className="BGI" style={{ backgroundImage: `url(${backGroundImage})`}}>
            <div id="Blog-ContentArea">
            <div id="PageHeader">
            <h2 id="Blog-Heading">Internet Artwork Rational</h2>
            </div> 
        <div id="BlogContentArea">
                <h3>Preface</h3>
                <p>My final piece of artwork was created in a ridiculously short of amount of time out of necessity. I would have loved to have more time to work on my website as a whole but unfortunately this course had to compete with my attention from a large design and research project. Having these three major projects to do all at once seriously overwhelmed me and frankly, my website drew the short straw. This is not a justification for the state of this final art piece, I know that there are other students in the same position as I and they have managed to produce some fantastic pieces of internet art regardless. I failed this aspect and I recognise that, I just wanted to establish the context in which this piece of artwork was created in.</p>

                <h3>Introduction</h3>
                <p>
                I will be referring to the work as Patrick, as that is the name of the space otter on the site, and it is simpler that way. So Patrick is the beautiful result of a myself establish what I know how to do and how much time I have left to do it. Within React the simplest thing I cam up with was uses images to link to external videos, I knew how to draw something, I knew how to create a link to an external site, and I had a concept I like. So Patrick was born.
                </p>
                <p>
                What is this piece of internet artwork? Dotted throughout the site are drawings of Patrick, they are meant to instructive and catch your attention, the goal of each one is to entice the user into clicking on it as, this will then link them to a Rick Roll. I don’t know why but the concept of a space otter constantly handing you different forms of Rick Rolls at inconvenient times just makes me chuckle.
                </p>

                <h3>Technical Component</h3>
                <p>
                The technical aspect of this piece of internet art is the most stale and boring aspect of it. As technically all I have done is created a bunch of hyperlinks and slotted them into different places around the site. With the greatest technical challenge to make sure I am calling upon the correct file structure to get the right image. This is boring, simple and exactly something I could pull off to get the site submitted in time.
                </p>
                <p>
                I so wished I could have made what I had previously planned, unfortunately I did not have the technical skills currently to do that nor the time needed to develop those skills. So sadly, Patrick may be cute, but functionally he is really simple.
                </p>

                <h3>Conceptual Component</h3>
                <p>Conceptually I really really like this idea, with a better technical execution I feel it could have been really something spectacular. Regardless of that, the concept that my website has this little space otter pet that just interrupts whatever is going on with a Rick Roll just tickles me pink. I feel that it is the perfect use of the nature of the internet to provide a hyper link at any particular point and what better abuse of that power than to continuously Rick Roll the user. </p>
                <p>In terms of the use of the Otter I feel that Patrick would have had to be an Otter, they have just the right mix of adorable innocence and being a cheeky little shit. The perfect combination of an animal that would constantly Rick Roll you for the fun of it.</p>

                <h3>The meme</h3>
                <p>To me the Rick Roll is something that swing back and forth being hilarious and annoying. When it first happens I have that “omg I knew it was going to be a Rick Roll, how could I be played like that”, then it keeps happening and I feel annoyance like “Okay I get it please stop”. With enough time in between however, I find it swings back around to being hilarious. That is sort of the feeling I wanted to create with this very outdated meme. An additional layer to this is that all the links do no just link to the original Rick Astley video, but rather a variety of covers, surprise Rick Rolls, or even just oh my goodness why would someone make that video this is gold. I find the Duck quack Rick Roll to be one of the funniest things I have seen online in a long while, it combines the absolute silliness of the meme with a top-notch execution. It is definitely something PatRick would share. </p>
        </div>
    </div>
  </div>
        )
    }
}
