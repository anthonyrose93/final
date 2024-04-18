import React from 'react';
import axios from 'axios';

const MuayThaiDelete = ({ techniqueId, onDeleteMTTechnique }) => {
    const handleDeleteMTTechnique = async (e) => {
        e.preventDefault();
        try {
            onDeleteMTTechnique(techniqueId); 
        } catch (error) {
            console.log('Error deleting technique:', error);
        }
    };

    return (
        <button type="button" className="delete-muaythai-button" onClick={(e) => handleDeleteMTTechnique(e)}>Delete</button>
    );
};

export default MuayThaiDelete;