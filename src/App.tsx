import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './Components/Navbar/Navbar';
import GalleryPage from './Pages/Gallery';
import HomePage from './Pages/HomePage';
import GalleryItemPage from './Pages/GalleryItem';
import Footbar from './Components/Footer/Footbar';


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
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>  
      </main>
      <Footbar/>
    </div>
  );
}

export default AppLayout;
