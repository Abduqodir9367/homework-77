import { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/cosmetics?_limit=5`);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <section className="hero mt-12 mb-36">
        <div className="container">
          <div className="hero-content flex justify-center">
            <div className="content1">
              <img src="./hero1.png" alt="img" />
              <div className="fter flex justify-between mt-3">
                <p>Уход для лица</p>
                <img src="./icon.png" alt="icon" />
              </div>
            </div>
            <div className="content2 w-80 h-96 flex flex-col items-center	">
              <h1 className="text-6xl pt-9">MAROON</h1>
              <p className="text-lg w-60 mt-3">
                Натуральная косметика для бережного ухода за кожей
              </p>
              <button className=" hero-btn border-solid box-border border-black">
                Подробнее
              </button>
            </div>
            <div className="content3">
              <img src="./hero2.png" alt="img" />
              <div className="fter flex justify-between mt-3">
                <p>Уход для тела</p>
                <img src="./icon.png" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="second mb-36">
        <div className="container">
          <div className="cards">
            <div className="cart">
              <h1>Бестселлеры</h1>
              <p>Легендарные продукты, завоевавшие любовь наших клиентов</p>
              <Link to={"catalog"}><button>Смотреть все</button>
              </Link>
            </div>

            {posts.map((post, id) => (
              <div className="card" key={id}>
                <img src={post.image} alt="img" />
                <h3>{post.name}</h3>
                <p>{post.description}</p>
                <Link to={`/details/${post.id}`}>Подробнее</Link>
              </div>
            ))}
          </div>
          <div className="arrows">
            <button>
              <img src="./left.png" alt="icon" />
            </button>
            <button>
              <img src="./icon.png" alt="icon" />
            </button>
          </div>
        </div>
      </section>
      <section className="three">
        <div className="three-content">
          <h3>Встречайте весну вместе с нами</h3>
          <p>
            Попробуйте новую коллекцию ухаживающих средств для лица с SPF
            защитой
          </p>
          <button>Подробнее</button>
        </div>
      </section>
      <section className="four">
        <div className="container">
          <div className="big">
            <div className="left">
              <h3>Индивидуальный уход</h3>
              <p>
                Не всегда очевидно, какие элементы и минералы необходимы коже, а
                многочисленные эксперименты с разными средствами только ухудшают
                ее качество. Заполните анкету, и мы подберем уход, подходящий
                именно вам, учитывая ваш образ жизни, место жительства и другие
                факторы.
              </p>
              <button>Заполнить анкету</button>
            </div>
            <div className="right">
              <img src="./four.png" alt="img" />
            </div>
          </div>
        </div>
      </section>
      <section className="five">
        <div className="container">
          <div className="five-content">
            <h1>
              “Мы стремимся сделать уход за кожей доступным и приятным ритуалом
              для всех, кто хочет заботиться о себе и своем теле”
            </h1>
            <button>Наша история</button>
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

export default Home;
