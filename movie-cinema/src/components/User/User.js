import "./User.css";
const User = (props) => {
  const { nama, alamat, angkatan, hobi, isGraduate, gambar, member, message } = props;
  // const message = () => alert(`Profil ${nama} telah dibuka`);
  const tableStyle = {
    border: "1px solid black",
    width: "300px",
    margin: "20px auto",
  };
  const headerStyle = { textAlign: "center", fontWeight: "bold" };
  const cellStyle = { textAlign: "center" };
  return (
    <>
      <table className="card">
        <thead className="card-head">
          <tr>
            <th colSpan={2}>
              <img src={gambar} alt="" />
            </th>
          </tr>
          <tr>
            <th colSpan={2}>{nama}</th>
          </tr>
        </thead>
        <tbody className="card-body">
          <tr>
            <td colSpan={2}>{member}</td>
          </tr>
          <tr className="card-footer">
            <td>
              <button onClick={message}> Message </button>
            </td>
            <td>
              <button> Suscribe </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default User;
