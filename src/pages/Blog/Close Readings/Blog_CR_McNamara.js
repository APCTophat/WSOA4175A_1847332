import React, { Component } from 'react'
import backGroundImage from '../../../assets/Background-2.png';
import '../../../styles/Blog.css';
import OtterIcon from "../../../assets/Otter-Button-Icon.png";
export default class Blog_CR_McNamara extends Component {
    render() {
        return (
            <div  className="BGI" style={{ backgroundImage: `url(${backGroundImage})`}}>
            <div id="Blog-ContentArea">
  <div id="PageHeader">
    <h2 id="Blog-Heading">RIP Adobe Flash Five Takeaways About the Plug-in’ - McNamara 2020</h2>
  </div> 

  <div id="BlogContentArea">
  <p>Full disclosure on my part, I am not sure if this article counts as one of the close reading materials provided for use to analyse, however, it was short, and I am pressed for time right now. If it does not constitute as one, I will just do an extra one later.</p>
    <p>This web article is written as a sort of eulogy for Flash and a call to action for artists who have created with Flash to preserve their digital work on open-source archival sites. The author who attended a talk that served as a goodbye to Flash. Talking to artist activists about what their main takeaways from flash were.</p>
    <p>The author highlights five major points about the open source creative tool:</p>
    <ul>
        <li>Its influence on web aesthetics in the early 2000’s</li>
        <li>How web standardization through social media killed it</li>
        <li>How flash can be preserved today</li>
        <li>How open-source sites like Cornifer help smaller artists or groups</li>
        <li>There is limited space on Cornifer so maybe use another site if desperate.</li>
    </ul>
    <a href="https://www.youtube.com/watch?v=yw8au5UaD-I" target="_blank"> <img  alt='illustration of an otter wearing a space helmet' src={OtterIcon}/></a>
    <p>My main takeaways from this article mainly concerns the first three points, so I will explore them in more depth. To begin with Flash became a tool or artistic expression over the internet, people could animate, make games or interactive experiences, or just experiment to see what they could do. </p> 
    <p>It was this thing that was accessible to people outside of traditional artistic institutions, where people had the freedom to experiment and learn and master what they wanted to. It was a wild west of creation, greatly impacting what the ‘internet’ looked and functioned like.</p>
    <p>Then the standardisations came along, with the internet shifting to social media platforms being the main access point of the internet for a wave of new people, this gave those major platforms the power to influence people’s expectations of what the internet was. This coupled with the fact that mobile devices were created not supporting Flash lead to a decline in its ‘relevance’ for the overall internet. The author highlights a caveat to Flash as a creation tool, the fact that is not owned by most people that use. If the owners of Flash decided to take it down (which they did) they own the right to do that and suddenly artists who learnt how to create in the medium have lost access to their tools.</p>
    <p>The final point I want to touch upon about this is the archival of art created in Flash by NGO’s such as Cornifer. These sorts of archival programs are run by smaller groups or artists that don’t want Flash’s history to be lost. Allowing people today to still access Flash works once Flash is gone and no more creation with it can be done. I think these sorts of efforts are good and necessary, forgetting about the history for Flash means that a potential use for the internet is lost. Potentially homogenising how the internet is consumed, leading to a more capitalised internet lead by major corporations or conglomerates.</p>
    <p>Final thoughts, Adobe Flash happened, it existed, and its impact still resonates with people today. Preserving this piece of internet history is vitally important for future people to understand what the internet once was and what its potential really is. While it is sad that something so propagated at one point is now gone, it leaves the space open for something to take its place. It is up to the people on the internet to decide what that space will be filled with.</p>


  </div>
  </div>
  </div>
        )
    }
}
