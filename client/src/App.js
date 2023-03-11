import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import Content from './components/Content/Content';
import SideMenu from './components/SideMenu/SideMenu';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <div className="container"> */}

      <AppHeader />
      <div className="side--contetnt__container">

        <SideMenu />
        <Content />
      </div>
      <Footer />
    </div>

  // </div>
  );
}

export default App;
