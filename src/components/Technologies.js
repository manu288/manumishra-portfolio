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
                    type:'spring', duration: 2, bounce: 0.5
                }
            })
        }
        if(!inView) {
            animationy.start({
                x:'100vw'
            })
        }
    }, [inView])

    return (
        <div className="container bg-color row-height" id="Technologies">
            <div ref={ref} className="row">
            <motion.div className="technologies" animate={animation}>
                <h3>Technologies I have worked with</h3>
                <div className="technology">HTML5</div>
                </motion.div>
                <motion.div className="" animate={animationy}>
                <div className="technology">CSS3</div>
                </motion.div>
                <motion.div className="" animate={animation}>
                <div className="technology">Javascript</div>
                </motion.div>
                <motion.div className="" animate={animationy}>
                <div className="technology">Jquery</div>
                </motion.div>
                <motion.div className="" animate={animation}>
                <div className="technology">SFCC</div>
                </motion.div>
                <motion.div className="" animate={animationy}>
                <div className="technology">SFRA</div>
                </motion.div>
                <motion.div className="" animate={animation}>
                <div className="technology">Reactjs</div>
                </motion.div>
            </div>
        </div>
    )
}

export default About;
