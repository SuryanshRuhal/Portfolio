import {motion} from "framer-motion";
const imgvariant=(duration)=>({
    initial: {x:-20},
    animate:{
        x:[40,-40],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType: "reverse"
        }
    }
});
const entry=(delay)=>({
    initial: {x:-100,opacity:0},
    animate:{
        x:0,
        opacity:1,
        transition:{duration: 1, delay}
    }
});
function Education(){
    return(
      <motion.section initial={{x:-50,opacity:0}}  whileInView={{x:0,opacity:1}} transition={{duration: 1 }} id="education" className="educationcontainer">
                    <motion.h1 initial={{x:30,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration: 1 }} className="eheading">Education</motion.h1>
        <motion.div  className="timeline-items">
            <motion.div variants={entry(0.5)} initial="initial" whileInView="animate" viewport={{ amount: 0.2 }} className="timelineitem" >
                <div className="timeline-dot"></div>
                    <motion.div drag className="timelinedate">2021-Present</motion.div>
                    <motion.div className="timelinecontent" variants={imgvariant(1)} initial="initial" animate="animate">
                        <h3>B.Tech in Computer Science & Engineering</h3>
                        <p>
                            Bundelkhand Institute of Engingeering & Technology
                        </p>
                        <p><span>CGPA: </span>8.2</p>
                    </motion.div>
            </motion.div>
            <motion.div variants={entry(1)} initial={{x:20,opacity:0}} whileInView="animate" viewport={{ amount: 0.8 }} className="timelineitem">
                    <div className="timeline-dot"></div>
                    <motion.div drag className="timelinedate">2019-2020</motion.div>
                    <motion.div className="timelinecontent" variants={imgvariant(1)} initial="initial" animate="animate">
                        <h3>Intermediate Degree</h3>
                        <p>
                           Kendriya Vidyalaya Bulandshahr
                        </p>
                        <p><span>Percentage: </span>94.6%</p>
                    </motion.div>
            </motion.div>
            <motion.div variants={entry(0.5)} initial="initial" whileInView="animate" viewport={{ amount: 0.9}} className="timelineitem">
                <div className="timeline-dot"></div>
                    <motion.div drag className="timelinedate">2017-2018</motion.div>
                    <motion.div className="timelinecontent" variants={imgvariant(1)} initial="initial" animate="animate">
                        <h3>High School</h3>
                        <p>
                        Kendriya Vidyalaya Bulandshahr
                        </p>
                        <p><span>Percentage: </span>94.6%</p>
                    </motion.div>
            </motion.div>
        </motion.div>
      </motion.section>
    );
}
export default Education;