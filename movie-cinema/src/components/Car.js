import man from "./man.png";

const Car = ({ merk, harga, isNew, colors, beli }) => {
  return (
    <>
      <img src={man} alt="" width={ 264 } />
      <h3> Merek Mobil: {merk} </h3>{" "}
      <h4>
        {" "}
        Harga Mobil: Rp {harga}
        Milyar{" "}
      </h4>{" "}
      <h5> Keadaan Mobil: {isNew ? "Baru" : "Bekas"} </h5> <h5> Varian Warna: {colors.map((color) => color + ", ")} </h5> <button onClick={beli}> Beli </button>{" "}
    </>
  );
};

export default Car;
