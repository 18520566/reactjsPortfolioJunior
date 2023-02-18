import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience/index.tsx'
import Footer from './components/Footer/index.tsx'
import Header from './components/Header'
import Nav from './components/Nav/index.tsx'
import Portfolio from './components/Portfolio'
import Services from './components/Services/index.tsx'
import Testimonials from './components/Testimonials'

 const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      </>
  )
}

export default App