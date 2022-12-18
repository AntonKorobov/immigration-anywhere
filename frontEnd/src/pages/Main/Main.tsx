import React, { useState } from 'react';

import { ModalWindow } from 'components/ModalWindow/ModalWindow';

import './Main.scss';

import { ReviewSection } from 'components/ReviewSection/ReviewSection';
import { ReviewPropsInterface } from 'types/reviewTypes';
import { Review } from 'components/Review/Review';
import WorldMap from 'components/WorldMap/WorldMap';

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
    <div className="main-container">
      <section className="tell-section">
        <div className="tell__plane-container">
          <img className="vector" src="assets/vector_down.png" />
          <img className="plane" src="assets/plane_down.png" />
        </div>
        <div className="tell__header">
          Большое количество белорусов сейчас живут в<br />
          различных странах мира.
        </div>
        <div className="tell__subheader">Вот что они говорят:</div>
      </section>
      <WorldMap setIsReviewsOpen={setIsReviewsOpen} />
      {/* <button onClick={() => setIsReviewsOpen(true)}>Open reviews</button> */}
      <ModalWindow show={isReviewsOpen} onHide={handleCloseReviews} title={'Reviews'}>
        <>
          {Array.from(Array(5)).map((item, index) => (
            <Review
              key={reviewExapmle.id + index}
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
