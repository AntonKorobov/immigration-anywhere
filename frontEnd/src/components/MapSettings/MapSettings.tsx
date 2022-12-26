import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import React from 'react';

interface MapSettingsPropsInterface {
  show: boolean;
  onHide: () => void;
}

export default function MapSettings({ show, onHide }: MapSettingsPropsInterface) {
  return (
    <ModalWindow show={show} onHide={onHide} title="Настройки">
      <div className="map-settings">
        <ul>
          <li>Глобус</li>
          <li>Цвет</li>
          <li>Размер маркеров</li>
        </ul>
      </div>
    </ModalWindow>
  );
}
