import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface IDocumentsApiResponse {
  data: IDocumentBlock[];
}

export interface IDocumentBlock {
  id?: number;
  accordionTitle: string;
  accordionContent: BlocksContent;
  files: IDocumentFile[];
}


export interface IDocumentFile {
  id: number;
  name: string;
  url: string;
}
