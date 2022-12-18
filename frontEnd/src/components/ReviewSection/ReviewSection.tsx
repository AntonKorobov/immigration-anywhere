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
      <p className="describe">Расскажите нам про жизнь в текущей локации</p>
      <button className="tell-button btn btn-primary" onClick={() => setIsReviewFormOpen(true)}>
        Рассказать
      </button>
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
