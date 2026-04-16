"use client";

import React from "react";
import { footerData } from "@/data/FooterData";
import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLinks";
import { FooterContact } from "./FooterContact";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-white py-16 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
        
        <FooterBrand
          brand={footerData.brand}
          social={footerData.social}
        />

        <FooterLinks links={footerData.links} />

        <FooterContact contact={footerData.contact} />
      </div>

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-gray-600">
        <p>© {currentYear} Pygmalion Agency. All rights reserved.</p>

        {/* <p className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </p> */}
      </div>
    </footer>
  );
};