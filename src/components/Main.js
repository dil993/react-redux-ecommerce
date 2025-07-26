import { addToCart } from '../redux/action'; 
import { useDispatch } from 'react-redux';

function Main() {
  const dispatch = useDispatch();
  const item={
    "name": "Apple",
    "price": 100,
    "quantity": 1,
    "type": "type"
  }
  return (
    <div>
     <button onClick={() => dispatch(addToCart(item))}> Add to cart </button>
    </div>
  );
}

export default Main;
