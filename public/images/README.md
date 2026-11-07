# CSR Group of Companies - Image Assets Directory

You can place your actual product and division photographs in this folder and reference them anywhere in `src/data/businessesData.js`.

### Suggested Directory Structure:
```text
public/images/
├── hero-banner.jpg
├── dairy/
│   ├── milk.jpg
│   ├── curd.jpg
│   ├── butter.jpg
│   ├── ghee.jpg
│   ├── cheese.jpg
│   ├── paneer.jpg
│   └── ice-cream.jpg
├── fruits/
│   ├── basic-box.jpg
│   ├── premium-box.jpg
│   ├── fresh-fruits.jpg
│   └── dry-fruits.jpg
├── vegetables/
│   ├── all-vegetables.jpg
│   ├── leafy-vegetables.jpg
│   └── seasonal-vegetables.jpg
├── protein/
│   ├── basic-protein.jpg
│   ├── premium-protein.jpg
│   ├── milk-eggs.jpg
│   ├── sprouts-salads.jpg
│   ├── sandwiches-rolls.jpg
│   └── sweets.jpg
├── meal-box/
│   ├── basic-meal-box.jpg
│   ├── premium-meal-box.jpg
│   ├── homely-snacks.jpg
│   ├── bulk-canteens.jpg
│   └── pickles.jpg
└── pooja-items/
    ├── coconut.jpg
    ├── incense-sticks.jpg
    ├── doors-pooja-items.jpg
    ├── flower-mala.jpg
    └── worship-essentials.jpg
```

### How to use in `src/data/businessesData.js`:
Simply replace any online URL with:
```javascript
image: "/images/dairy/milk.jpg"
```
Vite will automatically serve them from this public folder.

