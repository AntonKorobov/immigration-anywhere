import React from 'react';

import { MultiLangText } from 'components/MultiLangText/MultiLangText';
import { LanguageType } from 'types/settingsType';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';

import './LanguageButton.scss';

export default function LanguageButton() {
  const { settings } = useTypedSelector((state) => state.globalState);
  const { setSettings } = useActions();

  const onSelectHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSettings({ ...settings, language: event.currentTarget.value as LanguageType });
  };

  return (
    <>
      <button
        className={`button language-button ${
          settings.language === 'belarusian' && 'language-button_active'
        }`}
        value={'belarusian'}
        onClick={onSelectHandler}
      >
        БЕЛ
        {/* <MultiLangText textId="langSign" /> */}
      </button>
      <button
        className={`button language-button ${
          settings.language === 'russian' && 'language-button_active'
        }`}
        value={'russian'}
        onClick={onSelectHandler}
      >
        РУС
        {/* <MultiLangText textId="langSign" /> */}
      </button>
    </>
  );
}
