import React, { Component } from 'react'
import backGroundImage from '../../../assets/Background-2.png';
import '../../../styles/Blog.css';
import BlogIMG from '../../../assets/Endless Horse.png';
export default class Blog_AR_Endless_Horse extends Component {
    render() {
        return (
            <div  className="BGI" style={{ backgroundImage: `url(${backGroundImage})`}}>
            <div id="Blog-ContentArea">
  <div id="PageHeader">
    <h2 id="Blog-Heading">Endless Horse, only on the internet</h2>
  </div> 

  <div id="BlogContentArea">
  <img id="EndlessHorse_IMG" alt="Screenshot from Endless Horse" src={BlogIMG}/>
  <p>:Screenshot from <i>Endless Horse</i></p> 
    <p>This piece art is simple and is exactly what it says on the tin, it is an ‘endless horse’. This piece of <i>Text Art</i> or ASCII art depicts a horse created using text symbols, however it has one catch, the horse never ends.</p>
    <p>
        I believe that tis piece of internet art is a perfect example of an artwork that only exists because of an innate internet functionality and unique symbols created for computer functionality. This artwork is a depiction of a horse using text symbols found on keyboards but as the user uses the scroll function of the website, the horses’ legs get longer. Creating a horse that is as long as a webpage, effectively infinitely long.
    </p>
    <p>
        I want to focus on the constraints this artwork was created with first. Endless Horse is a constructed drawing of a horse made entirely from text symbols used on the keyboard. What draws me to this drawing is the fact that it is created within such a strong constraint, the artist had to fight for every angle and curve to construct a recognisable horse. The artist effectively typed the image they wanted to draw, removing the initial usage of each symbol and substituting it to convey ‘hair’, ‘eyes’, or ‘legs.’ This sort of bending the unique to computer created artworks, with the closest analogue to this I can think about being collages. 
    </p>

    <p>
        Although the horse’s construction is impressive, I believe it isn’t what makes this artwork a piece of ‘internet art’. The work takes a fundamental function of the internet and utilised to make a funny gag. This functionality being the ‘infinite scrolling’ of a website. The scroll feature tends to be this vitally integrated feature of a website, for when all the information cannot fit onto one screen, instead of turning a page for instance, website just have more space downwards. This piece of internet art makes me acutely aware of how much ‘space’ websites have at their disposal, the longer and more ridiculous the horse gets, the more and more I realise how vast this online ‘space’ can be. 
    </p>
    <p>
        This artwork reminds me of trying to get to the end of an excel spreadsheet, an activity I did multiple times as a young lad. I would scroll and scroll ad scroll and the scroll bar on the side of screen just got smaller and smaller but to no avail, I never got to that last cell. Imagining all the possible ‘space’ to store information is astonishing and something I cannot fully wrap my head around.
    </p>
    <p>Alex Carvalho, 1847332</p> 
  </div>
  </div>
  </div>
        )
    }
}
