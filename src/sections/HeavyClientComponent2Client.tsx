"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

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
