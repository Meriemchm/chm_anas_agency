"use client";

import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/ProjectsData";

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const ProjectsTabs = ({ activeTab, setActiveTab }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-4"
    >
      {Object.keys(projectsData).map((client, i) => (
        <motion.button
          key={client}
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: i * 0.05,
            type: "spring",
            stiffness: 200,
            damping: 18,
          }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setActiveTab(client)}
          className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer border
            ${
              activeTab === client
                ? "bg-primary text-black border-transparent"
                : "bg-transparent text-white border-gray-700 hover:border-white"
            }
          `}
        >
          {client}
        </motion.button>
      ))}
    </motion.div>
  );
};