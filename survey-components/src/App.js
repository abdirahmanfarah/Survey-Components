import React from 'react';

import './App.css';
import Survey from './components/SurveyForm';
// import Header from './components/SurveyTitle';
import Star from './components/SurveyRating'




function App() {

  return (
    <div className="App">
    {/* <Header /> */}
    <Survey />
    <Star />
    </div>
  );
}

export default App;
