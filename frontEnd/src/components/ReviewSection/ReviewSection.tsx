import React from 'react';

import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { ReviewForm } from 'components/ReviewForm/ReviewForm';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { MultiLangText } from 'components/MultiLangText/MultiLangText';

import './ReviewSection.scss';

export function ReviewSection() {
  const { isReviewFormOpen } = useTypedSelector((state) => state.globalState);
  const { setIsReviewFormOpen } = useActions();

  const handleCloseReviewForm = () => {
    setIsReviewFormOpen(false);
  };

  return (
    <>
      <section className="review-section">
        <div className="review-section__message">
          <MultiLangText textId="reviewSectionMessage" />
        </div>
        <button
          className="review__button btn btn-primary"
          onClick={() => setIsReviewFormOpen(true)}
        >
          <MultiLangText textId="reviewSectionButton" />
        </button>
      </section>
      <ModalWindow
        show={isReviewFormOpen}
        onHide={handleCloseReviewForm}
        _title={(<MultiLangText textId="makeReview" />) as unknown as string}
      >
        <ReviewForm />
      </ModalWindow>
    </>
  );
}
