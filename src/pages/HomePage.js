import AboutSection from "../components/AboutSection";
import IntroSection from "../components/IntroSection";
import StorySection from "../components/StorySection";
import Footer from "../layout/Footer";
import Navigation from "../layout/Navigation";


function HomePage() {

    return <div className="container">
        <Navigation />
        <IntroSection />
        <AboutSection />
        <StorySection />
        <Footer />
    </div>

}

export default HomePage;