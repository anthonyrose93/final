import React from 'react';
import '../App.css';
import MuayThaiAdd from './MuayThaiAdd';
import MuayThaiDelete from './MuayThaiDelete';

const MuayThaiList = ({ mtTechniques, onDeleteMTTechnique }) => { 
    return (
        <div className="row">
          <div className="p-0 mx-0">
            {mtTechniques.map(mtTechnique => (
                <div key={mtTechnique.id} className="muaythai-techniques-container mx-auto">
                    <p className="muaythai-technique">Technique: </p>
                    <p className="muaythai-technique-name">{mtTechnique.name}</p>
                    <p className="muaythai-type">Type: </p>
                    <p className="muaythai-type-name">{mtTechnique.type}</p>
                    <MuayThaiDelete key={mtTechnique.id} techniqueId={mtTechnique.id} onDeleteMTTechnique={onDeleteMTTechnique}/>
                </div>
            ))}
            </div>

        </div>
    );
};

export default MuayThaiList;