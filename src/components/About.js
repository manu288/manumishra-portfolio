import React from 'react';
import img from "./img.jpg";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

function About() {
    const {ref, inView} = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if(inView) {
            animation.start({
                x:0,
                transition:{
                    type:'spring', duration: 2, bounce: 0.3
                }
            })
        }
        if(!inView) {
            animation.start({
                x:'-100vw'
            })
        }
    }, [inView,animation])

    return (
        <div className="container bg-color row-height" id="About">
            <div ref={ref} className="row">
            <motion.div className="about-section-img col" animate={animation} >
                <img id="slide" src={img} alt="" className="col portfolio-img" ></img>
            </motion.div>
            <motion.div className="col about-section-text" animate={animation}>
                <p>My name is Manu Mishra. I am from chhattisgarh, currently located in pune. I work as a front end developer from last 3 and half years. In my 3 years of experience I started with TCS and then switched to Dentsu World Services</p>
                <p>I am really passionate about my work and good work ethics is always been my top priority</p>
            </motion.div>
            </div>
        </div>
    )
}

export default About
