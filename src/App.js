import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./container/Header";
import ProductDetail from "./container/ProductDetail";
import ProductListing from "./container/productListing";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route path="products/:productId" element={<ProductDetail />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
