import React, { useState, useEffect } from 'react';
import KidsCover from '../Images/kids1.png';
import KidsDADN from './KidsDADN';
import '../App.css';

const Kids = () => {
    return (
        <div>
            <div className="kids-cover mt-1">
                <img src={KidsCover} alt="kids-cover"></img>
            </div>

            <div className="container-fluid mt-3 text-center">

                <div className="row">

                    <div className="dadn-container text-center col 5 mx-auto mt-0">

                        <KidsDADN />

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Kids;