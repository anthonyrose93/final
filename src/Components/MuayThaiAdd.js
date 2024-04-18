import React, { useState } from 'react';
import axios from 'axios';

const MuayThaiAdd = ({ onMuayThaiTechniqueAdded }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
  
    const handleAddMTTechnique = async () => {
      try {
        const response = await axios.post('https://65e8adc04bb72f0a9c501d0d.mockapi.io/api/week12/mttechniques', {
          name,
          type
        });
        onMuayThaiTechniqueAdded(response.data); 
        setName('');
        setType('');
      } catch (error) {
        console.error('Error adding technique:', error);
      }
    };
  
    return (
      <div>
        <h2>Add New Muay Thai Technique</h2>
        <p className="add-techniques-paragraph">
          This is your online-journal for keeping track of every technique you have used successfully during live sparring. Watch how  
          fast it adds up!
        </p>
        <form>
          <div className="add-muaythai-techniques">
            <input type="text" placeholder="New Technique" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="add-muaythai-techniques">
            <input type="text" placeholder="Technique Type" value={type} onChange={e => setType(e.target.value)} />
          </div>
          <button type="button" className="add-muaythai-button" onClick={handleAddMTTechnique}>Add Technique</button>
        </form>
      </div>
    );
  };
  
  export default MuayThaiAdd;