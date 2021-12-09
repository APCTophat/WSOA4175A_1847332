import React, { Component } from 'react'
import Logo from '../assets/Banner Icon-Image.png';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

export default class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            openLinks : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav(){
        
        this.setState(prevState => ({
            openLinks : !prevState.openLinks
        }));
    }

    

    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="leftSide" id={this.state.openLinks ? "open" : "close"}>
                    <a href="https://www.youtube.com/watch?v=YvpIyhmpD54" target="_blank"> <img src={Logo}/></a>
                   
                        <div className="hiddenLinks">
                        
                        <Link to='/WSOA4175A_1847332' className="Button-Container">Home</Link> 
                        <Link to='/About' className="Button-Container">About</Link> 
                        <div className="Button-Container">
                        <a className="MenuButton">Blogs</a>
                            <div className="Button-content">
                            <div class="MenuTitle">Close Readings</div>
                            <Link to='/Blog/Close-Reading/Ji_Yong_Park'>Ji Yong Parks reading</Link>
                            <Link to='/Blog/Close-Reading/McNamara'>Mcnamara reading</Link>

                            <div class="MenuTitle">Close Readings</div>
                            <Link to='/Blog/Art-Reflection/Enless_Horse'>Endless horse Artwork</Link>
                            <Link to='/Blog/Art-Reflection/Indirect_Flights'>Indirect Flights Artwork</Link>

                            <div class="MenuTitle">Artistic Reflection</div>
                            <Link to='/Blog/Reflection-Artistic/01-10-2021'>Date: 01/10/2021</Link>
                            <Link to='/Blog/Reflection-Artistic/08-11-2021'>Date: 08/11/2021</Link>

                            <div class="MenuTitle">Technical Reflection</div>
                            <Link to='/Blog/Reflection-Technical/01-10-2021'>Date: 01/10/2021</Link>
                            <Link to='/Blog/Reflection-Technical/08-11-2021'>Date: 08/11/2021</Link>
                            
                            </div>
                        </div>
                        <div className="Button-Container">
                            <a className="MenuButton">Internet Art</a>
                            <div className="Button-content">
                            <div class="MenuTitle">My Artworks</div>
                            <Link to='/Internet_Art/3D_Experiment'>3D Experiment</Link>
                            <Link to='/Internet_Art/Text_Experiment'>Text Experiment</Link>
                            <Link to='/Internet_Art/Pet_Experiment'>Pet Experiment</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="rightSide">

                        <Link to='/WSOA4175A_1847332' className="Button-Container">Home</Link> 
                        <Link to='/About' className="Button-Container">About</Link> 
                      
                        <div className="Button-Container">
                        <a className="MenuButton">Blogs</a>
                            <div className="Button-content">
                            <div class="MenuTitle">Close Readings</div>
                            <Link to='/Blog/Close-Reading/Ji_Yong_Park'>Ji Yong Parks reading</Link>
                            <Link to='/Blog/Close-Reading/McNamara'>Mcnamara reading</Link>

                            <div class="MenuTitle">Close Readings</div>
                            <Link to='/Blog/Art-Reflection/Enless_Horse'>Endless horse Artwork</Link>
                            <Link to='/Blog/Art-Reflection/Indirect_Flights'>Indirect Flights Artwork</Link>

                            <div class="MenuTitle">Artistic Reflection</div>
                            <Link to='/Blog/Reflection-Artistic/01-10-2021'>Date: 01/10/2021</Link>
                            <Link to='/Blog/Reflection-Artistic/08-11-2021'>Date: 08/11/2021</Link>

                            <div class="MenuTitle">Technical Reflection</div>
                            <Link to='/Blog/Reflection-Technical/01-10-2021'>Date: 01/10/2021</Link>
                            <Link to='/Blog/Reflection-Technical/08-11-2021'>Date: 08/11/2021</Link>
                            
                            </div>
                        </div>
                       
                        <div className="Button-Container">
                            <a className="MenuButton">Internet Art</a>
                            <div className="Button-content">
                            <div class="MenuTitle">My Artworks</div>
                            <Link to='/Internet_Art/3D_Experiment'>3D Experiment</Link>
                            <Link to='/Internet_Art/Text_Experiment'>Text Experiment</Link>
                            <Link to='/Internet_Art/Pet_Experiment'>Pet Experiment</Link>
                            </div>
                        </div>
                        
                        <button onClick={this.toggleNav}><ReorderIcon/></button>
                    </div>

                </div>
            </div>
        )
    }
}        