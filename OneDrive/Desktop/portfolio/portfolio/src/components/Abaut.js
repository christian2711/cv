import React from "react";
import "./abaut.css";

export default function About() {
  return (
    <section id="about">
      <div className="text-container">
        <h1 className="heading">Hola, soy Christian</h1>
        <h2 className="description">
          Estoy encantado de presentarte mi experiencia y habilidades como programador. He adquirido un sólido conocimiento en el desarrollo de software y una pasión por crear soluciones innovadoras. Donde la creatividad y la eficiencia se unen para lograr resultados excepcionales.
        </h2>
        <div>
          <a href="#contact" className="button">
            Trabaja conmigo
          </a>
        </div>
      </div>
    </section>
  );
}