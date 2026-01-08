import './App.css'
import Hero from './components/Hero.tsx'
import HorizontalScroll from './components/HorizontalScroll.tsx'
import Pricing from './components/Pricing.tsx'
import TextParallaxScroll from './components/TextParallaxScroll.tsx'
import Map from './components/Map.tsx'
import Footer from './components/Footer.tsx'

function App() {

  return (
    <>
      <Hero />
      <Pricing />
      <TextParallaxScroll />
      <HorizontalScroll />
      <Map />
      <Footer />
    </>
  )
}

export default App

