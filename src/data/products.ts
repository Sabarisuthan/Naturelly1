import { Product, Review, StepRitual, SubscriptionPlan } from '../types';
import regeneratedImage1785759149152 from '../assets/images/regenerated_image_1785759149152.png';
import regeneratedImage1785759155291 from '../assets/images/regenerated_image_1785759155291.png';
import regeneratedImage1785759469588 from '../assets/images/regenerated_image_1785759469588.png';
import regeneratedImage1785759959091 from '../assets/images/regenerated_image_1785759959091.png';
import regeneratedImage1785759964191 from '../assets/images/regenerated_image_1785759964191.png';
import regeneratedImage1785760288160 from '../assets/images/regenerated_image_1785760288160.png';
import regeneratedImage1785760293255 from '../assets/images/regenerated_image_1785760293255.png';
import regeneratedImage1785760683998 from '../assets/images/regenerated_image_1785760683998.png';
import regeneratedImage1785773124901 from '../assets/images/regenerated_image_1785773124901.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'rosemary-biotin-shampoo',
    name: 'Rosemary & Biotin Shampoo',
    subtitle: 'Strengthening Shampoo - For Stronger, Thicker Hair',
    category: 'Shampoos',
    concern: 'Hair Fall',
    price: 399,
    originalPrice: 499,
    discountPercentage: 20,
    rating: 4.8,
    reviewCount: 128,
    image: regeneratedImage1785773124901,
    gallery: [
      regeneratedImage1785773124901,
      regeneratedImage1785760683998,
      regeneratedImage1785759964191,
      regeneratedImage1785760293255,
      'https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Plant-powered shampoo crafted with Rosemary & Biotin to strengthen roots, reduce hair fall, and bring back natural shine. Infused with organic rosemary oil, vitamin B7 biotin, and scalp-balancing herbal extracts.',
    sizes: ['200ml', '300ml', '500ml'],
    inStock: true,
    bestSeller: true,
    featured: true,
    benefits: [
      {
        title: 'Strengthens Hair Roots',
        description: 'Helps reduce breakage and supports stronger, resilient hair strands from follicle to tip.'
      },
      {
        title: 'Controls Hair Fall',
        description: 'Nourishes scalp and helps minimize hair fall caused by damage, pollution, and heat styling.'
      },
      {
        title: 'Boosts Hair Growth',
        description: 'Biotin supports fuller, denser, and healthier-looking hair with regular use.'
      },
      {
        title: 'Natural Shine & Smoothness',
        description: 'Restores softness and gives smooth, healthy radiance without harsh chemical coatings.'
      }
    ],
    ingredients: ['Rosemary Essential Oil', 'Biotin (Vitamin B7)', 'Plant Keratin', 'Aloe Vera Juice', 'Tea Tree Oil', 'Coconut Glucoside'],
    naturalSpecs: {
      naturalIngredientsPercent: '20+',
      sulphateFree: true,
      crueltyFree: true,
      parabenFree: true
    }
  },
  {
    id: 'onion-biotin-shampoo',
    name: 'Onion & Biotin Shampoo',
    subtitle: 'Invigorating Shampoo - Root Activation & Thickness',
    category: 'Shampoos',
    concern: 'Hair Growth',
    price: 424,
    originalPrice: 499,
    discountPercentage: 15,
    rating: 4.9,
    reviewCount: 96,
    image: regeneratedImage1785760288160,
    gallery: [
      regeneratedImage1785760288160,
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A powerful blend of Red Onion Extract, Biotin, and natural botanicals designed to strengthen weak roots, reduce hair fall, and support thicker, healthier-looking hair with zero harsh odor.',
    sizes: ['200ml', '300ml', '500ml'],
    inStock: true,
    bestSeller: true,
    featured: true,
    benefits: [
      {
        title: 'Rich Sulfur Stimulation',
        description: 'Red onion extract supplies essential sulfur to nourish hair follicles and boost collagen.'
      },
      {
        title: 'Root Activation',
        description: 'Activates dormant hair roots to encourage fresh growth and reduce shedding.'
      },
      {
        title: 'Scalp Cleansing',
        description: 'Gently eliminates sebum buildup while protecting scalp moisture barriers.'
      },
      {
        title: 'Frizz Control',
        description: 'Smooths down hair cuticles for silky texture and effortless combability.'
      }
    ],
    ingredients: ['Red Onion Seed Oil', 'Biotin', 'Black Seed Oil', 'Bhringraj Extract', 'Pro-Vitamin B5', 'Hibiscus Extract'],
    naturalSpecs: {
      naturalIngredientsPercent: '22+',
      sulphateFree: true,
      crueltyFree: true,
      parabenFree: true
    }
  },
  {
    id: 'aloe-vera-shampoo',
    name: 'Aloe Vera Shampoo',
    subtitle: 'Soothe & Hydrate Shampoo - Deep Scalp Moisture',
    category: 'Shampoos',
    concern: 'Scalp Care',
    price: 399,
    originalPrice: 499,
    discountPercentage: 20,
    rating: 4.7,
    reviewCount: 110,
    image: regeneratedImage1785759469588,
    gallery: [
      regeneratedImage1785759469588,
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Cold-pressed organic Aloe Vera leaf juice combined with calming chamomile to soothe irritated scalps, locking in weightless hydration.',
    sizes: ['200ml', '300ml', '500ml'],
    inStock: true,
    bestSeller: false,
    benefits: [
      { title: 'Scalp Hydration', description: 'Rehydrates dry, flaky scalp tissue naturally.' },
      { title: 'Soothing Relief', description: 'Calms itchiness and redness with bioactive enzymes.' }
    ],
    ingredients: ['Pure Aloe Vera Leaf Juice', 'Chamomile Extract', 'Cucumber Extract', 'Plant Glycerin'],
    naturalSpecs: {
      naturalIngredientsPercent: '25+',
      sulphateFree: true,
      crueltyFree: true,
      parabenFree: true
    }
  },
  {
    id: 'argan-oil-shampoo',
    name: 'Argan Oil Shampoo',
    subtitle: 'Smooth & Shine Shampoo - Frizz & Repair Formula',
    category: 'Shampoos',
    concern: 'Smooth & Shine',
    price: 324,
    originalPrice: 499,
    discountPercentage: 35,
    rating: 4.8,
    reviewCount: 88,
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Moroccan Argan oil enriched shampoo that deeply tames stubborn frizz, coats cuticles with luminous shine, and repairs thermal damage.',
    sizes: ['200ml', '300ml', '500ml'],
    inStock: true,
    bestSeller: false,
    benefits: [
      { title: 'Frizz Taming', description: 'Locks out humidity for 48 hours of smooth sleekness.' },
      { title: 'Luminous Glow', description: 'Infuses hair shafts with rich vitamin E for high gloss shine.' }
    ],
    ingredients: ['Moroccan Argan Oil', 'Jojoba Oil', 'Vitamin E', 'Hydrolyzed Wheat Protein'],
    naturalSpecs: {
      naturalIngredientsPercent: '18+',
      sulphateFree: true,
      crueltyFree: true,
      parabenFree: true
    }
  },
  {
    id: 'rosemary-anti-dandruff-serum',
    name: 'Rosemary Anti-Dandruff Serum',
    subtitle: 'Intensive Scalp Repair Serum - Growth & Flake Care',
    category: 'Hair Serums',
    concern: 'Anti Dandruff',
    price: 399,
    originalPrice: 499,
    discountPercentage: 20,
    rating: 4.9,
    reviewCount: 128,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248597260-65219e81048e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Targeted lightweight scalp leave-in serum formulated with Tea Tree oil, Rosemary extract, and Salicylic acid to clarify dandruff flakes and rebalance root flora.',
    sizes: ['100ml', '200ml'],
    inStock: true,
    bestSeller: true,
    featured: true,
    benefits: [
      { title: 'Flake Eliminator', description: 'Dissolves stubborn dead skin and prevents dandruff recurrence.' },
      { title: 'Weightless Leave-In', description: 'Non-greasy rapid absorption formula for daily scalp nutrition.' }
    ],
    ingredients: ['Rosemary Extract', 'Tea Tree Leaf Oil', 'Willow Bark Extract', 'Neem Leaf Water', 'Biotin'],
    naturalSpecs: {
      naturalIngredientsPercent: '24+',
      sulphateFree: true,
      crueltyFree: true,
      parabenFree: true
    }
  },
  {
    id: 'deep-repair-hair-mask',
    name: 'Deep Repair Hair Mask',
    subtitle: 'Intensive Conditioning Butter Mask - Split End Repair',
    category: 'Hair Masks',
    concern: 'Hair Fall',
    price: 499,
    originalPrice: 599,
    discountPercentage: 16,
    rating: 4.9,
    reviewCount: 142,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248597260-65219e81048e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ultra-rich botanical butter treatment that reverses chemical damage, heals split ends, and leaves hair velvety soft after a single 10-minute ritual.',
    sizes: ['200g', '350g'],
    inStock: true,
    bestSeller: true,
    benefits: [
      { title: 'Deep Structural Repair', description: 'Penetrates cortex layers to seal broken disulfide bonds.' },
      { title: 'Intense Softness', description: 'Leaves coarse strands manageable and pillow-soft.' }
    ],
    ingredients: ['Shea Butter', 'Murumuru Butter', 'Rosemary Hydrosol', 'Plant Protein Complex', 'Argan Kernel Butter'],
    naturalSpecs: {
      naturalIngredientsPercent: '26+',
      sulphateFree: true,
      crueltyFree: true,
      parabenFree: true
    }
  },
  {
    id: 'growth-care-hair-oil',
    name: 'Growth Care Hair Oil',
    subtitle: 'Cold-Pressed Botanical Elixir - 10 Oils Blend',
    category: 'Hair Oils',
    concern: 'Hair Growth',
    price: 399,
    originalPrice: 499,
    discountPercentage: 20,
    rating: 4.8,
    reviewCount: 115,
    image: 'https://images.unsplash.com/photo-1608248580479-2810a9058b02?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608248580479-2810a9058b02?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Traditional Ayurvedic cold-pressed oil infused with Rosemary, Amla, Bhringraj, and Castor oil for overnight scalp revitalization.',
    sizes: ['150ml', '250ml'],
    inStock: true,
    bestSeller: false,
    benefits: [
      { title: 'Root Stimulator', description: 'Massaging improves blood micro-circulation to scalp follicles.' },
      { title: 'Thicker Mass', description: 'Strengthens shaft diameter for visibly denser hair body.' }
    ],
    ingredients: ['Cold-pressed Castor Oil', 'Sesame Oil', 'Rosemary Oil', 'Amla Fruit Extract', 'Bhringraj Extract', 'Curry Leaf Extract'],
    naturalSpecs: {
      naturalIngredientsPercent: '100%',
      sulphateFree: true,
      crueltyFree: true,
      parabenFree: true
    }
  },
  {
    id: 'nourishing-conditioner',
    name: 'Rosemary & Biotin Conditioner',
    subtitle: 'Nourishing Silk Conditioner - Weightless Detangling',
    category: 'Conditioners',
    concern: 'Smooth & Shine',
    price: 349,
    originalPrice: 429,
    discountPercentage: 18,
    rating: 4.8,
    reviewCount: 92,
    image: regeneratedImage1785759149152,
    gallery: [
      regeneratedImage1785759149152
    ],
    description: 'Silky botanical conditioner that glides through tangles, locking in moisture while leaving hair airy, voluminous, and glossy.',
    sizes: ['200ml', '300ml'],
    inStock: true,
    bestSeller: false,
    benefits: [
      { title: 'Instant Detangling', description: 'Prevents shower breakage by smoothing wet strands instantly.' },
      { title: 'Zero Weight', description: 'Hydrates without flattening fine or thin hair textures.' }
    ],
    ingredients: ['Rosemary Extract', 'Biotin', 'Cetearyl Alcohol', 'Plant Silk Amino Acids', 'Olive Squalane'],
    naturalSpecs: {
      naturalIngredientsPercent: '20+',
      sulphateFree: true,
      crueltyFree: true,
      parabenFree: true
    }
  }
];

export const STEP_RITUALS: StepRitual[] = [
  {
    stepNumber: '01',
    title: 'Cleanse',
    subtitle: 'Purify Scalp & Remove Buildup',
    description: 'Gently removes impurities while strengthening roots and refreshing your scalp.',
    benefits: [
      'Removes dirt & product buildup',
      'Supports stronger hair roots',
      'Refreshes scalp naturally'
    ],
    productName: 'Rosemary & Biotin Shampoo',
    productImage: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80',
    productId: 'rosemary-biotin-shampoo'
  },
  {
    stepNumber: '02',
    title: 'Condition',
    subtitle: 'Smooth Cuticles & Lock Moisture',
    description: 'Deeply hydrates and seals cuticle layers for soft, tangle-free hair with zero weigh-down.',
    benefits: [
      'Glides through knots and tangles effortlessly',
      'Shields shafts against humidity frizz',
      'Restores silky touch and bounce'
    ],
    productName: 'Nourishing Silk Conditioner',
    productImage: regeneratedImage1785759149152,
    productId: 'nourishing-conditioner'
  },
  {
    stepNumber: '03',
    title: 'Nourish',
    subtitle: 'Targeted Follicle Serum & Mask Care',
    description: 'Concentrated botanicals infuse hair shafts with biotin and essential oils for long-term health.',
    benefits: [
      'Stimulates dormant roots for density',
      'Protects ends from splitting and fraying',
      'Imparts long-lasting luminous shine'
    ],
    productName: 'Growth Care Hair Serum',
    productImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    productId: 'rosemary-anti-dandruff-serum'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Esther Howard',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    verified: true,
    productName: 'Rosemary & Biotin Shampoo',
    comment: 'The Naturelle Rosemary & Biotin range combines plant-powered strength with everyday performance. Crafted with natural botanicals, my hair fall reduced by 80% within three weeks!',
    date: '2 weeks ago'
  },
  {
    id: 'rev-2',
    author: 'Mike Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    verified: true,
    productName: 'Onion & Biotin Shampoo',
    comment: 'I was worried about the onion smell, but Naturelle has a refreshing natural herbal aroma! My scalp feels squeaky clean and my hair looks visibly thicker.',
    date: '1 month ago'
  },
  {
    id: 'rev-3',
    author: 'Priya S.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    verified: true,
    productName: 'Rosemary Anti-Dandruff Serum',
    comment: 'The Rosemary Anti-Dandruff Serum completely cleared my dry scalp flakes without leaving my hair greasy! I apply a few drops nightly and my roots feel refreshed and calm.',
    date: '3 weeks ago'
  },
  {
    id: 'rev-4',
    author: 'Annette Black',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    verified: true,
    productName: 'Deep Repair Hair Mask',
    comment: 'I use the Deep Repair Mask once a week. My hair feels like I just walked out of a luxury salon. Soft, silky, and super shiny!',
    date: '1 week ago'
  }
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'monthly-care',
    name: 'Monthly Care 🌿',
    frequency: 'Every 30 Days',
    frequencyDays: 30,
    price: 999,
    discountBadge: 'Save 15%',
    includes: [
      'Rosemary & Biotin Shampoo (300ml)',
      'Growth Care Hair Serum (100ml)',
      'Deep Repair Hair Mask (200g)'
    ],
    features: [
      'Free Delivery On Every Renewal',
      'Cancel or Pause Anytime with 1-Click',
      'Exclusive Subscriber Gift Packs',
      'Flexible Delivery Date Adjustments'
    ],
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'complete-ritual',
    name: 'Complete Hair Ritual 🌿',
    frequency: 'Every 60 Days',
    frequencyDays: 60,
    price: 1299,
    discountBadge: 'Save 20%',
    includes: [
      'Strengthening Rosemary Shampoo (300ml)',
      'Nourishing Silk Conditioner (300ml)',
      'Growth Care Hair Serum (100ml)',
      'Deep Repair Hair Mask (200g)'
    ],
    features: [
      'Free Priority Delivery On Every Renewal',
      'Cancel or Pause Anytime with 1-Click',
      'Exclusive Subscriber VIP Offers',
      'Flexible Delivery Date Adjustments'
    ],
    image: 'https://images.unsplash.com/photo-1608248597260-65219e81048e?auto=format&fit=crop&w=800&q=80'
  }
];
