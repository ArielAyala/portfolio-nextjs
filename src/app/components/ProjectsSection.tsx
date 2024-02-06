"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsImagesPath = '/images/projects/';
const projectsData = [
  {
    id: 1,
    title: "Loan installments calculator- French system",
    description: "A Simple and User-Friendly Loan Installment Calculator - French System - Stack: Angular",
    image: `${projectsImagesPath}french_system_calculator.jpg`,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ArielAyala/calculate-loan-installments-french-system",
    previewUrl: "https://arielayala.github.io/calculate-loan-installments-french-system/",
  },
  {
    id: 2,
    title: "Store using Angular 17",
    description: "Simulation of a web store application built using Angular 17",
    image: `${projectsImagesPath}store-angular-17.jpg`,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ArielAyala/store-angular-17",
    previewUrl: "https://arielayala.github.io/store-angular-17/",
  },
  {
    id: 3,
    title: "Crypto tracker",
    description: "App developed using React Native, to show information about cryptocurrencies",
    image: `${projectsImagesPath}crypto-tracker.jpg`,
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ArielAyala/crypto-tracker-react-native",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
