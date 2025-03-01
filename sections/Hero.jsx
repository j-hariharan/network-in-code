'use client';


import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import { basePath } from '../next.config';
import { eventEnd, eventStart } from '../constants';
import { useEffect, useState } from 'react'

const Hero = () => {
    const [eventHasStarted, setEventHasStarted] = useState(false);
    const [eventHasEnded, setEventHasEnded] = useState(false);
    
    useEffect(() => {
      const currentTime = new Date().getTime();
      setEventHasStarted(currentTime > eventStart);
      setEventHasEnded(currentTime > eventEnd);
    }, []);
  
  return (
  <section className={`${styles.yPaddings} flex-grow h-full z-10 pb-10`}
    style={{
      paddingTop: 0,
    }}
>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`h-full mx-auto flex flex-col items-center`}
    >
      <motion.div
        variants={fadeIn('bottom', 'tween', 0.2, 1)}
        className="relative w-full h-full flex justify-center"
      >
        
        <div className="h-full flex flex-col items-center justify-center gap-5">
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row items-center justify-center"
          >
            <h1
              className={styles.heroHeading}
              style={{
                fontFamily: 'Rouge Hero',
                WebkitTextStroke: '3px white'
              }}
            >
              Network In Code
            </h1>
          </motion.div>
          <button className="font-extrabold text-[24px] text-white"
          type="button"
          style={{
            background: '#1e4471',
            padding: '8px 16px',
            borderRadius: '8px',
            boxShadow: '0 0 10px #00bceb33, 0 0 20px #00bceb33, 0 0 40px #f1871230, 0 0 60px #00bceb33',
          }}
          onClick={() => {
            if (eventHasStarted) {
              window.open('https://unstop.com/p/network-in-code-indian-institute-of-science-iisc-bangalore-1415099');
            } else if (eventHasEnded) {
              // Do nothing
            } else {
              window.open('https://unstop.com/p/network-in-code-indian-institute-of-science-iisc-bangalore-1415099');
            }
          }}
        >
          <div className="flex items-center">
            {
              eventHasStarted ? eventHasEnded ? 'Event Ended' : 'Join Event'
                : 'Register Now'
            }
            {
              !eventHasStarted && <img src={`${basePath}/unstop-logo.png`} alt="unstop logo" className="w-[32px] md:w-[64px] object-contain ml-2 md:ml-4" />
            }
          </div>
        </button>
        </div>
      </motion.div>
    </motion.div>
  </section>
)
}

export default Hero;
