import React from 'react';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

function About() {
    const {ref, inView} = useInView();
    const animation = useAnimation();
    const animationy = useAnimation();

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
        if(inView) {
            animationy.start({
                x:0,
                transition:{
                    type:'spring', duration: 2, bounce: 0.3
                }
            })
        }
        if(!inView) {
            animationy.start({
                x:'100vw'
            })
        }
    }, [inView,animationy,animation])

    return (
        <div className="container bg-color row-height" id="Experience">
            <div ref={ref} className="row">
            <motion.div className="col about-section-text-tcs" animate={animation}>
                <h3>TCS</h3>
                <p>My first job was at TCS where I worked as a front end developer for 2+ years.</p>
                <p>I have worked in technologies like HTML,CSS,Jquery, backbonejs and vuejs.</p>
            </motion.div>
            <motion.div className="col about-section-text-dentsu" animate={animationy}>
                <h3>Dentsu World Services</h3>
                <p>My current company is Dentsu </p>
                <p>I have worked in technologies like HTML,CSS,Jquery, backbonejs and vuejs.</p>
            </motion.div>
            </div>
        </div>
    )
}

export default About
