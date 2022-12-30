import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Loading } from 'components/Loading/Loading';
import { useCreateReviewMutation, useGetGeolocationQuery } from 'services/backend';

import './ReviewForm.scss';
import { MultiLangText } from 'components/MultiLangText/MultiLangText';

interface ReviewFormInterface {
  name: string;
  location: string;
  reviewText: string;
  rating: string;
}

export function ReviewForm() {
  const [reviewFormData, setReviewFormData] = useState<ReviewFormInterface | null>();
  const reviewPlaceholder = (<MultiLangText textId="makeReview" />) as unknown as string;

  const getGeolocationResponse = useGetGeolocationQuery(reviewFormData?.location || '', {
    skip: Boolean(!reviewFormData?.location),
  });

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
    if (getGeolocationResponse.isSuccess && reviewFormData) {
      createReview({
        userName: reviewFormData.name,
        rating: reviewFormData.rating,
        reviewText: reviewFormData.reviewText,
        locationName: getGeolocationResponse.data?.data[0].name || '',
        countryId: getGeolocationResponse.data?.data[0].country_code || '',
        latitude: getGeolocationResponse.data?.data[0].latitude?.toString() || '',
        longitude: getGeolocationResponse.data?.data[0].longitude?.toString() || '',
      });
    }
  }, [getGeolocationResponse.isSuccess]);

  return (
    <>
      {createReviewResponse.isSuccess ? (
        <p className="success-text">
          <MultiLangText textId="makeReviewSuccess" />
        </p>
      ) : getGeolocationResponse.isSuccess || getGeolocationResponse.isLoading ? (
        <Loading />
      ) : (
        <form className="review-form" onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="form-group">
            <label htmlFor="review-form__name-input">{<MultiLangText textId="name" />}</label>
            <input
              {...register('name', {
                required: (<MultiLangText textId="requiredField" />) as unknown as string,
                maxLength: {
                  value: 15,
                  message: `${(<MultiLangText textId="max" />)} 15 ${(
                    <MultiLangText textId="symbols" />
                  )}`,
                },
                minLength: {
                  value: 2,
                  message: `${(<MultiLangText textId="min" />)} 2 ${(
                    <MultiLangText textId="symbol" />
                  )}`,
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
            <label htmlFor="review-form__location-input">
              {<MultiLangText textId="location" />}
            </label>
            <input
              {...register('location', {
                required: (<MultiLangText textId="requiredField" />) as unknown as string,
                maxLength: {
                  value: 30,
                  message: `${(<MultiLangText textId="max" />)} 15 ${(
                    <MultiLangText textId="symbols" />
                  )}`,
                },
                minLength: {
                  value: 2,
                  message: `${(<MultiLangText textId="min" />)} 2 ${(
                    <MultiLangText textId="symbol" />
                  )}`,
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
              <MultiLangText textId="rating" />
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
            <label htmlFor="review-form__review-input">{<MultiLangText textId="review" />}</label>
            <textarea
              {...register('reviewText', {
                required: (<MultiLangText textId="requiredField" />) as unknown as string,
                maxLength: {
                  value: 2000,
                  message: `${(<MultiLangText textId="max" />)} 2000 ${(
                    <MultiLangText textId="symbols" />
                  )}`,
                },
                minLength: {
                  value: 10,
                  message: `${(<MultiLangText textId="min" />)} 10 ${(
                    <MultiLangText textId="symbols" />
                  )}`,
                },
              })}
              placeholder={reviewPlaceholder}
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
            {<MultiLangText textId="makeReview" />}
          </button>
        </form>
      )}
    </>
  );
}
