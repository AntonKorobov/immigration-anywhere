import React, { useState } from 'react';
import react from 'react';
import Map, { Marker, Popup, GeolocateControl } from 'react-map-gl';

import './WorldMap.scss';

import Pin from './WorldMapPin';

import CITIES from '../../store/cities.json';

const TOKEN =
  'pk.eyJ1Ijoiem94YWwiLCJhIjoiY2xicnI4Z25zMGptNjNvbnRqbmY1cHRvdyJ9.GHmqXKeWVadi-Bq0dEowCQ'; // Set your mapbox token here

// interface popupInterface {
//   city: string;
//   population: string;
//   image: string;
//   state: string;
//   latitude: number;
//   longitude: number;
// }

interface GlobalMapInterface {
  setIsReviewsOpen: (value: boolean) => void;
}

export default function GlobalMap({ setIsReviewsOpen }: GlobalMapInterface) {
  // const [popupInfo, setPopupInfo] = useState<popupInterface | null>(null);

  const pins = react.useMemo(
    () =>
      CITIES.map((location, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={location.longitude}
          latitude={location.latitude}
          anchor="bottom"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setIsReviewsOpen(true);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );
  return (
    <Map
      initialViewState={{
        latitude: 40,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
        // projection: 'globe', //doesn't work
      }}
      style={{ width: '100%', height: 400 }}
      mapStyle="mapbox://styles/mapbox/light-v11"
      mapboxAccessToken={TOKEN}
    >
      <GeolocateControl position="top-left" />

      {pins}

      {/* {popupInfo && (
        <Popup
          anchor="top"
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          onClose={() => setPopupInfo(null)}
        >
          <div className="map-popup">{popupInfo.city}</div>
          <img width="100%" src={popupInfo.image} />
        </Popup>
      )} */}
    </Map>
  );
}
