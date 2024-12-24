import { Route, Routes } from "react-router-dom";
import Login from "./Login & Signup/Login";
import Signup from "./Login & Signup/Signup";
import APIcontext from "./Login & Signup/APIcontext";
import Forget from "./Login & Signup/Forget";
// import Main from "./Home/Main";
import About from "./Home/About";
import Meats from "./Home/Meats";
import Contect from "./Home/Contect";
import Home from "./Home/Home";
import PrivacyPolice from "./Home/Footer/PrivacyPolice";
import TermsAndCondition from "./Home/Footer/TermsAndCondition";
import Cart from "./Cart/Cart";
import Delivery from "./Cart/Delivery";

function App() {
  return (
    <div>
      <APIcontext>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/forgetpassword' element={<Forget />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/meats' element={<Meats />}/>
        <Route path='/contect' element={<Contect />}/>
        <Route path='/privacypolicy' element={<PrivacyPolice />}/>
        <Route path='/termsandcondition' element={<TermsAndCondition />}/>
        <Route path='/delivery' element={<Delivery />}/>
      </Routes>
      </APIcontext>
    </div>
  );
}

export default App;
