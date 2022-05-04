import React, { useEffect, useState } from "react";
import productsData from "../Data";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoInformationCircleSharp } from "react-icons/io5";
import "../style/products.css";

function Products({ addProduct }) {
  // eslint-disable-next-line no-unused-vars
  const [products, setproducts] = useState([]);

  const getProduct = async () => {
    try {
      const response = await fetch("https://codexplained.se/electronics.php");
      const data = await response.json();

      setproducts(data);
    } catch (error) {}
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleClick = (product) => {
    addProduct(product);
  };

  return (
    <div className="productContainer">
      {productsData.products.map((product) => (
        <div key={product.id} className="productCard">
          <Link to={`/product/${product.id}`}>
            <img
              className="productPic"
              src={product.url}
              alt={product.title}
            ></img>
          </Link>
          <Link to={`/product/${product.id}`}>
            <h3 className="productcardInfo">{product.title}</h3>
          </Link>
          <p className="productcardPrice">{product.price} SEK</p>

          <Link to="../Heart" className="like_btn" style={{ color: "#a52a2a" }}>
            {<MdFavorite />}
          </Link>
          <p className="productcardDesc">{product.description}</p>

          <div className="btns">
            <Link to={`/product/${product.id}`}>
              <button className="details_btn">
                <IoInformationCircleSharp />
              </button>
            </Link>

            <input
              type="number"
              min="1"
              max="10"
              placeholder="Qty"
              className="inputProductQty"
            ></input>

            <button
              className="checkout_btn"
              onClick={() => {
                handleClick(product);
              }}
            >
              <MdLocalGroceryStore />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
