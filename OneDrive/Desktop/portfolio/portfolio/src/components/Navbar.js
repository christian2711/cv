import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-gray-300 mb-4 md:mb-0">
          <a href="#about" className="text-gray-300">
            Christian Taborda
          </a>
        </a>
        <a href="#projects" className="nav-link hover:text-white">
          Trabajos anteriores
        </a>
        <a href="#skills" className="nav-link hover:text-white">
          Habilidades
        </a>
        <a href="#testimonials" className="nav-link hover:text-white">
          Certificados
        </a>
        <a
          href="#contact"
          className="inline-flex items-center text-bl border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          ¡Contrátame!
          <ArrowRightIcon
            style={{ width: "40x", height: "40px", marginLeft: "1px" }}
          />
        </a>
      </div>
    </header>
  );
}
