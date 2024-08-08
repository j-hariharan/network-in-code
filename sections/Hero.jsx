'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import GoogleFonts from 'react-google-fonts';


const Hero = () => 
{
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
          <div className="absolute w-[325px] h-[325px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] 2xl:w-[650px] 2xl:h-[650px]
            rounded-full bg-[#fe0100] opacity-90 z-[0] flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
            
            style={{
              // shadow-[0_0_30px_#f18712, 0_0_60px_#f18712, 0_0_100px_#f18712, 0_0_150px_#f18712]
              boxShadow: '0 0 30px #f1871250, 0 0 60px #f1871240, 0 0 100px #f1871230, 0 0 150px #f1871220',
            }}
            />
          <img
            style={{
              marginTop: '-50px',
            }}
            src="/deadpool-2.png"
            alt="cover"
            className="rounded-[400px] z-10 relative w-[300px] sm:w-[300px] md:w-[400px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] h-auto"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            <motion.div
              variants={textVariant(1.2)}
              className="flex flex-row items-center justify-center mt-40"
            >
              <h1 className={styles.heroHeading}
              
              style={{
                fontFamily: 'Rouge Hero'
              }}
              >
                
                Cod
                
                </h1>
              {/* <div className="relative flex items-center justify-center">
                <motion.div
                  className={styles.heroDText}
                  animate={{ x: [0, -5, 0, -5], y: [0, 5, 10, 5] }}
                  transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
                />
              </div> */}
              <h1 className={styles.heroHeading}
                style={{
                  fontFamily: 'Rouge Hero'
                }}  
              >
                e
                <span
                  style={{
                    fontFamily: 'Rouge Hero',
                    color: '#fe010080',
                    WebkitTextStroke: '2px #fff',
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
