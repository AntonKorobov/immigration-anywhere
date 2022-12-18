import React, { useEffect, useState } from 'react';

const TOKEN = '0a9c79faa8fbc7666193eeacc8c004a7';

export function Geolocator() {
  const [geolocationData, setGeolocationData] = useState('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGeolocationData(event.target.value);
  };

  return (
    <form>
      <input type="text" value={geolocationData} onChange={changeHandler} />
    </form>
  );
}
