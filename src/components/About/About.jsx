import React, { useState } from 'react';
import { Row, Col, Container,  OverlayTrigger, Popover, Button} from 'react-bootstrap';
import { groupBy } from 'lodash';
import { getRandom } from '../../utils/Utils';
import { technologies, colors } from '../../constants/contants';
import { TECH_INFO } from '../../constants/techInfo';
import DailyQuote from '../DailyQuote/DailyQuote';
import Dialog from '../Dialog/Dialog';
import TechCardInfo from '../TechCardInfo/TechCardInfo';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
            <Container className={"about"}>
                {techInfoToShow && (
                    <Dialog isOpen={isOpenDialog} handleClose={closeDialogHandler}>
                        <TechCardInfo info={techInfoToShow} />
                    </Dialog>
                )}
                
                <Row className='about-quoteCard'>
                    <Col md={5} className='information'>
                        <span className='about-tootltipContainer'>
                            <h1>I like to work with:</h1>
                            <OverlayTrigger
                                trigger='click'
                                placement={'left'}
                                overlay={
                                    <Popover>
                                    <Popover.Content>
                                        If you're interest to learn some of this technologies click on tag and see a recomended course that I have for you!
                                    </Popover.Content>
                                    </Popover>
                                }
                            >
                                <Button className='tooltipBtn'>
                                    <FontAwesomeIcon className='tooltipIcon' icon={faInfoCircle} />
                                </Button>
                            </OverlayTrigger>
                        </span>
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