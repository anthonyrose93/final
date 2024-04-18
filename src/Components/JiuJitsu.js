import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import JiuJitsuCover from '../Images/bjj1.png';
import JiuJitsuList from './JiuJitsuList';
import JiuJitsuAdd from './JiuJitsuAdd';
import JiuJitsuDADN from './JiuJitsuDADN';
import '../App.css';

const JiuJitsu = () => {
    const [techniques, setTechniques] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTechniques = async () => {
        try {
            const response = await axios.get('https://65e8adc04bb72f0a9c501d0d.mockapi.io/api/week12/techniques');
            setTechniques(response.data.reverse());
            setLoading(false);
        } catch (error) {
            console.error('Error fetching techniques:', error);
        }
    };

    useEffect(() => {
        fetchTechniques();
    }, []);

    const handleAddTechnique = useCallback(async (newTechnique) => {
        setTechniques([newTechnique, ...techniques]);
        fetchTechniques();
    }, [techniques]);

    const handleDeleteTechnique = useCallback(async (techniqueId) => {
        try {
            await axios.delete(`https://65e8adc04bb72f0a9c501d0d.mockapi.io/api/week12/techniques/${techniqueId}`);
            fetchTechniques();
        } catch (error) {
            console.error('Error deleting technique:', error);
        }
    }, []);

    return (
        <div>
            <div className="jiujitsu-cover mt-3">
                <img src={JiuJitsuCover} alt="jiujitsu-cover" />
            </div>

            <div className="container-fluid mt-3 text-center">
                <div className="row">
                    <div className="dadn-container text-center col-5 mx-auto mt-0">
                        <JiuJitsuDADN />
                    </div>

                    <div className="jiujitsu-list text-center col-5 mx-auto mt-0">
                        <JiuJitsuAdd onTechniqueAdded={handleAddTechnique} />
                        <JiuJitsuList techniques={techniques} onDeleteTechnique={handleDeleteTechnique} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JiuJitsu;