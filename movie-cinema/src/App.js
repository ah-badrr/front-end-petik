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

function App()
{

  return (
    <div className="container">
      <Navbar />
      <Main />
      {/* <Counter /> */}
      {/* <AddMovieFrom onAddMovie={addMovie} /> */}
      <Footer nama="Ahmad Ibadurrahman" />
    </div>
  );
}

export default App;
