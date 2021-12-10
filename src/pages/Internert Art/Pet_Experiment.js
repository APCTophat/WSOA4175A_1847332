import React, { Component } from 'react'
import OtterIcon from '../../assets/Otter.png'
import '../../styles/PetExperiment.css';

export default class Pet_Experiment extends Component {
    render() {
        return (
            <div id="ContentArea">
                <h1>Meet Patrick</h1>
                <p>Isn’t he just the cutest little guy you’ve ever seen? You could just pinch those cheeks. Patrick loves to roam the stars, but space can be a lonely place. So, to pass the time in between his adventures he like to kick back and explore a different, more digital, space. When he finds something, he like, he keeps it until he finds another traveller to share it with. </p>
                <p> But be careful, for he is as tricksy as he is cute.</p>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"> <img src={OtterIcon}/></a>
            </div>
        )
    }
}
