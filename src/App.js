import './App.css';
import styles from  './styles.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import React from 'react'



function App() {
  return (
    <div className="App">
      <Header styles = {styles}/>
      <HomePage styles = {styles}/>
    </div>
  );
}

export default App;
