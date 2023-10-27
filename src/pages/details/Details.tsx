import "./Details.scss";
const Details = () => {
  return (
    <>
    <section className="Details">
      <div className="container">
        <div className="product">
          <div className="left">
            <img src="./detail.png" alt="img" />
          </div>
          <div className="right">
            <div className="par">
              <h1>Rose</h1>
              <p>крем для лица</p>
            </div>
          <div className="text">
          <p>
              Увлажняющий крем идеально подходит для повседневного ухода за
              молодой кожей.
            </p>
            <p>
              Крем равномерно распределяется по поверхности благодаря легкой
              текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.
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
              <label htmlFor="checkbox">50ml</label>
              <input type="checkbox" />
              <label htmlFor="checkbox">30ml</label>
            </div>
            <div className="last">
              <p>890 $</p>
              <button className="submit">Добавить в корзину</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="Second">
        <div className="container">
          <div className="par">
            <h1>Вам также может понравиться</h1>
          </div>
          <div className="latests">
            <div className="card">
              <div className="card-content">
                <div className="left">
                  <h3>High</h3>
                  <p>крем для лица</p>
                </div>
                <div className="left">
                  <h3>990 $</h3>
                  <p>50ml</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="left">
                  <h3>High</h3>
                  <p>крем для лица</p>
                </div>
                <div className="left">
                  <h3>990 $</h3>
                  <p>50ml</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="left">
                  <h3>High</h3>
                  <p>крем для лица</p>
                </div>
                <div className="left">
                  <h3>990 $</h3>
                  <p>50ml</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="left">
                  <h3>High</h3>
                  <p>крем для лица</p>
                </div>
                <div className="left">
                  <h3>990 $</h3>
                  <p>50ml</p>
                </div>
              </div>
            </div>
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
