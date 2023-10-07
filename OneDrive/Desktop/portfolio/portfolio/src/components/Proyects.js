
import React from "react";
import { CodeIcon, LinkIcon } from "@heroicons/react/solid";
import "./proyects.css";

export default function Proyects() {
  const githubLink = "https://github.com/christian2711";

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon
            className="mx-auto inline-block w-10 mb-4"
            style={{
              width: "100px",
              height: "100px",
              marginLeft: "1px",
            }}
          />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Repositorio en GitHub
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <a href={githubLink} className="sm:w-1/2 w-100 p-4">
            <div className="flex relative">
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 hover:opacity-100">
                <div className="link-container">
                  <LinkIcon className="link-icon" />
                  <p className="leading-relaxed">{githubLink}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
