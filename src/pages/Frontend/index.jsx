import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Header from '../../components/Frontend/Header'
import Footer from '../../components/Frontend/Footer'

const Frontend = () => {
  return (
    <>
    <Header />
    <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </main>
    <Footer />
    </>
  )
}

export default Frontend