import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import { getRandom } from '../../utils/Utils';
import { technologies, colors } from '../../constants/contants';
import DailyQuote from '../DailyQuote/DailyQuote';

import './About.scss';

const About = () => {
    const getTechnologies = () => {
        return technologies.map(tech => {
            var randomColor = getRandom(colors);
            return (
                <div className={`tag ${randomColor}`}>{tech}</div>
            )
        })
    }

    return (
        <div>
            <Container>
                <Row className='quoteCard'>
                    <Col md={5} className='information'>
                        <h1>I like to work with:</h1>
                        {getTechnologies()}
                    </Col>
                    <Col md={2}></Col>
                    <Col md={5}>
                        <DailyQuote />
                    </Col>   
                </Row>
            </Container>
        </div>
    )
}

export default About;