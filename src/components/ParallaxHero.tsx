import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Leaf } from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface ParallaxHeroProps {
  onShopNow: () => void;
  onSelectProduct: (productId: string) => void;
}

export const ParallaxHero: React.FC<ParallaxHeroProps> = ({ onShopNow, onSelectProduct }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Scroll parallax transforms
  const yHeroImage = useTransform(scrollY, [0, 500], [0, 80]);
  const yText = useTransform(scrollY, [0, 500], [0, -40]);
  const yLeafSlow = useTransform(scrollY, [0, 500], [0, -120]);
  const yLeafFast = useTransform(scrollY, [0, 500], [0, 100]);

  // Handle mouse move parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30;
    const y = (clientY / innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#f9f7f2] py-12 md:py-20 border-b border-[#e5e0d8]"
    >
      {/* Background Parallax Floating Subtle Glow Elements */}
      <motion.div
        style={{ y: yLeafSlow }}
        className="absolute top-10 left-8 md:left-16 opacity-30 pointer-events-none z-0"
      >
        <div
          className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#c5b395]/20 blur-2xl"
          style={{
            transform: `translate3d(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px, 0)`,
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: yLeafFast }}
        className="absolute bottom-12 right-10 md:right-24 opacity-25 pointer-events-none z-0"
      >
        <div
          className="w-40 h-40 md:w-64 md:h-64 rounded-full bg-[#1a1a1a]/10 blur-3xl"
          style={{
            transform: `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0)`,
          }}
        />
      </motion.div>

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Hero Content */}
        <motion.div
          style={{ y: yText }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-6 space-y-6 text-center lg:text-left pt-6 lg:pt-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-[#1a1a1a]/5 border border-[#1a1a1a]/15 text-[#1a1a1a] text-[11px] font-semibold uppercase tracking-[0.25em]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c5b395]" />
            <span>Botanical Editorial Care</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold text-[#1a1a1a] leading-[1.08] tracking-tight uppercase">
            HAIR NATURALLY
          </h1>

          <p className="text-base sm:text-lg text-[#66625b] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Botanically infused formula crafted with Rosemary & Biotin to strengthen roots, reduce hair fall, and bring back natural shine.
          </p>

          {/* Key Bio-Active Formulations (Ordered & Aligned) */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
            <div className="bg-[#f2efea] border border-[#e5e0d8] px-3.5 py-2 rounded-none text-xs text-[#1a1a1a] font-medium flex items-center gap-2 shadow-xs">
              <Leaf className="w-3.5 h-3.5 text-[#c5b395]" />
              <span className="tracking-wider uppercase text-[11px] font-semibold">Fresh Rosemary Extracts</span>
            </div>
            <div className="bg-[#f2efea] border border-[#e5e0d8] px-3.5 py-2 rounded-none text-xs text-[#1a1a1a] font-medium flex items-center gap-2 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#c5b395]" />
              <span className="tracking-wider uppercase text-[11px] font-semibold">Biotin Vitamin B7</span>
            </div>
            <div className="bg-[#f2efea] border border-[#e5e0d8] px-3.5 py-2 rounded-none text-xs text-[#1a1a1a] font-medium flex items-center gap-2 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c5b395]" />
              <span className="tracking-wider uppercase text-[11px] font-semibold">Cold-Pressed Oils</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              onClick={onShopNow}
              className="w-full sm:w-auto px-8 py-4 bg-[#1a1a1a] hover:bg-[#333333] text-white font-semibold shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-3 group text-xs tracking-[0.2em] uppercase rounded-none"
            >
              <span>Shop Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onSelectProduct('rosemary-biotin-shampoo')}
              className="w-full sm:w-auto px-6 py-4 bg-transparent hover:bg-[#1a1a1a] hover:text-white text-[#1a1a1a] border border-[#1a1a1a] font-semibold transition-all duration-300 text-xs tracking-[0.2em] uppercase rounded-none"
            >
              Explore Formula
            </button>
          </div>

          {/* Quick stats badge */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#e5e0d8] max-w-lg mx-auto lg:mx-0">
            <div>
              <div className="font-serif text-2xl font-bold text-[#1a1a1a]">100%</div>
              <div className="text-[11px] uppercase tracking-wider text-[#7a756c] mt-0.5">Vegan & Natural</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-[#1a1a1a]">0%</div>
              <div className="text-[11px] uppercase tracking-wider text-[#7a756c] mt-0.5">Sulphates / Parabens</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-[#1a1a1a]">80%</div>
              <div className="text-[11px] uppercase tracking-wider text-[#7a756c] mt-0.5">Less Hair Fall</div>
            </div>
          </div>
        </motion.div>

        {/* Right Hero Interactive Parallax Bottle Display */}
        <motion.div
          style={{ y: yHeroImage }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:col-span-6 relative flex justify-center items-center py-4"
        >
          {/* Decorative backdrop disc with mouse translation */}
          <div
            className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#c5b395]/20 via-[#f2efea]/40 to-[#1a1a1a]/5 filter blur-xl transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0)`,
            }}
          />

          {/* Main Hero Product Container */}
          <motion.div
            onClick={() => onSelectProduct('rosemary-biotin-shampoo')}
            whileHover={{ scale: 1.01 }}
            className="relative cursor-pointer rounded-none overflow-hidden border border-[#e5e0d8] bg-[#f2efea] p-4 sm:p-5 max-w-md w-full shadow-lg"
            style={{
              transform: `translate3d(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px, 0)`,
            }}
          >
            <div className="aspect-[4/5] overflow-hidden relative bg-white">
              <img
                src={PRODUCTS[0].image}
                alt="Naturelle Rosemary & Biotin Shampoo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Floating product label badge */}
              <div className="absolute top-4 left-4 bg-[#1a1a1a] text-white px-3 py-1 rounded-none text-[10px] font-semibold tracking-[0.2em] uppercase">
                Editorial Favorite
              </div>

              {/* Product floating card overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#f9f7f2]/95 border border-[#e5e0d8] p-4 rounded-none shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif font-bold text-sm tracking-wider text-[#1a1a1a] uppercase">
                      ROSEMARY & BIOTIN
                    </h3>
                    <p className="text-[11px] text-[#7a756c] mt-0.5">Strengthening Shampoo • 300 ml</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-sm text-[#1a1a1a]">₹399</span>
                    <span className="text-xs text-gray-400 line-through block">₹499</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
