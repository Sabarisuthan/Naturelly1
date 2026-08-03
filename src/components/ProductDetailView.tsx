import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ShoppingCart, ShieldCheck, Truck, RefreshCw, Leaf, Check, Plus, Minus, ArrowLeft } from 'lucide-react';
import { Product } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import regeneratedImage1785759969057 from '../assets/images/regenerated_image_1785759969057.png';
import regeneratedImage1785759973303 from '../assets/images/regenerated_image_1785759973303.png';
import regeneratedImage1785759977734 from '../assets/images/regenerated_image_1785759977734.png';
import regeneratedImage1785760277326 from '../assets/images/regenerated_image_1785760277326.png';
import regeneratedImage1785760282659 from '../assets/images/regenerated_image_1785760282659.png';
import regeneratedImage1785760288160 from '../assets/images/regenerated_image_1785760288160.png';

interface ProductDetailViewProps {
  product: Product;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
  onBuyNow: (product: Product, size: string, quantity: number) => void;
  onBackToShop: () => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  onAddToCart,
  onBuyNow,
  onBackToShop,
}) => {
  const [selectedImage, setSelectedImage] = useState(product.gallery[0] || product.image);

  React.useEffect(() => {
    setSelectedImage(product.gallery[0] || product.image);
  }, [product.id, product.image, product.gallery]);

  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '300ml');
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="py-8 bg-[#f9f7f2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Button */}
        <button
          onClick={onBackToShop}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#f2efea] border border-[#e5e0d8] hover:bg-[#1a1a1a] hover:text-white text-[#1a1a1a] font-semibold text-xs uppercase tracking-[0.2em] rounded-none transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back To Shop</span>
        </button>

        {/* Top Product Hero: Image Gallery + Buy Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Gallery Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="aspect-[4/5] rounded-none overflow-hidden bg-white border border-[#e5e0d8] shadow-sm relative group">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#1a1a1a] text-white text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-none">
                {product.concern} Formula
              </div>
            </div>

            {/* Thumbnail Gallery Row */}
            {product.gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 rounded-none overflow-hidden border shrink-0 transition-all ${
                      selectedImage === img
                        ? 'border-[#1a1a1a] ring-1 ring-[#1a1a1a] scale-105'
                        : 'border-[#e5e0d8] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Buy Form & Details */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] uppercase tracking-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-[#c5b395]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#7a756c]">
                  4.9 ★ ({product.reviewCount} Reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mt-4">
                <span className="font-serif font-bold text-3xl sm:text-4xl text-[#1a1a1a]">
                  ₹{product.price * quantity}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-lg text-gray-400 line-through">
                    ₹{product.originalPrice * quantity}
                  </span>
                )}
                <span className="text-xs font-semibold bg-[#f2efea] border border-[#e5e0d8] text-[#1a1a1a] px-2.5 py-1 rounded-none uppercase tracking-wider">
                  Save {product.discountPercentage}%
                </span>
              </div>
            </div>

            <p className="text-[#66625b] text-sm sm:text-base leading-relaxed font-normal">
              {product.description}
            </p>

            {/* SIZE Selector */}
            <div className="space-y-2 pt-2">
              <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] block">
                SIZE
              </label>
              <div className="flex items-center gap-3">
                {product.sizes.map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-2.5 rounded-none text-xs font-semibold uppercase tracking-wider transition-all ${
                        isSelected
                          ? 'bg-[#1a1a1a] text-white shadow-sm'
                          : 'bg-white border border-[#e5e0d8] text-[#1a1a1a] hover:border-[#1a1a1a]'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2 pt-2">
              <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] block">
                QUANTITY
              </label>
              <div className="inline-flex items-center bg-white rounded-none p-1 border border-[#e5e0d8]">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 rounded-none bg-[#f2efea] hover:bg-[#1a1a1a] hover:text-white text-[#1a1a1a] flex items-center justify-center font-bold text-lg transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-semibold text-base text-[#1a1a1a]">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 rounded-none bg-[#f2efea] hover:bg-[#1a1a1a] hover:text-white text-[#1a1a1a] flex items-center justify-center font-bold text-lg transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <button
                onClick={() => onAddToCart(product, selectedSize, quantity)}
                className="w-full py-4 bg-[#1a1a1a] hover:bg-[#333333] text-white font-semibold rounded-none shadow-sm transition-all flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-xs"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>ADD TO CART</span>
              </button>

              <button
                onClick={() => onBuyNow(product, selectedSize, quantity)}
                className="w-full py-4 bg-white border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-semibold rounded-none transition-all flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-xs"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>BUY NOW</span>
              </button>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#e5e0d8] text-center text-xs text-[#7a756c]">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-5 h-5 text-[#1a1a1a]" />
                <span className="uppercase text-[10px] tracking-wider font-semibold">100% Bio-Active</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-5 h-5 text-[#1a1a1a]" />
                <span className="uppercase text-[10px] tracking-wider font-semibold">Fast Express</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RefreshCw className="w-5 h-5 text-[#1a1a1a]" />
                <span className="uppercase text-[10px] tracking-wider font-semibold">7 Days Return</span>
              </div>
            </div>

          </div>

        </div>

        {/* Product Benefits Section */}
        <div className="bg-[#f2efea] rounded-none overflow-hidden border border-[#e5e0d8] grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-sm">
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] uppercase tracking-tight">
              Product Benefits
            </h2>

            <div className="space-y-6">
              {product.benefits.map((b, i) => (
                <div key={i} className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-[#1a1a1a] flex items-center gap-2 uppercase">
                    <Leaf className="w-4 h-4 text-[#c5b395]" />
                    <span>{b.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66625b] leading-relaxed pl-6 font-normal">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[320px]">
            <img
              src={regeneratedImage1785759977734}
              alt="Natural Model with Shiny Hair"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 right-4 bg-[#1a1a1a]/90 backdrop-blur-md px-4 py-1.5 rounded-none font-serif font-bold text-sm text-white uppercase tracking-widest">
              Naturelle
            </div>
          </div>
        </div>

        {/* Product Details Lifestyle Grid Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square rounded-none overflow-hidden border border-[#e5e0d8] shadow-sm">
            <img
              src={regeneratedImage1785760288160}
              alt="Naturelle Shampoo Bottle"
              className="w-full h-full object-cover hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-square rounded-none overflow-hidden border border-[#e5e0d8] shadow-sm">
            <img
              src={regeneratedImage1785760282659}
              alt="Lather application"
              className="w-full h-full object-cover hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-square rounded-none overflow-hidden border border-[#e5e0d8] shadow-sm">
            <img
              src={regeneratedImage1785760277326}
              alt="Rosemary Botanical Bottle"
              className="w-full h-full object-cover hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-square rounded-none overflow-hidden border border-[#e5e0d8] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
              alt="Scalp Hair Serum Application"
              className="w-full h-full object-cover hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Product Specs & Before/After Comparison Slider */}
        <BeforeAfterSlider />

      </div>
    </div>
  );
};
