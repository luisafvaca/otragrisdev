import React, {useEffect, useState} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import {getRandom} from '../../utils/Utils';

import './QuoteCard.scss';

const QuoteCard = () => {
    const [dailyQuote, setDaylyQuote] = useState('');

    useEffect(()=> {
        fetch("https://type.fit/api/quotes").then((response) => {
            return response.json()
        }).then((data)=>{
            const dailyQuote = getRandom(data);
            setDaylyQuote(dailyQuote)
        }).catch((error) => {
            console.log(error)
        })
    }, []);
    
    const technologies = ['Javascript', 'React.js', 'Redux.js', 'Lodash.js', 'CSS', 'HTML5', 'UX', 'UI' ];

    const getTechnologies = () => {
        const COLORS = ['blue', 'cyan', 'purple'];
        return technologies.map(tech => {
            var randomColor = getRandom(COLORS);
            return (
                <div className={`tag ${randomColor}`}>{tech}</div>
            )
        })
    }
    return (
        <div style={{color: 'red'}}>
            <Container>
                <Row className="quoteCard">
                    <Col md={5} className="information">
                        <h1>I like to work with:</h1>
                        {getTechnologies()}
                    </Col>
                    <Col md={2}></Col>
                    { dailyQuote && (
                        <Col md={5} className="dailyQuoteContainer">
                            <h1>"{dailyQuote?.text}"</h1>
                            <div className="dailyQuoteContainer_separatorText"></div>
                            <p>- {dailyQuote?.author ? dailyQuote?.author : 'No Author'} -</p>
                        </Col>
                    )}
                    
                </Row>
            </Container>
        </div>
    )
}

export default QuoteCard;