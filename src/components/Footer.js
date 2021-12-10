import React, { Component } from 'react';
import "../styles/Footer.css";
import OtterIcon from "../assets/Otter-Button-Icon.png";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                
                    <p>Alexandre Carvalho 1847332 &copy; 2021</p>
                    <a href="https://www.youtube.com/watch?v=YJWSAJjkTsI" target="_blank"> <img src={OtterIcon}/></a>
                
            </div>
        )
    }
}
