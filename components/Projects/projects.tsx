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

      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-black rounded-2xl py-20 px-6 min-h-screen mx-auto max-w-8xl"
      >

        <div className="space-y-12">

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-4xl md:text-5xl font-extralight text-white"
          >
            Nos <span className="font-serif italic">Projets</span>
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
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: i * 0.05,
                  type: "spring",
                  stiffness: 200,
                  damping: 18,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
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
                  avatar={projectsData[activeTab].avatar}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex  justify-center items-center border-t flex-wrap border-gray-800 text-gray-500 md:gap-4 pt-8 mt-20 text-xs "
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center md:gap-2"
            >
              <Eye size={16} />
              {projectsData[activeTab].stats.views} |
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center md:gap-2"
            >
              <Users size={16} />
              {projectsData[activeTab].stats.followers} |
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center md:gap-2"
            >
              <TrendingUp size={16} />
              {projectsData[activeTab].stats.engagement}
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};