import { useState } from "react";
import img1 from "./Anu.jpg";
import img3 from "./vibhor.jpg";
import img4 from "./lakshay.jpg";
import img5 from "./vedant.png";
import img6 from "./chandresh prajapati.jpg";
import img7 from "./umesh.jpg";
import img8 from "./vivek.jpg";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { motion } from "framer-motion";
import img2 from "./arpit.jpg";
import img10 from "./dhruv.jpg";
import img11 from "./rss.jpg";
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

  const images = [
    {img:img5,
      name:"Vedant Gupta",
      content:"He has a relentless dedication, patient nature, and his hard work are truly commendable.",
    },
    {img:img3,
      name:"Vibhor kumar",
      content:"He is an individual who effortlessly turns challenges into accomplishments.",
    },
    {img:img1,
      name:"Anubhav Gaur",
      content: "He is someone you can always rely on; he consistently meets expectations and never lets anyone down in his work. His exceptional work ethic and sheer commitment to discipline are truly commendable.",
    }, 
    {img:img4,
      name:"Lakshay Sharma",
      content: "He has an exceptional Knack for Problem Solving. He can find solutions to challenge that comes his way making him indispensable",
    },
    {img:img2,
      name:"Arpit Sachan",
      content: "Truly an incredible developer. The one with exceptional potential and willpower. A perfect blend of great logic and excellent designing skills.",
    },
    {img:img6,
      name:"Chandresh Prajapati",
      content:"He approaches each task with maximum effort, completing work at pivotal moments. His exceptional developing & designing skills, paired with extensive field knowledge, yield remarkable results.",
    },
    {img:img7,
      name:"Umesh Patel",
      content:"He is a technically skilled person with a calming and friendly demeanor that brings a positive influence to every interaction.",
    },
    {img:img8,
      name:"Vivek kumar",
      content:"He is an exceptional individual whose dedication and expertise shine in every endeavor.",
    },
    {img:img9,
      name:"Shubham Chauhan",
      content:"Suryansh is a full stack developer proficient in working with react js, node js, express , MongoDB etc. I personally admire your work bro.",
    },
    {img:img10,
      name:"Dhruv Agarwal",
      content:"He brings 100% to each project and get work done when it's needed the most. He has a deep understanding about his sphere, and delivers great results.",
    },{img:img11,
      name:"Rohit S Sinha",
      content:"He is a person who consistently delivers excellence with unwavering precision",
    }];

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
      <motion.h1 initial={{opacity:0.2, scale:0.2}} transition={{duration:2}} whileInView={{opacity:1, scale:1}}>Testimonials</motion.h1>
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
            <img src={images[index].img} alt={images[index].name} className="imgslimg" />
              <button className="imgbbtn" onClick={handlenext}>
               <MdNavigateNext className="tesbtn"/>
              </button>
            </div>
            
            <h2 className="name">{images[index].name}</h2>
            <h4 className="post">Web Developer</h4>
            <div className="contentbox">
            <p className="content">{images[index].content}</p>
            </div>
            
          </motion.div>
        );
      })}
      
      </motion.div>
    </section>
  );
};

export default ImageSlider;
