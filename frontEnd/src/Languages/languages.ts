import { LanguageType } from '../types/settingsType';

export const languages: LanguagesType = {
  belarusian: {
    langSign: 'БЕЛ',
    intro_1: 'Вялікая колькасць беларусаў зараз жывуць у розных краінах свету.',
    intro_2: 'Вось што яны кажуць:',
  },
  russian: {
    langSign: 'РУС',
    intro_1: 'Большое количество белорусов сейчас живут в различных странах мира.',
    intro_2: 'Вот что они говорят:',
  },
};

export type LanguagesType = {
  [index in LanguageType]: LanguageInterface;
};

export interface LanguageInterface {
  langSign: string;
  intro_1: string;
  intro_2: string;
}
