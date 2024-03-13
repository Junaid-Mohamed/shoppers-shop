import Navbar from "./components/Navbar"
// In your React entry file (e.g., index.js or App.js)
import '@fontsource/poppins'; // Import the Poppins font
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import LoginSignup from "./pages/LoginSignup";
import Cart from "./pages/Cart";


function App() {


  return (
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Shop/>}/>
    <Route path="/mens" element={<ShopCategory/>}/>
    <Route path="/womens" element={<ShopCategory/>}/>
    <Route path="/kids" element={<ShopCategory/>}/>
    <Route path="/product" element={<Product/>}>
      <Route path=":productId" element={<Product/>}/>
    </Route>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/login" element={<LoginSignup/>}/>
    </Routes>
    </BrowserRouter>
   
   </div>
   
  )
}

export default App
