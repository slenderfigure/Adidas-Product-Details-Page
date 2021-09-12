export type ProductMedia = {
  featuredImage: string,
  iconImage?: string
  images?: string[]
}

export interface Product {
  id: number,
  name: string;
  price: number;
  description: string,
  media: ProductMedia
}