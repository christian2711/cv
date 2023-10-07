import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import "./skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          {/* ... */}
        </div>
        <div className="skills-container">
          {skills.map((skill) => (
            <div key={skill.name} className="p-2 sm:w-1/2 w-full">
              <div className="flex items-center mb-2">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" style={{ fontSize: "1rem" }} />
                <span>{skill.name}</span>
              </div>
              <div className="progress">
                <div className="progress-bar" style={{ width: `${skill.percentage}%` }} />
                <span className="progress-percentage">{skill.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}