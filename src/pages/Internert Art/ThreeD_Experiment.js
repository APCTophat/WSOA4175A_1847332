import React, { Component } from 'react';
import '../../styles/ThreeDExperiment.css';
import '../../helpers/TextExperimentLogic.js';

export default class ThreeD_Experiment extends Component {

    render() {
        return (
            <div id = "ContentArea">
            <svg class="CubeContainer" width="40%" height="30vw">
        <rect width="100%" height="100%" fill="#41394d"/>


        <circle class="Circle" id="Dot_1" cx="40%" cy="40%" r="4px" fill= "floralwhite"/> {/*<!--1 40 40--> */}
        <circle class="Circle" id="Dot_2" cx="60%" cy="40%" r="4px" fill= "floralwhite"/> {/*<!--2 60 40-->*/}
        <circle class="Circle" id="Dot_3" cx="40%" cy="60%" r="4px" fill= "floralwhite"/> {/*<!--3 40 60-->*/}
        <circle class="Circle" id="Dot_4" cx="60%" cy="60%" r="4px" fill= "floralwhite"/> {/*<!--4 60 60-->*/}
        <circle class="Circle" id="Dot_5" cx="50%" cy="30%" r="4px" fill= "floralwhite"/> {/*<!--5 50 30-->*/}
        <circle class="Circle" id="Dot_6" cx="70%" cy="30%" r="4px" fill= "floralwhite"/> {/*<!--6 70 30-->*/}
        <circle class="Circle" id="Dot_7" cx="70%" cy="50%" r="4px" fill= "floralwhite"/> {/*<!--7 70 50-->*/}

        <line class="Line" id="Line_1" x1="40%" y1="40%" x2="60%" y2="40%" stroke= "floralwhite" stroke-width= "2"/> {/*<!--Dot 1 to Dot 2-->*/}
        <line class="Line" id="Line_2" x1="60%" y1="40%" x2="60%" y2="60%" stroke= "floralwhite" stroke-width= "2"/> {/*<!--Dot 2 to Dot 4-->*/}
        <line class="Line" id="Line_3" x1="40%" y1="60%" x2="60%" y2="60%" stroke= "floralwhite" stroke-width= "2"/> {/*<!--Dot 3 to Dot 4-->*/}
        <line class="Line" id="Line_4" x1="40%" y1="40%" x2="40%" y2="60%" stroke= "floralwhite" stroke-width= "2"/> {/*<!--Dot 1 to Dot 3-->*/}
        <line class="Line" id="Line_5" x1="40%" y1="40%" x2="50%" y2="30%" stroke= "floralwhite" stroke-width= "2"/> {/*<!--Dot 1 to Dot 5-->*/}
        <line class="Line" id="Line_6" x1="50%" y1="30%" x2="70%" y2="30%" stroke= "floralwhite" stroke-width= "2"/> {/*<!--Dot 5 to Dot 6-->*/}
        <line class="Line" id="Line_7" x1="60%" y1="40%" x2="70%" y2="30%" stroke= "floralwhite" stroke-width= "2"/> {/*<!--Dot 2 to Dot 6-->*/}
        <line class="Line" id="Line_8" x1="70%" y1="30%" x2="70%" y2="50%" stroke= "floralwhite" stroke-width= "2"/> {/*<!--Dot 6 to Dot 7-->*/}
        <line class="Line" id="Line_9" x1="60%" y1="60%" x2="70%" y2="50%" stroke= "floralwhite" stroke-width= "2"/> {/*<!--Dot 4 to Dot 7-->*/}
        


            </svg>
        <p>So I am thinking I am want to make something to do with 3D in a website. Above is a very tedious and unpractical way of doing so.
            My thinking right now is to achieve 3D, you need to fake it like you would in an illustration. I don't know if websites have a Z axies so this is 
            my compromise so far. I want to do more research on this.
        </p>
        <p>
            The more this project continues the more I am leaning away from the idea of incorporating a ‘3D Element’ into the sight. However, that does not mean I want to shy away from creating a 3D experience. I would like to incorporate effects such as parallax to cheat the 3D affect. For my final project I hope to create a 3D feeling without needing to build a ‘real’ 3D space.
        </p>

            </div>
        )
    }
}
