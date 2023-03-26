import {Route,Routes} from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.js';
import AllCourses from './components/AllCourses';
import Navbar from "./components/Navbar.js";
import './style.css';
import Futr from "./components/Futr.js";
import Contact from "./components/Contact.js";

const App = () =>{
  return(
    <>
    <section style={{margin:"0 10%"}}>
    <Navbar/>
    <Routes>
      <Route exact path = '/' element={<Home/>}> </Route>
      <Route exact path = '/Course' element={<AllCourses/>}> </Route>
      <Route exact path = '/About' element={<About/>}> </Route>
      <Route exact path = '/Contact' element={<Contact/>}> </Route>
    </Routes>
    </section>

    <Futr/>
    </>
  )
}
export default App; 