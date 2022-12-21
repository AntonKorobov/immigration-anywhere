export interface LocationGETResponse {
  coordinates: { latitude: string; longitude: string };
  id: string;
}

export interface LocationPOSTRequest {
  // locationId: string;
  locationName: string;
  countryId: string;
  latitude: string;
  longitude: string;
}

export interface LocationPOSTResponse {
  locationId: string;
}

export interface ReviewsGETResponse {
  id: string;
  userName: string;
  rating: string;
  reviewText: string;
}

export interface ReviewsPOSTRequest {
  userName: string;
  locationId: string;
  rating: string;
  reviewText: string;
  locationName: string;
  countryId: string;
}

export interface ReviewsPOSTResponse {
  statusCode: string; //!!!
}

export interface GeolocationResponse {
  data: {
    latitude: null | number;
    longitude: null | number;
    label: null | string;
    name: null | string;
    type: null | string;
    number: null | string;
    street: null | string;
    postal_code: null | string;
    confidence: null | number;
    region: null | string;
    region_code: null | string;
    administrative_area: null | string;
    neighbourhood: null | string;
    country: null | string;
    country_code: null | string;
    map_url: null | string; //'http://map.positionstack.com/38.897675,-77.036547';
  }[];
}
