import React from 'react';
import { motion } from 'motion/react';
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import { Product } from '../types';

interface BestSellersProps {
  products: Product[];
  onSelectProduct: (productId: string) => void;
  onAddToCart: (product: Product, size?: string) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
}) => {
  return (
    <section className="py-16 bg-[#f9f7f2] border-b border-[#e5e0d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-12">
          <span className="text-[11px] font-semibold text-[#7a756c] tracking-[0.25em] uppercase block">
            Most Loved Formulations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] uppercase tracking-tight">
            BEST SELLING FORMULAS
          </h2>
          <div className="w-12 h-[1px] bg-[#1a1a1a] mx-auto mt-3" />
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="group bg-[#f2efea] rounded-none border border-[#e5e0d8] p-4 flex flex-col justify-between hover:shadow-lg hover:border-[#1a1a1a]/30 transition-all duration-300 relative"
            >
              <div>
                {/* Discount Badge */}
                {product.discountPercentage > 0 && (
                  <div className="absolute top-6 left-6 z-10 bg-[#1a1a1a] text-white text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-none">
                    -{product.discountPercentage}%
                  </div>
                )}

                {/* Image Container with Hover Quick Actions */}
                <div
                  onClick={() => onSelectProduct(product.id)}
                  className="aspect-square rounded-none overflow-hidden bg-white mb-4 relative cursor-pointer group/img"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#1a1a1a]/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="bg-[#f9f7f2] text-[#1a1a1a] border border-[#e5e0d8] px-3.5 py-1.5 rounded-none text-[11px] font-semibold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#c5b395]" /> Quick View
                    </span>
                  </div>
                </div>

                {/* Product Meta */}
                <div className="text-[9px] text-[#7a756c] uppercase font-semibold tracking-[0.2em] mb-1">
                  EDITORIAL HAIR CARE
                </div>

                <h3
                  onClick={() => onSelectProduct(product.id)}
                  className="font-serif text-base font-bold text-[#1a1a1a] cursor-pointer hover:text-[#c5b395] transition-colors line-clamp-1"
                >
                  {product.name}
                </h3>

                {/* Ratings */}
                <div className="flex items-center gap-1 mt-1.5">
                  <div className="flex text-[#c5b395]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#7a756c] font-medium ml-1">
                    ({product.reviewCount})
                  </span>
                </div>
              </div>

              {/* Price & Add to Cart Action */}
              <div className="mt-4 pt-3 border-t border-[#e5e0d8] flex items-center justify-between">
                <div>
                  <span className="font-bold text-base text-[#1a1a1a]">
                    ₹{product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-xs text-gray-400 line-through ml-2">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onAddToCart(product, product.sizes[0])}
                  className="w-9 h-9 rounded-none bg-[#1a1a1a] hover:bg-[#333333] text-white flex items-center justify-center shadow-sm transition-all duration-200 active:scale-95"
                  title="Add to Cart"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
