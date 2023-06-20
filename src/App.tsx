import { Routes, Route } from "react-router-dom"
import { Container, Toast } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import  {Cart}  from "./components/Cart"
import PaymentPage from "./components/PaymentPage"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart"  element={<Cart/>}/>
          <Route path="/paymentpage" element={<PaymentPage/>} />
        </Routes>
        <ToastContainer/>
      </Container>
    </ShoppingCartProvider>
   
  
  )


}

export default App
