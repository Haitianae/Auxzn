
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './Pages/Home';
// import Navbar from './Components/Navbar';

// function App() {
//   return (
//    <div>
//     <Navbar />
//     <Home />
//    </div>
//   );
// }

// export default App;


import "bootstrap/dist/css/bootstrap.min.css";

import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products/Products";
// import Blogs from "./Pages/Blogs";
// import Contact from "./Pages/Contact";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;