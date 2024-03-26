import Car from "../Car/Car";
import User from "../User/User";
import "./Main.css";
import ferrari from "../Images/ferrari.jpg";
import bugati from "../Images/bugati.jpeg";
import landrover from "../Images/landrover.jpg";
import civic from "../Images/civic.jpg";
import lambo from "../Images/lambo.jpg";
import man from "../Images/man.png";

const Main = () => {
  return (
    <div className="content">
      <User gambar={man} member="Platinum" nama="Amalun" />
      <User gambar={man} member="Gold" nama="Raffi" />
      <User gambar={man} member="Silver" nama="Daffa Ryu" />
      <User gambar={man} member="Non Member" nama="Fuadi" />
      <User gambar={man} member="Platinum" nama="Abdullah" />
      <User gambar={man} member="Diamond" nama="Rois" />
      <User gambar={man} member="Gold" nama="Burhanuddin" />
      <User gambar={man} member="Non Member" nama="Wahyu" />
      <User gambar={man} member="Silver" nama="Ihsan" />
      <User gambar={man} member="Diamond" nama="Fauzan" />
      <Car beli={() => alert("Produk ditambahkan ke keranjang")} colors={["putih", "merah"]} gambar={ferrari} merk="Ferrari F40" harga={1.5} isNew="True" />
      <Car beli={() => alert("Produk ditambahkan ke keranjang")} colors={["kuning", "putih", "hitam"]} gambar={lambo} merk="Lambhorghini" harga={3.5} isNew="True" />
      <Car beli={() => alert("Produk ditambahkan ke keranjang")} colors={["merah", "putih", "biru"]} gambar={landrover} merk="Range Rover" harga={2} isNew="True" />
      <Car beli={() => alert("Produk ditambahkan ke keranjang")} colors={["hitam", "merah"]} gambar={bugati} merk="Bugati" harga={1} isNew="True" />
      <Car beli={() => alert("Produk ditambahkan ke keranjang")} colors={["putih", "hitam", "merah"]} gambar={civic} merk="Honda Civic" harga={1} isNew="True" />
    </div>
  );
};

export default Main;
