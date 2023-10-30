import { useEffect } from "react";
import "./Cart.scss";

export type Product = {
  id: string;
  image: string;
  name: string;
  category: string;
  weight: string;
  price: string;
  numOfProducts?: number;
};

const Cart = ({ cart, setCart }) => {
  useEffect(() => {
    let prods = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(prods);
  }, []);
  return (
    <div className="mt-24 mb-16 Cart">
      <div className="par">
        <h1>Korzinka</h1>
      </div>
      <div className="cards">
        {cart.map((i: Product) => (
          <div className="card" key={i.id}>
            <img src={i.image} alt="img" />
            <div className="card-content">
              <div className="left">
                <h3>{i.name}</h3>
                <p>{i.category}</p>
              </div>
              <div className="left">
                <h3>{i.price} </h3>
                <p>{i.weight}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
