import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import './Loading.scss';

export function Loading() {
  return (
    <div className="load__container d-flex align-center" data-testid="load-container">
      <Spinner animation="border" variant="warning" style={{ width: '4rem', height: '4rem' }} />
      {/* <div className="load__text pl-2">Loading...</div> */}
    </div>
  );
}
