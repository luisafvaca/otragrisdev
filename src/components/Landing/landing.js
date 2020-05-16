import React from 'react';
import './landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTabletAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithubAlt, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import Ipod from '../Ipod/Ipod';

class Landing extends React.Component {
    render(){
        return (
            <div className="content">
                <h1>Hello I'm Luisa Vaca</h1>
                <Ipod />
                <div className="separator"></div>
                <div className="social">
                    <a href="https://github.com/luisafvaca" target="_blank"><FontAwesomeIcon className="social-icon" icon={faGithubAlt} /></a>
                    <a href="https://www.instagram.com/otra_gris" target="_blank"><FontAwesomeIcon className="social-icon" icon={faInstagram} /></a>
                    <a href="https://www.linkedin.com/in/luisa-fernanda-vaca-a15121b7/" target="blank"><FontAwesomeIcon className="social-icon" icon={faLinkedinIn} /></a>
                </div>
            </div>
        )
    }
}

export default Landing;