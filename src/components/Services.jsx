import { SiAdobephotoshop } from "react-icons/si";
import { FcMultipleCameras } from "react-icons/fc";
import { FaLaptopCode } from "react-icons/fa";
import { PiDesktopTower } from "react-icons/pi";
import { GrTestDesktop } from "react-icons/gr";
import { FaPenNib } from "react-icons/fa";
import {motion} from "framer-motion";
const cardVariants= {
    offscreen: {
      opacity:0,
      y:50,
      rotate: 0,
    },
    onscreen: {
      opacity:1,
      y: 0,
      rotate: [-10,0],
      transition: {
        type: "spring",
        bounce: 0.8,
        duration: 2
      }

    }
  };
function Services(){
    return(
        <section id="service" className="servicecontainer">
                        <motion.h1 initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration: 1 }}>Services</motion.h1>
            <motion.div initial="offscreen" whileInView="onscreen"  className="card-container">
                <motion.div  variants={cardVariants} className="card">
                    <div className="cardbody">
                        <PiDesktopTower className="bicon"/>
                        <h5 className="title">Web Developer</h5>
                        <div className="line"></div>
                        <p>Shaping digital worlds through pioneering web development.</p>
                    </div>
                </motion.div>
                <motion.div  variants={cardVariants} className="card">
                    <div className="cardbody">
                        <GrTestDesktop className="bicon"/>
                        <h5 className="title">UI/UX Designer</h5>
                        <div className="line"></div>
                        <p>Crafting immersive user experiences with intuitive and visually striking UI/UX designs.</p>
                    </div>
                </motion.div>
                <motion.div  variants={cardVariants} className="card">
                    <div className="cardbody">
                        <FaPenNib className="bicon"/>
                        <h5 className="title">Content-Writer</h5>
                        <div className="line"></div>
                        <p>Weaving words into vivid tapestries of imagination and insight.</p>
                    </div>
                </motion.div>
                <motion.div  variants={cardVariants} className="card">
                    <div className="cardbody">
                        <FaLaptopCode className="bicon"/>
                        <h5 className="title">Coding</h5>
                        <div className="line"></div>
                        <p>Weaving intricate concepts into executable code for seamless digital solutions.</p>
                    </div>
                </motion.div>
                <motion.div  variants={cardVariants} viewport={{ amount: 0.9}}  className="card">
                    <div className="cardbody">
                         <SiAdobephotoshop className="bicon"/>
                        <h5 className="title">Photoshop</h5>
                        <div className="line"></div>
                        <p>Bringing visions to life with precise and creative Photoshop skills</p>
                    </div>
                </motion.div>
                <motion.div  variants={cardVariants} className="card">
                    <div className="cardbody">
                    <FcMultipleCameras className="bicon"/>
                        <h5 className="title">Photography</h5>
                        <div className="line"></div>
                        <p>Crafting evocative narratives and compelling descriptions to capture moments and products with a creative and professional touch.</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
export default Services;