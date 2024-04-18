import React from 'react';
import '../App.css';
import JiuJitsuDelete from './JiuJitsuDelete';

const JiuJitsuList = ({ techniques, onDeleteTechnique }) => {
    console.log('JiuJitsuList re-rendered');
    return (
        <div className="jiujitsu-techniques text-center">
            {techniques.map(technique => (
                <div key={technique.id} className="jiujitsu-techniques-container mx-auto text-center">
                    <p className="jiu-jitsu-technique">Technique: </p>
                    <p className="jiu-jitsu-technique-name">{technique.name}</p>
                    <p className="jiu-jitsu-type">Type: </p>
                    <p className="jiu-jitsu-type-name">{technique.type}</p>
                    <JiuJitsuDelete key={technique.id} techniqueId={technique.id} onDeleteTechnique={onDeleteTechnique}/>
                </div>
            ))}
        </div>
    );
};

export default JiuJitsuList;