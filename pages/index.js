import React from 'react';
import { getFeaturedEvents } from '../data/dummy-data';

const HomePage = () => {
  const featureEvents = getFeaturedEvents();

  return (
    <div>
      <h1>The Home Page</h1>
    </div>
  );
};

export default HomePage;
