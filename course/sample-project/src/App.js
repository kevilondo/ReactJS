import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={ About } />
        <Route path="/contact" component={ Contact } />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
