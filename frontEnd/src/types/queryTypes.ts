export interface LocationGETResponse {
  coordinates: { latitude: string; longitude: string };
  id: string;
}

export interface LocationPOSTRequest {
  locationId: string;
  locationName: string;
  countryId: string;
  coordinates: { latitude: string; longitude: string };
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
}

export interface ReviewsPOSTResponse {
  statusCode: string; //!!!
}
