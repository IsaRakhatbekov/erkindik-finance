export interface IDocumentsApiResponse {
  data: IDocumentBlock[];
}

interface IDocumentBlock {
  id: number;
  title: string;
  file: IDocumentFile[];
}

export interface IDocumentFile {
  id: number;
  name: string;
  url: string;
}
