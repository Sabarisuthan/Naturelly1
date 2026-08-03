import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data/products';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#f9f7f2] border-b border-[#e5e0d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-2 mb-12">
          <span className="text-[11px] font-semibold text-[#7a756c] uppercase tracking-[0.25em] block">
            Real Results from Real Customers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] uppercase tracking-tight">
            WHAT OUR COMMUNITY SAYS
          </h2>
          <div className="w-12 h-[1px] bg-[#1a1a1a] mx-auto mt-3" />
        </div>

        {/* Reviews Cards Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f2efea] rounded-none p-6 border border-[#e5e0d8] flex flex-col justify-between hover:border-[#1a1a1a]/30 transition-all duration-300"
            >
              <div>
                {/* Author Avatar & Header */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-11 h-11 rounded-full object-cover border border-[#e5e0d8] shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-bold text-sm text-[#1a1a1a] flex items-center gap-1">
                      <span>{rev.author}</span>
                      {rev.verified && <CheckCircle className="w-3.5 h-3.5 text-[#1a1a1a] fill-current text-white" />}
                    </h3>
                    <div className="flex text-[#c5b395] mt-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#66625b] leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#e5e0d8] flex items-center justify-between text-[11px] text-[#7a756c] font-medium">
                <span className="truncate max-w-[140px] font-semibold text-[#1a1a1a]">
                  {rev.productName}
                </span>
                <span>{rev.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
