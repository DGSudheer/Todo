import "./App.css";
import { ProductList } from "./ProductList.jsx";
import  Like  from "./Like.jsx";
import Counter from "./Counter.jsx";
import Ludoboard from "./Ludoboard.jsx";

function App() {
  return (
    <div>
      <Ludoboard colour="blue"/>
      <Ludoboard colour="yellow"/>
      <Ludoboard colour="green"/>
      <Ludoboard colour="red"/>
    </div>
  );
}

export default App; 