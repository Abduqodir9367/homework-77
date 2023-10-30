import "./Details.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
type Product = {
  id: string;
  image: string;
  name: string;
  category: string;
  weight: string;
  price: string;
  description: string;
};

const Details = ({ cart, setCart }: any) => {
  const param = useParams();
  const [product, setProduct] = useState<Product[]>([]);
  const paramId = param.id * 1;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/cosmetics/" + paramId
        );
        setProduct([response.data]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [paramId]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/cosmetics?_limit=4`);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    if (!cart.includes(product)) {
      setCart([...cart, { ...product, numOfProducts: 1 }]);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <>
      <section className="Details">
        <div className="container">
          {product.map((el) => (
            <div className="product">
              <div className="left">
                <img src={el.image} alt="img" />
              </div>
              <div className="right">
                <div className="par">
                  <h1>{el.name}</h1>
                  <p>{el.description}</p>
                </div>
                <div className="text">
                  <p>
                    Увлажняющий крем идеально подходит для повседневного ухода
                    за молодой кожей.
                  </p>
                  <p>
                    Крем равномерно распределяется по поверхности благодаря
                    легкой текстуре, обеспечивает глубокое увлажнение,
                    регенерацию клеток.
                  </p>
                </div>
                <div className="add">
                  <div className="sostav">
                    <p>Состав</p>
                    <p>+</p>
                  </div>
                  <div className="sostav">
                    <p>Способ применения</p>
                    <p>+</p>
                  </div>
                </div>
                <div className="check">
                  <p>Объем:</p>
                  <input type="checkbox" />
                  <label htmlFor="checkbox">{el.weight}</label>
                  <input type="checkbox" />
                  <label htmlFor="checkbox">30ml</label>
                </div>
                <div className="last">
                  <p> {el.price}</p>
                  <button onClick={() => handleAddToCart(el)}>
                    Добавить в корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="Second">
        <div className="container">
          <div className="par">
            <h1>Вам также может понравиться</h1>
          </div>
          <div className="latests">
            {products.map((product, id) => (
              <Link to={`/details/${product.id}`}>
                <div className="card" key={id}>
                  <img src={product.image} alt="img" />
                  <div className="card-content">
                    <div className="left">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                    </div>
                    <div className="left">
                      <h3>{product.price} </h3>
                      <p>{product.weight}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="btns">
            <button className="pagination">1</button>
            <p>---------</p>
            <button className="pagination">3</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
