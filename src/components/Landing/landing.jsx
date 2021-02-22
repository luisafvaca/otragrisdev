import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Introduce from '../Introduce/Introduce';
import About from '../About/About';

import './landing.scss';

const Landing  = () =>  {
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/interviewQuestions'), [history]);     

    return (
        <Container className='content' fluid='md'>
            <Introduce />
            <About />
            <div className='content-secret' onClick={handleOnClick}>
                <FontAwesomeIcon icon={faHatWizard} />
            </div>
        </Container>
    )
    
}

export default Landing;