import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './Dialog.scss';

const Dialog = ({isOpen, children, handleClose}) => {
    return (
        <Modal
            show={isOpen}
            onHide={handleClose}
        >   
            <div className='closeButton'>
                <Button 
                    variant='outline-secondary'
                    onClick={handleClose}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </Button>
            </div>
            {children}
        </Modal>
    );
}

export default Dialog;