import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import HeroFilter from './components/HeroFilter'
import Auction from './components/Auction'
import CategorySidebar from './components/CategorySidebar'
import PromoDashboard from './components/PromoDashboard'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <HeroSlider />
        <HeroFilter />
        <Auction />

        <div className="flex flex-col lg:flex-row gap-8">
          <CategorySidebar />
          <PromoDashboard />
        </div>

   
      </main>

      <Footer />
    </div>
  )
}

export default App

