"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/ProjectsData";
import { ProjectsTabs } from "./ProjectsTabs";
import { ProjectsBody } from "./ProjectsBody";
import { ProjectsStats } from "./ProjectsStats";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("Mobile M");

  return (
    <section id="projects" className="bg-white py-10 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.99 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.05 }}
        className="bg-black rounded-2xl py-20 px-6 min-h-screen mx-auto max-w-8xl"
      >
        <div className="space-y-12">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.05 }}
            className="text-center text-4xl md:text-5xl font-extralight text-white"
          >
            Nos <span className="font-serif italic">Projets</span>
          </motion.h2>

          <ProjectsTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <ProjectsBody activeTab={activeTab} />

          <ProjectsStats activeTab={activeTab} />

        </div>
      </motion.div>
    </section>
  );
};