import React from 'react';
import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 bg-[#f9f7f2] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f2efea] border border-[#e5e0d8] text-[#1a1a1a] rounded-none text-[10px] font-semibold uppercase tracking-[0.25em]">
            <Leaf className="w-3.5 h-3.5 text-[#c5b395]" />
            <span>Our Heritage & Vision</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1a1a1a] uppercase tracking-tight">
            ABOUT NATURELLE
          </h1>
          <p className="text-sm text-[#7a756c] max-w-xl mx-auto font-normal">
            Born from the belief that beautiful hair starts with nature. Bio-active. Science-backed. Made with minimal waste.
          </p>
        </div>

        {/* Hero Brand Story Split View */}
        <div className="bg-[#f2efea] rounded-none p-8 sm:p-12 border border-[#e5e0d8] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-serif text-3xl font-bold text-[#1a1a1a] uppercase">
              Pure Botanicals for Scalp Health
            </h2>
            <p className="text-xs sm:text-sm text-[#66625b] leading-relaxed font-normal">
              At Naturelle, we believe you shouldn't have to choose between clean natural ingredients and high-performance hair results.
            </p>
            <p className="text-xs sm:text-sm text-[#66625b] leading-relaxed font-normal">
              Our clinical research team combines ancient botanical wisdom—like Rosemary hydrosols, cold-pressed Red Onion seed oil, and Ayurvedic Bhringraj—with modern vitamin bio-actives like Biotin (B7) to create clean hair care formulas that actually work.
            </p>
          </div>

          <div className="lg:col-span-5 relative rounded-none overflow-hidden border border-[#e5e0d8] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80"
              alt="Naturelle Botanical Story"
              className="w-full h-80 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* 4 Pillars of Naturelle */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#f2efea] p-6 rounded-none border border-[#e5e0d8] text-center space-y-2">
            <div className="w-12 h-12 rounded-none bg-white border border-[#e5e0d8] text-[#1a1a1a] mx-auto flex items-center justify-center">
              <Leaf className="w-5 h-5 text-[#c5b395]" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#1a1a1a] uppercase">100% Bio-Active</h3>
            <p className="text-xs text-[#7a756c] font-normal">Cold-pressed essential oils and pure botanical waters.</p>
          </div>

          <div className="bg-[#f2efea] p-6 rounded-none border border-[#e5e0d8] text-center space-y-2">
            <div className="w-12 h-12 rounded-none bg-white border border-[#e5e0d8] text-[#1a1a1a] mx-auto flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#1a1a1a]" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#1a1a1a] uppercase">0% Toxins</h3>
            <p className="text-xs text-[#7a756c] font-normal">Zero sulphates, parabens, silicones, or synthetic dyes.</p>
          </div>

          <div className="bg-[#f2efea] p-6 rounded-none border border-[#e5e0d8] text-center space-y-2">
            <div className="w-12 h-12 rounded-none bg-white border border-[#e5e0d8] text-[#1a1a1a] mx-auto flex items-center justify-center">
              <Heart className="w-5 h-5 text-[#1a1a1a]" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#1a1a1a] uppercase">Cruelty-Free</h3>
            <p className="text-xs text-[#7a756c] font-normal">Leaping Bunny certified, never tested on animals.</p>
          </div>

          <div className="bg-[#f2efea] p-6 rounded-none border border-[#e5e0d8] text-center space-y-2">
            <div className="w-12 h-12 rounded-none bg-white border border-[#e5e0d8] text-[#1a1a1a] mx-auto flex items-center justify-center">
              <Award className="w-5 h-5 text-[#1a1a1a]" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#1a1a1a] uppercase">Dermatologist</h3>
            <p className="text-xs text-[#7a756c] font-normal">Hypoallergenic and pH balanced for sensitive scalps.</p>
          </div>
        </div>

      </div>
    </div>
  );
};
