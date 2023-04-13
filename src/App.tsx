import React from 'react';
import './App.css';
import Feature from './Components/Features/Feature';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/Navbar';


function AppLayout() {

  return (
    <div className='app'>
      <header className='header mb-4'>
        <NavBar />
      </header>
      <main>
        <Header/>
        <Feature/>
      </main>
    </div>
  );
}

export default AppLayout;
