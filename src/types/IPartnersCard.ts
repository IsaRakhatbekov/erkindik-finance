
interface IImageFormats {
  medium?: {
    url: string;
  };
  [key: string]: any;
}

interface IPartnersCardImage {
  formats?: IImageFormats;
  url: string;
}

interface IPartnersCardData {
  id: string;
  image: IPartnersCardImage;
}

export interface IPartnersCardApiResponse {
  data: IPartnersCardData[];
}
