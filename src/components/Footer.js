import React, { Component } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../styles/Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="socialMedia">
                    <p>&copy; 2021 Some Filler</p>
                    <InstagramIcon/><FacebookIcon/>  <TwitterIcon/>
                </div>
            </div>
        )
    }
}
