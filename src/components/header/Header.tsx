import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <header className="pt-6 h-20 ">
      <nav className="container">
        <div className="nav-items flex flex-row justify-between  ">
          <Link to={"/"}>
            <img src="./logo.png" alt="" className="ml-10" />
          </Link>
          <div className="nav-links flex flex-row gap-x-6 mr-20 ">
            <Link to={"catalog"}>Каталог</Link>
            <Link to={"details"}>О нас</Link>
            <a href="#">Контакты</a>
            <div className="nav-btns flex gap-x-4">
              <button>
                <img src="./account.png" alt="icon" />
              </button>
              <button>
                <img src="./shop.png" alt="icon" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
