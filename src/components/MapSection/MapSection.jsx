import React from 'react'
import './MapSection.css'
import map_image from '@images/map.jpg';

const MapSection = () => {
  return (
    <section className="map-section">
        <img src={map_image} alt="Google maps image of Norrmalm"/>
    </section>
  )
}

export default MapSection