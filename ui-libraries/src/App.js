import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NavbarComponent from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopRated from "./pages/TopRated";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavbarComponent></NavbarComponent> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/top" element={<TopRated />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
