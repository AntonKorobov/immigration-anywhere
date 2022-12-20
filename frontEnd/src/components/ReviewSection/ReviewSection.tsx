import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { ReviewForm } from 'components/ReviewForm/ReviewForm';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import React from 'react';

import './ReviewSection.scss';

export function ReviewSection() {
  const { isReviewFormOpen } = useTypedSelector((state) => state.globalState);
  const { setIsReviewFormOpen } = useActions();

  const handleCloseReviewForm = () => {
    setIsReviewFormOpen(false);
  };

  return (
    <>
      <section className="section-message">
        <div className="message__header">Расскажите нам про жизнь в вашей текущей локации!</div>
        <button
          className="review__button btn btn-primary"
          onClick={() => setIsReviewFormOpen(true)}
        >
          Рассказать
        </button>
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
