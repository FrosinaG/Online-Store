var cloudinary = require("cloudinary");
const products = [
  {
    id: 1,
    name: "Olay Regenerist Micro-Sculpting Cream",
    description:
      "Diminish Wrinkles And Fine Lines ,Instantly hydrates to firm skin for a lifted look",
    price: 24,
    rating: 4.69,
    images:
      "https://res.cloudinary.com/dcawlmmdw/image/upload/v1676751721/online-store/1_cxpiit.jpg",
  },
  {
    id: 2,
    name: "Dr. Loretta Intense Replenishing Serum",
    description:
      "Original Ultra-Rich Body Cream 2.5 Fluid Ounce, Plant Rich Hydrating Moisturizer with Pansy, Chamomile and Calendula",
    price: 17,
    rating: 4.99,
    images:
      "https://res.cloudinary.com/dcawlmmdw/image/upload/v1676751717/online-store/2_aolwb4.jpg",
  },
  {
    id: 3,
    name: "Weleda Skin Food",
    description:
      "Diminish Wrinkles And Fine Lines ,Instantly hydrates to firm skin for a lifted look",
    price: 36,
    rating: 4.69,
    images:
      "https://res.cloudinary.com/dcawlmmdw/image/upload/v1676751718/online-store/3_oruj39.jpg",
  },
  {
    id: 4,
    name: "Premier Dead Sea Moisture Cream",
    description:
      "Multi Use for face and body, anti-aging face cream, skin care with aloe Vera gel, face moisturizer, light, non sticky....",
    price: 20,
    rating: 4.89,
    images:
      "https://res.cloudinary.com/dcawlmmdw/image/upload/v1676751719/online-store/4_wzahl4.jpg",
  },
  {
    id: 5,
    name: "New York Biology Dead Sea Mud Mask",
    description:
      "Spa Quality Pore Reducer for Acne, Blackheads and Oily Skin, Natural Skincare for Women, Men - Tightens Skin for A Healthier Complexion ",
    price: 15,
    rating: 4.22,
    images:
      "https://res.cloudinary.com/dcawlmmdw/image/upload/v1676751719/online-store/5_lj1wqc.jpg",
  },
  {
    id: 6,
    name: "CeraVe Eye Repair Cream ",
    description:
      "Under Eye Cream for Dark Circles and Puffiness.Suitable for Delicate Skin Under Eye Area",
    price: 9,
    rating: 4.59,
    images:
      "https://res.cloudinary.com/dcawlmmdw/image/upload/v1676751716/online-store/6_zl44ea.jpg",
  },
  {
    id: 7,
    name: "Water Boost Micellar Facial Gel Wash ",
    description: "Suitable for even sensitive skin.",
    price: 12,
    rating: 4.2,
    images:
      "https://res.cloudinary.com/dcawlmmdw/image/upload/v1676751714/online-store/7_kqavqo.jpg",
  },
  {
    id: 8,
    name: "Garnier SkinActive Micellar Water for All Skin Types",
    description: "Facial Cleanser & Makeup Remover",
    price: 18,
    rating: 4.11,
    images:
      "https://res.cloudinary.com/dcawlmmdw/image/upload/v1676751715/online-store/8_qpmdrp.jpg",
  },
  {
    id: 9,
    name: "L'Oreal Paris Age Perfect Collagen Expert",
    description: "Night Cream Mature Skin",
    price: 35,
    rating: 4.69,
    images:
      "https://res.cloudinary.com/dcawlmmdw/image/upload/v1676751716/online-store/9_zbsply.jpg",
  },
  {
    id: 10,
    name: "Olay Regenerist Night Recovery Cream ",
    description: "Face Moisturizer, Fragrance Free",
    price: 52,
    rating: 4.67,
    images:
      "https://res.cloudinary.com/dcawlmmdw/image/upload/v1676751715/online-store/10_prwew4.jpg",
  },
  {
    id: 11,
    name: "La Roche-Posay Toleriane Dermallegro",
    description:
      " Night Cream for Face Intense Soothing Moisturizer with Vitamin E",
    price: 30,
    rating: 4.1,
    images:
      "https://res.cloudinary.com/dcawlmmdw/image/upload/v1676751716/online-store/11_tkynog.jpg",
  },
  {
    id: 12,
    name: "LANEIGE Lip",
    description: "Lip Glowy Balm",
    price: 11,
    rating: 4.0,
    images:
      "https://res.cloudinary.com/dcawlmmdw/image/upload/v1676751717/online-store/12_nhthgw.jpg",
  },
  {
    id: 13,
    name: "NIVEA SUN Face Cream",
    description: "UV Anti-Age, SPF 50",
    price: 26,
    rating: 4.99,
    images:
      "https://res.cloudinary.com/dcawlmmdw/image/upload/v1676751716/online-store/13_stxuqt.jpg",
  },
  {
    id: 14,
    name: "Niacinamide",
    description: "Serum for Face - Pore Reducer Skin Care",
    price: 22,
    rating: 4.11,
    images:
      "https://res.cloudinary.com/dcawlmmdw/image/upload/v1676751716/online-store/14_nu1zic.jpg",
  },
  {
    id: 15,
    name: "Evenline Cosmetics White Prestige 4D ",
    description: "Lightening Serum",
    price: 19,
    rating: 4.29,
    images:
      "https://res.cloudinary.com/dcawlmmdw/image/upload/v1676751718/online-store/15_2_krabbc.jpg",
  },

  {
    id: 16,
    name: "Eye Cream to Reduce Puffiness",
    description:
      " L'Oreal Paris Skincare Dermo-Expertise Eye Defense Eye Cream with Caffeine and Hyaluronic Acid For All Skin Types",
    price: 12,
    rating: 4.0,
    images:
      "https://res.cloudinary.com/dcawlmmdw/image/upload/v1676751718/online-store/16_kaqxv4.jpg",
  },

  {
    id: 17,
    name: "Bella and Bear Goddess Sugar Scrub",
    description:
      "Sugar Scrub, No Parabens, New Fragrance, Cruelty-Free, Vegan-Friendly Exfoliating",
    price: 10,
    rating: 3.69,
    images:
      "https://res.cloudinary.com/dcawlmmdw/image/upload/v1676751718/online-store/17_2_eokjym.jpg",
  },
  {
    id: 18,
    name: "Revuele Hydralift",
    description: "Hyaluron Moisturizing Body Lotion",
    price: 21,
    rating: 3.99,
    images:
      "https://res.cloudinary.com/dcawlmmdw/image/upload/v1676751718/online-store/18_w5tyie.jpg",
  },
];
module.exports = products;
