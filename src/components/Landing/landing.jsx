import React from 'react';
import { Container } from 'react-bootstrap';

import Introduce from '../Introduce/Introduce';
import About from '../About/About';

import './landing.scss';

class Landing extends React.Component {
    render(){
        return (
            <Container className="content" fluid="md">
                <Introduce />
                <About />
            </Container>
        )
    }
}

export default Landing;