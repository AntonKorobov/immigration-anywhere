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
    location: 'Размяшчэнне',
    rating: 'Рэйтынг:',
    describeYourExperience: 'Апішыце ваш досвед...',
    max: 'Максімум',
    min: 'Мінімум',
    symbols: 'сімвалаў',
    symbol: 'сімвала',
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
    location: 'Расположение',
    rating: 'Рейтинг:',
    describeYourExperience: 'Опишите ваш опыт...',
    max: 'Максимум',
    min: 'Минимум',
    symbols: 'символов',
    symbol: 'символа',
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
  max: string;
  min: string;
  symbols: string;
  symbol: string;
}
