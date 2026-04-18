"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Users, TrendingUp } from "lucide-react";
import { projectsData } from "@/data/ProjectsData";

interface Props {
  activeTab: string;
}

export const ProjectsStats = ({ activeTab }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center border-t flex-wrap gap-1 border-gray-800 text-gray-500 md:gap-4 pt-8 mt-20 text-xs"
    >
      <motion.div whileHover={{ scale: 1.05 }} className="flex text-center md:items-center  gap-1 md:gap-2">
        <Eye size={16} />
        {projectsData[activeTab].stats.views} | 
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} className="flex text-center md:items-center gap-1 md:gap-2">
        <Users size={16} />
        {projectsData[activeTab].stats.followers} |
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} className="flex md:items-center gap-1 md:gap-2">
        <TrendingUp size={16} />
        {projectsData[activeTab].stats.engagement}
      </motion.div>
    </motion.div>
  );
};