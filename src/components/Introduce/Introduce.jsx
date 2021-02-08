import React from 'react';
import {faGithubAlt, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Introduce.scss';

const Introduce = () => { 
    return (
        <div>
            <p><span className='helloText'>Hello humans! <span role='img' aria-label='marcian'>👽</span></span> I'm Lu and I'm front-end developer at Globant base on Medellín, Colombia <span role='img' aria-label='flag'>🇨🇴</span></p>
            <div className='contactSocialMedia'>
                <a href="https://github.com/luisafvaca" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="socialIcon" icon={faGithubAlt} /></a>
                <a href="https://www.instagram.com/otra_gris" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="socialIcon" icon={faInstagram} /></a>
                <a href="https://www.linkedin.com/in/luisa-fernanda-vaca-a15121b7/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="socialIcon" icon={faLinkedinIn} /></a>
            </div>
            <div className="separatorText"></div>
        </div>
    )
}

export default Introduce;