import React from 'react';
import { motion } from 'motion/react';
import { Leaf, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface SubscribeBannerProps {
  onGoToSubscription: () => void;
}

export const SubscribeBanner: React.FC<SubscribeBannerProps> = ({ onGoToSubscription }) => {
  return (
    <section className="py-16 bg-[#f9f7f2] border-b border-[#e5e0d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#f2efea] rounded-none p-8 sm:p-12 border border-[#e5e0d8] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Bundle Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative max-w-sm w-full rounded-none overflow-hidden border border-[#e5e0d8] shadow-sm">
              <img
                src={PRODUCTS[0].image}
                alt="Naturelle Subscription Bundle"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#1a1a1a] text-white text-[10px] uppercase font-semibold tracking-[0.2em] px-3 py-1 rounded-none shadow-sm">
                Save 15% OFF
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight flex flex-wrap items-center gap-2 uppercase">
              <span>Never Run Out Of Healthy Hair</span> <br />
              <span className="text-[#1a1a1a] inline-flex items-center gap-2">
                Subscribe & Save 15% <Leaf className="w-7 h-7 text-[#c5b395]" />
              </span>
            </h2>

            <p className="text-[#66625b] text-sm sm:text-base leading-relaxed font-normal">
              Keep your hair care routine consistent with Naturelle's plant-powered essentials delivered straight to your door.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-[#1a1a1a] font-semibold tracking-wider uppercase">
                <Leaf className="w-4 h-4 text-[#c5b395]" />
                <span>Monthly Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#1a1a1a] font-semibold tracking-wider uppercase">
                <Leaf className="w-4 h-4 text-[#c5b395]" />
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#1a1a1a] font-semibold tracking-wider uppercase">
                <Leaf className="w-4 h-4 text-[#c5b395]" />
                <span>Exclusive Subscriber Offers</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#1a1a1a] font-semibold tracking-wider uppercase">
                <Leaf className="w-4 h-4 text-[#c5b395]" />
                <span>Early Access To New Launches</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onGoToSubscription}
                className="w-full sm:w-auto px-8 py-4 bg-[#1a1a1a] hover:bg-[#333333] text-white font-semibold rounded-none shadow-sm transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs"
              >
                <span>SUBSCRIBE NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
