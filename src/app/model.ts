export class SimpleComic {
  id: number;
  title: string;
  issueNumber: number;
  thumbnail: string;
  price: number;
  description: string;
}

export class Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: string[];
  resourceURI: string;
  urls: Url[];
  series: Item;
  variants: string[];
  collections: Item[];
  collectedIssues: string[];
  dates: ComicDate[];
  prices: Price[];
  thumbnail: Image;
  images: Image[];
  creators: Items;
  characters: Items;
  stories: Items;
  events: Items;
}

export class Url {
  type: string;
  url: string;
}

export class ComicDate {
  type: string;
  date: string;
}

export class Price {
  type: string;
  price: number;
}

export class Image {
  path: string;
  extension: string;
}

export class Items {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export class Item {
  resourceURI: string;
  name: string;
  type?: string;
  role?: string;
}

export class MarvelResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: MarvelData;
}

export class MarvelData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Comic[];
}
