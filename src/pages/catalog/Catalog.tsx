import { useEffect, useState } from "react";
import "./Catalog.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [posts, setPosts] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/cosmetics`);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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
  return (
    <>
      <section className="Hero">
        <div className="container">
          <div className="par">
            <h1>Каталог</h1>
            <button>Фильтр</button>
          </div>
          <div className="cards">
            {posts.map((post, id) => (
              <Link to={`/details/${post.id}`}>
                <div className="card" key={id}>
                  <img src={post.image} alt="img" />
                  <div className="card-content">
                    <div className="left">
                      <h3>{post.name}</h3>
                      <p>{post.description}</p>
                    </div>
                    <div className="left">
                      <h3>{post.price} </h3>
                      <p>{post.weight}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="btns">
            <button className="pagination">1</button>
            <p>---------</p>
            <button className="pagination">8</button>
          </div>
        </div>
      </section>
      <section className="Second">
        <div className="container">
          <div className="par">
            <h1>Вы недавно смотрели</h1>
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
      <section className="seven">
        <div className="container">
          <div className="big">
            <div className="left">
              <img src="./seven1.png" alt="img" />
              <img src="./seven2.png" alt="img" />
              <img src="./seven3.png" alt="img" />
              <img src="./seven4.png" alt="img" />
              <img src="./seven5.png" alt="img" />
              <img src="./seven6.png" alt="img" />
            </div>
            <div className="right">
              <h1>Присоединяйтесь к нам</h1>
              <p>
                Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и
                акциях первыми
              </p>
              <button>Подписаться</button>
            </div>
          </div>
        </div>
      </section>
      <section className="six">
        <div className="container">
          <div className="big">
            <div className="left">
              <h1>Контакты</h1>
              <div className="item">
                <h2>Адрес</h2>
                <p>Санкт-Петербург, </p>
                <p>ул. Большая Конюшенная, 19</p>
              </div>
              <div className="item">
                <h2>Телефон</h2>
                <p>+7 (923) 888-90-60</p>
              </div>
              <div className="item">
                <h2>E-mail</h2>
                <p>info@maroon.ru</p>
              </div>
              <div className="icons">
                <a href="#">
                  <img src="./face.png" alt="icon" />
                </a>
                <a href="#">
                  <img src="./inst.png" alt="icon" />
                </a>
                <a href="#">
                  <img src="./twit.png" alt="icon" />
                </a>
              </div>
            </div>
            <div className="right">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.254101826184!2d69.24264697563902!3d41.32508759985782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bfaedfe3e1d%3A0x23ac4a5a705b84ab!2zTmFqb3QgVGHigJlsaW0!5e0!3m2!1suz!2s!4v1698258703836!5m2!1suz!2s"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;
