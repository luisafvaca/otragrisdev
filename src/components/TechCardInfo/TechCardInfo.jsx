import React from 'react';
import { Button } from 'react-bootstrap';

import './TechCardInfo.scss';

const TechCardInfo = ({info}) => {
    console.log(info, 'techInfoToShow')
    return (
       <div className='techCardInfo'>
            <h1>{info.name}</h1>
            <div className='techCardInfo-tag'>{info.category}</div>
            <div className='techCardInfo-content'>
                {info.about}
            </div>
            <div>
                <Button 
                    variant='outline-info'
                    href={info.getStartUrl}
                    target='_blank'
                    aria-label={`button-${info.name}`}
                >
                    {`Get Start Whit ${info.name}`}
                </Button>
            </div>
       </div>
    );
}

export default TechCardInfo;