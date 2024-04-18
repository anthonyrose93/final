import React from 'react';
import axios from 'axios';

const JiuJitsuDelete = ({ techniqueId, onDeleteTechnique }) => {
    const handleDeleteTechnique = async () => {
        try {
            onDeleteTechnique(techniqueId); 
        } catch (error) {
            console.log('Error deleting technique:', error);
        }
    };

    return (
        <button type="button" className="delete-jiujitsu-button" onClick={handleDeleteTechnique}>Delete</button>
    );
};

export default JiuJitsuDelete;