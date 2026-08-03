import React, { useState } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderMove = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <div className="bg-[#f2efea] p-6 sm:p-8 rounded-none border border-[#e5e0d8] space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#1a1a1a] uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5b395]" />
            <span>Botanical Results</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] uppercase mt-0.5">
            14-Day Transformation
          </h3>
        </div>
        <div className="text-xs text-[#7a756c] font-medium">
          Drag slider to view Before vs After 14 days of Naturelle care
        </div>
      </div>

      {/* Interactive Image Container */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-none overflow-hidden shadow-inner select-none bg-white border border-[#e5e0d8]">
        
        {/* AFTER Image (Background) - Smooth Texture After 14 Days */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80"
            alt="After 14 Days - Smooth Silky Texture Hair"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4 bg-[#1a1a1a] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 shadow-lg border border-[#c5b395]/40 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#c5b395]" />
            <span>DAY 14: SMOOTH & SILKY TEXTURE</span>
          </div>
        </div>

        {/* BEFORE Image (Clipped Foreground) - Frizzy Texture Hair */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-2xl"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src="https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=1200&q=80"
            alt="Before Treatment - Frizzy Texture Hair"
            className="w-full h-full object-cover filter contrast-125 brightness-90 saturate-75"
            style={{ width: '100%', maxWidth: 'none' }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-black/85 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 shadow-lg border border-white/20">
            DAY 0: FRIZZY & DRY TEXTURE
          </div>
        </div>

        {/* Vertical Divider Handle Line */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow-2xl pointer-events-none flex items-center justify-center"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-7 h-7 rounded-none bg-[#1a1a1a] text-white flex items-center justify-center shadow-lg border border-white">
            <MoveHorizontal className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Range Input Control Overlay */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={handleSliderMove}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          aria-label="Before and After hair comparison slider"
        />
      </div>

      {/* Stats under slider */}
      <div className="grid grid-cols-3 gap-4 text-center pt-2">
        <div className="bg-[#f9f7f2] p-3 rounded-none border border-[#e5e0d8]">
          <div className="font-serif font-bold text-2xl text-[#1a1a1a]">20+</div>
          <div className="text-[11px] text-[#7a756c] uppercase tracking-wider">Bio-Active Actives</div>
        </div>
        <div className="bg-[#f9f7f2] p-3 rounded-none border border-[#e5e0d8]">
          <div className="font-serif font-bold text-2xl text-[#1a1a1a]">100%</div>
          <div className="text-[11px] text-[#7a756c] uppercase tracking-wider">Sulphate Free</div>
        </div>
        <div className="bg-[#f9f7f2] p-3 rounded-none border border-[#e5e0d8]">
          <div className="font-serif font-bold text-2xl text-[#1a1a1a]">0%</div>
          <div className="text-[11px] text-[#7a756c] uppercase tracking-wider">Cruelty Free</div>
        </div>
      </div>
    </div>
  );
};
