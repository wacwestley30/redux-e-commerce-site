import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;