import React from 'react';
//import MapComponent from './components/MapComponent';
import dynamic from 'next/dynamic';
import { NavigationMenu } from './components/NavigationMenu';

const MapComponent = dynamic(() => import('./components/MapComponent'), {
    ssr: false, // Disable server-side rendering
  });
  
  export default function MapPage() {
    return (
      <div>
        <NavigationMenu/>
        <MapComponent />
      </div>
    );
  }