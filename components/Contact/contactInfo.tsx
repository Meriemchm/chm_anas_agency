import React from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export const ContactInfo = () => {
  return (
    <div className="w-full space-y-12 md:pl-12">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-['Abel',sans-serif] text-black">
          Information de Contact
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
          Partagez vos idées, vos
          objectifs ou vos besoins, et construisons ensemble une solution
          adaptée à votre vision.
        </p>
      </div>

      <div className="space-y-8 pt-6">
        {/* EMAIL */}
        <div className="flex items-start gap-6">
          <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
            <HiOutlineMail className="text-2xl text-gray-400" />
          </div>
          <div>
            <span className="text-xs text-gray-400 block uppercase tracking-wider mb-1">
              Email
            </span>
            <a
              href="mailto:clementinedudon@gmail.com"
              className="text-black font-medium hover:underline"
            >
              pygmalionagency@gmail.com
            </a>
          </div>
        </div>

        {/* NUMÉRO */}
        <div className="flex items-start gap-6">
          <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
            <HiOutlinePhone className="text-2xl text-gray-400" />
          </div>
          <div>
            <span className="text-xs text-gray-400 block uppercase tracking-wider mb-1">
              Numéro
            </span>
            <p className="text-black font-medium">0483563639</p>
          </div>
        </div>
      </div>
    </div>
  );
};
