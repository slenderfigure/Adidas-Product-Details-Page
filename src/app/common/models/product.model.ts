export type ProductVariant = { 
  sku: string,
  name: string, 
  icon: string, 
  colorCode?: string 
}

export type ProductMedia = {
  featured: string,
  icon: string
  images?: string[]
}

export interface Product {
  id: number,
  name: string;
  price: number;
  description: string,
  media: ProductMedia,
  variants?: ProductVariant[],
  rating: number
}