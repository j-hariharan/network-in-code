'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';
import { useEffect } from 'react';

const Hero = () => 
{

  // useEffect(() => {
  //   // get all elements and add red border
  //   const elements = document.querySelectorAll('*');
  //   elements.forEach((element) => {
  //     element.style.border = '1px solid red';
  //   });
  // }, []);

  return (
    <section className={`${styles.yPaddings}`}
      style={{
        paddingTop: 0,
      }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth2} mx-auto flex flex-col items-center`}
      >
        <motion.div
          variants={fadeIn('bottom', 'tween', 0.2, 1)}
          className="relative w-full flex justify-center"
        >
          <div className="absolute sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] 2xl:w-[800px] 2xl:h-[800px]
            rounded-full bg-[#f88712] opacity-70 blur-[60px] z-[0] flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            shadow-[0_0_30px_#f18712, 0_0_60px_#f18712, 0_0_100px_#f18712, 0_0_150px_#f18712]" />
          <img
            style={{
              marginTop: '-50px',
            }}
            src="/deadpool-2.png"
            alt="cover"
            className="rounded-[200px] z-10 relative sm:w-[300px] md:w-[400px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] h-auto"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            <motion.div
              variants={textVariant(1.2)}
              className="flex flex-row items-center justify-center mt-40"
            >
              <h1 className={styles.heroHeading}>Co</h1>
              <div className="relative flex items-center justify-center">
                <motion.div
                  className={styles.heroDText}
                  animate={{ x: [0, -5, 0, -5], y: [0, 5, 10, 5] }}
                  transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
              <h1 className={styles.heroHeading}>
                e
                <span
                  style={{
                    color: '#991412',
                  }}
                >
                  Red
                </span>
              </h1>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )};

export default Hero;
