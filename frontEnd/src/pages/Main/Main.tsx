import React, { useState } from 'react';

import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { ReviewSection } from 'components/ReviewSection/ReviewSection';
import { Review } from 'components/Review/Review';
import { WorldMap } from 'components/WorldMap/WorldMap';
import { useGetReviewsQuery } from 'services/backend';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { Loading } from 'components/Loading/Loading';
import { useActions } from 'hooks/useActions';

import './Main.scss';
import { MultiLangText } from 'components/MultiLangText/MultiLangText';

export function Main() {
  const { locationId } = useTypedSelector((state) => state.globalState);
  const { setLocationId } = useActions();

  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const { data, isSuccess, isError, isLoading } = useGetReviewsQuery(locationId || '', {
    skip: !locationId,
  });

  const handleCloseReviews = () => {
    setIsReviewsOpen(false);
    setTimeout(() => {
      setLocationId(''); // !!! Because animation delay. Window cleaning faster than closing
    }, 200);
  };

  return (
    <div className="main-container">
      <section className="info-section">
        <p className="info-section__text">
          <MultiLangText textId="intro_1" />
        </p>
        <p className="info-section__small-text">
          <MultiLangText textId="intro_2" />
        </p>
      </section>
      {/* <WorldMap setIsReviewsOpen={setIsReviewsOpen} /> */}
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
