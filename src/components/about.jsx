import my from "../components/ME26.jpg";
import {motion} from "framer-motion";
const imgvariant=(duration)=>({
    initial: {y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType: "reverse"
        }
    }
});

const entry=(delay)=>({
    initial: {x:40,opacity:0},
    animate:{
        x:0,
        opacity:1,
        transition:{duration: 1 ,delay}
    }
});

function About(){
    return(
        <section id="about" className="aboutsection">
            <motion.h1 initial={{opacity:0.2, scale:0.2}} transition={{duration:1}} whileInView={{opacity:1, scale:1}} >About Me </motion.h1>
            <div className="about"> 
              <div className="aboutleft">
                <motion.div initial={{x:-100,opacity:0}}  whileInView={{x:0,opacity:1}} transition={{duration: 1 ,delay:1.2}} className="imgleft"></motion.div>
                <motion.div initial={{x:100,opacity:0}}  whileInView={{x:0,opacity:1}} transition={{duration: 1 ,delay:1.4}}>
                <motion.div variants={imgvariant(1.4)} initial="initial" whileInView="animate" className="imgright">
                    <img className="img" src={my} alt="" />
                </motion.div>
                </motion.div>
              </div>
              <motion.div initial={{opacity:0.2, scale:0.2}} transition={{duration:1}} whileInView={{opacity:1, scale:1}}  className="aboutright">
                <p>A passionate assiduous and sagacious developer committed to leveraging my knowledge while striving continuously for improving my skills. I am seeking opportunities  to expand my learnings & expertise. I possess profound knowledge of Java, Javascript, Node, React.js, Material-UI, Framer-Motion,  HTML, CSS, Express, MongoDB and SQL. With a knack for creativity, problem-solving and an eye for detail & aesthetics, I aspire to create resonant websites. Let's collaborate to give your dream ideas the land of reality with my expertise.</p>
                <div className="details">
                    <motion.div variants={entry(1.4)} initial="initial" whileInView="animate" className="detailhead">
                        <h2>Name: <span>Suryansh Ruhal</span></h2>
                    </motion.div>
                    <motion.div variants={entry(1.6)} initial="initial" whileInView="animate" className="detailhead">
                        <h2>Date Of Birth: <span>14 March 2003</span></h2>
                    </motion.div>
                    <motion.div variants={entry(1.8)} initial="initial" whileInView="animate" className="detailhead">
                        <h2>Address: <span>Shikarpur Compound, Bulandshahr</span></h2>
                    </motion.div>
                    <motion.div variants={entry(2.0)} initial="initial" whileInView="animate" className="detailhead">
                        <h2>Email: <span>suryanshruhal108@gmail.com</span></h2>
                    </motion.div>
                    <motion.div variants={entry(2.2)} initial="initial" whileInView="animate" className="detailhead">
                        <h2>Contact: <span>9452142894</span></h2>
                    </motion.div>
                </div>
              </motion.div>
            </div>
        </section>
    );
}
export default About;