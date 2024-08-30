'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { basePath } from '../next.config';

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="About Code Red"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Welcome to <span className="font-extrabold"> Code Red </span>, where coding meets chaos, and you meet Deadpool. Brought to you by the mad geniuses at the IEEE NITK Computer Society, this <span className="font-extrabold"> 24-hour Capture-The-Flag (CTF) </span> styled competition is your ticket to proving you’ve got what it takes to survive in the wild world of <span className="font-extrabold"> Development </span>, <span className="font-extrabold"> Machine Learning </span>, <span className="font-extrabold"> Algorithms </span> , and <span className="font-extrabold"> Systems </span>.
        <br />
        <br />
        <br />
        Help Deadpool out of one of his classic jams. Whether you're a first-year student exploring the field or a second-year student sharpening your skills, CODE RED is your gateway to mastering the essentials in a fun and engaging way.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src={`${basePath}/arrow-down.svg`}
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
