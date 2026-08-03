import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, ShieldCheck, Truck, CreditCard, Leaf, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderSuccess,
}) => {
  const [step, setStep] = useState<'address' | 'payment' | 'success'>('address');
  const [formData, setFormData] = useState({
    fullName: 'Sabari Suthan',
    email: 'sabari@example.com',
    phone: '+91 98765 43210',
    address: '42 Natural Way, Botanical Gardens',
    city: 'Chennai',
    pincode: '600001',
    paymentMethod: 'upi',
  });

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const discount = cartItems.length > 0 ? 150 : 0;
  const grandTotal = Math.max(0, subtotal - discount);

  const handleNextToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePlaceOrder = () => {
    setStep('success');
    setTimeout(() => {
      onOrderSuccess();
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-[#f9f7f2] rounded-none p-6 sm:p-8 shadow-2xl border border-[#e5e0d8] z-10 space-y-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#e5e0d8] pb-4">
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-[#c5b395]" />
                <h2 className="font-serif font-bold text-xl text-[#1a1a1a] uppercase tracking-tight">
                  Naturelle Checkout
                </h2>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-none hover:bg-white transition-colors">
                <X className="w-5 h-5 text-[#1a1a1a]" />
              </button>
            </div>

            {/* Step 1: Address Form */}
            {step === 'address' && (
              <form onSubmit={handleNextToPayment} className="space-y-4">
                <h3 className="font-semibold text-xs text-[#1a1a1a] uppercase tracking-[0.2em]">
                  Shipping Details
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-semibold text-[#7a756c] uppercase tracking-wider block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 rounded-none border border-[#e5e0d8] bg-white text-xs focus:border-[#1a1a1a] text-[#1a1a1a]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-semibold text-[#7a756c] uppercase tracking-wider block mb-1">Phone</label>
                    <input
                      type="text"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-none border border-[#e5e0d8] bg-white text-xs focus:border-[#1a1a1a] text-[#1a1a1a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-semibold text-[#7a756c] uppercase tracking-wider block mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 rounded-none border border-[#e5e0d8] bg-white text-xs focus:border-[#1a1a1a] text-[#1a1a1a]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-semibold text-[#7a756c] uppercase tracking-wider block mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2 rounded-none border border-[#e5e0d8] bg-white text-xs focus:border-[#1a1a1a] text-[#1a1a1a]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-semibold text-[#7a756c] uppercase tracking-wider block mb-1">Pincode</label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full px-3 py-2 rounded-none border border-[#e5e0d8] bg-white text-xs focus:border-[#1a1a1a] text-[#1a1a1a]"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center border-t border-[#e5e0d8]">
                  <div>
                    <span className="text-[10px] font-semibold text-[#7a756c] uppercase tracking-wider block">Total Amount</span>
                    <span className="font-serif font-bold text-xl text-[#1a1a1a]">₹{grandTotal}</span>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#1a1a1a] hover:bg-[#333333] text-white font-semibold rounded-none text-xs uppercase tracking-[0.2em] transition-all"
                  >
                    Continue To Payment
                  </button>
                </div>
              </form>
            )}

            {/* Step 2: Payment Selection */}
            {step === 'payment' && (
              <div className="space-y-4">
                <h3 className="font-semibold text-xs text-[#1a1a1a] uppercase tracking-[0.2em]">
                  Select Payment Method
                </h3>

                <div className="space-y-2">
                  {[
                    { id: 'upi', label: 'UPI (GPay / PhonePe / Paytm)', badge: 'Recommended' },
                    { id: 'card', label: 'Credit / Debit Card', badge: 'Instant' },
                    { id: 'cod', label: 'Cash On Delivery', badge: 'Pay at doorstep' },
                  ].map((method) => (
                    <label
                      key={method.id}
                      onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                      className={`p-3.5 rounded-none border flex items-center justify-between cursor-pointer transition-all ${
                        formData.paymentMethod === method.id
                          ? 'border-[#1a1a1a] bg-white ring-1 ring-[#1a1a1a]'
                          : 'border-[#e5e0d8] bg-[#f2efea]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment"
                          checked={formData.paymentMethod === method.id}
                          onChange={() => {}}
                          className="accent-[#1a1a1a]"
                        />
                        <span className="font-semibold text-xs text-[#1a1a1a] uppercase tracking-wider">{method.label}</span>
                      </div>
                      <span className="text-[9px] font-semibold uppercase tracking-widest bg-white border border-[#e5e0d8] text-[#1a1a1a] px-2 py-0.5 rounded-none">
                        {method.badge}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="pt-4 flex justify-between items-center border-t border-[#e5e0d8]">
                  <button
                    onClick={() => setStep('address')}
                    className="text-xs font-semibold uppercase tracking-wider text-[#7a756c] hover:text-[#1a1a1a]"
                  >
                    ← Back to address
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="px-8 py-3.5 bg-[#1a1a1a] hover:bg-[#333333] text-white font-semibold rounded-none text-xs uppercase tracking-[0.2em] shadow-sm transition-all"
                  >
                    Pay ₹{grandTotal} & Place Order
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Success Confirmation */}
            {step === 'success' && (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-[#1a1a1a] text-white rounded-none mx-auto flex items-center justify-center animate-bounce">
                  <CheckCircle className="w-8 h-8 text-[#c5b395]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1a1a1a] uppercase tracking-tight">
                  Order Placed Successfully
                </h3>
                <p className="text-xs text-[#7a756c] max-w-sm mx-auto font-normal">
                  Thank you, {formData.fullName}. Your Naturelle hair care essentials will be dispatched to {formData.city} within 24 hours.
                </p>
                <div className="bg-white p-3 rounded-none border border-[#e5e0d8] text-xs text-[#1a1a1a] font-semibold uppercase tracking-widest inline-block">
                  Order ID: #NAT-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
