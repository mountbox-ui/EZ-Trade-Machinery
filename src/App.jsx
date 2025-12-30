import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import HeroFilter from './components/HeroFilter'
import Auction from './components/Auction'
import CategorySidebar from './components/CategorySidebar'
import PromoDashboard from './components/PromoDashboard'
import MobileBottomNav from './components/MobileBottomNav'
import Footer from './components/Footer'

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
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 mb-20 lg:mb-0">
        <HeroSlider />
        <HeroFilter />
        <Auction />

        <div className="flex flex-col lg:flex-row gap-8">
          <CategorySidebar />
          <PromoDashboard />
        </div>


      </main>
      <Footer />

      <MobileBottomNav navLinks={navLinks} topLinks={topLinks} />
    </div>
  )
}

export default App

