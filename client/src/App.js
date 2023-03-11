import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import Content from './components/Content/Content';
import SideMenu from './components/SideMenu/SideMenu';
import './App.css';

function App() {
  return (
    <>
      <AppHeader />
      <div className="container">

        <SideMenu />
        <Content />
      </div>
    </>
  );
}

export default App;
