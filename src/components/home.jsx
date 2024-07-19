import img from "./me24.jpg";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import { FaInstagram,FaGithub } from "react-icons/fa";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { FaWhatsapp, FaLinkedin} from "react-icons/fa6";
import resume from "./resume.pdf"

const slidevariant={
    initial:{
        x:0,
    }, 
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:10,
        }
    }
};

const entry=(delay)=>({
    initial: {x:-100,opacity:0},
    animate:{
        x:0,
        opacity:1,
        transition:{duration: 1 ,delay}
    }
});

function Home(){
    return(
        <section id="home" className="homecontainer">
            <motion.div initial={{opacity:0.2, scale:0.2}} transition={{duration:3}} whileInView={{opacity:1, scale:1}} className="textcontainer">
                <h3 > Hii there, this is</h3>
                <motion.h2 variants={entry(2.6)} initial="initial" whileInView="animate" className="name" >SURYANSH RUHAL</motion.h2>
                <h2 >I am a</h2><h1 variants={entry(3.4)} initial="initial" whileInView="animate"><Typewriter 
           options={{ 
           strings:['MERN DEVELOPER',"DESIGNER",'CODER',"CONTENT WRITER"],
           autoStart:true,
           delay:75,
           loop:true
           }}
           /></h1>
                <motion.h2 variants={entry(4)} initial="initial" whileInView="animate">here is my Portfolio: a little Sneak Peak to my journey of becoming a developer </motion.h2>
                <motion.div variants={entry(4.6)} initial="initial" whileInView="animate" drag >
                    <button className="button" ><a href={resume} download="">Resume <MdOutlineDownloadForOffline className="md"/></a></button>
                </motion.div>
                
                <motion.div className="slidingtextcontainer" variants={slidevariant} initial="initial" animate="animate">
                    Developer & Coder
                </motion.div>
                <motion.div variants={entry(5.2)} initial="initial" whileInView="animate" className="socialcontainer h">
                <motion.a href="https://www.linkedin.com/in/suryansh-ruhal-07aa6b250/" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><FaLinkedin className="socicon" style={{color:" #009fff"}}/></motion.a>
                <motion.a href="https://www.instagram.com/suryanshruhal/" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><FaInstagram className="socicon" style={{color:"#ff2eae"}} /></motion.a>
                <motion.a href="https://api.whatsapp.com/send/?phone=919452142894&text&type=phone_number&app_absent=0" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><FaWhatsapp className="socicon" style={{color:"lime"}} /></motion.a>
                <motion.a href="https://github.com/SuryanshRuhal" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><FaGithub className="socicon" style={{color:"#ffa700"}} /></motion.a>
                </motion.div>
            </motion.div>
            <motion.div  initial={{x:100,opacity:0}}  whileInView={{x:0,opacity:1}} transition={{duration: 1 ,delay:3.4}}className="myimgcontainer" >
                <img className="myimg" src={img} alt="" />
            </motion.div>
        </section>
    );
}

export default Home;