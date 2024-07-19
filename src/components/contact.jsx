import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import React, { useState} from "react";
import {motion} from "framer-motion";
function Content(){
    const [textinput, setinput]=useState({
        Name:"",
        Email:"",
        Subject:"",
        Message:""
    });

    const disvariant=(delay)=>({
        offscreen:{
            y:50,
            opacity:0,
        },
        onscreen:{
            y:0,
            opacity:1,
            transition:{duration:2,delay}
        } 
    });

    function writeinput(event){
       const {name,value}= event.target;
       setinput(()=>{
        return{
        [name]:value,
        }
       })
    };
     
    function sendinput(){
        setinput({
            Name:"",
            Email:"",
            Subject:"",
            Message:"",
        })
    }
    return( 
    <section id="contact" className="contactsection">
      <motion.h2 variants={disvariant(0.1)} initial="offscreen" whileInView="onscreen" >Contact Us</motion.h2>
      <motion.div variants={disvariant(0.1)} initial="offscreen" whileInView="onscreen" className="contactform">
      <input className="shortfield" type="text" placeholder="Enter your Name" name="Name" value={textinput.Name} onChange={writeinput} />
      <input className="shortfield" type="email" placeholder="Enter your Email" name="Email" value={textinput.Email} onChange={writeinput} />
      <input className="shortfield" type="text" placeholder="Enter your Subject" name="Subject" value={textinput.Subject} onChange={writeinput} />
      <textarea
          className="shortfield s" type="text"
          col={20}
          rows={6}
          multiline
          value={textinput.Message} onChange={writeinput}
          placeholder="Message"
        />
        <button className="buttonc" onClick={sendinput}>Send</button>
      </motion.div>
      <div className="contactbottom">
        <motion.div variants={disvariant(0.1)} initial="offscreen" whileInView="onscreen" viewport={{amount:0.5}} className="contactcard">
            <FaLocationCrosshairs className="conicon"/>
            <h3 className="contacth">Where to find Me</h3>
            <div className="concontact">
                <p>33, Shikarpur Compound, D.M road bulandshahr</p>
            </div>
        </motion.div>
        <motion.div variants={disvariant(0.1)} initial="offscreen" whileInView="onscreen" viewport={{amount:0.5}} className="contactcard">
            <MdOutlineMailOutline className="conicon"/>
            <h3 className="contacth">Mail me at</h3>
            <div className="concontact">
                <p>suryanshruhal108@gmail.com</p>
            </div>
        </motion.div>
        <motion.div variants={disvariant(0.1)} initial="offscreen" whileInView="onscreen" viewport={{amount:0.5}} className="contactcard">
            <FaPhoneVolume className="conicon"/>
            <h3 className="contacth">Contact me @</h3>
            <div className="concontact">
                <p>+91 9452142894</p>
            </div>
        </motion.div>
      </div>
    </section>
    );
}
export default Content;