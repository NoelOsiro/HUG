import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <Router>
          <Switch>
            <Route path="/gallery" component={GalleryPage} />
            <Route exact path="/gallery/:id" component={GalleryItemPage} />
            <Route exact path="/about" component={AboutUsPage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/join" component={JoinPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>  
      </main>
      <Footbar/>
    </div>
  );
}

export default AppLayout;
