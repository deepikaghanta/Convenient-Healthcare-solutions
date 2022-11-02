import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Registration from "./Registration";
// import Login from "./Login";
// import Home from "./Home"
import Home from "./pages";
import Faq from "./pages/faq";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import "antd/dist/antd.css";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/Registration" element={<Registration />} />
    //     <Route path="/Login" element={<Login />} />
    //     <Route path="/Home" element={<Home />} />
    //   </Routes>
    // </Router>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
