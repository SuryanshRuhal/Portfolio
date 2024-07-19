import { useState } from "react";
import my from "../components/ME26.jpg";
import img3 from "../components/me24.jpg";
import img4 from "../components/weatherappss.png";
import img5 from "../components/Euphoniousvoicess.png";
import img6 from "../components/Wisdomabodess.png";
import img7 from "../components/avadhyavichintass.png";
import img8 from "../components/summonss.png";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { motion } from "framer-motion";
import imgn from "./me24.jpg";



const ImageSlider = () => {

  const cardVariants= {
    offscreen: {
      y:300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 5
      }
    }
  };

  const [startIndex, setStartIndex] = useState(0);

  const images = [img4, img3, my, img5, img6, img7, img8, imgn];
  const names = [
    "Aryan Ruhal",
    "Anubhav Gaur",
    "Suryansh Ruhal",
    "Lakshay Sharma",
    "Mayank Sharma",
    "Vibhor Kumar",
    "Sakshi Ruhal",
    "Prince Chaudhary",
  ];
  const content=[
    "He brings 100% to each project and get work done when it's needed the most. He has a deep understanding about his sphere, and delivers great results.",
    "He brings 100% to each project and get work done when it's needed the most. He has a deep understanding about his sphere, and delivers great results.",
    "He brings 100% to each project and get work done when it's needed the most. He has a deep understanding about his sphere, and delivers great results.",
    "He brings 100% to each project and get work done when it's needed the most. He has a deep understanding about his sphere, and delivers great results.",
    "He brings 100% to each project and get work done when it's needed the most. He has a deep understanding about his sphere, and delivers great results.",
    "He brings 100% to each project and get work done when it's needed the most. He has a deep understanding about his sphere, and delivers great results.",
    "He brings 100% to each project and get work done when it's needed the most. He has a deep understanding about his sphere, and delivers great results.",
    "He brings 100% to each project and get work done when it's needed the most. He has a deep understanding about his sphere, and delivers great results.",
  ]

  const positions = ["left2", "left1", "center", "right1", "right2"];

  const imagevarient = {
    left2: { x: "-70%", scale: 0.3, zIndex: 1 },
    left1: { x: "-45%", scale: 0.5, zIndex: 2 },
    center: { x: "0%", scale: 0.7, zIndex: 5  },
    right1: { x: "45%", scale: 0.5, zIndex: 2 },
    right2: { x: "70%", scale: 0.3, zIndex: 1 },
  };

  const handlenext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleprev=()=>{
    setStartIndex((prevIndex)=>(prevIndex+images.length-1)%images.length);
  }

  return (
    <section className="testimonialsection">
      <motion.h1 initial={{opacity:0.2, scale:0.2}} transition={{duration:3}} whileInView={{opacity:1, scale:1}}>Testimonials</motion.h1>
      <motion.div 
      variants={cardVariants} initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      className="imgslider">
      {positions.map((position, i) => {
        const index = (startIndex + i) % images.length;
        return (
          <motion.div
            className={`imgslidercard ${position}`}
            key={index}
            initial="center"
            animate={position}
            variants={imagevarient}
            transition={{ duration: 0.5 }}
            style={{ position: "absolute" }}
          >
            <div className="imgbox">
              <button className="imgbbtn" onClick={handleprev}>
                <GrFormPrevious className="tesbtn"/>
              </button>
            <img src={images[index]} alt={names[index]} className="imgslimg" />
              <button className="imgbbtn" onClick={handlenext}>
               <MdNavigateNext className="tesbtn"/>
              </button>
            </div>
            
            <h2 className="name">{names[index]}</h2>
            <h4 className="post">Web Developer</h4>
            <div className="contentbox">
            <p className="content">{content[index]}</p>
            </div>
            
          </motion.div>
        );
      })}
      
      </motion.div>
    </section>
  );
};

export default ImageSlider;
