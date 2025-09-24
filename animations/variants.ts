// animations/variants.ts
import { Variants } from "framer-motion";

export const cardVariants: Variants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 60 : -60,
      y: 40,
      scale: 0.95,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "tween",
        ease: "easeOut",
      },
    },
  };