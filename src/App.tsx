import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/Navbar/Navbar';
import Footbar from './Components/Footer/Footbar';
import GalleryPage from './Pages/Gallery';
import HomePage from './Pages/HomePage';
import GalleryItemPage from './Pages/GalleryItem';
import AboutUsPage from './Pages/AboutUsPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';
import JoinPage from './Pages/JoinPage';



function AppLayout() {
  return (
    <div className='app'>
      <header className='header'>
        <NavBar />
      </header>
      <main>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/gallery" element={<GalleryPage/>} />
            <Route path="/gallery/:id" element={<GalleryItemPage/>} />
            <Route path="/about" element={<AboutUsPage/>} />
            <Route path="/blog" element={<BlogPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/join" element={<JoinPage/>} />
            <Route path="/" element={<HomePage/>} />
          </Routes>
        </Router>  
      </main>
      <Footbar/>
    </div>
  );
}

export default AppLayout;
