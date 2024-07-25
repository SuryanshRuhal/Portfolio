import { useEffect } from "react";
import { IoPeopleSharp } from "react-icons/io5";
import { FcLikePlaceholder } from "react-icons/fc";
import { RiReactjsLine,RiJavascriptFill,RiEmotionLaughLine } from "react-icons/ri";
import { SiMongodb,SiExpress,SiSocketdotio, SiWebrtc} from "react-icons/si";
import { FaNodeJs,FaLink,FaHtml5,FaBriefcase,FaGithub,FaCss3} from "react-icons/fa";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useRef } from "react";
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
const entry=( init)=>({
    initial: {x:init,
        y:0,
        opacity:0},
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{duration: 2}
    }
});
function Projects(){
    const ref = useRef(null);
    const isInView = useInView(ref);
    const Counter = ({ targetNumber}) => {
        const count = useMotionValue(0);
        const rounded = useTransform(count, Math.round);

        useEffect(() => {
          const animation = animate(count, targetNumber, { duration: 2, delay:2});
      
          return animation.stop;
        }, [targetNumber, count]);
      
        return <motion.div>{rounded}</motion.div>;
      };
    return(
        <section id="projects" className="projectsection">
            <motion.h1 initial={{opacity:0.2, scale:0.2}} transition={{duration:3}} whileInView={{opacity:1, scale:1}}>Projects</motion.h1>
            <div className="projectcontainer">
                <motion.div variants={entry(-100)} initial="initial" whileInView="animate" viewport={{amount:0.5}} className="projectcard project1">
                    <div className="projectno projectright">01</div>
                    <div className="projectdetails projectdetailright">
                        <div className="projectskill">
                            <motion.div variants={imgvariant(4)} initial="initial" animate="animate" >
                                <FaHtml5 style={{ color: "#dd4b25" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(2)} initial="initial" animate="animate" >
                                <RiJavascriptFill style={{ color: "#f7d723" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(2)} initial="initial" animate="animate" >
                                <FaCss3 style={{ color: "#254bdd" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(5)} initial="initial" animate="animate" >
                                <FaNodeJs style={{ color: "#90ca51" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(2.4)} initial="initial" animate="animate" >
                                <RiReactjsLine style={{ color: "#61dafb" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(2.4)} initial="initial" animate="animate" >
                                <SiWebrtc style={{ color: "rgb(221 75 37)" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(2.4)} initial="initial" animate="animate" >
                                <SiSocketdotio className="picon" />
                            </motion.div>
                        </div>
                        <h2 className="projectheading">Summon</h2>
                        <h4 className="projectdes"> A highly robust and efficient video chat application utilizing Node.js, and Socket.IO successfully
                        supporting over 200 concurrent users while maintaining exceptionally low latency.</h4>
                        <div className="btngroup">
                            <motion.button className="btnp" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Read Here</motion.button>
                             <motion.a href="https://github.com/SuryanshRuhal/Video-ChatApp" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaGithub className="btnicon"/></motion.a>
                            <motion.a href="https://summon-g89t.onrender.com/" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaLink className="btnicon" /></motion.a>   
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={entry(50)} initial="initial" whileInView="animate" viewport={{amount:0.5}}  className="projectcard project2">
                    <div className="projectno projectleft">02</div>
                    <div className="projectdetails projectdetailleft">
                        <div className="projectskill">
                            <motion.div variants={imgvariant(4)} initial="initial" animate="animate" >
                                <FaHtml5 style={{ color: "#dd4b25" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(2)} initial="initial" animate="animate" >
                                <RiJavascriptFill style={{ color: "#f7d723" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(2)} initial="initial" animate="animate" >
                                <FaCss3 style={{ color: "#254bdd" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(5)} initial="initial" animate="animate" >
                                <FaNodeJs style={{ color: "#90ca51" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(2.4)} initial="initial" animate="animate" >
                                <RiReactjsLine style={{ color: "#61dafb" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(2.4)} initial="initial" animate="animate" >
                                <SiExpress  className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(2.4)} initial="initial" animate="animate" >
                                <SiMongodb style={{color:"#00a940"}} className="picon" />
                            </motion.div>
                        </div>
                        <h2 className="projectheading">Avadhya Vichinta</h2>
                        <h4 className="projectdes"> An online MERN app to keep all your secrets safe. It is a full stack notes app to create, delete, and store notes using MongoDB, Express, React, and Node.js. implementing JWT for user authentication and data security </h4>
                        <div className="btngroup">
                            <motion.button className="btnp">Read Here</motion.button>
                            <motion.a href="https://github.com/SuryanshRuhal/noteskeeperapp" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaGithub className="btnicon"/></motion.a>
                            <motion.a href="https://avadhya-vichinta.onrender.com/" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaLink className="btnicon" /></motion.a>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={entry(-100)} initial="initial" whileInView="animate" viewport={{amount:0.5}} className="projectcard project3">
                    <div className="projectno projectright">03</div>
                    <div className="projectdetails projectdetailright">
                        <div className="projectskill">
                            <motion.div variants={imgvariant(4)} initial="initial" animate="animate" >
                                <FaHtml5 style={{ color: "#dd4b25" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(2)} initial="initial" animate="animate" >
                                <RiJavascriptFill style={{ color: "#f7d723" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(2)} initial="initial" animate="animate" >
                                <FaCss3 style={{ color: "#254bdd" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(5)} initial="initial" animate="animate" >
                                <FaNodeJs style={{ color: "#90ca51" }} className="picon" />
                            </motion.div>
                        </div>
                        <h2 className="projectheading">Wisdom Abode</h2>
                        <h4 className="projectdes">  An e-commerce bookstore website using HTML, CSS, and JavaScript, providing a user-friendly interface. Forged features including product listings, search functionality, and shopping cart.</h4>
                        <div className="btngroup">
                            <motion.button className="btnp">Read Here</motion.button>
                            <motion.a href="https://github.com/SuryanshRuhal/Bookstorewebsite" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaGithub className="btnicon"/></motion.a>
                            <motion.a href="https://suryanshruhal.github.io/Bookstorewebsite/" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaLink className="btnicon" /></motion.a>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={entry(50)} initial="initial" whileInView="animate" viewport={{amount:0.5}} className="projectcard project4">
                    <div className="projectno projectleft">04</div>
                    <div className="projectdetails projectdetailleft">
                        <div className="projectskill">
                            <motion.div variants={imgvariant(4)} initial="initial" animate="animate" >
                                <FaHtml5 style={{ color: "#dd4b25" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(2)} initial="initial" animate="animate" >
                                <RiJavascriptFill style={{ color: "#f7d723" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(2)} initial="initial" animate="animate" >
                                <FaCss3 style={{ color: "#254bdd" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(5)} initial="initial" animate="animate" >
                                <FaNodeJs style={{ color: "#90ca51" }} className="picon" />
                            </motion.div>
                        </div>
                        <h2 className="projectheading">Weather Forecast</h2>
                        <h4 className="projectdes"> A weather data abstraction project using HTML, CSS, and JavaScript, leveraging a weather API to fetch
                        real-time weather data for 200,000+ cities around the world.</h4>
                        <div className="btngroup">
                            <motion.button className="btnp">Read Here</motion.button>
                            <motion.a href="https://github.com/SuryanshRuhal/weatherwebsite" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaGithub className="btnicon"/></motion.a>
                            <motion.a href="https://suryanshruhal.github.io/weatherwebsite/" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaLink className="btnicon" /></motion.a>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={entry(-100)} initial="initial" whileInView="animate" viewport={{amount:0.5}} className="projectcard project5">
                    <div className="projectno projectright">05</div>
                    <div className="projectdetails projectdetailright">
                        <div className="projectskill">
                            <motion.div variants={imgvariant(4)} initial="initial" animate="animate" >
                                <FaHtml5 style={{ color: "#dd4b25" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(2)} initial="initial" animate="animate" >
                                <RiJavascriptFill style={{ color: "#f7d723" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(2)} initial="initial" animate="animate" >
                                <FaCss3 style={{ color: "#254bdd" }} className="picon" />
                            </motion.div>
                            <motion.div variants={imgvariant(5)} initial="initial" animate="animate" >
                                <FaNodeJs style={{ color: "#90ca51" }} className="picon" />
                            </motion.div>
                        </div>
                        <h2 className="projectheading">Euphonous Voice</h2>
                        <h4 className="projectdes"> A website using HTML, CSS, and JavaScript that allows users to tune in to their 100+ favorite songs, with features such as song search, & streaming </h4>
                        <div className="btngroup">
                            <motion.button className="btnp">Read Here</motion.button>
                            <motion.a href="https://github.com/SuryanshRuhal/MusicwebClone" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaGithub className="btnicon"/></motion.a>
                            <motion.a href="https://suryanshruhal.github.io/MusicwebClone/" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaLink className="btnicon" /></motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="pcounter"ref={ref}>
                <motion.div initial={{opacity:0.2, scale:0.2}} transition={{duration:3}} whileInView={{opacity:1, scale:1}} className="pcard">
                <motion.div variants={imgvariant(4)} initial="initial" animate="animate"> <IoPeopleSharp style={{color:"#ffcdd2"}}className="cicon"/></motion.div>
                    <h3><Counter targetNumber={0}  /></h3>
                    <h5>Client</h5>
                </motion.div>
                <motion.div initial={{opacity:0.2, scale:0.2}} transition={{duration:3}} whileInView={{opacity:1, scale:1}} className="pcard" >
                <motion.div variants={imgvariant(4)} initial="initial" animate="animate"> <FaBriefcase style={{color:"#ffcdd2"}}className="cicon"/></motion.div>
                    <h3><Counter targetNumber={20}  /></h3>
                    <h5>Projects</h5>
                </motion.div>
                <motion.div initial={{opacity:0.2, scale:0.2}} transition={{duration:3}} whileInView={{opacity:1, scale:1}} className="pcard" >
                <motion.div variants={imgvariant(4)} initial="initial" animate="animate"> <FcLikePlaceholder style={{color:"#ffcdd2"}}className="cicon"/></motion.div>
                    <h3><Counter targetNumber={80} /></h3>
                    <h5>Likes</h5>
                </motion.div>
                <motion.div initial={{opacity:0.2, scale:0.2}} transition={{duration:3}} whileInView={{opacity:1, scale:1}} className="pcard" >
                <motion.div variants={imgvariant(4)} initial="initial" animate="animate"> <RiEmotionLaughLine style={{color:"#ffcdd2"}}className="cicon"/></motion.div>
                <h3><Counter targetNumber={500} /></h3>
                    <h5>Happy</h5>
                </motion.div>
            </div>                
        </section>
    );
}
export default Projects;