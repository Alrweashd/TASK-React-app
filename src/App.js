import "./assets/css/start.css";
import products from "./products";
// "https://people.com/thmb/HKKS23v5mQ1YHpLoYv8LW-1gEpQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/pizza-hut-2-d194594b6b594e27912d5174c2fe8e06.jpg"
import Menu from "./components/ProductItem";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Home />
      <div className="imgCon">
        <ProductList />
      </div>
    </>
  );
}

export default App;
