"use client";

import React, { useMemo, useRef, useState, useEffect, useDeferredValue } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";

/**
 * Key changes vs. original:
 * - Split the layout into semantic sections + extracted a rich Hero block with background image, badges, trust signals, and CTAs.
 * - Added Skip link, better headings for SEO, and ARIA labels for inputs.
 * - Debounced search using useDeferredValue for smoother typing on large catalogs.
 * - Sticky filter bar (on scroll) for quick access; chips are horizontally scrollable with snap.
 * - Subtle motion on hero copy & cards using Framer Motion.
 * - Reduced overlay nesting; improved contrast; better mobile spacing.
 */

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [showStickyFilters, setShowStickyFilters] = useState(false);

  const productsRef = useRef(null);
  const heroRef = useRef(null);

  const deferredSearch = useDeferredValue(searchTerm);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const onScroll = () => {
      const threshold = (heroRef.current?.offsetHeight ?? 400) - 80; // show after hero
      setShowStickyFilters(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredProducts = useMemo(() => {
    const byCategory =
      selectedCategory === "all"
        ? products
        : products.filter((p) => p.category === selectedCategory);

    const term = deferredSearch.trim().toLowerCase();
    const bySearch = term
      ? byCategory.filter((p) => (p.name ?? "").toLowerCase().includes(term))
      : byCategory;

    const sorted = [...bySearch];
    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
        break;
      case "price-high":
        sorted.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
        break;
      case "featured":
        sorted.sort(
          (a, b) => (Number(Boolean(b.featured)) - Number(Boolean(a.featured))) || (a.name ?? "").localeCompare(b.name ?? "")
        );
        break;
      case "name":
      default:
    sorted.sort((a, b) => (a.name ?? "").localeCompare(b.name ?? ""));
    break;
  }
  return sorted;
  }, [selectedCategory, deferredSearch, sortBy]);

  return (
    <div className="bg-brand-cream text-brand-charcoal font-sans min-h-screen">
      {/* Skip link for a11y */}
      <a href="#products" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white px-3 py-2 rounded shadow">
        Skip to products
      </a>

      {/* Sticky filter bar (appears after hero) */}
      <div
        aria-hidden={!showStickyFilters}
        className={`$${""} ${showStickyFilters ? "fixed top-0 inset-x-0 z-30" : "hidden"}`}
      >
        <div className="backdrop-blur bg-white/75 border-b border-black/5">
          <div className="container mx-auto px-4 md:px-6 py-3 flex flex-col md:flex-row gap-3 items-center">
            <SearchAndSort
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              sortBy={sortBy}
              setSortBy={setSortBy}
              compact
            />
            <button onClick={scrollToProducts} className="btn-primary px-4 py-2 rounded-full">
              Jump to catalog
            </button>
          </div>
        </div>
      </div>

    {/* Hero Section */}
    <ForwardHero ref={heroRef} onExplore={scrollToProducts} />

      {/* Products */}
      <section id="products" ref={productsRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-3">Premium Collection</h2>
            <p className="text-lg text-brand-charcoal/80 max-w-2xl mx-auto">
              Carefully curated selection of the finest natural products, sourced with integrity and crafted with expertise.
            </p>
          </div>

          {/* Search & Sort */}
          <div className="mb-6 md:mb-8">
            <SearchAndSort
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>

          {/* Categories (scrollable chips) */}
          <div className="mb-10 overflow-x-auto -mx-6 px-6">
            <div className="flex gap-3 min-w-max snap-x">
              <CategoryChip
                active={selectedCategory === "all"}
                onClick={() => setSelectedCategory("all")}
              >
                All ({products.length})
              </CategoryChip>
              {categories.map((cat) => {
                const count = products.filter((p) => p.category === cat.id).length;
                return (
                  <CategoryChip
                    key={cat.id}
                    active={selectedCategory === cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    {cat.name} ({count})
                  </CategoryChip>
                );
              })}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <EmptyState onReset={() => {
              setSearchTerm("");
              setSelectedCategory("all");
              setSortBy("name");
            }} />
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Story</h2>
              <p className="text-lg text-brand-charcoal/80 mb-6 leading-relaxed">
                At Loraiso, we believe in the power of pure, natural ingredients. Our journey began with a simple mission:
                to bring you the finest quality products that nature has to offer, preserved in their most authentic form.
              </p>
              <p className="text-lg text-brand-charcoal/80 mb-8 leading-relaxed">
                From cold-pressed oils to artisan dairy products, every item in our collection is carefully sourced and
                crafted to meet the highest standards of quality and purity.
              </p>
              <dl className="grid grid-cols-3 gap-6 text-center">
                <Stat label="Pure & Natural" value="100%" />
                <Stat label="Premium Products" value="50+" />
                <Stat label="Happy Customers" value="10K+" />
              </dl>
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
      <Newsletter />
    </div>
  );
}

// ---------------- UI Blocks ---------------- //

const Hero = React.forwardRef(function Hero({ onExplore }, ref) {
  return (
    <section id="home" ref={ref} className="relative min-h-[88svh] flex items-center">
      {/* Background image (swap with your asset) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/loraiso-hero.jpg"
          alt="A rustic still-life of cold-pressed oils, olives, and grains"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Brand gradient + vignette for contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/35 to-brand-purple/30" />
        <div className="absolute inset-0 shadow-[inset_0_-160px_160px_-80px_rgba(0,0,0,0.5)]" />
      </div>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-white"
          >
            <p className="inline-flex items-center gap-2 text-xs tracking-wider uppercase bg-white/10 border border-white/15 px-3 py-1 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Cold-Pressed • Ethically Sourced
            </p>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-serif font-bold mb-4 leading-tight">
              Pure As Nature <span className="text-brand-gold">Intended</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-95 max-w-xl leading-relaxed">
              Discover premium cold-pressed oils, artisan dairy, and honest foods. Crafted with care, delivered with excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={onExplore}
                className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/70"
              >
                Explore Products
              </button>
              <a
                href="#about"
                className="border-2 border-brand-gold text-brand-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-gold hover:text-brand-charcoal transition-all text-center"
              >
                Learn More
              </a>
            </div>
            {/* Trust signals */}
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-white/90 text-sm">
              <li className="inline-flex items-center gap-2">
                <ShieldIcon /> 100% Pure Ingredients
              </li>
              <li className="inline-flex items-center gap-2">
                <LeafIcon /> No additives or solvents
              </li>
              <li className="inline-flex items-center gap-2">
                <TruckIcon /> Free delivery over 99 SAR
              </li>
            </ul>
          </motion.div>
          {/* Offer card */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="justify-self-end w-full max-w-md"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-brand-gold/30 text-white">
              <div className="text-center">
                <div className="text-6xl font-serif font-bold text-brand-gold mb-2">15%</div>
                <div className="text-xl mb-2">Save Instantly</div>
                <div className="text-sm opacity-80 mb-6">On your first order of premium products</div>
                <button className="bg-brand-gold text-brand-charcoal px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
                  Claim Offer
                </button>
              </div>
              {/* Mini badges */}
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <MiniBadge label="Halal" />
                <MiniBadge label="Cold‑Pressed" />
                <MiniBadge label="Non‑GMO" />
              </div>
            </div>
          </motion.aside>
        </div>
        {/* Hero bottom: quick category rail */}
        <div className="mt-10 md:mt-14">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <div className="flex items-center gap-4">
              <span className="hidden md:inline text-white/85 font-medium">Browse:</span>
              <div className="flex gap-2 overflow-x-auto no-scrollbar">
                {categories.slice(0, 6).map((c) => (
                  <span key={c.id} className="px-3 py-1.5 rounded-full text-sm bg-white/10 border border-white/10 text-white/95">
                    {c.name}
                  </span>
                ))}
              </div>
              <a href="#products" className="ml-auto text-sm text-brand-gold hover:underline">View all products →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

const ForwardHero = motion(Hero);
// TS helper to keep default export clean
const _ = ForwardHero; // eslint-disable-line @typescript-eslint/no-unused-vars

function SearchAndSort({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  compact = false,
}) {
  return (
    <div className={`flex w-full items-center gap-3 ${compact ? "" : "flex-col md:flex-row"}`}>
      <div className="relative flex-1 w-full">
        <label htmlFor="search" className="sr-only">Search products</label>
        <input
          id="search"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products…"
          className="input pl-10 w-full"
          aria-label="Search products"
          autoComplete="off"
        />
        <svg
          className="absolute left-3 top-3.5 w-5 h-5 text-brand-purple"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div className="shrink-0">
        <label htmlFor="sort" className="sr-only">Sort products</label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select md:w-60"
          aria-label="Sort products"
        >
          <option value="name">Name (A–Z)</option>
          <option value="price-low">Price (Low → High)</option>
          <option value="price-high">Price (High → Low)</option>
          <option value="featured">Featured First</option>
        </select>
      </div>
    </div>
  );
}

function CategoryChip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`category-chip snap-start ${active ? "category-chip-active" : ""}`}
    >
      {children}
    </button>
  );
}

function EmptyState({ onReset }) {
  return (
    <div className="text-center py-20">
      <svg className="w-20 h-20 text-brand-gold mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 className="text-2xl font-serif font-bold mb-3">No products found</h3>
      <p className="mb-6 font-sans text-brand-charcoal/80">Try adjusting your search or filter criteria</p>
      <button onClick={onReset} className="btn btn-primary">Reset Filters</button>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-serif font-bold text-brand-purple mb-1">{value}</div>
      <dt className="text-sm text-brand-charcoal/70">{label}</dt>
    </div>
  );
}

function MiniBadge({ label }) {
  return (
    <div className="rounded-full border border-white/20 text-white/90 text-xs px-3 py-1 text-center">
      {label}
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="opacity-90">
      <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" strokeWidth="1.5" />
      <path d="M9 12l2 2 4-4" strokeWidth="1.5" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="opacity-90">
      <path d="M3 21s6-1 10-5 5-10 5-10-6 1-10 5-5 10-5 10z" strokeWidth="1.5" />
      <path d="M9 15l6-6" strokeWidth="1.5" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="opacity-90">
      <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7V10z" strokeWidth="1.5" />
      <circle cx="7.5" cy="18" r="1.5" />
      <circle cx="17.5" cy="18" r="1.5" />
    </svg>
  );
}

function Newsletter() {
  return (
    <section className="py-16 bg-brand-purple">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Stay Updated</h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about new products, exclusive offers, and wellness tips.
        </p>
        <form className="max-w-md mx-auto flex gap-3" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="newsletter" className="sr-only">Email address</label>
          <input
            id="newsletter"
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold"
            required
          />
          <button className="bg-brand-gold text-brand-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
