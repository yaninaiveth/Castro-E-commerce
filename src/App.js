import './App.css';
import { CartContext } from './context/CartContext';
import { CartProvider } from './context/CartContext';
import Routes from './router/Routes';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes/>
      </CartProvider>
    </div>
  );
}

export default App;
