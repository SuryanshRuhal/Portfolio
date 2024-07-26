import { useState } from "react";
import img1 from "./Anu.jpg";
import img3 from "../components/me24.jpg";
import img4 from "./lakshay.jpg";
import img5 from "../components/Euphoniousvoicess.png";
import img6 from "../components/Wisdomabodess.png";
import img7 from "../components/avadhyavichintass.png";
import img8 from "../components/summonss.png";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { motion } from "framer-motion";
import img2 from "./me24.jpg";
import img10 from "./ME26.jpg";
import img9 from "./shubham.jpg";


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

  const images = [img5, img3, img1, img4, img6, img7, img8, img2, img9, img10];
  const names = [
    "Vedant Gupta",
    "Vibhor Kumar",
    "Anubhav Gaur",
    "Lakshay Sharma",
    "Arpit Sachan",
    "Chandresh Prajapati",
    "Umesh Patel",
    "Vivek Kumar",
    "Shubham Chauhan",
    "Dhruv Agarwal",
  ];
  const content=[
    "He brings 100% to each project and get work done when it's needed the most. He has a deep understanding about his sphere, and delivers great results.",
    "He brings 100% to each project and get work done when it's needed the most. He has a deep understanding about his sphere, and delivers great results.",
    "He is someone you can always rely on; he consistently meets expectations and never lets anyone down in his work. His exceptional work ethic and sheer discipline are truly commendable.",
    "He has an exceptional Knack for Problem Solving. He can find solutions to challenge that comes his way making him indispensable",
    "He brings 100% to each project and get work done when it's needed the most. He has a deep understanding about his sphere, and delivers great results.",
    "He approaches each task with maximum effort, completing work at pivotal moments. His exceptional developing and designing skills, paired with extensive field knowledge, yield remarkable results.",
    "He brings 100% to each project and get work done when it's needed the most. He has a deep understanding about his sphere, and delivers great results.",
    "He brings 100% to each project and get work done when it's needed the most. He has a deep understanding about his sphere, and delivers great results.",
    "Suryansh is a full stack developer proficient in working with react js, node js, express , MongoDB etc. I personally admire your work bro.",
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
