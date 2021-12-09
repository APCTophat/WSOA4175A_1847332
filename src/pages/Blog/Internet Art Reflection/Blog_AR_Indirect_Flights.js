import React, { Component } from 'react'
import backGroundImage from '../../../assets/Background-2.png';
import '../../../styles/Blog.css';
import BlogIMG from '../../../assets/Idirect flight.png';
export default class Blog_AR_Indirect_Flights extends Component {
    render() {
        return (
            <div  className="BGI" style={{ backgroundImage: `url(${backGroundImage})`}}>
            <div id="Blog-ContentArea">
  <div id="PageHeader">
    <h2 id="Blog-Heading">Indirect Flights, 2015 by Joe Hamilton and Art using the internet</h2>
  </div> 

  <div id="BlogContentArea">
  <p>I found Indirect Flights to be a mesmerising and tranquil experience. It feels like a dizzying collage that sucked me in and encourage me to explore more. Where the more I explore the more hidden secrets I find that wasn't there before.</p>
    <p>This piece functions like a collage made from raw materials, satellite images, organic textures, brush strokes and architectural fragments. Where the viewer can endless pan the scene and see the floating images pass by. With the images panning at different rates to fake depth. </p>
    <p>The creator that this piece of internet art depicts a landscape that has been defined through the modern era of digital technologies and global interrelations. Creating a foreign yet familiar landscape the viewer can traverse at their own pace.</p>
    <p>I believe that this piece of internet art utilizes its medium effectively. This artwork, that is effectivly a massive collage, could be created tangibly. Uses the same photographs and materials used in Indirect Flights, however, this tangible version would lack some qualities provided by the online medium. </p>
    <p>This piece is inherently interactive, where the magic of this work happens in motion. The viewer is encouraged to explore the seemingly endless space, following whatever catches their eye. Using a web page to display this work allows the piece to be hidden, as some images may be hidden under others or the whole image is not the same size as the screen space. This sort of behaviour is only possible on a web page. As it gives the functionality the piece needs as well as giving the viewer agency in how they view the piece.</p>
    <p>This art piece uses the internet as its source of images to populate the piece and could not exist in its current form without the internet’s functionality. This is why this piece of Internet art and a good one at that.</p>
    <p>Alex Carvalho, 1847332</p>
  <img id="IndirectFlight_IMG" alt="Screenshot from Indirect Flight" src={BlogIMG}/>
  <p>:Screenshot from <i>Indirect Flight</i></p>


  </div>
  </div>
  </div>
        )
    }
}
