const products = [
  {
    id: 1,
    name: "Hydrating Serum",
    price: "$10",
    image: "assets/images/products/Shop-01.png",
    imageOther: "assets/images/others/shop-d01.jpg",
    description1:
      "Hydrating Serum provides intense moisture with a fast-absorbing formula that revitalizes dehydrated skin.",
    description2:
      "Ideal for daily use, it improves skin elasticity and leaves a refreshed, dewy glow without any stickiness.",
    details: {
      size: "30ml",
      productName: "Hydrating Serum",
      skinType: "Dry, Normal",
      texture: "Lightweight Gel",
      keyIngredients: "Hyaluronic Acid, Vitamin B5",
      usageTime: "Day & Night",
      fragranceFree: "Yes",
    },
  },
  {
    id: 2,
    name: "Dry Skin Lotion",
    price: "$12",
    image: "assets/images/products/Shop-02.png",
    imageOther: "assets/images/others/shop-d02.jpg",
    description1:
      "Dry Skin Lotion deeply nourishes and restores moisture to severely dry or rough skin.",
    description2:
      "Formulated with emollients and soothing agents, it offers long-lasting hydration throughout the day.",
    details: {
      size: "30ml",
      productName: "Dry Skin Lotion",
      skinType: "Dry",
      texture: "Rich Lotion",
      keyIngredients: "Shea Butter, Almond Oil",
      usageTime: "Day",
      fragranceFree: "No",
    },
  },
  {
    id: 3,
    name: "Brightening Serum",
    price: "$13.99",
    image: "assets/images/products/Shop-03.png",
    imageOther: "assets/images/others/shop-d03.jpg",
    description1:
      "Brightening Serum is designed to reduce dark spots and even out your skin tone naturally.",
    description2:
      "Infused with botanical extracts, it enhances skin radiance and revives dull complexions with consistent use.",
    details: {
      size: "30ml",
      productName: "Brightening Serum",
      skinType: "All Skin Types",
      texture: "Silky Serum",
      keyIngredients: "Vitamin C, Licorice Extract",
      usageTime: "Day",
      fragranceFree: "Yes",
    },
  },
  {
    id: 4,
    name: "Antioxidant Serum",
    price: "$12.99",
    image: "assets/images/products/Shop-04.png",
    imageOther: "assets/images/others/shop-d04.jpg",
    description1:
      "Antioxidant Serum defends your skin from environmental damage while boosting your natural glow.",
    description2:
      "It fights premature aging by neutralizing free radicals and restoring vitality to stressed skin.",
    details: {
      size: "30ml",
      productName: "Antioxidant Serum",
      skinType: "Combination",
      texture: "Fluid Gel",
      keyIngredients: "Green Tea, Vitamin E",
      usageTime: "Morning",
      fragranceFree: "Yes",
    },
  },
  {
    id: 5,
    name: "Anti-Aging Serum",
    price: "$13.99",
    image: "assets/images/products/Shop-05.png",
    description1:
      "This advanced Anti-Aging Serum reduces fine lines and visibly firms your skin with regular use.",
    description2:
      "With proven peptides and retinol, it promotes cell turnover and restores a youthful appearance.",
    details: {
      size: "30ml",
      productName: "Anti-Aging Serum",
      skinType: "Mature",
      texture: "Smooth Serum",
      keyIngredients: "Retinol, Peptides",
      usageTime: "Night",
      fragranceFree: "No",
    },
  },
  {
    id: 6,
    name: "Moisturizing Cream",
    price: "$11.89",
    image: "assets/images/products/Shop-06.png",
    description1:
      "Moisturizing Cream offers deep hydration and a silky finish, perfect for dry and flaky skin.",
    description2:
      "It replenishes lost moisture, forming a protective barrier to prevent further dehydration.",
    details: {
      size: "30ml",
      productName: "Moisturizing Cream",
      skinType: "Dry, Sensitive",
      texture: "Creamy",
      keyIngredients: "Ceramides, Aloe Vera",
      usageTime: "Day & Night",
      fragranceFree: "Yes",
    },
  },
  {
    id: 7,
    name: "Light Moisturising Cream",
    price: "$10.99",
    image: "assets/images/products/Shop-07.png",
    description1:
      "This Light Moisturising Cream is ideal for oily to combination skin needing soft hydration.",
    description2:
      "Its non-comedogenic formula absorbs quickly without clogging pores, keeping your skin refreshed.",
    details: {
      size: "30ml",
      productName: "Light Moisturising Cream",
      skinType: "Oily, Combination",
      texture: "Featherlight Cream",
      keyIngredients: "Glycerin, Cucumber Extract",
      usageTime: "Morning",
      fragranceFree: "Yes",
    },
  },
  {
    id: 8,
    name: "Nourishing Skin Cream",
    price: "$14.99",
    image: "assets/images/products/Shop-08.png",
    description1:
      "Nourishing Skin Cream delivers rich nutrients to support skin regeneration and health.",
    description2:
      "Perfect for daily use, it leaves your skin feeling soft, plump, and deeply conditioned.",
    details: {
      size: "30ml",
      productName: "Nourishing Skin Cream",
      skinType: "All Skin Types",
      texture: "Thick Cream",
      keyIngredients: "Vitamin E, Honey",
      usageTime: "Night",
      fragranceFree: "No",
    },
  },
  {
    id: 9,
    name: "Anti-Wrinkle Serum",
    price: "$9.99",
    image: "assets/images/products/Shop-09.png",
    description1:
      "Anti-Wrinkle Serum targets signs of aging by smoothing expression lines and improving elasticity.",
    description2:
      "Formulated with collagen boosters, it firms the skin and visibly reduces wrinkles over time.",
    details: {
      size: "30ml",
      productName: "Anti-Wrinkle Serum",
      skinType: "Mature, Dry",
      texture: "Silky Serum",
      keyIngredients: "Collagen, Vitamin A",
      usageTime: "Night",
      fragranceFree: "Yes",
    },
  },
  {
    id: 10,
    name: "Hydrating Face Mist",
    price: "$12.89",
    image: "assets/images/products/Shop-10.png",
    description1:
      "Hydrating Face Mist instantly refreshes your skin with a boost of moisture throughout the day.",
    description2:
      "It can be used over makeup or bare skin to soothe and cool without any greasy feel.",
    details: {
      size: "30ml",
      productName: "Hydrating Face Mist",
      skinType: "All Skin Types",
      texture: "Aqua Spray",
      keyIngredients: "Rose Water, Aloe Vera",
      usageTime: "Anytime",
      fragranceFree: "Yes",
    },
  },
  {
    id: 11,
    name: "Pure Essence Toner",
    price: "$13.99",
    image: "assets/images/products/Shop-11.png",
    description1:
      "Pure Essence Toner balances pH levels while tightening and clarifying your skin.",
    description2:
      "Its alcohol-free formula soothes and preps your skin for serums and moisturizers.",
    details: {
      size: "30ml",
      productName: "Pure Essence Toner",
      skinType: "Sensitive, Normal",
      texture: "Liquid Toner",
      keyIngredients: "Chamomile, Witch Hazel",
      usageTime: "Morning & Evening",
      fragranceFree: "Yes",
    },
  },
  {
    id: 12,
    name: "Concealer",
    price: "$12.99",
    image: "assets/images/products/Shop-12.png",
    description1:
      "This skin-care infused Concealer offers smooth coverage that blends effortlessly.",
    description2:
      "It hides dark circles, blemishes, and pigmentation with a natural finish all day long.",
    details: {
      size: "30ml",
      productName: "Concealer",
      skinType: "All Skin Types",
      texture: "Cream Stick",
      keyIngredients: "Vitamin C, Niacinamide",
      usageTime: "Day",
      fragranceFree: "No",
    },
  },
  {
    id: 13,
    name: "Coconut Cleansing Oil",
    price: "$11.99",
    image: "assets/images/products/Shop-13.png",
    description1:
      "This Coconut Cleansing Oil gently removes dirt, makeup, and excess oil without stripping skin.",
    description2:
      "It leaves your face feeling nourished, clean, and smooth with no oily residue.",
    details: {
      size: "30ml",
      productName: "Coconut Cleansing Oil",
      skinType: "Dry, Sensitive",
      texture: "Silky Oil",
      keyIngredients: "Coconut Oil, Jojoba",
      usageTime: "Evening",
      fragranceFree: "Yes",
    },
  },
  {
    id: 14,
    name: "Rejuvenating Night Cream",
    price: "$14.99",
    image: "assets/images/products/Shop-14.png",
    description1:
      "Rejuvenating Night Cream supports overnight recovery by deeply nourishing tired skin.",
    description2:
      "It improves skin tone and texture so you wake up with a healthier, refreshed look.",
    details: {
      size: "30ml",
      productName: "Rejuvenating Night Cream",
      skinType: "All Skin Types",
      texture: "Rich Cream",
      keyIngredients: "Peptides, Avocado Oil",
      usageTime: "Night",
      fragranceFree: "Yes",
    },
  },
  {
    id: 15,
    name: "Scalp Moisturizing Cream",
    price: "$10.99",
    image: "assets/images/products/Shop-15.png",
    description1:
      "This Scalp Moisturizing Cream soothes dryness, flakiness, and irritation on the scalp.",
    description2:
      "It hydrates and balances scalp health, promoting softer hair and less itchiness.",
    details: {
      size: "30ml",
      productName: "Scalp Moisturizing Cream",
      skinType: "Dry Scalp",
      texture: "Non-Greasy Cream",
      keyIngredients: "Tea Tree Oil, Panthenol",
      usageTime: "Night",
      fragranceFree: "Yes",
    },
  },
  {
    id: 16,
    name: "Face Cleanser",
    price: "$8.99",
    image: "assets/images/products/Shop-16.png",
    description1:
      "Face Cleanser removes dirt, impurities, and oil without drying or irritating your skin.",
    description2:
      "Its gentle formula maintains your skin’s natural moisture barrier with each wash.",
    details: {
      size: "30ml",
      productName: "Face Cleanser",
      skinType: "All Skin Types",
      texture: "Foaming Gel",
      keyIngredients: "Salicylic Acid, Aloe Vera",
      usageTime: "Morning & Night",
      fragranceFree: "Yes",
    },
  },
];
