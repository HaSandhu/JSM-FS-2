import React from 'react';

import {About, Footer, Header, Skills, Coursework, Testimonial, Work} from './container/index';
import {Navbar} from './components/index';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />  
      <Coursework/>
      <Skills />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App;