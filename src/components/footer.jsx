import {motion} from "framer-motion";
import { FaInstagram,FaGithub } from "react-icons/fa";
import { FaWhatsapp, FaLinkedin} from "react-icons/fa6";


function Footer(){
    return(
        <section className="footersection">
            <motion.div initial={{opacity:0.2, scale:0.2}} transition={{duration:1}} whileInView={{opacity:1, scale:1}} className="socialcontainer">
            <motion.a href="https://www.linkedin.com/in/suryansh-ruhal-07aa6b250/" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaLinkedin className="socicon" style={{color:" #009fff"}}/></motion.a>
            <motion.a href="https://www.instagram.com/suryanshruhal/" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaInstagram className="socicon" style={{color:"#ff2eae"}} /></motion.a>
            <motion.a href="https://api.whatsapp.com/send/?phone=919452142894&text&type=phone_number&app_absent=0" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaWhatsapp className="socicon" style={{color:"lime"}} /></motion.a>
            <motion.a href="https://github.com/SuryanshRuhal" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaGithub className="socicon" style={{color:"#ffa700"}} /></motion.a>
            </motion.div>
            <motion.div initial={{opacity:0.2, scale:0.2}} transition={{duration:1}} whileInView={{opacity:1, scale:1}} className="linksforres">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#education">Resume</a>
                <a href="#service">Services</a>
                <a href="#skill">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </motion.div>
            <div className="reach">
                <motion.p initial={{opacity:0.2, scale:0.2}} transition={{duration:1}} whileInView={{opacity:1, scale:1}}>Designed & Developed By Suryansh Ruhal</motion.p>
                <motion.p initial={{opacity:0.2, scale:0.2}} transition={{duration:1}} whileInView={{opacity:1, scale:1}}>Copyright @ 2024 Ruhal || All Rights Reserved</motion.p>
            </div>
        </section>
    );
}
export default Footer;