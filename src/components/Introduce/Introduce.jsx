import React from 'react';
import {faGithubAlt, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { URLS } from '../../constants/contants';

import './Introduce.scss';

const Introduce = () => { 
    return (
        <div>
            <p className='helloTextContainer'><span className='helloText'>Hello humans! <span role='img' aria-label='marcian'>👽</span></span> I'm Lu and I'm front-end developer at Globant base on Medellín, Colombia <span role='img' aria-label='flag'>🇨🇴</span></p>
            <div className='email'><FontAwesomeIcon className='socialIcon email' icon={faPaperPlane} /><span> luisafernanda9111@gmail.com</span></div>
            <div className='contactSocialMedia'>
                <a href={URLS.SOCIAL_MEDIA_URL.GITHUB} target='_blank' aria-label="Github" rel='noopener noreferrer'><FontAwesomeIcon className='socialIcon' icon={faGithubAlt} /></a>
                <a href={URLS.SOCIAL_MEDIA_URL.INSTAGRAM} target='_blank' aria-label="Instagram" rel='noopener noreferrer'><FontAwesomeIcon className='socialIcon' icon={faInstagram} /></a>
                <a href={URLS.SOCIAL_MEDIA_URL.LINKEDIN} target='_blank' aria-label="Linkedin" rel='noopener noreferrer'><FontAwesomeIcon className='socialIcon' icon={faLinkedinIn} /></a>
            </div>
            <div className='separatorText'></div>
        </div>
    )
}

export default Introduce;