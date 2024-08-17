import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function UserDetails() {
  const [formData, setFormData] = useState({
    userId: {
      userId: uuidv4(), // Auto-generated ID
      foreignKeyId: 0
    },
    name: '',
    tariffPlan: '',
    homeEnergy: {
      homeEnergyId: uuidv4(), // Auto-generated ID
      homeName: '',
      energyTypes: '',
      energyConsumption: 0,
      appliancesTypes: '',
      carbonFootprint: 0,
      energySaved: 0,
      users: [],
      city: {
        cityId: uuidv4(), // Auto-generated ID
        name: '',
        state: '',
        population: '',
        country: '',
        grids: [
          {
            gridEnergyId: uuidv4(), // Auto-generated ID
            gridType: '',
            totalEnergyProduced: 0,
            energyConsumed: 0,
            energySaved: 0,
            energyRegenerated: 0,
            houseSupplyCapacity: 0,
            homes: [],
            city: '',
            smartGrid: true
          }
        ],
        users: [],
        homes: [],
        transports: [
          {
            vehicleId: uuidv4(), // Auto-generated ID
            vehicleType: '',
            energyModelType: '',
            fuelType: '',
            fuelConsumption: 0,
            carbonFootprintData: '',
            vehicleToGridPowerRegeneration: 0,
            regeneratedEnergy: 0,
            havingV2G: true,
            pollutionLevel: 0,
            pollutionLevelReduction: 0,
            user: '',
            city: '',
            electric: true,
            publicTransport: true
          }
        ]
      },
      gridEnergy: {
        gridEnergyId: uuidv4(), // Auto-generated ID
        gridType: '',
        totalEnergyProduced: 0,
        energyConsumed: 0,
        energySaved: 0,
        energyRegenerated: 0,
        houseSupplyCapacity: 0,
        homes: [],
        city: '',
        smartGrid: true
      },
      apartment: true
    },
    city: {
      cityId: uuidv4(), // Auto-generated ID
      name: '',
      state: '',
      population: '',
      country: '',
      grids: [],
      users: [],
      homes: [],
      transports: []
    },
    transports: [],
    twoFactorEnabled: true,
    twoFactorMethod: '',
    twoFactorPhoneNumber: '',
    twoFactorEmail: '',
    score: 0
  });

  const handleInputChange = (e, field, subField = null, index = null) => {
    if (subField && index !== null) {
      setFormData((prevData) => ({
        ...prevData,
        [field]: {
          ...prevData[field],
          [subField]: prevData[field][subField].map((item, idx) =>
            idx === index ? { ...item, [e.target.name]: e.target.value } : item
          )
        }
      }));
    } else if (subField) {
      setFormData((prevData) => ({
        ...prevData,
        [field]: {
          ...prevData[field],
          [subField]: e.target.value
        }
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [field]: e.target.value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('115.97.233.157:8080/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Basic User Info */}
      <h2>User Information</h2>
      <label>
        Name:
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange(e, 'name')}
        />
      </label>
      <label>
        Tariff Plan:
        <input
          type="text"
          value={formData.tariffPlan}
          onChange={(e) => handleInputChange(e, 'tariffPlan')}
        />
      </label>

      {/* Home Energy Info */}
      <h2>Home Energy Information</h2>
      <label>
        Home Name:
        <input
          type="text"
          value={formData.homeEnergy.homeName}
          onChange={(e) => handleInputChange(e, 'homeEnergy', 'homeName')}
        />
      </label>
      <label>
        Energy Types:
        <input
          type="text"
          value={formData.homeEnergy.energyTypes}
          onChange={(e) => handleInputChange(e, 'homeEnergy', 'energyTypes')}
        />
      </label>
      <label>
        Energy Consumption:
        <input
          type="number"
          value={formData.homeEnergy.energyConsumption}
          onChange={(e) =>
            handleInputChange(e, 'homeEnergy', 'energyConsumption')
          }
        />
      </label>
      {/* Continue for other fields... */}

      {/* Transport Information */}
      <h2>Transport Information</h2>
      {formData.transports.map((transport, index) => (
        <div key={index}>
          <label>
            Vehicle Type:
            <input
              type="text"
              value={transport.vehicleType}
              onChange={(e) =>
                handleInputChange(e, 'transports', 'vehicleType', index)
              }
            />
          </label>
          {/* Add more transport fields as needed */}
        </div>
      ))}

      {/* Two-Factor Authentication */}
      <h2>Two-Factor Authentication</h2>
      <label>
        Enabled:
        <input
          type="checkbox"
          checked={formData.twoFactorEnabled}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              twoFactorEnabled: e.target.checked
            }))
          }
        />
      </label>
      <label>
        Method:
        <input
          type="text"
          value={formData.twoFactorMethod}
          onChange={(e) => handleInputChange(e, 'twoFactorMethod')}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          value={formData.twoFactorPhoneNumber}
          onChange={(e) => handleInputChange(e, 'twoFactorPhoneNumber')}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={formData.twoFactorEmail}
          onChange={(e) => handleInputChange(e, 'twoFactorEmail')}
        />
      </label>

      {/* Score */}
      <label>
        Score:
        <input
          type="number"
          value={formData.score}
          onChange={(e) => handleInputChange(e, 'score')}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
