import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import ArtisanDashboard from './pages/ArtisanDashboard.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import CustomerProfile from './pages/CustomerProfile.jsx'
import CulturalHub from './pages/CulturalHub.jsx'
import ConsultantDashboard from './pages/ConsultantDashboard.jsx'
import LoginModal from './components/LoginModal.jsx'

export default function App() {
  const [user, setUser] = useState(null)
  const [showLogin, setShowLogin] = useState(false)
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id)
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item.id === product.id)
      if (exists) return prev.filter(item => item.id !== product.id)
      return [...prev, product]
    })
  }

  const getDashboardElement = () => {
    if (!user) {
      return <CustomerProfile cart={cart} setCart={setCart} addToCart={addToCart} wishlist={wishlist} setWishlist={setWishlist} user={user} />
    }

    if (user.role === 'admin') return <AdminDashboard user={user} />
    if (user.role === 'artisan') return <ArtisanDashboard user={user} />
    if (user.role === 'consultant') return <ConsultantDashboard user={user} />
    return <CustomerProfile cart={cart} setCart={setCart} addToCart={addToCart} wishlist={wishlist} setWishlist={setWishlist} user={user} />
  }

  return (
    <Router>
      <Navbar user={user} setUser={setUser} cart={cart} wishlist={wishlist} onLoginClick={() => setShowLogin(true)} />
      {showLogin && <LoginModal setUser={setUser} onClose={() => setShowLogin(false)} />}
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
        <Route path="/dashboard" element={getDashboardElement()} />
        <Route path="/artisan" element={<ArtisanDashboard user={user} />} />
        <Route path="/admin" element={<AdminDashboard user={user} />} />
        <Route path="/profile" element={<CustomerProfile cart={cart} setCart={setCart} addToCart={addToCart} wishlist={wishlist} setWishlist={setWishlist} user={user} />} />
        <Route path="/cultural-hub" element={<CulturalHub />} />
        <Route path="/consultant" element={<ConsultantDashboard user={user} />} />
      </Routes>
      <Footer />
    </Router>
  )
}
