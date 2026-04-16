"use client";
import { Eye, Users, TrendingUp } from "lucide-react";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectGrid } from "./projectGrid";
import { projectsData } from "@/data/ProjectsData";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("Mobile M");

  return (
    <section id="projects" className="bg-white py-10 px-4 md:px-6">
      {/* CARD WRAPPER */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-black rounded-2xl py-20 px-6 min-h-screen mx-auto max-w-8xl"
      >
        <div className="space-y-12">
          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-5xl md:text-6xl font-['Instrument_Serif',serif] italic text-white"
          >
            Nos Projets
          </motion.h2>

          {/* TABS */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {Object.keys(projectsData).map((client, i) => (
              <motion.button
                key={client}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveTab(client)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 border
                  ${
                    activeTab === client
                      ? "bg-[#FFF083] text-black border-transparent"
                      : "bg-transparent text-white border-gray-700 hover:border-white"
                  }
                `}
              >
                {client}
              </motion.button>
            ))}
          </motion.div>

          {/* CONTENT */}
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
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center border-t border-gray-800 text-gray-500 gap-2 pt-8 mt-20 "
          >
            <div className="flex items-center gap-2">
              <Eye size={16} />
              {projectsData[activeTab].stats.views} |
            </div>

            <div className="flex items-center gap-2">
              <Users size={16} />
              {projectsData[activeTab].stats.followers} |
            </div>

            <div className="flex items-center gap-2">
              <TrendingUp size={16} />
              {projectsData[activeTab].stats.engagement}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
