import { LanguageType } from '../types/settingsType';

export const languages: LanguagesType = {
  belarusian: {
    langSign: 'БЕЛ',
    intro1: 'Вялікая колькасць беларусаў зараз жывуць у розных краінах свету.',
    intro2: 'Вось што яны кажуць:',
    reviewSectionMessage: 'Раскажыце нам пра жыццё у вашай лакацыі!',
    reviewSectionButton: 'Расказаць',
    reviews: 'Водгукі',
    review: 'Водгук',
    noReviews: 'Не атрымливаецца зпампаваць водгукі. Паспрабуйце яшчэ',
    makeReview: 'Пакінуць водгук',
    makeReviewSuccess: 'Водгук створаны паспяхова',
    requiredField: 'Абавязковае поле',
    name: 'Імя',
    location: 'Горад/Населены пункт',
    rating: 'Рэйтынг:',
    describeYourExperience: 'Апішыце ваш досвед...',
    validationMax15: 'Максімум 15 сімвалаў',
    validationMax30: 'Максімум 30 сімвалаў',
    validationMax2000: 'Максімум 2000 сімвалаў',
    validationMin2: 'Мінімум 2 сімвала',
    validationMin10: 'Мінімум 10 сімвалаў',
    settings: 'Наладкі',
    mapType: 'Тып мапы:',
    flatMap: 'Плоская',
    globeMap: 'Глобус',
  },
  russian: {
    langSign: 'РУС',
    intro1: 'Большое количество белорусов сейчас живут в различных странах мира.',
    intro2: 'Вот что они говорят:',
    reviewSectionMessage: 'Расскажите нам про жизнь в вашей локации!',
    reviewSectionButton: 'Рассказать',
    reviews: 'Отзывы',
    review: 'Отзыв',
    noReviews: 'Не получилось загрузить отзывы. Попробуйте еще раз',
    makeReview: 'Оставить отзыв',
    makeReviewSuccess: 'Отзыв создан успешно',
    requiredField: 'Обязательное поле',
    name: 'Имя',
    location: 'Город/Населенный пункт',
    rating: 'Рейтинг:',
    describeYourExperience: 'Опишите ваш опыт...',
    validationMax15: 'Максимум 15 символов',
    validationMax30: 'Максимум 30 символов',
    validationMax2000: 'Максимум 2000 символов',
    validationMin2: 'Минимум 2 символа',
    validationMin10: 'Минимум 10 символов',
    settings: 'Настройки',
    mapType: 'Тип карты:',
    flatMap: 'Плоская',
    globeMap: 'Глобус',
  },
};

export type LanguagesType = {
  [index in LanguageType]: LanguageInterface;
};

export interface LanguageInterface {
  langSign: string;
  intro1: string;
  intro2: string;
  reviewSectionMessage: string;
  reviewSectionButton: string;
  reviews: string;
  review: string;
  noReviews: string;
  makeReview: string;
  makeReviewSuccess: string;
  requiredField: string;
  name: string;
  location: string;
  rating: string;
  describeYourExperience: string;
  validationMax15: string;
  validationMax30: string;
  validationMax2000: string;
  validationMin2: string;
  validationMin10: string;
  settings: string;
  mapType: string;
  flatMap: string;
  globeMap: string;
}
