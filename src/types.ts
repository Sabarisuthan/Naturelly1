export type Category = 'All' | 'Shampoos' | 'Conditioners' | 'Hair Oils' | 'Hair Masks' | 'Hair Serums' | 'Combos';

export type Concern = 'All' | 'Hair Fall' | 'Anti Dandruff' | 'Hair Growth' | 'Smooth & Shine' | 'Scalp Care';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: Category;
  concern: Concern;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  description: string;
  sizes: string[];
  inStock: boolean;
  benefits: {
    title: string;
    description: string;
  }[];
  ingredients: string[];
  naturalSpecs: {
    naturalIngredientsPercent: string;
    sulphateFree: boolean;
    crueltyFree: boolean;
    parabenFree: boolean;
  };
  featured?: boolean;
  bestSeller?: boolean;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  verified: boolean;
  productName: string;
  comment: string;
  date: string;
}

export interface StepRitual {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  productName: string;
  productImage: string;
  productId: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  frequency: string;
  frequencyDays: number;
  price: number;
  discountBadge: string;
  includes: string[];
  features: string[];
  image: string;
}

export type ActivePage = 'home' | 'shop' | 'product-detail' | 'cart' | 'subscription' | 'collections' | 'about';
