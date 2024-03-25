import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Car from "./components/Car.js";
import User from "./components/User.js";
import manProfile from "./components/man.png"
import womanProfile from "./components/woman.png"

function App() {
  return (
    <div className="App">
      <Header />
      <h1> Hello Worldd </h1>
      <Car merk="Ferrari" harga={5} isNew={false} colors={["Hitam", "Putih", "Abu-abu"]} beli={() => alert("Sudah dibeli")} />{" "}
      <User gambar="https://cdn-icons-png.flaticon.com/512/2919/2919906.png" nama="Ahmad Ibadurrahman" alamat="Purworejo, Jawa Tengah" angkatan={11} hobi={["Ngoding", "Nonton Film", "Jalan-Jalan"]} isGraduate={true} />{" "}
      <User gambar={manProfile} nama="Raffi Adnan" alamat="Tangerang, Banten" angkatan={11} hobi={["Ngoding", "Nge Game"]} isGraduate={false} />{" "}
      <User gambar={womanProfile} nama="Daffa Ryu" alamat="Jaksel, DKI" angkatan={11} hobi={["Futsal", "Ngrimping", "Jogging"]} isGraduate={true} /> <Footer nama="Ahmad Ibadurrahman" />
      </div>
  );
}

export default App;
