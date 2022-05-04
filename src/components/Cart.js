import React, {useState, useEffect} from "react"
import '../style/cart.css'
import { TiDelete } from 'react-icons/ti';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { Link } from "react-router-dom";


const CartItem = ({item, deleteItem}) => {
  
  const handleDeleteSingleItem = () => {
    deleteItem(item.id);
  } 

  const [count, setCount] = useState(0);
  const initialState = 0;

 const onClickPlus = () => {
    setCount(c => Math.min(c + 1, 10));
  };
   const onClickMin = () => {
    setCount(c => Math.max(c - 1, 0));
  };
     

  return (
    <div>
        
          <section className="cart" key={item.id}>
            
          <img className="cart-img" src={item.url} alt={item.title}></img>
              <div className='cartDetails'>
                <p className="count">{count} items</p>
                <h2>{item.title}</h2>
                <h3>{item.price} SEK</h3>
                  <button  onClick={onClickPlus} className='plusBtn'>+</button>
                  <button  onClick={onClickMin} className='minusBtn'>-</button>
                  <button onClick={ () => setCount(initialState) } className='resetCount'>Reset</button>
               <button onClick={handleDeleteSingleItem} className='delete-singleitem'><RiDeleteBin2Fill /></button>  

              </div>
            
          </section>
        
    </div>
  )
}

function Cart({ cartItems, setCartItems, open, setOpen, deleteCart }) {
  const [finalAmount, setFinalAmount] = useState(0);

  
  const deleteItem = (id) => {
    let inCart = cartItems.filter(item => item.id !== id)
    setCartItems(inCart)
  }
  
  
  const handleDeleteCart = () => {
    deleteCart()
  }
  
  useEffect(() => {


const totalAmount = () => {
 let totalCartAmount = 0;
  for (let fullAmount = 0; fullAmount < cartItems.length; fullAmount++) {
    totalCartAmount += cartItems[fullAmount].price;
}
setFinalAmount(totalCartAmount);
}
  totalAmount();
}, [cartItems]);



  return (
    <>

      <div className={`cart-openSidebar ${open && 'open'}`}>
        <div className='cartHeader'>
          <h2>Shopping Bag</h2>
          <div className='closeSidebar' onClick={() => setOpen(!open)}><TiDelete /></div>
        </div>
        <div>{cartItems.length === 0 && <p className='emptyShoppingBag'>Your bag is currently empty</p>}</div>
        <div className="cartProducts">
          {
            cartItems.map((item) =>
              <CartItem key={item.id} cartItems={cartItems} item={item} deleteItem={deleteItem}/>
            )
          }
        </div>

        <div className='cart-summary'>
          <h3>Total Amount: {finalAmount} SEK</h3>
          <Link to="/checkout"><button className='cart-checkout'>Checkout</button></Link>
          
        </div>
        <button onClick={handleDeleteCart} className='deleteCart'>Empty bag</button>
      </div>
    

    </>
  )
  
}

export default Cart
