import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ParallaxHero } from './components/ParallaxHero';
import { ShopByConcern } from './components/ShopByConcern';
import { BestSellers } from './components/BestSellers';
import { NaturalIngredientsBanner } from './components/NaturalIngredientsBanner';
import { HairRitual } from './components/HairRitual';
import { Testimonials } from './components/Testimonials';
import { SubscribeBanner } from './components/SubscribeBanner';
import { ValueProps } from './components/ValueProps';
import { Footer } from './components/Footer';
import { ProductDetailView } from './components/ProductDetailView';
import { ShopPage } from './components/ShopPage';
import { CartPage } from './components/CartPage';
import { SubscriptionPage } from './components/SubscriptionPage';
import { AboutPage } from './components/AboutPage';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';

import { PRODUCTS } from './data/products';
import { ActivePage, Category, Concern, Product, CartItem, SubscriptionPlan } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('rosemary-biotin-shampoo');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedConcern, setSelectedConcern] = useState<Concern>('All');

  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      selectedSize: '300ml',
      quantity: 1,
    },
    {
      product: PRODUCTS[1],
      selectedSize: '300ml',
      quantity: 1,
    },
  ]);

  // Modal & Drawer States
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Toast Notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Cart Handlers
  const handleAddToCart = (product: Product, size: string = '300ml', quantity: number = 1) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      }
      return [...prev, { product, selectedSize: size, quantity }];
    });
    showToast(`🌿 Added ${quantity}x ${product.name} (${size}) to cart!`);
    setIsCartDrawerOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, size: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.selectedSize === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveCartItem = (productId: string, size: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedSize === size))
    );
    showToast('Item removed from cart');
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    setActivePage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectConcernFromHero = (concern: Concern) => {
    setSelectedConcern(concern);
    setActivePage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  return (
    <div className="min-h-screen bg-[#f8f8f2] text-[#233111] font-sans selection:bg-[#3a4d1a] selection:text-white flex flex-col justify-between">
      
      {/* Toast Notification Floating Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#233111] text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/20 text-xs font-bold flex items-center gap-2 animate-bounce">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCartDrawer={() => setIsCartDrawerOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Dynamic Page Views */}
      <main className="flex-1">
        {activePage === 'home' && (
          <div>
            <ParallaxHero
              onShopNow={() => {
                setActivePage('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectProduct={handleSelectProduct}
            />

            <ShopByConcern onSelectConcern={handleSelectConcernFromHero} />

            <BestSellers
              products={PRODUCTS}
              onSelectProduct={handleSelectProduct}
              onAddToCart={(p, size) => handleAddToCart(p, size || '300ml', 1)}
            />

            <NaturalIngredientsBanner />

            <HairRitual onSelectProduct={handleSelectProduct} />

            <Testimonials />

            <SubscribeBanner
              onGoToSubscription={() => {
                setActivePage('subscription');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <ValueProps />
          </div>
        )}

        {(activePage === 'shop' || activePage === 'collections') && (
          <ShopPage
            products={PRODUCTS}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedConcern={selectedConcern}
            setSelectedConcern={setSelectedConcern}
            onSelectProduct={handleSelectProduct}
            onAddToCart={(p, size) => handleAddToCart(p, size || '300ml', 1)}
          />
        )}

        {activePage === 'product-detail' && (
          <ProductDetailView
            product={currentProduct}
            onAddToCart={(p, size, qty) => handleAddToCart(p, size, qty)}
            onBuyNow={(p, size, qty) => {
              handleAddToCart(p, size, qty);
              setIsCheckoutOpen(true);
            }}
            onBackToShop={() => setActivePage('shop')}
          />
        )}

        {activePage === 'cart' && (
          <CartPage
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateCartQuantity}
            onRemoveItem={handleRemoveCartItem}
            onContinueShopping={() => setActivePage('shop')}
            onProceedToCheckout={() => setIsCheckoutOpen(true)}
          />
        )}

        {activePage === 'subscription' && (
          <SubscriptionPage
            onContinueShopping={() => setActivePage('shop')}
            onSelectSubscription={(plan: SubscriptionPlan) => {
              showToast(`🌿 Subscribed to ${plan.name}!`);
              setIsCheckoutOpen(true);
            }}
          />
        )}

        {activePage === 'about' && <AboutPage />}
      </main>

      {/* Global Footer */}
      <Footer
        setActivePage={setActivePage}
        onSelectCategory={setSelectedCategory}
        onSelectConcern={setSelectedConcern}
        onShowToast={showToast}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartDrawerOpen}
        onClose={() => setIsCartDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onViewCartPage={() => setActivePage('cart')}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Instant Search Overlay */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={handleSelectProduct}
      />

      {/* Multi-step Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderSuccess={() => {
          setCartItems([]);
          setIsCheckoutOpen(false);
          showToast('🎉 Order placed successfully! Check your email for tracking.');
          setActivePage('home');
        }}
      />

    </div>
  );
}
