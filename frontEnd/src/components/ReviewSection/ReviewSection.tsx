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
      <p>Расскажите нам про жизнь в текущей локации</p>
      <button onClick={() => setIsReviewFormOpen(true)}>Рассказать</button>
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
