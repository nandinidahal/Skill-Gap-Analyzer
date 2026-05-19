import Navbar from "../../components/navbar/Navbar";
import About from "../component/About";
import HeroSection from "../component/Herosection";
import Footer from "../../components/footer/Footer"
import Help from "../component/Help";
import WhatYouGet  from "../component/WhatYouGet"
function HomePage() {
  return (
    <>
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section id="home" className="scroll-mt-24">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      {/* help section  */}
      <section id="help" className="scroll-mt-24">
        <Help/>
      </section>
     

      <section  id="whatyouget" className="scroll-mt-24">
        <WhatYouGet/>
      </section>

      {/* <section id="help" className="scroll-mt-24">
        <Help/>
      </section> */}

      {/* <Footer /> */}
      
    </>
  );
}

export default HomePage;