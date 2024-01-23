// import './App.css'
import { 
  BrowserRouter, Route, Routes,
  
 } from "react-router-dom";
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home";
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Package } from "./pages/Package";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Logout } from "./pages/Logout";
import { SingleTourPackage } from "./pages/SingleTourPackage"



function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/package" element={<Package/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="/singletourpackage/:id" element={<SingleTourPackage/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
