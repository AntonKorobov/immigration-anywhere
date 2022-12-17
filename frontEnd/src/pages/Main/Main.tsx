import React, { useState } from 'react';

import { ModalWindow } from 'components/ModalWindow/ModalWindow';

import './Main.scss';
import { ReviewSection } from 'components/ReviewSection/ReviewSection';
import { ReviewPropsInterface } from 'types/reviewTypes';
import { Review } from 'components/Review/Review';

export function Main() {
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  const handleCloseReviews = () => {
    setIsReviewsOpen(false);
  };

  const reviewExapmle: ReviewPropsInterface = {
    id: 'id',
    userName: 'Name',
    rating: 5,
    reviewText:
      ' Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.',
  };

  return (
    <div className="container">
      <div className="map">
        <button onClick={() => setIsReviewsOpen(true)}>Open reviews</button>
      </div>
      <ModalWindow show={isReviewsOpen} onHide={handleCloseReviews} title={'Reviews'}>
        <>
          {Array.from(Array(5)).map((item) => (
            <Review
              key={reviewExapmle.id + item}
              id={reviewExapmle.id}
              userName={reviewExapmle.userName}
              rating={reviewExapmle.rating}
              reviewText={reviewExapmle.reviewText}
            />
          ))}
        </>
      </ModalWindow>
      <ReviewSection />
    </div>
  );
}
