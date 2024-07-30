import {motion} from "framer-motion";

const cardVariants= {
    offscreen: {
      opacity:0,
      y:100,
    },
    onscreen: {
      opacity:1,
      y: 0,
      transition: {
        duration: 5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
      }

    }
  };
function Skills(){
    return(
        <section id="skill" className="skillcontainer">
             <h3>Technical Skills</h3>
             <div className="techskillcontainer">
                <motion.div initial="offscreen" whileInView="onscreen" variants={cardVariants} className="skillbar">
                    <div className="info">
                        <p>HTML5</p>
                        <p>90%</p>
                    </div>
                    <div className="bar">
                    <motion.span  initial={{ width: 0 }}whileInView={{width:"90%"}} transition={{ duration: 2 }}></motion.span>
                    </div>
                </motion.div>
                <motion.div  initial="offscreen" whileInView="onscreen" variants={cardVariants} className="skillbar">
                    <div className="info">
                        <p>CSS3</p>
                        <p>85%</p>
                    </div>
                    <div className="bar">
                        <motion.span  initial={{ width: 0 }}whileInView={{width:"85%"}} transition={{ duration: 2 }}></motion.span>
                    </div>
                </motion.div>
                <motion.div  initial="offscreen" whileInView="onscreen" variants={cardVariants} className="skillbar">
                    <div className="info">
                        <p>React.js</p>
                        <p>80%</p>
                    </div>
                    <div className="bar">
                    <motion.span  initial={{ width: 0 }}whileInView={{width:"80%"}} transition={{ duration: 2 }}></motion.span>
                    </div>
                </motion.div>
                <motion.div  initial="offscreen" whileInView="onscreen" variants={cardVariants} className="skillbar">
                    <div className="info">
                        <p>Java</p>
                        <p>95%</p>
                    </div>
                    <div className="bar">
                    <motion.span  initial={{ width: 0 }}whileInView={{width:"95%"}} transition={{ duration: 2 }}></motion.span>
                    </div>
                </motion.div>
                <motion.div  initial="offscreen" whileInView="onscreen" variants={cardVariants} className="skillbar">
                    <div className="info">
                        <p>C</p>
                        <p>90%</p>
                    </div>
                    <div className="bar">
                    <motion.span  initial={{ width: 0 }}whileInView={{width:"90%"}} transition={{ duration: 2 }}></motion.span>
                    </div>
                </motion.div>
                <motion.div  initial="offscreen" whileInView="onscreen" variants={cardVariants} className="skillbar">
                    <div className="info">
                        <p>Node</p>
                        <p>55%</p>
                    </div>
                    <div className="bar">
                    <motion.span  initial={{ width: 0 }}whileInView={{width:"55%"}} transition={{ duration: 2 }}></motion.span>
                    </div>
                </motion.div>
                <motion.div  initial="offscreen" whileInView="onscreen" variants={cardVariants} className="skillbar">
                    <div className="info">
                        <p>Python</p>
                        <p>60%</p>
                    </div>
                    <div className="bar">
                    <motion.span  initial={{ width: 0 }}whileInView={{width:"60%"}} transition={{ duration: 2 }}></motion.span>
                    </div>
                </motion.div>
                <motion.div  initial="offscreen" whileInView="onscreen" variants={cardVariants} className="skillbar">
                    <div className="info">
                        <p>Javascript</p>
                        <p>80%</p>
                    </div>
                    <div className="bar">
                    <motion.span  initial={{ width: 0 }}whileInView={{width:"70%"}} transition={{ duration: 2 }}></motion.span>
                    </div>
                </motion.div>
                <motion.div  initial="offscreen" whileInView="onscreen" variants={cardVariants} className="skillbar">
                    <div className="info">
                        <p>Github</p>
                        <p>65%</p>
                    </div>
                    <div className="bar">
                    <motion.span  initial={{ width: 0 }}whileInView={{width:"65%"}} transition={{ duration: 2 }}></motion.span>
                    </div>
                </motion.div>
                <motion.div  initial="offscreen" whileInView="onscreen" variants={cardVariants} className="skillbar">
                    <div className="info">
                        <p>Express.js</p>
                        <p>70%</p>
                    </div>
                    <div className="bar">
                    <motion.span  initial={{ width: 0 }}whileInView={{width:"70%"}} transition={{ duration: 2 }}></motion.span>
                    </div>
                </motion.div>
                <motion.div  initial="offscreen" whileInView="onscreen" variants={cardVariants} className="skillbar">
                    <div className="info">
                        <p>MongoDb</p>
                        <p>88%</p>
                    </div>
                    <div className="bar">
                    <motion.span  initial={{ width: 0 }}whileInView={{width:"88%"}} transition={{ duration: 2 }}></motion.span>
                    </div>
                </motion.div>
                <motion.div  initial="offscreen" whileInView="onscreen" variants={cardVariants} className="skillbar">
                    <div className="info">
                        <p>Next.js</p>
                        <p>70%</p>
                    </div>
                    <div className="bar">
                    <motion.span  initial={{ width: 0 }}whileInView={{width:"70%"}} transition={{ duration: 2 }}></motion.span>
                    </div>
                </motion.div>
                <motion.div  initial="offscreen" whileInView="onscreen" variants={cardVariants} className="skillbar">
                    <div className="info">
                        <p>Bootstrap</p>
                        <p>80%</p>
                    </div>
                    <div className="bar">
                    <motion.span  initial={{ width: 0 }}whileInView={{width:"80%"}} transition={{ duration: 2 }}></motion.span>
                    </div>
                </motion.div>
                <motion.div  initial="offscreen" whileInView="onscreen" variants={cardVariants} className="skillbar">
                    <div className="info">
                        <p>Photoshop</p>
                        <p>70%</p>
                    </div>
                    <div className="bar">
                    <motion.span  initial={{ width: 0 }}whileInView={{width:"70%"}} transition={{ duration: 2 }}></motion.span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
 export default Skills;