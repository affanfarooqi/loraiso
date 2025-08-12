"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on category and search
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      case "featured":
        return b.featured - a.featured;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero */}
      <section className="bg-brand-purple text-white py-20 text-center">
        <h1 className="text-5xl font-serif mb-4">Our Premium Collection</h1>
        <p className="text-lg max-w-2xl mx-auto font-sans">
          Discover our carefully curated selection of cold-pressed oils, artisan dairy and natural foods crafted with care.
        </p>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Search & Sort */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
          <div className="relative flex-1 w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="input pl-10"
            />
            <svg className="absolute left-3 top-3.5 w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select md:w-60"
          >
            <option value="name">Name (A-Z)</option>
            <option value="price-low">Price (Low to High)</option>
            <option value="price-high">Price (High to Low)</option>
            <option value="featured">Featured First</option>
          </select>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`category-chip ${selectedCategory === "all" ? "category-chip-active" : ""}`}
          >
            All
          </button>
          {categories.map(category => {
            const count = products.filter(p => p.category === category.id).length;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`category-chip ${selectedCategory === category.id ? "category-chip-active" : ""}`}
              >
                {category.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <svg className="w-20 h-20 text-brand-gold mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-3">No products found</h3>
            <p className="text-brand-charcoal mb-6 font-sans">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSortBy("name");
              }}
              className="btn btn-primary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}