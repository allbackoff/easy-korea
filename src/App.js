import './App.css';
import styles from  './styles.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
function App() {
  return (
    <div className="App">
      <Header />
      <HomePage styles = {styles}/>
    </div>
  );
}

export default App;
