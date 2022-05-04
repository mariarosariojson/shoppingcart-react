import React from 'react'
import { Link } from 'react-router-dom'
import '../style/checkout.css'

function Checkout({ cartItems, summary }) {

  return (
  
    <div className='checkout-wrapper'>
      <div className='products'>
        {cartItems.length < 1
          ? <div className='empty-container'> <h3>Nothing here</h3> 
          <Link to="/"><button className='empty-btn'>Back to our products</button></Link>
          </div>
          : <div className='product'>

            <h3>Orders</h3>

            {cartItems.map(i => (
              <table>
                <div className='checkout'>
                  <td>{i.title}</td>
                  <td><img src={i.url} alt="Img" className='checkout-img'></img></td>
                  <td>{i.price} SEK</td>
                </div>
              </table>
            ))}
          </div>
        }
      </div>
      <div className='paymnet'>
        <div className='checkout-in'>
          <h2>Payment Information</h2>
        </div>

        <div className='checkout-name checkout-input'>
          <label>First Name:</label>
          <input type='text' name='firstname' className='checkout-form' />
        </div>

        <div className='checkout-lastname checkout-input'>
          <label>Last Name:</label>
          <input type='text' name='lastname' className='checkout-form' />
        </div>

        <div className='checkout-phone checkout-input'>
          <label>Phone:</label>
          <input type='number' name='phonenumber' className='checkout-form' />
        </div>

        <div className='checkout-email checkout-input'>
          <label>Email:</label>
          <input type='text' name='emailaddress' className='checkout-form' />
        </div>

        <div className='checkout-address checkout-input'>
          <label>Address:</label>
          <input type='text' name='address' className='checkout-form' />
        </div>

        <div className='checkout-city checkout-input'>
          <label>City:</label>
          <input type='text' name='city' className='checkout-form' />
        </div>

        <div className='checkout-zipcode checkout-input'>
          <label>Zip Code:</label>
          <input type='number' name='zipcode' className='checkout-form' />
          <h3>TOTAL: {summary} SEK</h3>
          <input type="submit" value="Send it to me!" className='checkout-btn'></input>
        </div>
      </div>
    </div>
    
  )
}

export default Checkout;