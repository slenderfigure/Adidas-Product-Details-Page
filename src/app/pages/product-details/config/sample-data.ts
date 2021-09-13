import { Product } from "src/app/common/models/product.model";

export const PRODUCT: Product = {
  id: 1,
  name: 'Dame 5',
  price: 80,
  description: 'Made to play fresh out of the box, these low top basketball shoes are designed with Damian Liliard\'s signature style. Built with a textile upper, they feature flexible cushioning for lightweight comfort n every step-back jumper. The herringbone outsole lets you change directions on a dime.',
  media: {
    featured: 'assets/images/full/dame5.png',
    icon: 'assets/images/icon/3.png',
    images: [
      'assets/images/full/dame5.png',
      'assets/images/full/dame5-2.png',
      'assets/images/full/dame5-3.png',
      'assets/images/full/dame5-4.png',
      'assets/images/full/dame5-5.png',
      'assets/images/full/dame5-6.png',
    ],
  },
  rating: 5,
  variants: [
    {
      sku: '0001',
      name: '',
      icon: 'assets/images/icon/1.png',
      colorCode: ''
    },
    {
      sku: '0002',
      name: '',
      icon: 'assets/images/icon/2.png',
      colorCode: ''
    },
    {
      sku: '0003',
      name: '',
      icon: 'assets/images/icon/3.png',
      colorCode: ''
    },
    {
      sku: '0004',
      name: '',
      icon: 'assets/images/icon/4.png',
      colorCode: ''
    },
    {
      sku: '0005',
      name: '',
      icon: 'assets/images/icon/5.png',
      colorCode: ''
    },
    {
      sku: '0006',
      name: '',
      icon: 'assets/images/icon/6.png',
      colorCode: ''
    }
  ]
}
