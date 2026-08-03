import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Star, ShoppingCart, Filter, Search, SlidersHorizontal, Eye } from 'lucide-react';
import { Category, Concern, Product } from '../types';

interface ShopPageProps {
  products: Product[];
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
  selectedConcern: Concern;
  setSelectedConcern: (c: Concern) => void;
  onSelectProduct: (productId: string) => void;
  onAddToCart: (product: Product, size?: string) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
  selectedCategory,
  setSelectedCategory,
  selectedConcern,
  setSelectedConcern,
  onSelectProduct,
  onAddToCart,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(600);

  const categories: Category[] = ['All', 'Shampoos', 'Conditioners', 'Hair Oils', 'Hair Masks', 'Hair Serums', 'Combos'];
  const concerns: Concern[] = ['All', 'Hair Fall', 'Anti Dandruff', 'Hair Growth', 'Smooth & Shine', 'Scalp Care'];

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        const matchesConcern = selectedConcern === 'All' || p.concern === selectedConcern;
        const matchesSearch =
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPrice = p.price <= maxPrice;
        return matchesCategory && matchesConcern && matchesSearch && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [products, selectedCategory, selectedConcern, searchQuery, sortBy, maxPrice]);

  return (
    <div className="py-12 bg-[#f9f7f2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Title */}
        <div className="text-center space-y-2">
          <span className="text-[11px] font-semibold text-[#7a756c] uppercase tracking-[0.25em] block">
            Botanical Catalog
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1a1a1a] uppercase tracking-tight">
            OUR COLLECTIONS
          </h1>
          <div className="w-12 h-[1px] bg-[#1a1a1a] mx-auto mt-2" />
        </div>

        {/* Search Bar & Quick Filters Bar */}
        <div className="bg-[#f2efea] rounded-none p-4 sm:p-6 border border-[#e5e0d8] shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7a756c]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH FORMULATIONS..."
                className="w-full pl-10 pr-4 py-2.5 rounded-none border border-[#e5e0d8] bg-white text-xs tracking-wider uppercase focus:outline-none focus:border-[#1a1a1a]"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <label className="text-xs font-semibold text-[#1a1a1a] uppercase tracking-[0.2em] flex items-center gap-1.5 shrink-0">
                <SlidersHorizontal className="w-4 h-4 text-[#1a1a1a]" />
                <span>Sort By:</span>
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 rounded-none border border-[#e5e0d8] bg-white text-xs font-semibold uppercase tracking-wider text-[#1a1a1a] focus:outline-none"
              >
                <option value="featured">Featured / Best Sellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="space-y-2 pt-2 border-t border-[#e5e0d8]">
            <span className="text-[10px] font-semibold text-[#7a756c] uppercase tracking-[0.25em] block">
              Categories
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-none text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-[#1a1a1a] text-white shadow-sm'
                        : 'bg-white text-[#1a1a1a] hover:bg-[#e5e0d8] border border-[#e5e0d8]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Concern Filter Tabs */}
          <div className="space-y-2 pt-2 border-t border-[#e5e0d8]">
            <span className="text-[10px] font-semibold text-[#7a756c] uppercase tracking-[0.25em] block">
              Shop By Concern
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {concerns.map((con) => {
                const isActive = selectedConcern === con;
                return (
                  <button
                    key={con}
                    onClick={() => setSelectedConcern(con)}
                    className={`px-3.5 py-1.5 rounded-none text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-[#c5b395] text-[#1a1a1a] shadow-sm font-bold'
                        : 'bg-white border border-[#e5e0d8] text-[#1a1a1a] hover:border-[#1a1a1a]'
                    }`}
                  >
                    {con}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Product Grid Results */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7a756c]">
              Showing {filteredProducts.length} Formulations
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-[#f2efea] rounded-none p-12 text-center space-y-3 border border-[#e5e0d8]">
              <p className="text-base font-bold text-[#1a1a1a]">No formulations match your criteria</p>
              <p className="text-xs text-[#7a756c]">Try resetting your filters or search keywords.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedConcern('All');
                  setSearchQuery('');
                  setMaxPrice(600);
                }}
                className="px-6 py-2.5 bg-[#1a1a1a] text-white font-semibold rounded-none text-xs uppercase tracking-[0.2em]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-[#f2efea] rounded-none p-4 border border-[#e5e0d8] flex flex-col justify-between hover:border-[#1a1a1a]/40 transition-all group"
                >
                  <div>
                    <div
                      onClick={() => onSelectProduct(p.id)}
                      className="aspect-square rounded-none overflow-hidden bg-white mb-3 relative cursor-pointer border border-[#e5e0d8]"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2 left-2 bg-[#1a1a1a] text-white text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-none">
                        {p.concern}
                      </div>
                    </div>

                    <h3
                      onClick={() => onSelectProduct(p.id)}
                      className="font-serif font-bold text-base text-[#1a1a1a] hover:text-[#c5b395] cursor-pointer line-clamp-1 uppercase"
                    >
                      {p.name}
                    </h3>

                    <p className="text-xs text-[#7a756c] line-clamp-1 mt-0.5">
                      {p.subtitle}
                    </p>

                    <div className="flex items-center gap-1 mt-2">
                      <div className="flex text-[#c5b395]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-[#7a756c] font-medium ml-1">
                        ({p.reviewCount})
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#e5e0d8] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-base text-[#1a1a1a]">
                        ₹{p.price}
                      </span>
                      {p.originalPrice > p.price && (
                        <span className="text-xs text-gray-400 line-through ml-2">
                          ₹{p.originalPrice}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => onAddToCart(p, p.sizes[0])}
                      className="w-9 h-9 rounded-none bg-[#1a1a1a] hover:bg-[#333333] text-white flex items-center justify-center shadow-sm transition-colors"
                      title="Add to Cart"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
