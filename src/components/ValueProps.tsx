import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Headset } from 'lucide-react';

export const ValueProps: React.FC = () => {
  const props = [
    {
      icon: <Truck className="w-6 h-6 text-[#1a1a1a]" />,
      title: 'Free Express Shipping',
      description: 'On orders above ₹499'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#1a1a1a]" />,
      title: '100% Secure Checkout',
      description: 'Safe & encrypted transactions'
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#1a1a1a]" />,
      title: 'Hassle-Free Returns',
      description: 'Within 7 days of delivery'
    },
    {
      icon: <Headset className="w-6 h-6 text-[#1a1a1a]" />,
      title: 'Concierge Support',
      description: 'Dedicated client care team'
    }
  ];

  return (
    <section className="py-12 bg-[#f9f7f2] border-b border-[#e5e0d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-[#e5e0d8]">
          {props.map((p) => (
            <div
              key={p.title}
              className="pt-6 sm:pt-0 lg:px-6 flex flex-col items-center text-center first:pt-0"
            >
              <div className="w-14 h-14 rounded-full bg-[#f2efea] border border-[#e5e0d8] flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="font-serif text-base font-bold uppercase tracking-wider text-[#1a1a1a]">
                {p.title}
              </h3>
              <p className="text-xs text-[#7a756c] mt-1 font-normal">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
