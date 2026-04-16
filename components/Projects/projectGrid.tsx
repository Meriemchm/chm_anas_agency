import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export const ProjectGrid = ({
  projects,
  description,
  clientName,
  social,
  avatar,
  stats,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full space-y-10"
    >
      {/* GRID VIDEOS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[500px]">
        <div className="bg-[#d1d1d1] rounded-3xl overflow-hidden h-[400px] md:h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            src={projects[0]?.url}
          />
        </div>

        <div className="grid grid-rows-2 gap-4 h-[400px] md:h-full">
          <div className="bg-[#d1d1d1] rounded-3xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src={projects[1]?.url}
            />
          </div>
          <div className="bg-[#d1d1d1] rounded-3xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src={projects[2]?.url}
            />
          </div>
        </div>

        <div className="bg-[#d1d1d1] rounded-3xl overflow-hidden h-[400px] md:h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            src={projects[3]?.url}
          />
        </div>
      </div>

      {/* BOTTOM INFO */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">

        {/* LEFT */}
        <div className="space-y-5 max-w-2xl">

          {/* PROFILE */}
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-full bg-gray-700 overflow-hidden">
              {avatar && (
                <img
                  src={avatar}
                  alt={clientName}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <span className="text-white uppercase text-xs tracking-widest">
              {clientName}
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-white/80 text-sm font-light leading-relaxed">
            {description}
          </p>

          {/* STATS */}
          {stats && (
            <div className="flex flex-wrap gap-4 text-xs md:text-sm text-gray-400">
              <span>{stats.views}</span>
              <span>{stats.followers}</span>
              <span>{stats.engagement}</span>
            </div>
          )}
        </div>

        {/* RIGHT SOCIAL */}
        <div className="flex gap-4">
          {social?.instagram && (
            <a
              href={social.instagram}
              target="_blank"
              className="size-10 border border-gray-700 rounded-lg flex items-center justify-center text-white hover:scale-105 duration-200"
            >
              <FaInstagram size={18} />
            </a>
          )}

          {social?.tiktok && (
            <a
              href={social.tiktok}
              target="_blank"
              className="size-10 border border-gray-700 rounded-lg flex items-center justify-center text-white hover:scale-105 duration-200"
            >
              <FaTiktok size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};