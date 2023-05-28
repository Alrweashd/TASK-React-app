import "./assets/css/start.css";
import image from "./assets/images/desktop_thumbnail_5c212d5c-ea46-44cf-9350-78d14e98ae42.jpeg";
import products from "./products";
// "https://people.com/thmb/HKKS23v5mQ1YHpLoYv8LW-1gEpQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/pizza-hut-2-d194594b6b594e27912d5174c2fe8e06.jpg"

function App() {
  let list = products.map((p) => (
    <div className="card">
      <div>
        {p.name} it cost {p.price}K.D
      </div>
      <div>
        <img src={p.image} className="menu" style={{ borderRadius: "30%" }} />
      </div>
    </div>
  ));
  return (
    <>
      <div className="container">
        <header> Pizza Hut</header>
        <div>
          <img
            src=" https://upload.wikimedia.org/wikipedia/sco/d/d2/Pizza_Hut_logo.svg"
            className="logo"
          />
          <h1>Pizza hut </h1>
        </div>
        <h4>THe food is here</h4>
        <img
          src={image}
          className="img1"
          alt="logo"
          style={{ borderRadius: "30%" }}
        />{" "}
      </div>
      <div className="imgCon">
        <div className="card">
          {" "}
          <div>
            {products[0].name} it cost {products[0].price}K.D
          </div>
          <div>
            {" "}
            <img
              src={products[0].image}
              className="menu"
              style={{ borderRadius: "30%" }}
            />
          </div>
        </div>
        <div className="card">
          {" "}
          <div>
            {products[1].name} it cost {products[1].price}K.D
          </div>
          <div>
            {" "}
            <img
              src={products[1].image}
              className="menu"
              style={{ borderRadius: "30%" }}
            />
          </div>
        </div>
        {list}
      </div>
    </>
  );
}

export default App;
