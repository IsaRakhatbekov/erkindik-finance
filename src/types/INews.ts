interface IImageFormats {
  medium?: {
    url: string;
  };
  [key: string]: any;
}

interface INewsImage {
  formats: IImageFormats;
  url: string;
}

interface INewsData {
  id: number;
  title: string;
  text: string;
  image: INewsImage;
  link: string
}

export interface INewsApiResponse {
  data: INewsData[];
}