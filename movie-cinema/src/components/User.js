const User = (props) => {
  const { nama, alamat, angkatan, hobi, isGraduate, gambar } = props;
  const message = () => alert(`Profil ${nama} telah dibuka`);
  return (
    <>
      <ul>
        <img src={ gambar } alt="" width={ 264 } />
        <li> Nama Mahasantri: { nama } </li>
        <li> Alamat: { alamat } </li>
        <li> Angkatan ke - { angkatan } </li>
        <li> Hobi: { hobi.map( ( h ) => h + ", " ) } </li>
        <li> Status: { isGraduate ? "Lulus" : "Sedang belajar" } </li>{ " " }
        <button onClick={message}> Klik </button>{" "}
      </ul>{" "}
    </>
  );
};

export default User;
