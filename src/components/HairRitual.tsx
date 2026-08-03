import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, Sparkles, Leaf } from 'lucide-react';
import { STEP_RITUALS } from '../data/products';

interface HairRitualProps {
  onSelectProduct: (productId: string) => void;
}

export const HairRitual: React.FC<HairRitualProps> = ({ onSelectProduct }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = STEP_RITUALS[activeStepIndex];

  const handleNextStep = () => {
    setActiveStepIndex((prev) => (prev + 1) % STEP_RITUALS.length);
  };

  return (
    <section className="py-20 bg-[#f9f7f2] border-b border-[#e5e0d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-12">
          <span className="text-[11px] font-semibold text-[#7a756c] tracking-[0.25em] uppercase block">
            Botanical Routine
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] flex items-center justify-center gap-3 uppercase">
            <span>Your 3-Step Hair Ritual</span>
            <Leaf className="w-6 h-6 text-[#c5b395] inline-block" />
          </h2>
          <p className="text-xs sm:text-sm text-[#7a756c] font-normal tracking-wide">
            A refined daily routine for stronger, healthier & beautiful hair
          </p>
        </div>

        {/* Step Selector Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10">
          {STEP_RITUALS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`px-5 sm:px-7 py-3 rounded-none text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#1a1a1a] text-white shadow-md'
                    : 'bg-[#f2efea] text-[#1a1a1a] hover:bg-[#eae6df] border border-[#e5e0d8]'
                }`}
              >
                <span>Step {step.stepNumber}</span>
                <span className="hidden sm:inline">• {step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Ritual Card Container */}
        <div className="bg-[#f2efea] rounded-none p-6 sm:p-10 border border-[#e5e0d8] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Product Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.stepNumber}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-sm"
              >
                <div
                  onClick={() => onSelectProduct(currentStep.productId)}
                  className="aspect-[3/4] rounded-none overflow-hidden bg-white relative shadow-sm cursor-pointer group border border-[#e5e0d8]"
                >
                  <img
                    src={currentStep.productImage}
                    alt={currentStep.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#1a1a1a] text-white text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-none">
                    Step {currentStep.stepNumber}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.stepNumber}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="font-serif text-6xl font-bold text-[#1a1a1a]/15">
                  0{currentStep.stepNumber}
                </div>

                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] uppercase">
                    {currentStep.title}
                  </h3>
                  <p className="text-[#c5b395] font-semibold text-xs tracking-widest uppercase mt-1">
                    {currentStep.subtitle}
                  </p>
                </div>

                <p className="text-[#66625b] text-sm leading-relaxed">
                  {currentStep.description}
                </p>

                {/* Benefits Checklist */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#1a1a1a]">KEY BENEFITS</h4>
                  <ul className="space-y-2.5">
                    {currentStep.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-[#1a1a1a] font-medium tracking-wide">
                        <div className="w-4 h-4 rounded-none bg-[#1a1a1a] text-white flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Next Step Action Button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={handleNextStep}
                    className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-semibold transition-all duration-300 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] rounded-none"
                  >
                    <span>NEXT STEP</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onSelectProduct(currentStep.productId)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#1a1a1a] text-white font-semibold hover:bg-[#333333] transition-all text-xs uppercase tracking-[0.2em] rounded-none"
                  >
                    View {currentStep.productName}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
