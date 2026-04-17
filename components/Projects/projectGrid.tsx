"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectVideos } from "./ProjectVideos";
import { ProjectInfo } from "./ProjectInfo";

/* TYPES */

interface Video {
  id: number;
  url: string;
}

interface Social {
  instagram?: string;
  tiktok?: string;
}

interface ProjectGridProps {
  projects: Video[];
  description: React.ReactNode;
  clientName: string;
  social?: Social;
  avatar?: string;
}

/* COMPONENT */

export const ProjectGrid = ({
  projects,
  description,
  clientName,
  social,
  avatar,
}: ProjectGridProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full space-y-10"
    >
      <ProjectVideos projects={projects} />

      <ProjectInfo
        description={description}
        clientName={clientName}
        social={social}
        avatar={avatar}
      />
    </motion.div>
  );
};