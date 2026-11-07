// CSR Group of Companies - Central Business Divisions Data
export const COMPANY_INFO = {
  name: "CSR Group of Companies",
  shortName: "CSR Group",
  tagline: "Stay Strong, Stay Healthy",
  brandMessage: "Goodness in Every Box...",
  phone: "9014737958",
  phoneFormatted: "+91 90147 37958",
  email: "csrgroupofcompanies1919@gmail.com",
  established: "1919 Legacy & Heritage",
  address: "Corporate Headquarters, Sri City & Hyderabad Hub, India",
  operatingHours: "Monday – Saturday: 6:00 AM – 8:00 PM",
  overview: "CSR Group of Companies stands as an esteemed conglomerate committed to holistic well-being, authentic Indian traditions, and natural purity. Bringing together six dedicated business divisions spanning pure dairy, orchard-fresh fruits, farm-harvested vegetables, high-protein nutrition, wholesome home-style meal boxes, and sacred pooja essentials, CSR Group delivers uncompromising quality and freshness to households, corporate organizations, and institutions across the region."
};

export const CORE_VALUES = [
  {
    id: "quality",
    title: "Quality",
    shortDesc: "Strict multi-tier standards from origin to packaging.",
    description: "Every item under the CSR emblem undergoes meticulous screening to ensure pristine purity, natural taste, and zero adulteration.",
    icon: "ShieldCheck"
  },
  {
    id: "freshness",
    title: "Freshness",
    shortDesc: "Direct farm and dairy sourcing with daily dispatch.",
    description: "Minimizing transit time through streamlined temperature-managed logistics so goods reach you within hours of harvest or processing.",
    icon: "Sprout"
  },
  {
    id: "wellness",
    title: "Wellness",
    shortDesc: "Nourishment aligned with 'Stay Strong, Stay Healthy'.",
    description: "Our offerings are curated to fuel vibrant health, immunity, and balanced nutrition for the modern family and active individuals.",
    icon: "HeartPulse"
  },
  {
    id: "trust",
    title: "Trust",
    shortDesc: "Transparent sourcing, honest weights, and genuine care.",
    description: "Decades of community relationships built on integrity, reliability, and an unwavering commitment to customer well-being.",
    icon: "Award"
  },
  {
    id: "customer-satisfaction",
    title: "Customer Satisfaction",
    shortDesc: "Personalized service for households and bulk institutions.",
    description: "Dedicated account managers for institutional clients and courteous, dependable daily morning service for family households.",
    icon: "Smile"
  },
  {
    id: "tradition",
    title: "Tradition",
    shortDesc: "Honouring timeless heritage and sacred devotional rituals.",
    description: "Preserving authentic Indian culinary recipes, age-old ghee churning methods, and Vedic rituals with pious sanctity.",
    icon: "Flame"
  }
];

