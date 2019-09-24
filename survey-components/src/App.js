import React from 'react';
import './App.css';
import Survey from './components/Form';
import Header from './components/Title';
import Star from './components/Rating'


function App() {
  return (
    <div className="App">
    <Header />
    <Survey />
    <Star />
    </div>
  );
}

export default App;
