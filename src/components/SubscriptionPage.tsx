import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Leaf, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { SUBSCRIPTION_PLANS } from '../data/products';
import { SubscriptionPlan } from '../types';

interface SubscriptionPageProps {
  onContinueShopping: () => void;
  onSelectSubscription: (plan: SubscriptionPlan) => void;
}

export const SubscriptionPage: React.FC<SubscriptionPageProps> = ({
  onContinueShopping,
  onSelectSubscription,
}) => {
  return (
    <div className="py-12 bg-[#f9f7f2] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Title Header */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-semibold text-[#7a756c] uppercase tracking-[0.25em] block">
            Botanical Service
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1a1a1a] flex items-center justify-center gap-2 uppercase">
            <span>Naturelle Subscription</span>
            <Leaf className="w-7 h-7 text-[#c5b395]" />
          </h1>
          <p className="text-base font-serif font-bold text-[#1a1a1a] uppercase tracking-wider">
            Choose Your Editorial Care Ritual
          </p>
          <p className="text-xs sm:text-sm text-[#7a756c] max-w-xl mx-auto leading-relaxed font-normal">
            Keep your routine effortless with automatic deliveries designed for naturally strong, healthy and beautiful hair.
          </p>
        </div>

        {/* Back Button */}
        <div>
          <button
            onClick={onContinueShopping}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f2efea] border border-[#e5e0d8] hover:bg-[#1a1a1a] hover:text-white text-[#1a1a1a] font-semibold text-xs uppercase tracking-[0.2em] rounded-none transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </button>
        </div>

        {/* Subscription Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {SUBSCRIPTION_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#f2efea] rounded-none p-6 sm:p-8 border border-[#e5e0d8] shadow-sm flex flex-col justify-between hover:border-[#1a1a1a]/40 transition-all"
            >
              <div className="space-y-6">
                
                {/* Plan Title & Frequency */}
                <div className="text-center space-y-1">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] uppercase flex items-center justify-center gap-2">
                    <span>{plan.name}</span>
                  </h2>
                  <p className="text-[10px] font-semibold text-[#7a756c] uppercase tracking-[0.25em]">
                    {plan.frequency}
                  </p>
                </div>

                {/* Includes List */}
                <div className="bg-white p-4 rounded-none border border-[#e5e0d8] text-center space-y-1">
                  <div className="text-[10px] font-semibold uppercase text-[#1a1a1a] tracking-[0.2em] mb-2">
                    Formulations Included
                  </div>
                  {plan.includes.map((item, i) => (
                    <div key={i} className="text-xs font-medium text-[#66625b] py-0.5">
                      {item}
                    </div>
                  ))}
                </div>

                {/* Bundle Image */}
                <div className="aspect-[16/9] rounded-none overflow-hidden bg-white border border-[#e5e0d8] shadow-sm relative">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-[#1a1a1a] text-white text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-none shadow-sm">
                    {plan.discountBadge}
                  </div>
                </div>

                {/* Pricing Box */}
                <div className="text-center py-2 border-y border-[#e5e0d8]">
                  <span className="font-serif text-3xl font-bold text-[#1a1a1a]">
                    ₹{plan.price}
                  </span>
                  <span className="text-xs font-semibold text-[#7a756c] uppercase tracking-wider ml-1">
                    / month
                  </span>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2.5 pt-2">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-[#1a1a1a] tracking-wide">
                      <Leaf className="w-3.5 h-3.5 text-[#c5b395] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Start Subscription CTA */}
              <div className="pt-8">
                <button
                  onClick={() => onSelectSubscription(plan)}
                  className="w-full py-4 bg-[#1a1a1a] hover:bg-[#333333] text-white font-semibold rounded-none shadow-sm transition-all uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#c5b395]" />
                  <span>Start Subscription</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
