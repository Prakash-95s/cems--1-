import React from 'react';
import { getCities } from './api/citiesApi';

const CitiesPage = ({ cities }) => {
  return (
    <div>
      <h1>Available Cities</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.cityId}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  const cities = await getCities();
  return {
    props: {
      cities,
    },
  };
};

export default CitiesPage;
