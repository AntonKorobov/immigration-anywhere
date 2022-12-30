import React from 'react';

import { LanguageType } from 'types/settingsType';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';

import './LanguageButton.scss';

export default function LanguageButton() {
  const { settings } = useTypedSelector((state) => state.globalState);
  const { setSettings } = useActions();

  const onSelectHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    setSettings({ ...settings, language: event.currentTarget.value as LanguageType });
  };

  return (
    <div className="language-button-wrapper">
      <form className="language-form">
        <select
          className="language-form__select"
          value={settings.language}
          onChange={onSelectHandler}
        >
          <option className="language-form__option" value="belarusian">
            БЕЛ
          </option>
          <option className="language-form__option" value="russian">
            РУС
          </option>
        </select>
      </form>
    </div>
  );
}
