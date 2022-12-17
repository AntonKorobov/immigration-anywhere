import React from 'react';
import { ReviewPropsInterface } from 'types/reviewTypes';

import './Review.scss';

export function Review({ userName, reviewText, rating }: ReviewPropsInterface) {
  return (
    <div className="review">
      <div className="review__info-wrapper">
        <h3 className="h3 review__user-name">{userName}</h3>
        <div className="review__rating-wrapper">
          {Array.from(Array(rating)).map((item) => (
            <img
              key={item}
              className="review__star"
              src="./assets/HandDrawnStar.png"
              alt="звезда рейтинга"
            />
          ))}
        </div>
      </div>
      <p className="review__text">{reviewText}</p>
      <div className="review__buttons">
        <button className="button review__button">Ответить</button>
        <button className="button review__button">Показать ответы</button>
      </div>
    </div>
  );
}
