import React, { useState } from 'react';
import react from 'react';
import Map, { Marker, Popup, GeolocateControl } from 'react-map-gl';

import './WorldMap.scss';

import Pin from './WorldMapPin';

import { useGetLocationsQuery } from 'services/backend';
import { Loading } from 'components/Loading/Loading';

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

export function WorldMap({ setIsReviewsOpen }: GlobalMapInterface) {
  // const [popupInfo, setPopupInfo] = useState<popupInterface | null>(null);
  const { isLoading, data } = useGetLocationsQuery(); //update after creating review

  const pins = react.useMemo(
    () =>
      data?.map((location) => (
        <Marker
          key={location.id}
          longitude={Number(location.coordinates.longitude)}
          latitude={Number(location.coordinates.latitude)}
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

      {isLoading && <Loading />}
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
