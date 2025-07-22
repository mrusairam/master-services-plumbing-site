import './App.css'
import Header from './Comopnents/Header'
import Navbar from './Comopnents/Navbar'
import Hero from './Main/Hero'
import Service from './Main/Service'
import About from './Main/About'
import Testimonial from './Main/Testimonial'
import Contact from './Main/Contact'
import Footer from './Comopnents/Footer'

function App() {


  return (
    <div className="overflow-x-hidden">
      <Header />
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Service />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="testimonials">
        <Testimonial />
      </div>
     <div id="request">
      <Contact />
      </div>
      <Footer/>
    </div>
  )
}

export default App
