import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Packages from './components/Packages'
import ValueProps from './components/ValueProps'
import LiveSoundEngineering from './components/LiveSoundEngineering'
import RequestAQuote from './components/RequestAQuote'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <ValueProps />
        <Packages />
        <LiveSoundEngineering />
      </main>
      <RequestAQuote />
      <Footer />
    </>
  )
}

export default App
