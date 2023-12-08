/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { motion } from "framer-motion";
import { ImDownload } from "react-icons/im";
const Card = ({ size = "0.9 Mb", color = "bg-red-400" ,reference}) => {
  return (
    <>
      <motion.div
        drag
        whileDrag={{scale:1.2}}
        dragConstraints={reference}
        dragElastic={1.3}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
        className="relative bg-white w-60 h-[20rem] rounded-3xl cursor-pointer p-3 flex flex-col justify-between gap-1 overflow-hidden "
      >
        <BsFileEarmarkPdf size={30} />
        <p className="pt-3 font-semibold selection:text-red-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          dolorem impedit quia, rerum delectus itaque id, debitis nihil saepe
          suscipit praesentium nesciunt similique.
        </p>
        <div className="flex items-center justify-between px-4  pt-3 selection:text-red-600 z-[2]">
          <p>{size}</p>
          <ImDownload />
        </div>
        <div
          className={`absolute w-full h-[3rem] ${color}  bottom-0 left-0 z-[1]`}
        ></div>
      </motion.div>
    </>
  );
};

export default Card;
