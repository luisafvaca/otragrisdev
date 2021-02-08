import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { groupBy } from 'lodash';
import { getRandom } from '../../utils/Utils';
import { technologies, colors } from '../../constants/contants';
import { TECH_INFO } from '../../constants/techInfo';
import DailyQuote from '../DailyQuote/DailyQuote';
import Dialog from '../Dialog/Dialog';
import TechCardInfo from '../TechCardInfo/TechCardInfo';

import './About.scss';

const About = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [techInfoToShow, setTechInfoToShow] = useState(null);
    
    const openDialogHandler = (tech) => {
        const technology = groupBy(TECH_INFO, 'name');
        console.log(tech, technology)
        const techInfo = technology && technology[tech][0];

        setTechInfoToShow(techInfo);
        setIsOpenDialog(true)
    }

    const closeDialogHandler = () => {
        setIsOpenDialog(false);
    }

    const getTechnologies = () => {
        return technologies.map((tech, id) => {
            const randomColor = getRandom(colors);
            return (
                <div key={id} className={`tag ${randomColor}`} onClick={() => openDialogHandler(tech)}>{tech}</div>
            )
        })
    }

    return (
        <div>
            <Container>
                {techInfoToShow && (
                    <Dialog isOpen={isOpenDialog} handleClose={closeDialogHandler}>
                        <TechCardInfo info={techInfoToShow} />
                    </Dialog>
                )}
                
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