import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
// import Car from "./components/Car/Car.js";
// import User from "./components/User/User.js";
import Main from "./components/Main/Main.js";
import Counter from "./components/Counter/Counter.js";
import AddMovieFrom from "./components/AddMovieFrom/AddMovieFrom.js";
// import manProfile from "./components/man.png";
// import womanProfile from "./components/woman.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Popular from "./pages/movie/Popular.js";
import TopRated from "./pages/movie/TopRated.js";
import Detail from "./pages/movie/Detail.js";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top" element={<TopRated />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Main /> */}
      {/* <Counter /> */}
      {/* <AddMovieFrom onAddMovie={addMovie} /> */}
      {/* <Footer nama="Ahmad Ibadurrahman" /> */}
    </div>
  );
}

export default App;
