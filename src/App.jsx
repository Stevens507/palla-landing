import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BrandTicker from './components/BrandTicker'
import FeaturesSection from './components/FeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import ManifestoSection from './components/ManifestoSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <BrandTicker />
        <FeaturesSection />
        <HowItWorksSection />
        <ManifestoSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
