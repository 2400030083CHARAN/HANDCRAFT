export const PRODUCTS = [
  {
    id: 1, name: 'Warli Hand-Painted Canvas', tribe: 'Warli', artisan: 'Sita Bai', price: 2400,
    rating: 4.8, emoji: '🎨', color: '#F2DEC4', featured: true,
    category: 'art', description: 'Traditional Warli painting depicting village life, marriage ceremonies and nature. Hand-painted with natural pigments on hand-spun cotton canvas.',
    stock: 12, reviews: 34
  },
  {
    id: 2, name: 'Bastar Dhokra Bell', tribe: 'Bastar', artisan: 'Raju Vishwakarma', price: 1850,
    rating: 4.9, emoji: '🔔', color: '#C4622D', featured: true,
    category: 'metalwork', description: 'Ancient lost-wax cast bronze bell using 4000-year-old Dhokra technique. Each piece is unique and handcrafted.',
    stock: 5, reviews: 21
  },
  {
    id: 3, name: 'Sambalpuri Ikat Silk Dupatta', tribe: 'Odisha', artisan: 'Kavitha Meher', price: 3200,
    rating: 4.7, emoji: '🧣', color: '#5A6B3A', featured: false,
    category: 'textiles', description: 'Hand-woven ikat silk with traditional tie-dye resist technique. Rich in geometric patterns passed down through generations.',
    stock: 8, reviews: 18
  },
  {
    id: 4, name: 'Kondapalli Wooden Elephant', tribe: 'Kondapalli', artisan: 'Narayana Rao', price: 950,
    rating: 4.6, emoji: '🐘', color: '#E07B45', featured: false,
    category: 'woodwork', description: 'Handcrafted from tella poniki wood, these toys are lacquered with vegetable dyes. A centuries-old craft tradition from Andhra Pradesh.',
    stock: 20, reviews: 45
  },
  {
    id: 5, name: 'Toda Embroidered Shawl', tribe: 'Toda', artisan: 'Anu Pödr', price: 4500,
    rating: 5.0, emoji: '🏺', color: '#C9A84C', featured: true,
    category: 'textiles', description: 'Sacred embroidery by the Toda tribe of the Nilgiris. Made with a single needle on hand-woven cotton fabric. Only women embroider.',
    stock: 3, reviews: 9
  },
  {
    id: 6, name: 'Madhubani Fish Painting', tribe: 'Mithila', artisan: 'Shanti Devi', price: 1600,
    rating: 4.5, emoji: '🐟', color: '#8B7D72', featured: false,
    category: 'art', description: 'Traditional Mithila fish motif painting symbolizing fertility and prosperity. Made with natural earth pigments on handmade paper.',
    stock: 15, reviews: 27
  },
  {
    id: 7, name: 'Gond Painting — Tree of Life', tribe: 'Gond', artisan: 'Bhajju Shyam', price: 5800,
    rating: 4.9, emoji: '🌳', color: '#3D2B1F', featured: true,
    category: 'art', description: 'Fine dot-and-dash Gond art by master artist Bhajju Shyam. Each dot placed with a bamboo stick to create rich, intricate patterns.',
    stock: 2, reviews: 11
  },
  {
    id: 8, name: 'Pattachitra Scroll Painting', tribe: 'Odisha', artisan: 'Mangu Maharana', price: 3800,
    rating: 4.8, emoji: '📜', color: '#FAF6EF', featured: false,
    category: 'art', description: 'Detailed scroll depicting scenes from Jagannath mythology. Made on specially prepared cloth with natural stone and mineral colors.',
    stock: 6, reviews: 16
  },
]

export const ARTISANS = [
  { id: 1, name: 'Sita Bai', tribe: 'Warli', location: 'Maharashtra', products: 8, earnings: 48000, emoji: '👩', verified: true },
  { id: 2, name: 'Raju Vishwakarma', tribe: 'Bastar', location: 'Chhattisgarh', products: 5, earnings: 32000, emoji: '👨', verified: true },
  { id: 3, name: 'Kavitha Meher', tribe: 'Odisha', location: 'Sambalpur', products: 12, earnings: 86000, emoji: '👩', verified: true },
  { id: 4, name: 'Narayana Rao', tribe: 'Kondapalli', location: 'Andhra Pradesh', products: 20, earnings: 54000, emoji: '👨', verified: false },
]

export const CATEGORIES = ['All', 'Art', 'Textiles', 'Metalwork', 'Woodwork']
