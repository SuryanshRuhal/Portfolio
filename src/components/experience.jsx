import {motion} from "framer-motion";
const entry=(delay, init)=>({
    initial: {x:init,opacity:0},
    animate:{
        x:0,
        opacity:1,
        transition:{duration: 0.5, delay}
    }
});
function Experience(){
    return(
        <section id="experience" className="experiencecontainer">
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.1,
        delay: 0.2,
      }}>Experience</motion.h1>
            <div className="row">
                <div className="col">
                    <motion.div variants={entry(0.3,-100)} initial="initial" whileInView="animate" viewport={{ amount: 0.2 }}  className="box">
                        <h4>2022-2023</h4>
                        <h3>Frontend Developer</h3>
                        <p className="place">Delloite</p>
                        <p> I have acquired numerous technical & Designing skills throughout this journey. </p>
                    </motion.div>
                    <motion.div variants={entry(0.8,-100)} initial="initial" whileInView="animate" viewport={{ amount: 0.2 }}  className="box">
                        <h4>2022-Present</h4>
                        <h3>Executive Member</h3>
                        <p className="place">Literary Sub-Council, BIET Jhansi</p>
                        <p>Flourished in writing, editing, and critical analysis skills, significantly enhancing my communication.</p>
                    </motion.div>
                </div>
                <div className="col">
                    <motion.div variants={entry(0.8,100)} initial="initial" whileInView="animate" viewport={{ amount: 0.2 }}  className="box">
                        <h4>2022-Present</h4>
                        <h3>Secretary</h3>
                        <p className="place">Computer Science Student's Council, BIET Jhansi</p>
                        <p> Honed in soft skills, Leadership & Strategic Thinking, which enhanced my communication and management skills.</p>
                    </motion.div>
                    <motion.div variants={entry(0.3,100)} initial="initial" whileInView="animate" viewport={{ amount: 0.2 }}  className="box">
                        <h4>2021-Present</h4>
                        <h3>Executive Member</h3>
                        <p className="place">Cultural Sub-Council, BIET Jhansi</p>
                        <p> Flourished organizational, event management, and compering skills, enhancing cultural engagement while serving on the cultural council.</p> 
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
export default Experience;