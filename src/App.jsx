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
import LoginModal from './components/LoginModal.jsx'

export default function App() {
  const [user, setUser] = useState(null)
  const [showLogin, setShowLogin] = useState(false)
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id)
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
  }

  return (
    <Router>
      <Navbar user={user} setUser={setUser} cart={cart} onLoginClick={() => setShowLogin(true)} />
      {showLogin && <LoginModal setUser={setUser} onClose={() => setShowLogin(false)} />}
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/artisan" element={<ArtisanDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/profile" element={<CustomerProfile cart={cart} setCart={setCart} />} />
        <Route path="/cultural-hub" element={<CulturalHub />} />
      </Routes>
      <Footer />
    </Router>
  )
}
