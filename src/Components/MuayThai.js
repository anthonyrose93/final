import React, { useState, useEffect } from 'react';
import MuayThaiCover from '../Images/muaythai1.png';
import MuayThaiList from './MuayThaiList';
import MuayThaiAdd from './MuayThaiAdd'; 
import MuayThaiDADN from './MuayThaiDADN';
import axios from 'axios';
import '../App.css';

const MuayThai = () => {
    const [mtTechniques, setMtTechniques] = useState([]); // Changed to camelCase
    const [loading, setLoading] = useState(true);

    const fetchMTTechniques = async () => {
        try {
            const response = await axios.get('https://65e8adc04bb72f0a9c501d0d.mockapi.io/api/week12/mttechniques')
            setMtTechniques(response.data.reverse()); // Changed to camelCase
            setLoading(false);
        } catch (error) {
            console.error('Error fetching MTTechniques:', error);
        }
    };

    useEffect(() => {
        fetchMTTechniques();
    }, []);

    const handleAddMTTechnique = async (newMTTechnique) => {
        setMtTechniques([newMTTechnique, ...mtTechniques]); // Changed to camelCase
    };

    const handleDeleteMTTechnique = async (techniqueId) => {
        try {
            await axios.delete(`https://65e8adc04bb72f0a9c501d0d.mockapi.io/api/week12/mttechniques/${techniqueId}`);
            fetchMTTechniques();
        } catch (error) {
            console.error('Error deleting technique:', error);
        }
    };

    return (
        <div>
            <div className="muaythai-cover mt-3">
                <img src={MuayThaiCover} alt="muaythai-cover"></img>
            </div>

            <div className="container-fluid mt-3 text-center">
                <div className="row p-0">
                    <div className="dadn-container p-0 text-center col-5 mx-auto mt-0">
                        <MuayThaiDADN />
                    </div>

                    <div className="muaythai-list col-5 mx-auto mt-0">
                        <MuayThaiAdd onMuayThaiTechniqueAdded={handleAddMTTechnique} />
                        <MuayThaiList mtTechniques={mtTechniques} onDeleteMTTechnique={handleDeleteMTTechnique}/>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default MuayThai;