"use client";

const CurveBackground = () => {
  return (
  <svg
        viewBox="0 0 2000 200"
        className="w-full h-50 opacity-40"
        preserveAspectRatio="none"
      >
        <path
          d="
            M 0 100
            C 200 0, 400 200, 600 100
            S 1000 100, 1200 100
            S 1600 200, 2000 100
          "
          fill="none"
          stroke="black"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="6 10"
          style={{ filter: "blur(0.3px)" }}
        />
      </svg>

  );
};

export default CurveBackground;