import logo from './logo.svg';
import './App.css';
import { addToCart } from './redux/action'; 
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const item={
    "name": "Apple",
    "price": 100,
    "quantity": 1,
    "type": "type"
  }
  return (
    <div className="App">
     <button onClick={() => dispatch(addToCart(item))}> Add to cart </button>
    </div>
  );
}

export default App;
