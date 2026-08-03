import React, { useState } from 'react';
import { Leaf, Send, Instagram, Youtube, Facebook, PinIcon as Pinterest, Sparkles, Gift, BookOpen } from 'lucide-react';
import { ActivePage, Category, Concern } from '../types';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  onSelectCategory?: (category: Category) => void;
  onSelectConcern?: (concern: Concern) => void;
  onShowToast: (message: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActivePage,
  onSelectCategory,
  onShowToast,
}) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('Please enter a valid email address');
      return;
    }
    onShowToast('🌿 Thank you for subscribing to Naturelle updates!');
    setEmail('');
  };

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#c5b395] text-[#1a1a1a] flex items-center justify-center">
                <Leaf className="w-4 h-4" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block leading-none">
                  Naturelle
                </span>
                <span className="text-[9px] tracking-[0.28em] text-[#c5b395] font-semibold uppercase block mt-1">
                  Editorial Hair Care
                </span>
              </div>
            </div>

            <p className="text-xs text-white/60 max-w-sm leading-relaxed font-normal">
              Born from the belief that beautiful hair starts with pure botanical mastery.
              <br />
              Bio-active formulation. Science backed. Made with care.
            </p>

            <div className="pt-2">
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c5b395] mb-2">
                Social Presence
              </div>
              <div className="flex items-center space-x-3 text-white">
                <a
                  href="#instagram"
                  onClick={(e) => { e.preventDefault(); onShowToast('Follow @NaturelleHairCare on Instagram'); }}
                  className="p-2.5 rounded-none bg-white/10 hover:bg-[#c5b395] hover:text-[#1a1a1a] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#youtube"
                  onClick={(e) => { e.preventDefault(); onShowToast('Subscribe to Naturelle YouTube Channel'); }}
                  className="p-2.5 rounded-none bg-white/10 hover:bg-[#c5b395] hover:text-[#1a1a1a] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#facebook"
                  onClick={(e) => { e.preventDefault(); onShowToast('Follow Naturelle on Facebook'); }}
                  className="p-2.5 rounded-none bg-white/10 hover:bg-[#c5b395] hover:text-[#1a1a1a] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#pinterest"
                  onClick={(e) => { e.preventDefault(); onShowToast('Explore Naturelle on Pinterest'); }}
                  className="p-2.5 rounded-none bg-white/10 hover:bg-[#c5b395] hover:text-[#1a1a1a] transition-colors"
                  aria-label="Pinterest"
                >
                  <Pinterest className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* SHOP Column */}
          <div>
            <h3 className="font-serif font-bold text-xs uppercase tracking-[0.2em] text-[#c5b395] border-b border-white/10 pb-2 mb-4">
              COLLECTIONS
            </h3>
            <ul className="space-y-2 text-xs text-white/70">
              {['All Products', 'Shampoos', 'Conditioners', 'Hair Oils', 'Hair Masks', 'Hair Serums', 'Combos', 'Best Sellers'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      setActivePage('shop');
                      if (onSelectCategory && (item as Category)) onSelectCategory(item as Category);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#c5b395] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY Column */}
          <div>
            <h3 className="font-serif font-bold text-xs uppercase tracking-[0.2em] text-[#c5b395] border-b border-white/10 pb-2 mb-4">
              HOUSE OF NATURELLE
            </h3>
            <ul className="space-y-2 text-xs text-white/70">
              {['About Us', 'Our Ingredients', 'Sustainability', 'Why Choose Us?', 'Customer Reviews', 'Careers', 'Contact Us'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      setActivePage('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#c5b395] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* HELP Column */}
          <div>
            <h3 className="font-serif font-bold text-xs uppercase tracking-[0.2em] text-[#c5b395] border-b border-white/10 pb-2 mb-4">
              CLIENT CARE
            </h3>
            <ul className="space-y-2 text-xs text-white/70">
              {['Shipping Policy', 'Returns & Refunds', 'Terms & Conditions', 'Privacy Policy', 'Track Your Order', 'FAQ', 'Contact Support'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onShowToast(`Navigating to ${item}`)}
                    className="hover:text-[#c5b395] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Newsletter Subscription Bar */}
        <div className="pt-8 border-t border-white/10 text-center space-y-6">
          <p className="font-serif text-lg font-bold text-white tracking-wide">
            Subscribe to receive editorial dispatches, botanical routine guides, and private product updates.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER YOUR EMAIL"
              className="w-full flex-1 px-4 py-3.5 rounded-none border border-white/20 bg-white/5 text-xs tracking-wider focus:outline-none focus:border-[#c5b395] text-white placeholder-white/40"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#c5b395] text-[#1a1a1a] font-semibold tracking-[0.2em] uppercase text-xs hover:bg-white transition-all flex items-center justify-center gap-2 rounded-none"
              title="Subscribe"
            >
              <span>JOIN</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Perks Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-white/60 pt-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-none bg-white/10 flex items-center justify-center text-[#c5b395]">
                <Gift className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="font-bold block text-white uppercase tracking-wider text-[11px]">Private Offers</span>
                <span className="text-[10px] text-white/50">Exclusive subscriber access</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-none bg-white/10 flex items-center justify-center text-[#c5b395]">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="font-bold block text-white uppercase tracking-wider text-[11px]">Editorial Guides</span>
                <span className="text-[10px] text-white/50">Expert botanical routines</span>
              </div>
            </div>
          </div>
        </div>

        {/* Centered Naturelle Watermark Logo */}
        <div className="pt-8 text-center border-t border-white/10">
          <div className="flex items-center justify-center gap-2 opacity-80">
            <Leaf className="w-4 h-4 text-[#c5b395]" />
            <span className="font-serif text-xl font-bold tracking-tight text-white">
              Naturelle
            </span>
          </div>
          <p className="text-[10px] text-white/40 mt-2 tracking-widest uppercase">
            © {new Date().getFullYear()} Naturelle Hair Care. All rights reserved. Botanical Excellence.
          </p>
        </div>

      </div>
    </footer>
  );
};
