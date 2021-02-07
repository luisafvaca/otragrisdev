import React from 'react';
import { Container } from 'react-bootstrap';

import Introduce from '../Introduce/Introduce';
import QuoteCard from '../QuoteCard/QuoteCard';

import './landing.scss';

class Landing extends React.Component {
    render(){
        return (
            <Container className="content" fluid="md">
                <Introduce />
                <QuoteCard />
            </Container>
        )
    }
}

export default Landing;