"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectGrid } from "./projectGrid";
import { projectsData } from "@/data/ProjectsData";

interface Props {
  activeTab: string;
}

export const ProjectsBody = ({ activeTab }: Props) => {
  return (
    <div className="pt-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          transition={{ duration: 0.5 }}
        >
          <ProjectGrid
            clientName={activeTab}
            projects={projectsData[activeTab].videos}
            description={projectsData[activeTab].description}
            social={projectsData[activeTab].social}
            avatar={projectsData[activeTab].avatar}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};