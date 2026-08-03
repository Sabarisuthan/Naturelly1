import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, ArrowRight, Leaf, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onViewCartPage: () => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onViewCartPage,
  onProceedToCheckout,
}) => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
          />

          {/* Slide-over Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md bg-[#f9f7f2] h-full shadow-2xl flex flex-col justify-between z-10"
          >
            {/* Header */}
            <div className="p-5 border-b border-[#e5e0d8] flex items-center justify-between bg-[#f2efea]">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#1a1a1a]" />
                <h2 className="font-serif font-bold text-lg text-[#1a1a1a] uppercase tracking-tight">
                  Your Cart ({cartItems.reduce((a, b) => a + b.quantity, 0)})
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-none hover:bg-white text-[#1a1a1a] transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <Leaf className="w-12 h-12 text-[#c5b395] mx-auto" />
                  <p className="font-serif font-bold text-lg text-[#1a1a1a] uppercase">Your cart is empty</p>
                  <p className="text-xs text-[#7a756c] font-normal">Add items to start your natural routine.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}`}
                    className="bg-[#f2efea] p-3.5 rounded-none border border-[#e5e0d8] flex gap-3.5 items-center justify-between"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-none object-cover bg-white border border-[#e5e0d8]"
                      referrerPolicy="no-referrer"
                    />

                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-xs text-[#1a1a1a] uppercase truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-[10px] text-[#7a756c] uppercase tracking-wider">Size: {item.selectedSize}</p>
                      <div className="font-bold text-xs text-[#1a1a1a] mt-0.5 font-serif">
                        ₹{item.product.price * item.quantity}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center bg-white rounded-none p-0.5 border border-[#e5e0d8]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, -1)}
                          className="w-6 h-6 rounded-none bg-[#f2efea] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white flex items-center justify-center font-bold text-xs transition-colors"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, 1)}
                          className="w-6 h-6 rounded-none bg-[#f2efea] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white flex items-center justify-center font-bold text-xs transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                        className="text-gray-400 hover:text-red-600 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer */}
            {cartItems.length > 0 && (
              <div className="p-5 border-t border-[#e5e0d8] bg-[#f2efea] space-y-3">
                <div className="flex justify-between items-center text-xs uppercase tracking-wider font-semibold text-[#1a1a1a]">
                  <span>Subtotal</span>
                  <span className="font-serif text-lg font-bold">₹{subtotal}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      onClose();
                      onViewCartPage();
                    }}
                    className="py-3 bg-white text-[#1a1a1a] border border-[#1a1a1a] font-semibold rounded-none text-xs uppercase tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-white transition-colors"
                  >
                    View Cart
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onProceedToCheckout();
                    }}
                    className="py-3 bg-[#1a1a1a] hover:bg-[#333333] text-white font-semibold rounded-none text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Checkout</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
