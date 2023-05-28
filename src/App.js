import "./assets/css/start.css";
import image from "./assets/images/desktop_thumbnail_5c212d5c-ea46-44cf-9350-78d14e98ae42.jpeg";

function App() {
  return (
    <>
      <div className="container">
        <header> Pizza Hut</header>
        <h1>Pizza hut </h1>
        <h4>THe food is here</h4>
        <img src={image} className="img1" alt="logo" />
      </div>
    </>
  );
}

export default App;
