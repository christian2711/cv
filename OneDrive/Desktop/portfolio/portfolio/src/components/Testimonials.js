import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import intCertificado from "../img/int.jpg";
import javaCertificado from "../img/Java1.jpg";
import javaCertificado2 from "../img/javaSql.png";
import "./testimomials.css";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" style={{ width: "2npm 0px", height: "20px", marginLeft: "1px" }}/>
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Certificados
        </h1>
        <div className="flex justify-center flex-col items-center mb-4">
          <img
            alt="Certificado INT"
            src={intCertificado}
            className="certificado-img rounded-full object-cover object-center" style={{ width: "500px", height: "350px", marginLeft: "1px" }}
          />
          <br></br>
          <img
            alt="Certificado Java 1"
            src={javaCertificado}
            className="certificado-img rounded-full object-cover object-center" style={{ width: "500px", height: "350px", marginLeft: "1px" }}
          />
          <br></br>
          <img
            alt="Certificado Java 2"
            src={javaCertificado2}
            className="certificado-img rounded-full object-cover object-center" style={{ width: "500px", height: "350px", marginLeft: "1px" }}
          />
        </div>
      </div>
    </section>
  );
}