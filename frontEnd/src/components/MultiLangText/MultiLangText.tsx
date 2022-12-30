import React from 'react';

import { useTypedSelector } from 'hooks/useTypedSelector';

import { languages, LanguageInterface } from '../../Languages/languages';

type textIdType = keyof LanguageInterface;
interface MultiLangTextInterface {
  textId: textIdType;
}

export function MultiLangText({ textId }: MultiLangTextInterface) {
  const { settings } = useTypedSelector((state) => state.globalState);

  return <>{languages[settings.language][textId]}</>;
}
