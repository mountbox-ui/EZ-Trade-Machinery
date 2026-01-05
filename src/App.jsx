import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import HeroFilter from './components/HeroFilter'
import Auction from './components/Auction'
import CategorySidebar from './components/CategorySidebar'
import PromoDashboard from './components/PromoDashboard'
import MobileBottomNav from './components/MobileBottomNav'
import Footer from './components/Footer'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import MyAccount from './pages/MyAccount'

function App() {
  const navLinks = [
    'Home',
    'Auctions',
    'Categories',
    'Deals',
    'Want to Buy',
    'Financing',
    'Shipping'
  ]

  const topLinks = [
    'Track Order',
    'Help & Support',
    'Get Verified'
  ]

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <main className="max-w-[1440px] mx-auto px-[8px] lg:px-8 space-y-4 lg:space-y-10 mb-20 lg:mb-0">
                <HeroSlider />
                <HeroFilter />
                <Auction />
                <div className="flex flex-col lg:flex-row gap-8 w-full">
                  <CategorySidebar />
                  <PromoDashboard />
                </div>
              </main>
              <Footer />
              <MobileBottomNav navLinks={navLinks} topLinks={topLinks} />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<MyAccount />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

