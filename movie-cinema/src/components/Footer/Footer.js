import "./Footer.css";
import { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <h3> Copyright &copy; 2024 Developed by {this.props.nama} </h3>
        <p> Make with &#10084;</p>
      </footer>
    );
  }
}

export default Footer;
