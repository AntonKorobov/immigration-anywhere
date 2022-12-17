import React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import './ReviewForm.scss';

interface ReviewFormInterface {
  name: string;
  location: string;
  reviewText: string;
  rating: string;
}

export function ReviewForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormInterface>();

  const onSubmitHandler: SubmitHandler<ReviewFormInterface> = (data) => {
    console.log(data);
  };

  return (
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
      >
        {'Оставить отзыв'}
      </button>
    </form>
  );
}