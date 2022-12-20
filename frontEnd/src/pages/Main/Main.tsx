import React, { useEffect, useMemo, useState } from 'react';

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
    setTimeout(() => {
      setLocationId(''); // !!! Because animation delay closing. And window cleaning faster than close
    }, 200);
  };

  return (
    <div className="main-container">
      <section className="section-top">
        <div className="top__header">
          Большое количество белорусов сейчас живут в<br />
          различных странах мира.
        </div>
        <div className="top__subheader">Вот что они говорят:</div>
      </section>
      <WorldMap setIsReviewsOpen={setIsReviewsOpen} />
      <ReviewSection />
      <ModalWindow show={isReviewsOpen} onHide={handleCloseReviews} title={'Отзывы'}>
        <>
          {isSuccess &&
            data.map((item) => (
              <Review
                key={item.id}
                id={item.id}
                userName={item.userName}
                rating={Number(item.rating)}
                reviewText={item.reviewText}
              />
            ))}
          {isLoading && <Loading />}
          {isError && <p>Не получилось загрузить отзывы. Попробуйте еще раз</p>}
        </>
      </ModalWindow>
    </div>
  );
}
