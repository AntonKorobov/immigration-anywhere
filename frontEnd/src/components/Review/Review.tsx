import React from 'react';
import { ReviewPropsInterface } from 'types/reviewTypes';

import './Review.scss';

export function Review({ userName, reviewText, rating }: ReviewPropsInterface) {
  return (
    <div className="review">
      <div className="review__info-wrapper">
        <h3 className="h3 review__user-name">{userName}</h3>
        <div className="review__rating-wrapper">
          {Array.from(Array(rating)).map((item, index) => (
            <img
              key={'rating' + index}
              className="review__star"
              src="./assets/HandDrawnStar.png"
              alt="звезда рейтинга"
            />
          ))}
        </div>
      </div>
      <p className="review__text">{reviewText}</p>
      {/* <div className="chat-buttons-wrapper">
        <button className="button chat__button">Ответить</button>
        <button className="button chat__button">Показать ответы</button>
      </div> */}
    </div>
  );
}
