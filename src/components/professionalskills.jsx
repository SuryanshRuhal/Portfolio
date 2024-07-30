import { FaRegCircle } from "react-icons/fa6";
import {motion} from "framer-motion";
function Softskill(){
    return(
        <section className="skillcontainer">
             <motion.h3 initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}>Professional Skills</motion.h3>
             <div className="techskillcontainer">
                <motion.div initial={{opacity:0.2, scale:0.2}} transition={{duration:1}} whileInView={{opacity:1, scale:1}} className="skillbox">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#e91e63" />
                                <stop offset="100%" stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <motion.circle className="circle" initial={{ strokeDashoffset: 435 }} whileInView={{ strokeDashoffset: (435 - (4.35 * 90)) }} transition={{ duration: 2 }} cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                    <div className="stext">
                        <big>90%</big>
                        <small>Communication Skills</small>   
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0.2, scale:0.2}} transition={{duration:1}} whileInView={{opacity:1, scale:1}} className="skillbox">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#e91e63" />
                                <stop offset="100%" stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <motion.circle className="circle" initial={{ strokeDashoffset: 435 }} whileInView={{ strokeDashoffset: (435 - (4.35 * 85)) }} transition={{ duration: 2 }} cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                    <div className="stext">
                        <big>85%</big>
                        <small>Statistical Analysis</small>   
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0.2, scale:0.2}} transition={{duration:1}} whileInView={{opacity:1, scale:1}} className="skillbox">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#e91e63" />
                                <stop offset="100%" stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <motion.circle className="circle" initial={{ strokeDashoffset: 435 }} whileInView={{ strokeDashoffset: (435 - (4.35 * 95)) }} transition={{ duration: 2 }} cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                    <div className="stext">
                        <big>95%</big>
                        <small> Leadership</small>   
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0.2, scale:0.2}} transition={{duration:1}} whileInView={{opacity:1, scale:1}} className="skillbox">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#e91e63" />
                                <stop offset="100%" stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <motion.circle className="circle" initial={{ strokeDashoffset: 435 }} whileInView={{ strokeDashoffset: (435 - (4.35 * 90)) }} transition={{ duration: 2 }} cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                    <div className="stext">
                        <big>90%</big>
                        <small>Assiduous</small>   
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0.2, scale:0.2}} transition={{duration:1}} whileInView={{opacity:1, scale:1}} className="skillbox">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#e91e63" />
                                <stop offset="100%" stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <motion.circle className="circle" initial={{ strokeDashoffset: 435 }} whileInView={{ strokeDashoffset: (435 - (4.35 * 80)) }} transition={{ duration: 2 }} cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                    <div className="stext">
                        <big>80%</big>
                        <small>Strategic thinking</small>   
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0.2, scale:0.2}} transition={{duration:1}} whileInView={{opacity:1, scale:1}} className="skillbox">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#e91e63" />
                                <stop offset="100%" stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <motion.circle className="circle" initial={{ strokeDashoffset: 435 }} whileInView={{ strokeDashoffset: (435 - (4.35 * 93)) }} transition={{ duration: 2 }} cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                    <div className="stext">
                        <big>93%</big>
                        <small>Adaptability</small>   
                    </div>
                </motion.div>
               
            </div>
        </section>
    );
}
export default Softskill;