'use client';

/**
 * ContactMap Component - Atlan Reserve
 * Mapa de ubicación con Google Maps (requiere API key)
 * 
 * TODO: 
 * 1. Instalar: npm install @react-google-maps/api
 * 2. Agregar NEXT_PUBLIC_GOOGLE_MAPS_API_KEY en .env.local
 * 3. Descomentar el código de implementación
 */

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/variants';

// Coordenadas de Punta de Mita
const PUNTA_MITA_COORDS = {
  lat: 20.7797,
  lng: -105.5214,
};

export function ContactMap() {
  /* 
  // Implementación con Google Maps
  // Descomentar cuando tengas la API key configurada
  
  import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
  import { useState } from 'react';

  const [map, setMap] = useState<google.maps.Map | null>(null);
  
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const options: google.maps.MapOptions = {
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
    styles: [
      {
        featureType: 'all',
        elementType: 'geometry',
        stylers: [{ color: '#f5f6f8' }],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#8998B6' }],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#ffffff' }],
      },
    ],
  };

  const onLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={PUNTA_MITA_COORDS}
        zoom={14}
        options={options}
        onLoad={onLoad}
      >
        <Marker
          position={PUNTA_MITA_COORDS}
          title="Atlan Reserve - Palo Alto"
        />
      </GoogleMap>
    </LoadScript>
  );
  */

  // Versión placeholder mientras se configura Google Maps
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative h-96 bg-gradient-to-br from-pearl to-ash"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center border border-ash bg-white text-navy">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        
        <h3 className="mb-2 font-serif text-2xl font-light text-navy">
          Punta de Mita, Nayarit
        </h3>
        
        <p className="mb-4 text-sm font-light text-steel">
          México
        </p>
        
        <p className="max-w-md text-sm text-slate">
          Descubre nuestro exclusivo desarrollo en uno de los destinos más 
          prestigiosos de la Riviera Nayarit
        </p>

        {/* Coordenadas para desarrolladores */}
        <div className="mt-6 rounded border border-ash bg-white px-4 py-2">
          <p className="text-xs font-mono text-steel">
            {PUNTA_MITA_COORDS.lat}, {PUNTA_MITA_COORDS.lng}
          </p>
        </div>

        {/* Botón para Google Maps */}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${PUNTA_MITA_COORDS.lat},${PUNTA_MITA_COORDS.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 border border-navy bg-transparent px-6 py-3 text-sm font-light text-navy transition-all hover:bg-navy hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          Ver en Google Maps
        </a>
      </div>
    </motion.section>
  );
}
