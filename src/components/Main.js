import { addToCart, emptyCart, removeFromCart } from '../redux/action'; 
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
      {console.log("3 : Component ---> Main component rendered")}
      <div >
     <button className='btn add-btn add-btn:hover' onClick={() => dispatch(addToCart(item))}> Add to cart </button>
     </div>
     <div>
     <button className='btn remove-btn remove-btn:hover' onClick={() => dispatch(removeFromCart(item))}> Remove to cart </button>
     </div>
     <div>
     <button className='btn' onClick={() => dispatch(emptyCart(item))}> Empty cart </button>
     </div>
    </div>
  );
}

export default Main;
