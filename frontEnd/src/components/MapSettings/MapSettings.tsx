import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { MultiLangText } from 'components/MultiLangText/MultiLangText';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import React from 'react';
import { MapType } from 'types/settingsType';

interface MapSettingsPropsInterface {
  show: boolean;
  onHide: () => void;
}

export default function MapSettings({ show, onHide }: MapSettingsPropsInterface) {
  const { settings } = useTypedSelector((state) => state.globalState);
  const { setSettings } = useActions();

  const onSelectHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    setSettings({ ...settings, mapType: event.currentTarget.value as MapType });
  };

  return (
    <ModalWindow
      show={show}
      onHide={onHide}
      _title={(<MultiLangText textId="settings" />) as unknown as string}
    >
      <div className="map-settings">
        <form className="map-settings__form">
          <label className="map-settings__map-type input-element">
            <MultiLangText textId="mapType" />
            <select
              value={settings.mapType}
              className="map-settings__select input-element__select"
              onChange={onSelectHandler}
            >
              <option className="select__option" value={MapType.flat}>
                <MultiLangText textId="flatMap" />
              </option>
              <option className="select__option" value={MapType.globe}>
                <MultiLangText textId="globeMap" />
              </option>
            </select>
          </label>
        </form>
      </div>
    </ModalWindow>
  );
}
