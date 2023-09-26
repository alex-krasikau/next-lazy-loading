"use client";

import "@dotlottie/react-player/dist/index.css";
import dynamic from "next/dynamic";

const DotLottiePlayer = dynamic(() =>
  import("@dotlottie/react-player").then((mod) => mod.DotLottiePlayer)
);

interface Props {}

export function HeavyClientComponent2Client({}: Props) {
  return (
    <DotLottiePlayer
      className="!w-20 !h-20"
      src="/animation.lottie"
      autoplay
      loop
    />
  );
}
