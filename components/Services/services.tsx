"use client";

import React, { useState } from "react";
import { motion, cubicBezier } from "framer-motion";

import { servicesData } from "@/data/ServicesData";
import { ServiceCard } from "./serviceCard";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
    },
  },
};

export const Services = () => {
  const [expandedId, setExpandedId] = useState(2);

  return (
    <section
      id="services"
      className="py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12"
    >
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full md:w-1/4"
      >
        <h2 className="text-5xl md:text-6xl font-extralight leading-tight">
          Nos <br />
          <span className="font-serif">services</span>
        </h2>
      </motion.div>

      {/* GRID */}
      <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ServiceCard
              {...service}
              isPrimary={index === 0}
              isHighlighted={service.id === expandedId}
              onHover={() => setExpandedId(service.id)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};