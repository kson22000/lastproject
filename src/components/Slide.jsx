import React from "react";
import video from "./dior2026.MP4"

export default function Slide() {
  return (
    <div className="relative h-screen">
      <video
        className="absolute inset-0 h-115 w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
