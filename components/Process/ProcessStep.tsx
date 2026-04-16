"use client";

import React from "react";
import Image from "next/image";

interface Props {
  step: {
    number: string;
    title: string;
    description: string;
  };
}

const ProcessStep = ({ step }: Props) => {
  return (
    <div className="w-screen h-full flex shrink-0 items-center justify-center pt-46 pb-20">
      <div className="max-w-5xl w-full flex flex-col gap-8">

        {/* TOP */}
        <div className="space-y-1">
          <span className="text-8xl md:text-[120px] font-medium leading-none block text-black opacity-90">
            {step.number}
          </span>

          <h3 className="text-2xl md:text-4xl font-light tracking-tight">
            {step.title}
          </h3>
        </div>

        {/* CARD */}
        <div className="bg-primary rounded-[40px] p-8 md:p-12 relative w-full  ">

          <div className="absolute top-0 -left-10 pointer-events-none">
            <Image
              src="/Vector/Line-Arrow.svg"
              alt="decor"
              width={150}
              height={150}
            />
          </div>

          <p className="text-sm md:text-base text-black font-normal leading-snug">
            {step.description}
          </p>

        </div>

      </div>
    </div>
  );
};

export default ProcessStep;