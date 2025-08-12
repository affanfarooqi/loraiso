export const products = [
  {
    id: 1,
    name: "Premium Almond Oil",
    slug: "premium-almond-oil",
    description: "Cold-pressed sweet almond oil, perfect for cooking and skincare. Rich in vitamin E and healthy monounsaturated fats.",
    longDescription: "Our premium almond oil is carefully extracted from the finest sweet almonds using traditional cold-press methods. This gentle process preserves all the natural nutrients, including vitamin E, magnesium, and healthy fats that make almond oil so beneficial. With its light, nutty flavor and excellent stability, it's perfect for both culinary and cosmetic applications.",
    price: 24.99,
    originalPrice: 29.99,
    image: "/images/almond-oil.png",
    images: ["/images/almond-oil.png", "/images/almond-oil-2.png"],
    category: "oils",
    inStock: true,
    stockLevel: 150,
    featured: true,
    bestseller: true,
    benefits: [
      "Rich in Vitamin E and antioxidants",
      "Excellent for heart health",
      "Natural moisturizer for skin and hair",
      "Light, nutty flavor perfect for salads"
    ],
    nutritionalInfo: {
      servingSize: "1 tablespoon (14g)",
      calories: 120,
      totalFat: "14g",
      saturatedFat: "1g",
      vitaminE: "3.8mg"
    },
    specifications: {
      volume: "500ml",
      extraction: "First Cold Press",
      origin: "California, USA",
      certification: "Organic, Non-GMO, Halal"
    }
  },
  {
    id: 2,
    name: "Extra Virgin Olive Oil",
    slug: "extra-virgin-olive-oil",
    description: "Premium extra virgin olive oil from hand-picked olives. Perfect for cooking, drizzling, and Mediterranean cuisine.",
    longDescription: "Sourced from centuries-old olive groves in the Mediterranean, our extra virgin olive oil represents the pinnacle of quality and taste. Each olive is hand-picked at optimal ripeness and cold-pressed within hours to preserve the maximum flavor and nutritional benefits. The result is a golden oil with a robust, fruity flavor and peppery finish.",
    price: 32.99,
    originalPrice: 38.99,
    image: "/images/olive-oil.png",
    images: ["/images/olive-oil.png", "/images/olive-oil-2.png"],
    category: "oils",
    inStock: true,
    stockLevel: 200,
    featured: true,
    bestseller: true,
    benefits: [
      "High in antioxidants and polyphenols",
      "Supports heart health",
      "Anti-inflammatory properties",
      "Perfect for Mediterranean diet"
    ],
    nutritionalInfo: {
      servingSize: "1 tablespoon (14g)",
      calories: 119,
      totalFat: "13.5g",
      saturatedFat: "1.9g",
      monounsaturatedFat: "9.9g"
    },
    specifications: {
      volume: "750ml",
      extraction: "First Cold Press",
      origin: "Tuscany, Italy",
      certification: "Extra Virgin, Organic, DOP"
    }
  },
  {
    id: 3,
    name: "Pure Mustard Oil",
    slug: "pure-mustard-oil",
    description: "Traditional cold-pressed mustard oil with a distinctive pungent flavor. Essential for Indian and Bengali cuisine.",
    longDescription: "Our pure mustard oil is extracted from carefully selected mustard seeds using traditional cold-press methods. Known for its distinctive sharp, pungent flavor, this oil is a staple in Indian, Bengali, and Nepalese cuisines. Rich in omega-3 and omega-6 fatty acids, it's not just flavorful but also nutritionally beneficial.",
    price: 18.99,
    originalPrice: 22.99,
    image: "/images/mustard-oil.png",
    images: ["/images/mustard-oil.png", "/images/mustard-oil-2.png"],
    category: "oils",
    inStock: true,
    stockLevel: 120,
    featured: false,
    bestseller: true,
    benefits: [
      "Rich in omega-3 fatty acids",
      "Natural antibacterial properties",
      "Traditional cooking oil for Indian cuisine",
      "High smoking point for deep frying"
    ],
    nutritionalInfo: {
      servingSize: "1 tablespoon (14g)",
      calories: 124,
      totalFat: "14g",
      saturatedFat: "1.6g",
      omega3: "1.2g"
    },
    specifications: {
      volume: "500ml",
      extraction: "Cold Pressed",
      origin: "Punjab, India",
      certification: "Pure, Unrefined, Halal"
    }
  },
  {
    id: 4,
    name: "Aged Cheddar Cheese",
    slug: "aged-cheddar-cheese",
    description: "Premium aged cheddar cheese with a sharp, complex flavor. Made from grass-fed cow's milk using traditional methods.",
    longDescription: "Our aged cheddar cheese is crafted from the milk of grass-fed cows and aged for 12 months to develop its characteristic sharp, tangy flavor and firm texture. Each wheel is carefully monitored during the aging process to ensure optimal taste development and quality.",
    price: 15.99,
    originalPrice: 19.99,
    image: "/images/cheddar-cheese.png",
    images: ["/images/cheddar-cheese.png", "/images/cheddar-cheese-2.png"],
    category: "dairy",
    inStock: true,
    stockLevel: 75,
    featured: false,
    bestseller: true,
    benefits: [
      "High in protein and calcium",
      "Made from grass-fed cow milk",
      "No artificial additives",
      "Perfect for cooking and snacking"
    ],
    nutritionalInfo: {
      servingSize: "1 oz (28g)",
      calories: 113,
      protein: "7g",
      totalFat: "9g",
      calcium: "202mg"
    },
    specifications: {
      weight: "200g",
      aging: "12 months",
      origin: "Vermont, USA",
      certification: "Grass-fed, rBST-free"
    }
  },
  {
    id: 5,
    name: "Organic Coconut Oil",
    slug: "organic-coconut-oil",
    description: "Virgin coconut oil extracted from fresh coconuts. Perfect for cooking, baking, and natural skincare.",
    longDescription: "Our organic virgin coconut oil is extracted from fresh coconut meat within hours of harvesting. Using a gentle cold-press process, we preserve all the natural goodness including medium-chain triglycerides (MCTs) that make coconut oil so special. It's solid at room temperature and has a subtle, pleasant coconut aroma.",
    price: 21.99,
    originalPrice: 26.99,
    image: "/images/coconut-oil.png",
    images: ["/images/coconut-oil.png"],
    category: "oils",
    inStock: true,
    stockLevel: 180,
    featured: true,
    bestseller: false,
    benefits: [
      "High in beneficial MCTs",
      "Natural antibacterial properties",
      "Great for high-heat cooking",
      "Excellent natural moisturizer"
    ],
    nutritionalInfo: {
      servingSize: "1 tablespoon (14g)",
      calories: 117,
      totalFat: "14g",
      saturatedFat: "12g",
      mcts: "8g"
    },
    specifications: {
      volume: "500ml",
      extraction: "Virgin Cold Press",
      origin: "Philippines",
      certification: "Organic, Fair Trade, Non-GMO"
    }
  },
  {
    id: 6,
    name: "Avocado Oil",
    slug: "premium-avocado-oil",
    description: "Cold-pressed avocado oil with a high smoke point. Perfect for high-heat cooking and heart-healthy nutrition.",
    longDescription: "Made from premium Hass avocados, our cold-pressed avocado oil offers exceptional versatility and nutrition. With one of the highest smoke points of any cooking oil, it's perfect for searing, roasting, and grilling while maintaining its beneficial properties and mild, buttery flavor.",
    price: 28.99,
    originalPrice: 34.99,
    image: "/images/avocado-oil.png",
    images: ["/images/avocado-oil.png"],
    category: "oils",
    inStock: true,
    stockLevel: 90,
    featured: true,
    bestseller: false,
    benefits: [
      "Highest smoke point (520°F)",
      "Rich in monounsaturated fats",
      "Contains lutein for eye health",
      "Mild, buttery flavor"
    ],
    nutritionalInfo: {
      servingSize: "1 tablespoon (14g)",
      calories: 124,
      totalFat: "14g",
      saturatedFat: "1.6g",
      monounsaturatedFat: "9.9g"
    },
    specifications: {
      volume: "500ml",
      extraction: "Cold Pressed",
      origin: "Mexico",
      certification: "Non-GMO, Refined"
    }
  },
  {
    id: 7,
    name: "Sesame Oil",
    slug: "pure-sesame-oil",
    description: "Aromatic sesame oil with a rich, nutty flavor. Essential for Asian cuisine and finishing dishes.",
    longDescription: "Our pure sesame oil is made from toasted sesame seeds, giving it a distinctive rich, nutty flavor and golden color. A little goes a long way with this intensely flavored oil that's perfect for finishing Asian dishes, marinades, and dressings.",
    price: 16.99,
    originalPrice: 20.99,
    image: "/images/sesame-oil.png",
    images: ["/images/sesame-oil.png"],
    category: "oils",
    inStock: true,
    stockLevel: 110,
    featured: false,
    bestseller: false,
    benefits: [
      "Rich, nutty flavor",
      "High in antioxidants",
      "Contains beneficial lignans",
      "Perfect for Asian cuisine"
    ],
    nutritionalInfo: {
      servingSize: "1 tablespoon (14g)",
      calories: 120,
      totalFat: "13.6g",
      saturatedFat: "1.9g",
      polyunsaturatedFat: "5.6g"
    },
    specifications: {
      volume: "250ml",
      extraction: "Toasted & Pressed",
      origin: "China",
      certification: "Pure, Unrefined"
    }
  },
  {
    id: 8,
    name: "Organic Honey",
    slug: "organic-wildflower-honey",
    description: "Raw, unfiltered wildflower honey from local beekeepers. Pure sweetness with natural enzymes intact.",
    longDescription: "Our organic wildflower honey is harvested from hives in pristine meadows where bees collect nectar from a variety of wildflowers. This raw, unfiltered honey retains all its natural enzymes, pollen, and beneficial compounds that make honey such a treasured natural sweetener.",
    price: 12.99,
    originalPrice: 15.99,
    image: "/images/honey.png",
    images: ["/images/honey.png"],
    category: "natural-foods",
    inStock: true,
    stockLevel: 160,
    featured: false,
    bestseller: false,
    benefits: [
      "Raw and unprocessed",
      "Contains natural enzymes",
      "Rich in antioxidants",
      "Natural antibacterial properties"
    ],
    nutritionalInfo: {
      servingSize: "1 tablespoon (21g)",
      calories: 64,
      totalCarbs: "17g",
      sugars: "16g",
      protein: "0.1g"
    },
    specifications: {
      weight: "500g",
      type: "Wildflower",
      origin: "Local Beekeepers",
      certification: "Organic, Raw, Unfiltered"
    }
  }
];

export const categories = [
  {
    id: "oils",
    name: "Premium Oils",
    description: "Cold-pressed, pure oils for cooking and wellness"
  },
  {
    id: "dairy",
    name: "Artisan Dairy",
    description: "Premium cheese and dairy products"
  },
  {
    id: "natural-foods",
    name: "Natural Foods",
    description: "Pure, unprocessed natural foods and sweeteners"
  }
];

// Helper functions
export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getBestsellerProducts = () => {
  return products.filter(product => product.bestseller);
};