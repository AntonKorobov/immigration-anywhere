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
      <WorldMap setIsReviewsOpen={setIsReviewsOpen} />
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
      <ReviewSection />
    </div>
  );
}
