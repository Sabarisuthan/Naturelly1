import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Star, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (productId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  const searchResults = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
          p.concern.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            className="relative w-full max-w-2xl bg-[#f9f7f2] rounded-none p-6 shadow-2xl border border-[#e5e0d8] z-10 space-y-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#e5e0d8] pb-4">
              <div className="flex items-center gap-2 text-[#1a1a1a] font-serif font-bold text-lg uppercase tracking-tight">
                <Search className="w-5 h-5 text-[#c5b395]" />
                <span>Search Formulations</span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-none hover:bg-white text-[#1a1a1a] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Input */}
            <div className="relative">
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by hair concern or product name..."
                className="w-full pl-11 pr-4 py-3.5 rounded-none border border-[#e5e0d8] bg-white text-xs uppercase tracking-wider focus:outline-none focus:border-[#1a1a1a] text-[#1a1a1a]"
              />
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Results container */}
            <div className="max-h-80 overflow-y-auto space-y-2 pt-2">
              {query && searchResults.length === 0 ? (
                <div className="text-center py-8 text-xs text-[#7a756c] font-normal uppercase tracking-wider">
                  No products found for "{query}".
                </div>
              ) : (
                searchResults.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onClose();
                      onSelectProduct(p.id);
                    }}
                    className="p-3 bg-[#f2efea] rounded-none border border-[#e5e0d8] hover:border-[#1a1a1a] flex items-center justify-between cursor-pointer transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-12 h-12 rounded-none object-cover bg-white border border-[#e5e0d8]"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-serif font-bold text-sm text-[#1a1a1a] uppercase group-hover:text-[#1a1a1a]">
                          {p.name}
                        </h4>
                        <p className="text-[11px] text-[#7a756c] font-normal">{p.subtitle}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-serif font-bold text-sm text-[#1a1a1a]">₹{p.price}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1a1a1a] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
