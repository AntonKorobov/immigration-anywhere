import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { ReviewForm } from 'components/ReviewForm/ReviewForm';
import React, { useState } from 'react';

import './ReviewSection.scss';

export function ReviewSection() {
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);

  const handleCloseReviewForm = () => {
    setIsReviewFormOpen(false);
  };

  return (
    <>
      <section className="section-message">
        <div className="message__header">Расскажите нам про жизнь в вашей текущей локации!</div>
        <button
          className="message__button btn btn-primary"
          onClick={() => setIsReviewFormOpen(true)}
        >
          Рассказать
        </button>
        <div className="message__plane-container">
          <img className="vector_up" src="assets/vector_up.png" />
          <img className="plane_up" src="assets/plane_up.png" />
        </div>
      </section>
      <ModalWindow
        show={isReviewFormOpen}
        onHide={handleCloseReviewForm}
        title={'Оставить свой отзыв'}
      >
        <ReviewForm />
      </ModalWindow>
    </>
  );
}
