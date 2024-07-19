import { RiReactjsLine,RiJavascriptFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb,SiExpress } from "react-icons/si";
import { FaNodeJs, FaHtml5,FaJava,FaCss3} from "react-icons/fa";
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

function Techstack(){
    return(
        <section className="techcontainer">
            <motion.h1 initial={{x:-300,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration: 1 }}>SKILLS</motion.h1>
            <motion.div initial={{opacity:0.2, scale:0.2}} transition={{duration:3}} whileInView={{opacity:1, scale:1}} className="techboxcontainer">
                <motion.div variants={imgvariant(2)} initial="initial" animate="animate" className="techbox">
                    <RiJavascriptFill style={{color:"#f7d723"}} className="ticon"/>
                </motion.div>
                <motion.div variants={imgvariant(5)} initial="initial" animate="animate" className="techbox">
                    <FaNodeJs style={{color:"#90ca51"}} className="ticon"/>
                </motion.div> 
                <motion.div variants={imgvariant(7)} initial="initial" animate="animate" className="techbox">
                    <FaJava style={{color:"#0d86c1"}} className="ticon"/>
                </motion.div>
                <motion.div variants={imgvariant(3.5)} initial="initial" animate="animate" className="techbox">
                    <SiMongodb style={{color:"#00a940"}}className="ticon"/>
                </motion.div>
                <motion.div variants={imgvariant(4)} initial="initial" animate="animate" className="techbox">
                    <FaHtml5 style={{color:"#dd4b25"}} className="ticon"/>
                </motion.div>
                
            </motion.div>
            <motion.div initial={{opacity:0.2, scale:0.2}} transition={{duration:3}} whileInView={{opacity:1, scale:1}} className="techboxcontainer">
                <motion.div variants={imgvariant(2.4)} initial="initial" animate="animate" className="techbox">
                    <RiReactjsLine style={{color:"#61dafb"}}className="ticon"/>
                </motion.div>
                <motion.div variants={imgvariant(3)} initial="initial" animate="animate" className="techbox">
                    <TbBrandNextjs className="ticon" />
                </motion.div>
                <motion.div variants={imgvariant(6)} initial="initial" animate="animate" className="techbox">
                    <SiExpress  className="ticon"/>
                </motion.div>
                <motion.div variants={imgvariant(2)} initial="initial" animate="animate" className="techbox">
                    <FaCss3 style={{color:"#254bdd"}} className="ticon"/>
                </motion.div>
                </motion.div>
            
        </section>
    );
}
export default Techstack;