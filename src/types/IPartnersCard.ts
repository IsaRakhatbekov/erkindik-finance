interface IImageFormats {
  medium?: {
    url: string;
  };
  [key: string]: any;
}

export interface IPartnersCardImage {
  formats?: IImageFormats;
  url: string;
  width: number;
  height: number;
}

interface IPartnersCardData {
  id: string;
  image: IPartnersCardImage;
}

export interface IPartnersCardApiResponse {
  data: IPartnersCardData[];
}
