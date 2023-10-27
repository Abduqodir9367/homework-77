import "./Footer.scss"
const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer-content">
                <img src="../logo.png" alt="img" />
                <div className="footer-links">
                    <a href="#">Каталог</a>
                    <a href="#">О нас</a>
                    <a href="#">Магазины</a>
                    <a href="#">Контакты</a>
                </div>
                <div className="icons">
                    <a href="#"><img src="../face.png" alt="icon" /></a>
                    <a href="#"><img src="../inst.png" alt="icon" /></a>
                    <a href="#"><img src="../twit.png" alt="icon" /></a>
                </div>
               
            </div>
            <div className="line"></div>
            <div className="last">
                <p>Maroon c 2020 Все права защищены</p>
                <p>Политика конфиденциальности</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer