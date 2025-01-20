interface IContactsData {
  phone: string;
  email: string;
  address: string;
  addressLink: string;
  schedule: string;
  googleMapsLink: string;
}

export interface IContactsApiResponse {
  data: IContactsData;
}