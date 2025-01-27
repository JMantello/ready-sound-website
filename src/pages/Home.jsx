import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Packages from '../components/Packages/Packages'
import ValueProps from '../components/ValueProps/ValueProps'
import LiveSoundEngineering from '../components/LiveSoundEngineering/LiveSoundEngineering'
import RequestAQuote from '../components/RequestAQuote/RequestAQuote'
import Footer from '../components/Footer/Footer'

const Home = () => {
    return (
    <div>
        <Navbar />
        <Hero />
        <main>
            <ValueProps />
            <Packages />
            <LiveSoundEngineering />
        </main>
        <RequestAQuote />
        <Footer />
    </div>
    );
};

export default Home;