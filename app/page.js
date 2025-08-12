"use client";

import { useState, useRef } from "react";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const productsRef = useRef(null);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-brand-cream text-brand-charcoal font-sans">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center hero-pattern">
        <div className="absolute inset-0 gradient-overlay"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                Pure As Nature <span className="text-brand-gold">Intended</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Discover our premium collection of cold-pressed oils, artisan dairy, and natural foods.
                Crafted with care, delivered with excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={scrollToProducts} className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg">
                  Explore Products
                </button>
                <button className="border-2 border-brand-gold text-brand-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-gold hover:text-brand-charcoal transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="floating-animation">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-brand-gold/30">
                <div className="text-center text-white">
                  <div className="text-6xl font-serif font-bold text-brand-gold mb-2">15%</div>
                  <div className="text-xl mb-4">Save Instantly</div>
                  <div className="text-sm opacity-80 mb-6">On your first order of premium products</div>
                  <button className="bg-brand-gold text-brand-charcoal px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
                    Claim Offer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" ref={productsRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal mb-4">
              Premium Collection
            </h2>
            <p className="text-lg text-brand-charcoal/80 max-w-2xl mx-auto">
              Carefully curated selection of the finest natural products, sourced with integrity and crafted with expertise.
            </p>
          </div>

          {/* Product Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`category-btn ${selectedCategory === "all" ? "active" : ""}`}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`category-btn ${selectedCategory === cat.id ? "active" : ""}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal mb-6">
                Our Story
              </h2>
              <p className="text-lg text-brand-charcoal/80 mb-6 leading-relaxed">
                At Loraiso, we believe in the power of pure, natural ingredients. Our journey began with a simple mission:
                to bring you the finest quality products that nature has to offer, preserved in their most authentic form.
              </p>
              <p className="text-lg text-brand-charcoal/80 mb-8 leading-relaxed">
                From cold-pressed oils to artisan dairy products, every item in our collection is carefully sourced and
                crafted to meet the highest standards of quality and purity.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-serif font-bold text-brand-purple mb-2">100%</div>
                  <div className="text-sm text-brand-charcoal/70">Pure &amp; Natural</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-brand-purple mb-2">50+</div>
                  <div className="text-sm text-brand-charcoal/70">Premium Products</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-brand-purple mb-2">10K+</div>
                  <div className="text-sm text-brand-charcoal/70">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-brand-purple/10 rounded-3xl p-8">
                <div className="aspect-square bg-brand-gold/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-24 h-24 text-brand-purple" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M25 50 L75 25" stroke="currentColor" strokeWidth="2" />
                    <path d="M25 75 L75 50" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-brand-purple">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new products, exclusive offers, and wellness tips.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
            <button className="bg-brand-gold text-brand-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

