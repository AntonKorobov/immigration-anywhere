import { Loading } from 'components/Loading/Loading';
import React, { useEffect, useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import {
  useCreateLocationMutation,
  useCreateReviewMutation,
  useGetGeolocationQuery,
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

  const { data, isSuccess, isError, isLoading, isUninitialized } = useGetGeolocationQuery(
    reviewFormData?.location || '',
    {
      skip: Boolean(!reviewFormData?.location),
    }
  );

  const [createLocation, createLocationResponse] = useCreateLocationMutation();
  const [createReview, createReviewResponse] = useCreateReviewMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ReviewFormInterface>();

  const onSubmitHandler: SubmitHandler<ReviewFormInterface> = (formData) => {
    setReviewFormData(formData); //Ok?
  };

  useEffect(() => {
    if (isSuccess) {
      createLocation({
        locationName: data.data[0].name || '',
        countryId: data.data[0].country_code || '', //TODO show all results and chose
        latitude: data.data[0].latitude?.toString() || '',
        longitude: data.data[0].longitude?.toString() || '',
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (createLocationResponse.isSuccess && reviewFormData)
      createReview({
        userName: reviewFormData.name,
        locationId: createLocationResponse.data.locationId,
        rating: reviewFormData.rating,
        reviewText: reviewFormData.reviewText,
      });
  }, [createLocationResponse]);

  return (
    <>
      {createReviewResponse.isSuccess ? (
        <h3>Отзыв создан успешно</h3>
      ) : isSuccess || isLoading ? (
        <Loading />
      ) : (
        <form
          className="sign-in-form"
          style={{ maxWidth: '25rem', margin: '0 auto' }}
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div className="form-group">
            <label htmlFor="sign-in-form__name-input">{'Имя'}</label>
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
              placeholder={'Имя...'}
              className="form-control"
              id="sign-in-form__name-input"
            />
          </div>
          <div style={{ height: '2rem', color: 'red' }}>
            {errors?.name && <p className="error-message">{errors?.name?.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="sign-in-form__location-input">{'Расположение'}</label>
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
              className="form-control"
              id="sign-in-form__location-input"
            />
          </div>
          <div style={{ height: '2rem', color: 'red' }}>
            {errors?.location && <p className="error-message">{errors?.location?.message}</p>}
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
            <label htmlFor="sign-in-form__review-input">{'Отзыв'}</label>
            <textarea
              {...register('reviewText', {
                required: 'Обязательное поле',
                maxLength: {
                  value: 2000,
                  message: 'Максимум 2000 символов',
                },
                minLength: {
                  value: 50,
                  message: 'Минимум 50 символов',
                },
              })}
              placeholder={'Отзыв...'}
              className="form-control"
              id="sign-in-form__review-input"
            />
          </div>
          <div style={{ height: '1rem', color: 'red' }}>
            {errors?.reviewText && <p className="error-message">{errors?.reviewText?.message}</p>}
          </div>
          <button
            type="submit"
            style={{ width: '10rem', margin: '2.5rem auto', display: 'block' }}
            className="btn btn-primary"
            // disabled={!isValid}
          >
            {'Оставить отзыв'}
          </button>
        </form>
      )}
    </>
  );
}
