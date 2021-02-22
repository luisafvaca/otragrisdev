import React from 'react';
import { useHistory } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './InterviewQuestions.scss';

const InterviewQuestions = () => {
    let history = useHistory();

    const handleGoBack = () => {
    history.push('/');
    }

    return(
        <Container className='interviewQuestions' fluid='md'>
            <div  className='interviewQuestions-goBackBtn'onClick={handleGoBack}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
        </Container>
    )
}

export default InterviewQuestions;