import React, { useState } from 'react';
import axios from 'axios';

const AddEnergyPage = () => {
  const [type, setType] = useState('');
  const [tariffs, setTariffs] = useState('');
  const [carbonFootprint, setCarbonFootprint] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/energy', {
        type,
        tariffs: tariffs.split(','),
        carbonFootprint: parseFloat(carbonFootprint),
      });
      console.log('Energy added:', response.data);
    } catch (error) {
      console.error('Error adding energy:', error);
    }
  };

  return (
    <div>
      <h1>Add New Energy</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tariffs (comma-separated)"
          value={tariffs}
          onChange={(e) => setTariffs(e.target.value)}
        />
        <input
          type="text"
          placeholder="Carbon Footprint"
          value={carbonFootprint}
          onChange={(e) => setCarbonFootprint(e.target.value)}
        />
        <button type="submit">Add Energy</button>
      </form>
    </div>
  );
};

export default AddEnergyPage;
