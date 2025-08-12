"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "./CartContext";

export default function Header() {
  const { items, cartCount, cartTotal, removeFromCart, updateQuantity } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <header className="bg-brand-purple shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full border-2 border-brand-gold flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-gold" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M25 50 L75 25" stroke="currentColor" strokeWidth="2" />
                  <path d="M25 75 L75 50" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-serif font-bold text-white">LORAISO</span>
                <p className="text-xs text-brand-gold">Pure As Nature Intended</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-brand-gold transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-white hover:text-brand-gold transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-white hover:text-brand-gold transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-brand-gold transition-colors">
                Contact
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button onClick={toggleSearch} className="text-white hover:text-brand-gold transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button onClick={toggleCart} className="relative text-white hover:text-brand-gold transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-5m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                {cartCount > 0 && (
                  <span className="cart-count absolute -top-2 -right-2 bg-brand-gold text-brand-charcoal text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
              <button onClick={toggleMobileMenu} className="md:hidden text-white">
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="bg-white border-t border-brand-gold">
            <div className="container mx-auto px-6 py-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for premium oils, dairy, and natural products..."
                  className="w-full px-4 py-3 pr-12 border-2 border-brand-gold rounded-lg focus:outline-none focus:border-brand-purple"
                />
                <svg className="absolute right-3 top-3 text-brand-purple w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-brand-purple border-t border-brand-gold">
            <nav className="container mx-auto px-6 py-4 flex flex-col space-y-3">
              <Link href="/" className="text-white hover:text-brand-gold transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-white hover:text-brand-gold transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-white hover:text-brand-gold transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-brand-gold transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="modal-backdrop absolute inset-0" onClick={toggleCart}></div>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-serif font-bold text-brand-charcoal">Shopping Cart</h2>
              <button onClick={toggleCart} className="text-gray-500 hover:text-brand-purple">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 flex-1 overflow-y-auto" id="cartItems">
              {items.length === 0 ? (
                <div className="text-center text-gray-500 py-12">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-16 h-16 bg-brand-cream rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={item.image} alt={item.name} width={64} height={64} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-brand-charcoal truncate">{item.name}</h3>
                        <p className="text-sm text-brand-charcoal/70">${item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center bg-brand-cream rounded-full hover:bg-brand-purple/10"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center bg-brand-cream rounded-full hover:bg-brand-purple/10"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="p-1 text-gray-400 hover:text-red-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {items.length > 0 && (
              <div className="p-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-xl font-bold text-brand-purple">${cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-brand-gold text-brand-charcoal py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

