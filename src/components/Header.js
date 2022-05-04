import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../style/header.css'
import { FaShoppingBag } from 'react-icons/fa'
import { MdFace } from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'
import { Home } from '@material-ui/icons';
import Cart from './Cart';


function Header({cartItems, setCartItems, countCartItems, summary, deleteCart}) {
  const [open, setOpen] = useState(false)

  return (
    <div>
        <div className="navbar">

          <div className='nav-1'><Link to="./" style={{padding: '10px'}}>{<Home/>}</Link></div>

          <div className="nav-2">
            <Link to="./" style={{padding: '10px'}}>PRODUCTS</Link>
            <Link to="./Footer" style={{padding: '10px'}}>ABOUT</Link>
            </div>

          <div className='nav-3'> 
          <button className='headerIconAdmin'><MdFace/></button>
          <button className='headerIconHeart'><MdFavorite/></button>
          
            <div className="cart-sidebar">
              <button className='shoppingbag' onClick={() => {setOpen(true)}}>< FaShoppingBag/></button>
              </div>
              {countCartItems ? (
                <button className='cartNum'>{countCartItems}</button>
              ) : 
                ''
              }
        </div>
            
            <Cart cartItems={cartItems} setCartItems={setCartItems} open={open} setOpen={setOpen} summary={summary} deleteCart={deleteCart}/>
          

        </div>

    </div>
  )
}

export default Header