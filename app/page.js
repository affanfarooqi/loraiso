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
      {/* Premium Header */}
      <div className="header bg-brand-purple text-white">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-5xl font-serif font-bold mb-6">Our Premium Collection</h1>
          <p className="text-xl font-sans max-w-2xl leading-relaxed">
            Discover our carefully curated selection of cold-pressed oils, artisan dairy, and natural foods. 
            Each product is crafted with care and tested for the highest quality standards.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Luxury Sidebar Filters */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-md border border-brand-gold/20 sticky top-24">
              {/* Premium Search */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-brand-charcoal mb-3 font-sans">
                  Search Products
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for products..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-brand-purple font-sans"
                  />
                  <svg className="absolute left-3 top-3.5 w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Elegant Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-serif font-bold text-brand-charcoal mb-4">Categories</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-sans ${
                      selectedCategory === "all"
                        ? "bg-brand-purple/10 text-brand-purple font-bold border-l-4 border-brand-gold"
                        : "text-brand-charcoal hover:bg-brand-cream"
                    }`}
                  >
                    All Products ({products.length})
                  </button>
                  {categories.map(category => {
                    const count = products.filter(p => p.category === category.id).length;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-sans ${
                          selectedCategory === category.id
                            ? "bg-brand-purple/10 text-brand-purple font-bold border-l-4 border-brand-gold"
                            : "text-brand-charcoal hover:bg-brand-cream"
                        }`}
                      >
                        {category.name} ({count})
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Refined Sort Options */}
              <div>
                <label className="block text-sm font-medium text-brand-charcoal mb-3 font-sans">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-brand-purple font-sans"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                  <option value="featured">Featured First</option>
                </select>
              </div>
            </div>
          </div>

          {/* Premium Products Grid */}
          <div className="flex-1">
            {/* Results Info */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-brand-charcoal font-sans">
                Showing {sortedProducts.length} of {products.length} premium products
                {searchTerm && (
                  <span> for "<span className="text-brand-purple">{searchTerm}</span>"</span>
                )}
              </p>
              
              {/* Mobile Sort */}
              <div className="lg:hidden">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-sans focus:ring-brand-purple"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                  <option value="featured">Featured First</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl border border-brand-gold/20 p-8">
                <svg className="w-20 h-20 text-brand-gold mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-3">No premium products found</h3>
                <p className="text-brand-charcoal mb-6 font-sans">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSortBy("name");
                  }}
                  className="bg-brand-purple text-white px-8 py-3 rounded-full font-sans font-bold hover:bg-brand-purple/90 hover:shadow-md transition-all duration-200 border-2 border-transparent hover:border-brand-gold"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}