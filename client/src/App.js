import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
// import Content from './components/Content/Content';
import SideMenu from './components/SideMenu/SideMenu';
import './App.css';
import Footer from './components/Footer/Footer';
import AppRoutes from './components/AppRoutes/AppRoutes';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="side--contetnt__container">
        <SideMenu />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
