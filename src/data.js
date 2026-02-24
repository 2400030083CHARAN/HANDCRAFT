import warliCanvasImg from './assets/products/warli-canvas.jpg'
import dhokraBellImg from './assets/products/dhokra-bell.jpg'
import ikatDupattaImg from './assets/products/ikat-dupatta.jpg'
import woodenElephantImg from './assets/products/wooden-elephant.jpg'
import todaShawlImg from './assets/products/toda-shawl.jpg'
import madhubaniFishImg from './assets/products/madhubani-fish.jpg'
import gondTreeImg from './assets/products/gond-tree.jpg'
import pattachitraScrollImg from './assets/products/pattachitra-scroll.jpg'
import warliFestivalPanelImg from './assets/products/warli-festival-panel.svg'
import dhokraOilLampImg from './assets/products/dhokra-oil-lamp.svg'
import ikatTableRunnerImg from './assets/products/ikat-table-runner.svg'
import kondapalliHorseImg from './assets/products/kondapalli-horse.svg'
import todaCushionCoverImg from './assets/products/toda-cushion-cover.svg'
import madhubaniPeacockScrollImg from './assets/products/madhubani-peacock-scroll.svg'

export const PRODUCTS = [
  {
    id: 1, name: 'Warli Hand-Painted Canvas', tribe: 'Warli', artisan: 'Sita Bai', price: 2400,
    rating: 4.8, emoji: '🎨', color: '#F2DEC4', featured: true,
    image: warliCanvasImg,
    category: 'art', description: 'Traditional Warli painting depicting village life, marriage ceremonies and nature. Hand-painted with natural pigments on hand-spun cotton canvas.',
    stock: 12, reviews: 34
  },
  {
    id: 2, name: 'Bastar Dhokra Bell', tribe: 'Bastar', artisan: 'Raju Vishwakarma', price: 1850,
    rating: 4.9, emoji: '🔔', color: '#C4622D', featured: true,
    image: dhokraBellImg,
    category: 'metalwork', description: 'Ancient lost-wax cast bronze bell using 4000-year-old Dhokra technique. Each piece is unique and handcrafted.',
    stock: 5, reviews: 21
  },
  {
    id: 3, name: 'Sambalpuri Ikat Silk Dupatta', tribe: 'Odisha', artisan: 'Kavitha Meher', price: 3200,
    rating: 4.7, emoji: '🧣', color: '#5A6B3A', featured: false,
    image: ikatDupattaImg,
    category: 'textiles', description: 'Hand-woven ikat silk with traditional tie-dye resist technique. Rich in geometric patterns passed down through generations.',
    stock: 8, reviews: 18
  },
  {
    id: 4, name: 'Kondapalli Wooden Elephant', tribe: 'Kondapalli', artisan: 'Narayana Rao', price: 950,
    rating: 4.6, emoji: '🐘', color: '#E07B45', featured: false,
    image: woodenElephantImg,
    category: 'woodwork', description: 'Handcrafted from tella poniki wood, these toys are lacquered with vegetable dyes. A centuries-old craft tradition from Andhra Pradesh.',
    stock: 20, reviews: 45
  },
  {
    id: 5, name: 'Toda Embroidered Shawl', tribe: 'Toda', artisan: 'Anu Pödr', price: 4500,
    rating: 5.0, emoji: '🏺', color: '#C9A84C', featured: true,
    image: todaShawlImg,
    category: 'textiles', description: 'Sacred embroidery by the Toda tribe of the Nilgiris. Made with a single needle on hand-woven cotton fabric. Only women embroider.',
    stock: 3, reviews: 9
  },
  {
    id: 6, name: 'Madhubani Fish Painting', tribe: 'Mithila', artisan: 'Shanti Devi', price: 1600,
    rating: 4.5, emoji: '🐟', color: '#8B7D72', featured: false,
    image: madhubaniFishImg,
    category: 'art', description: 'Traditional Mithila fish motif painting symbolizing fertility and prosperity. Made with natural earth pigments on handmade paper.',
    stock: 15, reviews: 27
  },
  {
    id: 7, name: 'Gond Painting — Tree of Life', tribe: 'Gond', artisan: 'Bhajju Shyam', price: 5800,
    rating: 4.9, emoji: '🌳', color: '#3D2B1F', featured: true,
    image: gondTreeImg,
    category: 'art', description: 'Fine dot-and-dash Gond art by master artist Bhajju Shyam. Each dot placed with a bamboo stick to create rich, intricate patterns.',
    stock: 2, reviews: 11
  },
  {
    id: 8, name: 'Pattachitra Scroll Painting', tribe: 'Odisha', artisan: 'Mangu Maharana', price: 3800,
    rating: 4.8, emoji: '📜', color: '#FAF6EF', featured: false,
    image: pattachitraScrollImg,
    category: 'art', description: 'Detailed scroll depicting scenes from Jagannath mythology. Made on specially prepared cloth with natural stone and mineral colors.',
    stock: 6, reviews: 16
  },
  {
    id: 9, name: 'Warli Festival Wall Panel', tribe: 'Warli', artisan: 'Lata Dhindale', price: 2900,
    rating: 4.7, emoji: '🖼️', color: '#EED8BD', featured: false,
    image: warliFestivalPanelImg,
    category: 'art', description: 'Narrative Warli composition showing harvest dance and community rituals, hand-painted using rice paste motifs.',
    stock: 10, reviews: 14
  },
  {
    id: 10, name: 'Dhokra Tribal Oil Lamp', tribe: 'Bastar', artisan: 'Mohan Netam', price: 2650,
    rating: 4.8, emoji: '🪔', color: '#B25E33', featured: true,
    image: dhokraOilLampImg,
    category: 'metalwork', description: 'Lost-wax cast brass oil lamp with animal and spiral forms inspired by central Indian tribal symbolism.',
    stock: 7, reviews: 19
  },
  {
    id: 11, name: 'Sambalpuri Ikat Table Runner', tribe: 'Odisha', artisan: 'Rina Meher', price: 2100,
    rating: 4.6, emoji: '🧵', color: '#6C7A45', featured: false,
    image: ikatTableRunnerImg,
    category: 'textiles', description: 'Hand-woven cotton ikat runner featuring traditional geometric bind-and-dye patterns for contemporary homes.',
    stock: 16, reviews: 12
  },
  {
    id: 12, name: 'Kondapalli Wooden Horse', tribe: 'Kondapalli', artisan: 'Ramesh Rao', price: 1250,
    rating: 4.5, emoji: '🐎', color: '#D4743F', featured: false,
    image: kondapalliHorseImg,
    category: 'woodwork', description: 'Lightweight hand-carved wooden horse crafted from softwood and finished with natural lacquer colors.',
    stock: 22, reviews: 31
  },
  {
    id: 13, name: 'Toda Embroidered Cushion Cover', tribe: 'Toda', artisan: 'Mala Pödr', price: 2750,
    rating: 4.9, emoji: '🛋️', color: '#BFA04A', featured: true,
    image: todaCushionCoverImg,
    category: 'textiles', description: 'Distinctive black-red Toda stitchwork on handloom cotton, adapted into a decorative cushion cover.',
    stock: 9, reviews: 8
  },
  {
    id: 14, name: 'Madhubani Peacock Scroll', tribe: 'Mithila', artisan: 'Gauri Jha', price: 2300,
    rating: 4.7, emoji: '🦚', color: '#8E7F75', featured: false,
    image: madhubaniPeacockScrollImg,
    category: 'art', description: 'Peacock-themed Madhubani artwork with dense linework and natural dyes, symbolizing beauty and prosperity.',
    stock: 13, reviews: 17
  },
]

export const ARTISANS = [
  { id: 1, name: 'Sita Bai', tribe: 'Warli', location: 'Maharashtra', products: 8, earnings: 48000, emoji: '👩', verified: true },
  { id: 2, name: 'Raju Vishwakarma', tribe: 'Bastar', location: 'Chhattisgarh', products: 5, earnings: 32000, emoji: '👨', verified: true },
  { id: 3, name: 'Kavitha Meher', tribe: 'Odisha', location: 'Sambalpur', products: 12, earnings: 86000, emoji: '👩', verified: true },
  { id: 4, name: 'Narayana Rao', tribe: 'Kondapalli', location: 'Andhra Pradesh', products: 20, earnings: 54000, emoji: '👨', verified: false },
]

export const CATEGORIES = ['All', 'Art', 'Textiles', 'Metalwork', 'Woodwork']
