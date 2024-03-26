import "./Car.css";

const Car = ({ merk, harga, isNew, colors, beli, gambar }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={gambar} alt="" width={264} />
      </div>
      <div className="card-body">
        <p> {merk} </p>
        <p> Harga Mobil: Rp {harga} Milyar </p>
        <p> Keadaan Mobil: {isNew ? "Baru" : "Bekas"} </p>
        <p> Varian Warna: {colors.map((color) => color + ", ")} </p>
      </div>
      <div className="card-footer">
        <button onClick={beli}> Beli </button>{" "}
      </div>
    </div>
  );
};

export default Car;
