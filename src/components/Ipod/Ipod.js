import React from 'react';
import './Ipod.css'; 

function Ipod () {
    return (
        <div className="draw">
            <div className="container">
                <div className="shine-left"></div>
                <div className="screen-container">
                    <div className="screen">
                        <div className="face">
                            <div>
                                <div className="eye l"></div>
                                <div className="eye r"></div>
                            </div>
                            <div className="mouth"></div>
                        </div>
                    </div>
                    <div>
                        <div className="button"></div>
                    </div>
                    <div></div>
                </div>
                <div className="shine-right"></div>
            </div>
        </div>
    )
}

export default Ipod;