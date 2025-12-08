"use client"
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  icon: StaticImageData;
  title: string;
  info: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const InfoCard: React.FC<Props> = ({ icon, title, info }) => {
  return (
    <motion.div
      className="bg-[#202020] rounded-2xl grow flex flex-col items-center justify-center gap-2 lg:gap-3.5 py-3"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 120, damping: 16, duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      layout
    >
      <div className="w-12 h-[51px] relative">
        <Image src={icon} alt="icon" fill loading="lazy" sizes="48px" />
      </div>
      <div className="text-white">{title}</div>
      <span className="text-white">{info}</span>
    </motion.div>
  );
};

export default InfoCard;
// ...existing code...