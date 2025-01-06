interface IContactsData {
  phone: string;
  email: string;
  address: string;
  addressLink: string;
}

export interface IContactsApiResponse {
  data: IContactsData;
}