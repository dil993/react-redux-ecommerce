import { addToCart, emptyCart, removeFromCart } from '../redux/action'; 
import { useDispatch } from 'react-redux';
import { productData } from '../redux/productAction';
import { useSelector } from 'react-redux';

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log("data Product list :", data.cartData)
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
     <div>
     <button className='btn' onClick={() => dispatch(productData(data))}> Get Product List </button>
     </div>
    </div>
  );
}

export default Main;
