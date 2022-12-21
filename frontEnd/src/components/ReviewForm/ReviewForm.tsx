import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Loading } from 'components/Loading/Loading';
import {
  // useCreateLocationMutation,
  useCreateReviewMutation,
  // useGetGeolocationIdQuery,
  // useGetGeolocationQuery,
} from 'services/backend';

import './ReviewForm.scss';

interface ReviewFormInterface {
  name: string;
  location: string;
  reviewText: string;
  rating: string;
}

export function ReviewForm() {
  const [reviewFormData, setReviewFormData] = useState<ReviewFormInterface | null>();

  const getGeolocationResponse = useGetGeolocationQuery(reviewFormData?.location || '', {
    skip: Boolean(!reviewFormData?.location),
  });
  const [createLocation, createLocationResponse] = useCreateLocationMutation();
  const getGeolocationIdResponse = useGetGeolocationIdQuery(
    {
      locationName: getGeolocationResponse.data?.data[0].name || '',
      countryId: getGeolocationResponse.data?.data[0].country_code || '',
    },
    {
      skip: Boolean(!createLocationResponse.isError),
    }
  );
  const [createReview, createReviewResponse] = useCreateReviewMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormInterface>();

  const onSubmitHandler: SubmitHandler<ReviewFormInterface> = (formData) => {
    setReviewFormData(formData);
  };

  useEffect(() => {
    if (getGeolocationResponse.isFetching) return; //!!!
    if (getGeolocationResponse.isSuccess) {
      createLocation({
        locationName: getGeolocationResponse.data.data[0].name || '',
        countryId: getGeolocationResponse.data.data[0].country_code || '', //TODO show all results and chose
        latitude: getGeolocationResponse.data.data[0].latitude?.toString() || '',
        longitude: getGeolocationResponse.data.data[0].longitude?.toString() || '',
      });
    }
  }, [getGeolocationResponse.isSuccess]);

  useEffect(() => {
    if (createLocationResponse.isLoading) return;
    if (createLocationResponse.isSuccess && reviewFormData) {
      createReview({
        userName: reviewFormData.name,
        locationId: createLocationResponse.data.locationId,
        rating: reviewFormData.rating,
        reviewText: reviewFormData.reviewText,
      });
    }
  }, [createLocationResponse.isSuccess]);

  useEffect(() => {
    if (getGeolocationIdResponse.isLoading) return;
    if (getGeolocationIdResponse.isSuccess && reviewFormData && getGeolocationIdResponse.data) {
      createReview({
        userName: reviewFormData.name,
        locationId: getGeolocationIdResponse.data.locationId,
        rating: reviewFormData.rating,
        reviewText: reviewFormData.reviewText,
      });
    }
  }, [getGeolocationIdResponse.isSuccess]);

  return (
    <>
      {createReviewResponse.isSuccess ? (
        <p className="success-text">Отзыв создан успешно</p>
      ) : getGeolocationResponse.isSuccess || getGeolocationResponse.isLoading ? (
        <Loading />
      ) : (
        <form className="review-form" onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="form-group">
            <label htmlFor="review-form__name-input">{'Имя'}</label>
            <input
              {...register('name', {
                required: 'Обязательное поле',
                maxLength: {
                  value: 15,
                  message: 'Максимум 15 символов',
                },
                minLength: {
                  value: 2,
                  message: 'Минимум 2 символа',
                },
              })}
              type="text"
              placeholder={'Юля...'}
              className="form-control"
              id="review-form__name-input"
            />
          </div>
          <div className="error-message">
            {errors?.name && <p className="error-message__text">{errors?.name?.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="review-form__location-input">{'Расположение'}</label>
            <input
              {...register('location', {
                required: 'Обязательное поле',
                maxLength: {
                  value: 30,
                  message: 'Максимум 15 символов',
                },
                minLength: {
                  value: 2,
                  message: 'Минимум 2 символа',
                },
              })}
              type="text"
              placeholder={'Варшава...'}
              className="form-control"
              id="review-form__location-input"
            />
          </div>
          <div className="error-message">
            {errors?.location && <p className="error-message_text">{errors?.location?.message}</p>}
          </div>
          <div className="form-group">
            <label className="input-element">
              Рейтинг:
              <select {...register('rating')} className="input-element__select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="review-form__review-input">{'Отзыв'}</label>
            <textarea
              {...register('reviewText', {
                required: 'Обязательное поле',
                maxLength: {
                  value: 2000,
                  message: 'Максимум 2000 символов',
                },
                minLength: {
                  value: 10,
                  message: 'Минимум 10 символов',
                },
              })}
              placeholder={'Опишите ваш опыт...'}
              className="form-control review-form__textarea"
              id="review-form__review-input"
            />
          </div>
          <div className="error-message">
            {errors?.reviewText && (
              <p className="error-message__text">{errors?.reviewText?.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary review__button"
            // disabled={!isValid}
          >
            {'Оставить отзыв'}
          </button>
        </form>
      )}
    </>
  );
}
