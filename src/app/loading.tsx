"use client"
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <svg className="loading" width="64px" height="48px">
        <polyline
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          id="back"
          className="stroke-[#ff4d5033]"
        ></polyline>
        <polyline
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          id="front"
          className="stroke-[#ff4d4f] animate-dash"
        ></polyline>
      </svg>

      {/* Inline styles for animation */}
      <style jsx>{`
        .loading svg polyline {
          fill: none;
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .loading svg polyline#front {
          stroke-dasharray: 48, 144;
          stroke-dashoffset: 192;
          animation: dash_682 1.4s linear infinite;
        }

        @keyframes dash_682 {
          72.5% {
            opacity: 0;
          }

          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
