import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X, Leaf } from 'lucide-react';
import { ActivePage } from '../types';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onSelectConcern?: (concern: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  cartCount,
  onOpenCart,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: ActivePage }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'SHOP', page: 'shop' },
    { label: 'COLLECTIONS', page: 'collections' },
    { label: 'SUBSCRIPTION', page: 'subscription' },
    { label: 'ABOUT US', page: 'about' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#f9f7f2]/90 backdrop-blur-md border-b border-[#e5e0d8] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <button
          onClick={() => {
            setActivePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group text-left focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#1a1a1a] text-white group-hover:bg-[#c5b395] transition-all duration-300">
            <Leaf className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1a1a1a] block leading-none">
              Naturelle
            </span>
            <span className="text-[9px] tracking-[0.28em] text-[#7a756c] font-semibold uppercase block mt-1">
              Editorial Hair Care
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activePage === item.page;
            return (
              <button
                key={item.label}
                onClick={() => {
                  setActivePage(item.page);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-[#1a1a1a]'
                    : 'text-[#66625b] hover:text-[#1a1a1a]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#1a1a1a]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#1a1a1a] hover:bg-[#1a1a1a]/5 rounded-full transition-colors"
            title="Search products"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => setActivePage('about')}
            className="p-2 text-[#1a1a1a] hover:bg-[#1a1a1a]/5 rounded-full transition-colors hidden sm:block"
            title="Account / Profile"
            aria-label="Account"
          >
            <User className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenCart}
            className="p-2 text-[#1a1a1a] hover:bg-[#1a1a1a]/5 rounded-full transition-colors relative"
            title="Shopping Cart"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#1a1a1a] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1a1a1a] hover:bg-[#1a1a1a]/5 rounded-lg"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f9f7f2] border-b border-[#e5e0d8] px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setActivePage(item.page);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`block w-full text-left px-3 py-2 text-xs font-semibold tracking-[0.2em] uppercase rounded-none ${
                activePage === item.page
                  ? 'bg-[#1a1a1a] text-white'
                  : 'text-[#1a1a1a] hover:bg-[#f2efea]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
