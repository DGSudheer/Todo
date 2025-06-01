import "./App.css";
import { ProductList } from "./ProductList.jsx";
import  Like  from "./Like.jsx";
import Counter from "./Counter.jsx";

function App() {
  return (
    <div>
      <p>Did you Like me?</p>
      <Like/>
      <Counter/>
    </div>
  );
}

export default App; 