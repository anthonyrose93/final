import React, { useState } from 'react';
import axios from 'axios';

const JiuJitsuAdd = ({ onTechniqueAdded }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const handleAddTechnique = async () => {
    try {
      const response = await axios.post('https://65e8adc04bb72f0a9c501d0d.mockapi.io/api/week12/techniques', {
        name,
        type
      });
      onTechniqueAdded(response.data); 
      setName('');
      setType('');
    } catch (error) {
      console.error('Error adding technique:', error);
    }
  };

  return (
    <div className="text-center">
      <h2 className="m-0">Add New Jiu-Jitsu Technique</h2>
      <p className="add-techniques-paragraph text-center">
        This is your online-journal for keeping track of every technique you have used successfully during live training. Watch how  
        fast it adds up!
      </p>
      <form>
        <div className="add-jiujitsu-techniques text-center mx-auto">
          <input type="text" className="text-center" placeholder="New Technique" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="add-jiujitsu-techniques text-center mx-auto">
          <input type="text" className="text-center" placeholder="Technique Type" value={type} onChange={e => setType(e.target.value)} />
        </div>
        <button type="button" className="add-jiujitsu-button mx-auto" onClick={handleAddTechnique}>Add Technique</button>
      </form>
    </div>
  );
};

export default JiuJitsuAdd;