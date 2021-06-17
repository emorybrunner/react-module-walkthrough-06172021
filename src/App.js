import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Sidebar from './components/site/Sidebar';
import {
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router> {/* you MUST wrap one component in the BrowserRouter to actually enable Links and Routes */}
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
