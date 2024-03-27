import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="container">
        <section className="hero">
          <div className="hero-left">
            <h2 className="hero-title">Title</h2>
            <h3 className="hero-genre">Genre : </h3>
            <p className="hero-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reprehenderit veritatis perspiciatis culpa voluptatum dolore non quod maxime voluptas iste necessitatibus accusantium obcaecati laboriosam sint cum ad corrupti
              maiores? Assumenda.
            </p>
            <p className="hero-button">Watch</p>
          </div>
          <div className="hero-right">
            <img className="hero-image" src="https://picsum.photos/200/300" alt="hero-img" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
