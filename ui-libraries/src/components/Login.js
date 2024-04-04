import React from "react";
import "bulma/css/bulma.min.css";

const Login = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="column is-centered">
            <div className="column is-4">
              <form className="box">
                <h3 className="title has-text-primary">Login</h3>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" className="input" placeholder="Masukkan email" />
                </div>
                <div className="field">
                  <label htmlFor="password">Password</label>
                  <input id="password" type="password" className="input" placeholder="Masukkan password" />
                </div>
                <div className="field">
                  <button type="submit" className="button is-success is-fullwidth">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