export const BUSINESS_DIVISIONS = [
  {
    id: "dairy",
    slug: "dairy",
    name: "Sri Kanakadurgya Dairy",
    brandCode: "SKD",
    tagline: "Pure Goodness, Every Day",
    badge: "100% Farm-Fresh Dairy",
    color: "#173B20",
    accent: "#D5B45E",
    shortDescription: "Wholesome, unadulterated farm-fresh milk, traditionally churned butter, aromatic cow ghee, and fresh dairy delicacies produced with zero chemical preservatives.",
    fullDescription: "Sri Kanakadurgya Dairy is rooted in the sacred tradition of Indian cattle rearing and ethical dairying. Sourced directly from healthy, grass-fed cows and buffaloes nurtured in hygienic rural pastures, our milk is flash-chilled within two hours of milking to retain all natural enzymes, essential vitamins, and calcium. From daily morning doorstep pouches to slow-simmered golden cow ghee and artisanal paneer, every drop exemplifies nature's unblemished purity.",
    heroImage: "/images/dairy/hero.jpg",
    heroFallback: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=80",
    cardImage: "/images/dairy/card.jpg",
    cardFallback: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Pure milk flash-chilled to 4°C directly at village collection centres",
      "Traditional bilona-style churning for authentic aromatic cow ghee",
      "Hygienic multi-layer food-grade packaging compliant with strict standards",
      "Bulk supply available for temples, sweet makers, hotels, and canteens",
      "Flexible monthly morning doorstep subscription schedules"
    ],
    categories: [
      {
        name: "Milk",
        specs: "Available in 280 ml, 500 ml & 1000 ml Pouches",
        description: "Nutrient-dense, wholesome milk available in standardized fat profiles, chilled and delivered fresh every single morning.",
        image: "/images/dairy/milk.jpg",
        fallback: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=800&q=80",
        variants: ["280 ml Pouch", "500 ml Pouch", "1000 ml Pouch", "Cow Milk Special", "Toned / Full Cream"]
      },
      {
        name: "Curd",
        specs: "Thick, Set & Creamy Traditional Dahi",
        description: "Naturally set with live active cultures, yielding rich consistency, gut-friendly probiotics, and comforting home-style taste.",
        image: "/images/dairy/curd.jpg",
        fallback: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
        variants: ["200g Cup", "400g Tub", "1kg Bucket", "Matka Set Curd"]
      },
      {
        name: "Butter",
        specs: "Churned White & Salted Cultured Butter",
        description: "Makkhan made from pasteurized cream, soft-textured with traditional richness perfect for parathas, baking, and cooking.",
        image: "/images/dairy/butter.jpg",
        fallback: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80",
        variants: ["Fresh White Butter", "Lightly Salted Table Butter", "Block Cuts for Catering"]
      },
      {
        name: "Ghee",
        specs: "Granular, Golden & Divine Aroma",
        description: "Slow-simmered clarified butter with distinct granular texture, intoxicating nutty fragrance, and superior nutritional value.",
        image: "/images/dairy/ghee.jpg",
        fallback: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80",
        variants: ["Pure Cow Ghee (200ml, 500ml, 1L, 5L Tin)", "Buffalo Ghee", "Devotional Special Ghee"]
      },
      {
        name: "Cheese",
        specs: "Fresh Mozzarella, Processed & Herb Slices",
        description: "Rich, melt-in-mouth cheese crafted from 100% whole milk, offering superb meltability for pizzas, sandwiches, and culinary masters.",
        image: "/images/dairy/cheese.jpg",
        fallback: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=80",
        variants: ["Cheese Blocks", "Shredded Mozzarella", "Catering Slabs"]
      },
      {
        name: "Paneer",
        specs: "Soft, Malai Fresh Cottage Cheese",
        description: "Crafted fresh every day from full-cream milk, soft to touch, non-rubbery, and high in clean vegetarian protein.",
        image: "/images/dairy/paneer.jpg",
        fallback: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
        variants: ["200g Vacuum Pack", "500g Pack", "1kg Block for Catering / HORECA"]
      },
      {
        name: "Ice Cream",
        specs: "Made with Real Dairy Cream & Natural Extracts",
        description: "Decadent, creamy frozen desserts crafted with 100% dairy fat, real fruits, fragrant vanilla beans, and rich Alphonso mango pulp.",
        image: "/images/dairy/ice-cream.jpg",
        fallback: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
        variants: ["Classic Tubs", "Party Packs (1L / 2L)", "Kulfi & Choco Treats"]
      }
    ]
  },
  {
    id: "fruits",
    slug: "fruits",
    name: "Sri Anjaneya Fruit Box",
    brandCode: "SAF",
    tagline: "Nature's Freshness in Every Box",
    badge: "Orchard Hand-Picked",
    color: "#173B20",
    accent: "#D5B45E",
    shortDescription: "Hand-graded seasonal fruits, exotic selections, premium dry fruit assortments, and customized corporate gift & health boxes curated for natural vitality.",
    fullDescription: "Sri Anjaneya Fruit Box brings the vibrant harvest of India's finest orchards right to your home, workplace, and celebrations. Each fruit is hand-inspected for ripeness, blemish-free skin, sugar content, and aroma. Whether it is our signature daily health boxes, festive dry-fruit hampers, or bulk supply for corporate employee wellness programs, our protective packaging ensures farm freshness in every single bite.",
    heroImage: "/images/fruits/hero.jpg",
    heroFallback: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1600&q=80",
    cardImage: "/images/fruits/card.jpg",
    cardFallback: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Zero carbide and chemical-free natural ripening process",
      "Sturdy, breathable eco-friendly corrugated craft boxes",
      "Weekly and monthly doorstep subscription plans for families & offices",
      "Corporate gifting & festive dry-fruit luxury box hampers",
      "Direct orchard tie-ups across Maharashtra, Kashmir, Himachal & Andhra Pradesh"
    ],
    categories: [
      {
        name: "Basic Fruit Box",
        specs: "Daily Family Vitamin & Mineral Assortment",
        description: "A balanced, essential daily box featuring ripe bananas, Washington/Shimla apples, juicy sweet limes, seasonal oranges, and fresh papayas.",
        image: "/images/fruits/basic-fruit-box.jpg",
        fallback: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80",
        variants: ["Small Family Box (3-4 kg)", "Standard Family Box (6-7 kg)", "Office Desk Snack Box"]
      },
      {
        name: "Premium Fruit Box",
        specs: "Exotic & High-Grade Fruit Collection",
        description: "An opulent collection including imported kiwis, dragon fruits, seedless grapes, ruby pomegranates, Hass avocados, and berries.",
        image: "/images/fruits/premium-fruit-box.jpg",
        fallback: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=800&q=80",
        variants: ["Executive Wellness Box", "Convalescence & Immunity Hamper", "Festive Wooden Gift Box"]
      },
      {
        name: "Fresh Fruits",
        specs: "Seasonal Farm-Picked A-Grade Crates",
        description: "Single-origin bulk crates of seasonal mangoes (Alphonso, Banganapalli), sweet watermelons, crisp apples, and fresh guavas.",
        image: "/images/fruits/fresh-fruits.jpg",
        fallback: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80",
        variants: ["Seasonal Mango Crates", "Whole Melons & Pomegranates", "Citrus & Guava Crates"]
      },
      {
        name: "Dry Fruits",
        specs: "Vacuum Sealed Premium Grade Nuts & Berries",
        description: "Sun-dried California almonds, cashew whole kernels (W240/W320), golden raisins, Afghani anjeer (figs), and Chilean walnuts.",
        image: "/images/fruits/dry-fruits.jpg",
        fallback: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=800&q=80",
        variants: ["Almonds & Cashews (250g, 500g, 1kg)", "Walnut Kernels & Pistachios", "Royal 4-in-1 Dry Fruit Gift Box"]
      }
    ]
  },
  {
    id: "vegetables",
    slug: "vegetables",
    name: "Sri Siddhi Vinayaka Vegetables",
    brandCode: "SSV",
    tagline: "Farm Fresh, Healthy Choice",
    badge: "Direct From Local Farmers",
    color: "#173B20",
    accent: "#D5B45E",
    shortDescription: "Crisp leafy greens, tender exotic vegetables, and daily cooking essentials harvested at dawn and sorted with highest cleanliness standards.",
    fullDescription: "Sri Siddhi Vinayaka Vegetables connects regional agricultural cooperatives directly to urban dining tables and institutional kitchens. By eliminating multi-tier middlemen, we deliver produce within 12 hours of harvest. Hand-trimmed, washed in clean ozonated water, and packaged in aerated containers, our vegetables preserve their natural crispness, chlorophyll, and rich micronutrients.",
    heroImage: "/images/vegetables/hero.jpg",
    heroFallback: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600&q=80",
    cardImage: "/images/vegetables/card.jpg",
    cardFallback: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Harvest-to-dispatch turnaround in under 12 hours",
      "Ozone-washed produce free of surface contaminants and mud",
      "Wholesale and institutional contracts for hostels, hospitals, and catering services",
      "Weekly tailored vegetable baskets according to household dietary preferences",
      "Wide assortment of both indigenous regional vegetables and gourmet exotic produce"
    ],
    categories: [
      {
        name: "All Types of Vegetables",
        specs: "Daily Culinary Essentials & Tubers",
        description: "Hand-sorted Bangalore tomatoes, tender red onions, highland potatoes, ginger, garlic, ladyfingers, bottle gourds, and tender brinjals.",
        image: "/images/vegetables/all-vegetables.jpg",
        fallback: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=800&q=80",
        variants: ["Standard Cooking Staples Pack", "Exotic Bell Peppers & Broccoli", "Gourd & Squash Assortments"]
      },
      {
        name: "Leafy Vegetables",
        specs: "Hydro-cooled Crispy Greens",
        description: "Freshly bundled Palak (Spinach), Methi (Fenugreek), Kothmir (Coriander), Pudina (Mint), Curry Leaves, Amaranth, and Gongura.",
        image: "/images/vegetables/leafy-vegetables.jpg",
        fallback: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
        variants: ["Daily Greens Trio", "Traditional Indian Saag Combo", "Salad Lettuces & Microgreens"]
      },
      {
        name: "Seasonal Vegetables",
        specs: "Monsoon, Winter & Summer Special Harvests",
        description: "Fresh green peas, tender cauliflower, red carrots, raw jackfruit, drumsticks, ridge gourds, and cluster beans in their peak seasons.",
        image: "/images/vegetables/seasonal-vegetables.jpg",
        fallback: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
        variants: ["Winter Root Specials", "Monsoon Pods & Beans", "Seasonal Gourd Bundles"]
      }
    ]
  },
  {
    id: "protein",
    slug: "protein",
    name: "Protein Box",
    brandCode: "CSR-PB",
    tagline: "Fuel Your Health",
    badge: "Nutritionist Formulated",
    color: "#173B20",
    accent: "#D5B45E",
    shortDescription: "Tailored macronutrient nutrition boxes packed with farm eggs, sprouts, energy salads, protein-packed sandwiches, nuts, and wholesome recovery snacks.",
    fullDescription: "Protein Box was envisioned by CSR Group to meet the surging wellness and dietary needs of working professionals, fitness enthusiasts, athletes, and convalescing individuals. Designed in consultation with certified nutritionists, our protein packages offer balanced macronutrients without processed fillers, synthetic additives, or excess refined sugars. Daily chilled morning deliveries ensure consistent, effortless adherence to your health goals.",
    heroImage: "/images/protein/hero.jpg",
    heroFallback: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=80",
    cardImage: "/images/protein/card.jpg",
    cardFallback: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Custom macro-balanced ratios (High Protein, Moderate Complex Carbs, Clean Fats)",
      "Daily fresh preparation in sanitized commercial kitchen facilities",
      "Gym, corporate IT campus, and sports academy distribution partnerships",
      "Zero trans fats, zero artificial preservatives, zero refined sugar syrups",
      "Flexible subscription plans (5-Day Workweek, 6-Day Athlete, or Monthly)"
    ],
    categories: [
      {
        name: "Basic Protein Box",
        specs: "Daily 25g - 35g Clean Protein Starter",
        description: "Includes farm-fresh boiled eggs or herbed paneer cubes, mixed germinated sprouts, seasonal citrus fruit, and roasted seed mix.",
        image: "/images/protein/basic-protein-box.jpg",
        fallback: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
        variants: ["Standard Veg Protein (Paneer/Sprouts)", "Standard Egg Protein (Boiled White/Whole)"]
      },
      {
        name: "Premium Protein Box",
        specs: "High Calibre 45g - 60g Athletic Macro Box",
        description: "Double protein portions with grilled paneer, sprouted legumes, gourmet chicken/egg options, avocado slices, quinoa salad, and whey sweets.",
        image: "/images/protein/premium-protein-box.jpg",
        fallback: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
        variants: ["Athlete Bulking Box", "Lean Muscle Definition Box", "Keto Nutrition Box"]
      },
      {
        name: "Milk & Eggs",
        specs: "High Protein Farm Direct Pairs",
        description: "Farm-collected Omega-3 enriched brown and white eggs paired with fortified high-protein skimmed or whole dairy bottles.",
        image: "/images/protein/milk-eggs.jpg",
        fallback: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=800&q=80",
        variants: ["Omega-3 Farm Eggs (Crate of 6/12/30)", "Protein-Enriched Dairy Flasks"]
      },
      {
        name: "Sprouts & Salads",
        specs: "Living Enzymes & Antioxidant Crunch",
        description: "Hygienically sprouted green gram (Moong), brown chana, alfalfa, and crunchy Greek salads tossed with extra virgin cold-pressed olive oil.",
        image: "/images/protein/sprouts-salads.jpg",
        fallback: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
        variants: ["Germinated Moong & Chana Mix", "Paneer Tikka Salad Bowl", "Mediterranean Chickpea Salad"]
      },
      {
        name: "Sandwiches & Rolls",
        specs: "Multi-grain Breads & Whole Wheat Wraps",
        description: "Whole-wheat pita and multigrain bread layered with grilled paneer, crunchy vegetables, spiced egg bhurji, or roasted fillings.",
        image: "/images/protein/sandwiches-rolls.jpg",
        fallback: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
        variants: ["Paneer Tikka Multi-grain Sandwich", "Boiled Egg Herb Wrap", "Sprouted Falafel Roll"]
      },
      {
        name: "Wholesome Sweets",
        specs: "Guilt-Free Protein Energy Treats",
        description: "Naturally sweetened date and almond laddoos, whey protein brownies, and dry-fruit energy bites with zero refined cane sugar.",
        image: "/images/protein/sweets.jpg",
        fallback: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
        variants: ["Date & Seed Energy Bites", "Whey Protein Besan Laddoo", "Nut Butter Energy Truffles"]
      }
    ]
  },
  {
    id: "meal-box",
    slug: "meal-box",
    name: "Sri Manikanta Meal Box",
    brandCode: "SMM",
    tagline: "Wholesome Meals, Always",
    badge: "Homely, Satvik & Nutritious",
    color: "#173B20",
    accent: "#D5B45E",
    shortDescription: "Nutritious, authentic home-style thali meal boxes, wholesome midday tiffins, traditional snacks, and artisanal pickles prepared with authentic regional recipes.",
    fullDescription: "Sri Manikanta Meal Box embodies the warmth and comfort of a mother's home kitchen. Prepared daily in state-of-the-art hygienic commercial cloud kitchens, our dishes use unrefined cold-pressed oils, hand-ground masalas, and zero artificial coloring agents or MSG. From everyday corporate executive lunches to institutional canteen contracts and festive catering, we deliver culinary satisfaction in insulated, leak-proof packaging.",
    heroImage: "/images/meal-box/hero.jpg",
    heroFallback: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80",
    cardImage: "/images/meal-box/card.jpg",
    cardFallback: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Authentic South Indian & North Indian homestyle rotating menus",
      "Prepared with 100% cold-pressed groundnut & sesame oils with low sodium options",
      "Leak-proof, microwavable, eco-friendly 5-compartment meal containers",
      "Bulk corporate lunch contracts & industrial catering capabilities",
      "Special festival sadya and satvik no-onion no-garlic options upon request"
    ],
    categories: [
      {
        name: "Basic Meal Box",
        specs: "Comforting Everyday Home-Style Lunch",
        description: "Steamed Sona Masoori rice, 2 whole wheat rotis, daily dal/sambar, one fresh vegetable curry, curds, papad, and home pickle.",
        image: "/images/meal-box/basic-meal-box.jpg",
        fallback: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
        variants: ["Standard South Indian Thali Box", "Standard North Indian Roti Dal Combo", "Mini Tiffin Box"]
      },
      {
        name: "Premium Meal Box",
        specs: "Deluxe Executive 7-Course Thali",
        description: "Jeera rice or flavoured pulao, 3 ghee phulkas, paneer butter masala, seasonal subzi, dal tadka, rich curd cup, sweet halwa/gulab jamun, and accompaniments.",
        image: "/images/meal-box/premium-meal-box.jpg",
        fallback: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
        variants: ["Executive Corporate Thali", "Royal Festive Box", "Weekend Special Biryani Box"]
      },
      {
        name: "Homely Snacks",
        specs: "Evening Savouries & Teatime Delights",
        description: "Handcrafted traditional snacks including ribbon pakoda, murukku, roasted spiced groundnuts, masala vada, and millet crackers.",
        image: "/images/meal-box/homely-snacks.jpg",
        fallback: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
        variants: ["Crispy Murukku & Mixture Packs", "Baked Millet Nibbles", "Hot Afternoon Snack Tiffin"]
      },
      {
        name: "Pickles & Accompaniments",
        specs: "Sun-Dried Traditional Andhra Style Recipes",
        description: "Authentic Avakaya (mango pickle), Gongura pickle, Lemon pachadi, Tomato pickle, and roasted spice gunpowders (Podi) made with gingelly oil.",
        image: "/images/meal-box/pickles.jpg",
        fallback: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
        variants: ["Traditional Avakaya Mango (250g, 500g, 1kg)", "Gongura & Tomato Pachadi", "Idli Podi & Kandi Podi Jars"]
      }
    ]
  },
  {
    id: "pooja-items",
    slug: "pooja-items",
    name: "Vedha Gayathri Pooja Items",
    brandCode: "VGP",
    tagline: "Divine Essentials for Your Home",
    badge: "Sacred & Pure Devotion",
    color: "#173B20",
    accent: "#D5B45E",
    shortDescription: "Consecrated pooja coconuts, aromatic organic agarbattis, hand-strung fresh flower malas, brass deities, and traditional worship samagri.",
    fullDescription: "Vedha Gayathri Pooja Items honours the sanctity of Indian rituals, festivals, and spiritual heritage. Sourcing sacred coconuts from coastal groves, rolling chemical-free incense using natural herbs, and stringing fresh farm blooms at Brahma Muhurtham, we provide families, temples, and wedding events with consecrated worship essentials. Every item is treated with devotion and reverence before it reaches your shrine.",
    heroImage: "/images/pooja-items/hero.jpg",
    heroFallback: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=1600&q=80",
    cardImage: "/images/pooja-items/card.jpg",
    cardFallback: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Carefully chosen whole dry and water coconuts with sacred kalash tufts",
      "Charcoal-free, 100% natural herbal extracts in our aromatic incense",
      "Morning-fresh farm flower garlands (Marigold, Jasmine, Lotus, Tulsi)",
      "Pre-assembled Homam & Grihapravesam ceremonial samagri kits",
      "Direct temple supplies and bulk community puja arrangements"
    ],
    categories: [
      {
        name: "Coconut",
        specs: "Sacred Kalash & Homa Coconuts",
        description: "Sound, non-cracked, water-filled coconuts inspected for auspicious rituals, temple offerings, wedding lagna ceremonies, and daily worship.",
        image: "/images/pooja-items/coconut.jpg",
        fallback: "https://images.unsplash.com/photo-1544378730-8b5104b18790?auto=format&fit=crop&w=800&q=80",
        variants: ["Sacred Puja Water Coconuts (Pack of 5/11/21)", "Dry Copra (Gari) for Homams", "Kalash Alankara Coconuts"]
      },
      {
        name: "Incense Sticks (Agarbatti)",
        specs: "Handcrafted Charcoal-Free Natural Fragrances",
        description: "Slow-burning sticks dipped in natural essential oils of Sandalwood, Loban, Sambrani, Jasmine, Kasturi, and Rose to purify your ambient spaces.",
        image: "/images/pooja-items/incense-sticks.jpg",
        fallback: "https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?auto=format&fit=crop&w=800&q=80",
        variants: ["Temple Chandan Agarbatti", "Dhoop Cones & Pure Sambrani Cups", "Havana Herbal Sticks"]
      },
      {
        name: "Pooja Items",
        specs: "Sacred Torans, Brass Lamps & Mandir Decor",
        description: "Auspicious brass Diyas, camphor lamps, Panchapatra, puja thalis, mango leaf torans, and traditional threshold alankara essentials.",
        image: "/images/pooja-items/doors-pooja-items.jpg",
        fallback: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=800&q=80",
        variants: ["Pure Brass Kuber & Akhand Diyas", "Puja Bell & Arati Stand Sets", "Main Door Torans & Rangoli Stencils"]
      },
      {
        name: "Flower Mala",
        specs: "Freshly Strung Fragrant Garlands",
        description: "Daily and ceremonial garlands handcrafted from vibrant yellow-orange marigolds, fragrant Madurai malli (jasmine), roses, and sacred tulsi leaves.",
        image: "/images/pooja-items/flower-mala.jpg",
        fallback: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
        variants: ["Daily Deity Garlands (Small & Medium)", "Wedding & Reception Varmala", "Temple Maha Mala & Lotus Flowers"]
      }
    ]
  }
];

export const COMPANY_STRENGTHS = [
  {
    title: "Six Unified Divisions",
    subtitle: "Complete Life & Wellness Spectrum",
    description: "From morning dairy and fresh produce to athletic nutrition, daily wholesome meals, and sacred rituals, CSR Group enriches every facet of daily life.",
    metric: "6 Divisions"
  },
  {
    title: "Institutional & Bulk Capacity",
    subtitle: "Dependable Corporate Supply",
    description: "Serving leading corporations, educational institutes, event caterers, healthcare centers, and temple trusts with prompt contracted dispatches.",
    metric: "B2B & B2C"
  },
  {
    title: "Convenient Subscription Models",
    subtitle: "Hassle-Free Morning Deliveries",
    description: "Enjoy flexible monthly doorstep milk, fruit, vegetable, protein, and pooja flower deliveries managed with precision.",
    metric: "Doorstep Care"
  },
  {
    title: "Uncompromising Freshness",
    subtitle: "Strict Multi-Tier Quality Audits",
    description: "Every item is procured from ethical farms, processed under spotless hygiene, and delivered in food-grade, nature-friendly packaging.",
    metric: "100% Purity"
  }
];
