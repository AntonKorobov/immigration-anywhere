import React, { useEffect, useState } from 'react';

import { ModalWindow } from 'components/ModalWindow/ModalWindow';

import './Main.scss';

import { ReviewSection } from 'components/ReviewSection/ReviewSection';
import { Review } from 'components/Review/Review';
import { WorldMap } from 'components/WorldMap/WorldMap';
import { useGetReviewsQuery } from 'services/backend';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { Loading } from 'components/Loading/Loading';
import { useActions } from 'hooks/useActions';

export function Main() {
  const { locationId } = useTypedSelector((state) => state.globalState);
  const { setLocationId } = useActions();

  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  const { data, isSuccess, isError, isLoading } = useGetReviewsQuery(locationId || '', {
    skip: !locationId, //!!!
  });

  const handleCloseReviews = () => {
    setIsReviewsOpen(false);
    setLocationId('');
  };

  return (
    <div className="main-container">
      <section className="section-top">
        <div className="top__plane-container">
          <img className="vector_down" src="assets/vector_down.png" />
          <img className="plane_down" src="assets/plane_down.png" />
        </div>
        <div className="top__header">
          Большое количество белорусов сейчас живут в<br />
          различных странах мира.
        </div>
        <div className="top__subheader">Вот что они говорят:</div>
      </section>
      <WorldMap setIsReviewsOpen={setIsReviewsOpen} />
      <ReviewSection />
      <ModalWindow show={isReviewsOpen} onHide={handleCloseReviews} title={'Reviews'}>
        <>
          {isSuccess && !isLoading ? (
            data?.map((item) => (
              <Review
                key={item.id}
                id={item.id}
                userName={item.userName}
                rating={Number(item.rating)}
                reviewText={item.reviewText}
              />
            ))
          ) : (
            <Loading />
          )}
          {data?.length === 0 && <h2>Нет отзывов</h2>}
        </>
      </ModalWindow>
    </div>
  );
}
