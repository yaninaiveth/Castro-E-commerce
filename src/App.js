import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import ItemCount from './components/ItemCount'
import ItemListDetail from './components/ItemListDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <ItemListContainer greeting = "Bienvenido a mi Tienda"/>
        <ItemListDetail/>
        <ItemCount initial = {0} onAdd = {() => alert("Alert")} stock = {5}/>
      </Router>
    </div>
  );
}

export default App;
