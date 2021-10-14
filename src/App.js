import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <ItemListContainer items={[1,2,3,4,5,6,7,8,9,10]} greeting="Bienvenido a mi Tienda"/>
      </Router>
    </div>
  );
}

export default App;
