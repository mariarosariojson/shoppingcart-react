import '../style/product.css'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MdLocalGroceryStore } from 'react-icons/md'

function Product({ addProduct }) {
  const [product, setproduct] = useState({});
  const params = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch('https://codexplained.se/electronics.php?id=' + params.id);
      const data = await response.json();

      setproduct(data);
    } catch (error) {
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (product) => {
    addProduct(product)
  }

  return (
    <section key={product.id}>
      <h1 className='title-add'>{product.title}</h1>
      <div className='img-desc'>
        <img className='img-add' alt='prodImage' src={product.url}></img>
        <div>
          <p className='desc-add'>{product.description}</p>
          <h2 className='price-add'>{product.price} SEK</h2>
          <h3 className='storage-add'>Storage: {product.storage}</h3>
          <input type="number" min="1" max="10" placeholder="1" className="inputProductQty"></input>
          <button className="checkout_btn" onClick={() => { handleClick(product) }}><MdLocalGroceryStore /></button>
        </div>
      </div>
    </section>
  )
}

export default Product;