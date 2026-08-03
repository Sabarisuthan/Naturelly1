import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Leaf, Droplets, ShieldCheck } from 'lucide-react';

export const NaturalIngredientsBanner: React.FC = () => {
  const ingredients = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#c5b395]" />,
      title: 'Biotin',
      subtitle: 'Promotes Hair Growth & Thickness'
    },
    {
      icon: <Leaf className="w-5 h-5 text-[#c5b395]" />,
      title: 'Aloe Vera',
      subtitle: 'Soothes Scalp & Deeply Hydrates'
    },
    {
      icon: <Droplets className="w-5 h-5 text-[#c5b395]" />,
      title: 'Tea Tree',
      subtitle: 'Fights Dandruff & Flakes'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#c5b395]" />,
      title: 'Rosemary Oil',
      subtitle: 'Stimulates Roots & Follicles'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-[#1a1a1a] text-white">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Natural Ingredient Highlights */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white/10 text-[#c5b395] text-[10px] uppercase font-semibold tracking-[0.25em] border border-white/15">
            <span>Clean Science • 100% Bio-Active</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight uppercase leading-tight text-white">
            ESSENCE OF <br />
            <span className="text-[#c5b395]">BOTANICAL PURITY</span>
          </h2>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-lg font-light">
            Each formula is crafted without sulphates, parabens, or silicone buildup. We harvest pure cold-pressed botanical extracts that feed your scalp nutrition.
          </p>

          {/* Ingredient Feature Badges Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {ingredients.map((ing, idx) => (
              <motion.div
                key={ing.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3.5 bg-white/5 p-4 rounded-none border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-none bg-[#1a1a1a] border border-[#c5b395]/40 flex items-center justify-center shrink-0 shadow-sm">
                  {ing.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white uppercase tracking-wider">{ing.title}</h3>
                  <p className="text-[11px] text-white/60 leading-snug">{ing.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Model Showcase Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-6 flex justify-center"
        >
          <div className="relative rounded-none overflow-hidden border border-white/20 shadow-2xl max-w-lg w-full group">
            <img
              src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80"
              alt="Naturelle Model with silky long hair"
              className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 bg-[#1a1a1a]/90 backdrop-blur-md p-4 rounded-none border border-white/15 text-white">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#c5b395] font-semibold">Editorial Guarantee</div>
              <div className="font-serif font-bold text-lg mt-0.5">Visibly Stronger Hair in 14 Days</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
