import React, { useMemo, useState } from 'react';
import Map, { Marker } from 'react-map-gl';

import { useGetLocationsQuery } from 'services/backend';
import { useActions } from 'hooks/useActions';
import Pin from './WorldMapPin';

import './WorldMap.scss';
import MapSettings from 'components/MapSettings/MapSettings';

const TOKEN =
  'pk.eyJ1IjoibmV3YW50b24iLCJhIjoiY2xidnl2OHlrMHJ2eTN3bXNteGN6a2MyYSJ9.stAVYrO5EP2Xu89LUrgUHA';

interface GlobalMapInterface {
  setIsReviewsOpen: (value: boolean) => void;
}

export function WorldMap({ setIsReviewsOpen }: GlobalMapInterface) {
  const { setLocationId } = useActions();
  const { data } = useGetLocationsQuery();

  const pins = useMemo(
    () =>
      data?.map((location) => (
        <Marker
          key={location.id}
          longitude={Number(location.coordinates.longitude)}
          latitude={Number(location.coordinates.latitude)}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setLocationId(location.id);
            setIsReviewsOpen(true);
          }}
        >
          <Pin />
        </Marker>
      )),
    [data]
  );

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  return (
    <div className="world-map">
      <Map
        initialViewState={{
          latitude: 53.893,
          longitude: 27.567,
          zoom: 2,
          bearing: 0,
          pitch: 0,
        }}
        mapboxAccessToken={TOKEN}
        style={{ width: '100%', height: '100%' }}
        // mapStyle="mapbox://styles/newanton/clbwa240n008014o9alqq0tt7"
        mapStyle="mapbox://styles/mapbox/light-v11"
        // projection={'globe'}
      >
        {pins}
      </Map>
      <button className="button map-button" onClick={() => setIsSettingsOpen(true)}>
        <img
          className="map-button__img"
          src="assets/settings-icon.svg"
          alt="кнопка настройки карты"
        />
      </button>
      <MapSettings show={isSettingsOpen} onHide={handleCloseSettings} />
    </div>
  );
}
