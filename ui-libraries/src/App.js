import "./App.css";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
// import NavbarComponent from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Detail from "./pages/Detail";
import DetailCourse from "./components/DetailCourse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavbarComponent></NavbarComponent> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/course/:id" element={<DetailCourse />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
