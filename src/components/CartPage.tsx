import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Trash2, Plus, Minus, Leaf, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onContinueShopping: () => void;
  onProceedToCheckout: () => void;
}

export const CartPage: React.FC<CartPageProps> = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onContinueShopping,
  onProceedToCheckout,
}) => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const discount = cartItems.length > 0 ? 150 : 0;
  const shipping = 0;
  const grandTotal = Math.max(0, subtotal - discount + shipping);

  return (
    <div className="py-12 bg-[#f9f7f2] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Cart Page Title */}
        <div className="text-center space-y-2">
          <span className="text-[11px] font-semibold text-[#7a756c] uppercase tracking-[0.25em] block">
            Client Order
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1a1a1a] uppercase tracking-tight flex items-center justify-center gap-2">
            <span>Your Cart</span>
            <Leaf className="w-6 h-6 text-[#c5b395]" />
          </h1>
          <p className="text-xs text-[#7a756c] font-normal tracking-wide">
            Review your selected formulations and proceed to checkout.
          </p>
        </div>

        {/* Continue Shopping Button */}
        <div>
          <button
            onClick={onContinueShopping}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f2efea] border border-[#e5e0d8] hover:bg-[#1a1a1a] hover:text-white text-[#1a1a1a] font-semibold text-xs uppercase tracking-[0.2em] rounded-none transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </button>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-[#f2efea] rounded-none p-12 text-center space-y-4 border border-[#e5e0d8]">
            <div className="w-16 h-16 rounded-none bg-white border border-[#e5e0d8] text-[#1a1a1a] mx-auto flex items-center justify-center">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] uppercase">Your cart is empty</h2>
            <p className="text-xs text-[#7a756c] max-w-sm mx-auto font-normal">
              Explore our bio-active shampoos, hair oils, and mask formulas to start your natural hair care ritual.
            </p>
            <button
              onClick={onContinueShopping}
              className="px-8 py-3.5 bg-[#1a1a1a] text-white font-semibold rounded-none text-xs uppercase tracking-[0.2em] hover:bg-[#333333] transition-all"
            >
              Explore Formulations
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            
            {/* Cart Items List */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="bg-[#f2efea] rounded-none p-4 sm:p-6 border border-[#e5e0d8] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-[#1a1a1a]/40 transition-all"
                >
                  <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
                    {/* Item Image */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-none overflow-hidden bg-white shrink-0 border border-[#e5e0d8]">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Item Title & Info */}
                    <div className="space-y-1">
                      <h3 className="font-serif font-bold text-base sm:text-lg text-[#1a1a1a] uppercase">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-[#7a756c] line-clamp-1">
                        {item.product.subtitle}
                      </p>
                      <div className="text-xs text-[#1a1a1a] font-semibold uppercase tracking-wider pt-1">
                        Size: {item.selectedSize}
                      </div>
                      <div className="inline-block bg-white text-[#1a1a1a] text-[9px] font-semibold uppercase tracking-widest px-2 py-0.5 border border-[#e5e0d8] mt-1">
                        In Stock
                      </div>
                    </div>
                  </div>

                  {/* Quantity & Price Row */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-[#e5e0d8]">
                    <span className="font-serif font-bold text-lg text-[#1a1a1a]">
                      ₹{item.product.price * item.quantity}
                    </span>

                    {/* Quantity Selector */}
                    <div className="inline-flex items-center bg-white rounded-none p-1 border border-[#e5e0d8]">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, 1)}
                        className="w-8 h-8 rounded-none bg-[#f2efea] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white flex items-center justify-center font-bold text-sm transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center font-semibold text-sm text-[#1a1a1a]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, -1)}
                        className="w-8 h-8 rounded-none bg-[#f2efea] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white flex items-center justify-center font-bold text-sm transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Box */}
            <div className="bg-[#f2efea] rounded-none p-6 sm:p-8 border border-[#e5e0d8] shadow-sm space-y-6">
              <div className="text-center">
                <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] uppercase flex items-center justify-center gap-2">
                  <span>Order Summary</span>
                  <Leaf className="w-5 h-5 text-[#c5b395]" />
                </h2>
              </div>

              <div className="space-y-3 text-xs text-[#1a1a1a] tracking-wider uppercase font-medium">
                <div className="flex justify-between py-1">
                  <span>Subtotal ({totalItemCount} Items)</span>
                  <span className="font-bold text-[#1a1a1a]">₹{subtotal}</span>
                </div>
                <div className="flex justify-between py-1 text-[#1a1a1a]">
                  <span>Discount</span>
                  <span className="font-bold text-[#c5b395]">- ₹{discount}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Express Shipping</span>
                  <span className="font-bold text-[#1a1a1a]">FREE</span>
                </div>

                <div className="pt-3 border-t border-[#e5e0d8] flex justify-between text-xl font-bold text-[#1a1a1a]">
                  <span>Total</span>
                  <span className="font-serif">₹{grandTotal}</span>
                </div>
              </div>

              {/* Savings Alert Badge */}
              <div className="bg-white text-[#1a1a1a] p-3 rounded-none text-center text-xs font-semibold border border-[#e5e0d8] flex items-center justify-center gap-1.5 uppercase tracking-wider">
                <Leaf className="w-4 h-4 text-[#c5b395]" />
                <span>Saving ₹{discount} on this editorial order.</span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={onProceedToCheckout}
                className="w-full py-4 bg-[#1a1a1a] hover:bg-[#333333] text-white font-semibold rounded-none shadow-sm transition-all flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-xs"
              >
                <span>Proceed To Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
