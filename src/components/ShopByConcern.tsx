import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Concern } from '../types';

interface ShopByConcernProps {
  onSelectConcern: (concern: Concern) => void;
}

export const ShopByConcern: React.FC<ShopByConcernProps> = ({ onSelectConcern }) => {
  const concerns: {
    id: Concern;
    title: string;
    subtitle: string;
    image: string;
    badge: string;
  }[] = [
    {
      id: 'Hair Fall',
      title: 'HAIR FALL CONTROL',
      subtitle: 'Strengthen & reduce hair fall',
      image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80',
      badge: 'Most Popular'
    },
    {
      id: 'Anti Dandruff',
      title: 'ANTI DANDRUFF',
      subtitle: 'Cleanse & soothe itchy scalp',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
      badge: 'Scalp Detox'
    },
    {
      id: 'Hair Growth',
      title: 'HAIR GROWTH',
      subtitle: 'Boost growth & improve thickness',
      image: 'https://images.unsplash.com/photo-1608248597260-65219e81048e?auto=format&fit=crop&w=600&q=80',
      badge: 'High Efficacy'
    },
    {
      id: 'Smooth & Shine',
      title: 'SMOOTH & SHINE',
      subtitle: 'For soft, smooth & frizz-free hair',
      image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80',
      badge: 'Frizz Tamer'
    },
    {
      id: 'Scalp Care',
      title: 'SCALP CARE',
      subtitle: 'Nourish & rebalance scalp flora',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
      badge: 'Soothe'
    }
  ];

  return (
    <section className="py-16 bg-[#f9f7f2] border-b border-[#e5e0d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 text-[#1a1a1a] text-[11px] font-semibold uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5b395]" />
            <span>Targeted Botanical Solutions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] uppercase tracking-tight">
            SHOP BY CONCERN
          </h2>
          <div className="w-12 h-[1px] bg-[#1a1a1a] mx-auto mt-3" />
        </div>

        {/* Concern Grid / Slider */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {concerns.map((c, index) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => onSelectConcern(c.id)}
              className="group cursor-pointer rounded-none bg-[#f2efea] p-4 border border-[#e5e0d8] hover:border-[#1a1a1a]/30 shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] rounded-none overflow-hidden bg-white mb-4 relative">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-[#1a1a1a] text-white text-[9px] uppercase font-semibold tracking-[0.2em] px-2 py-0.5">
                    {c.badge}
                  </div>
                </div>

                <h3 className="font-serif text-sm font-bold text-[#1a1a1a] uppercase tracking-wider group-hover:text-[#c5b395] transition-colors">
                  {c.title}
                </h3>
                <p className="text-xs text-[#7a756c] mt-1 line-clamp-2">
                  {c.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#e5e0d8] flex items-center justify-between text-[11px] font-semibold tracking-[0.18em] text-[#1a1a1a]">
                <span>EXPLORE</span>
                <div className="w-6 h-6 rounded-none bg-[#1a1a1a] text-white flex items-center justify-center group-hover:bg-[#c5b395] transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
