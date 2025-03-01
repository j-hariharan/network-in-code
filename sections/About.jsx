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
        title="About Network In Code"
        textStyles="text-center text-4xl font-semibold mb-2"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[23px] text-[16px] text-center text-secondary-white"
      >
        We are excited to announce <span className='font-semibold'>Network In Code (NIC)</span>, a hands-on Networking & Systems coding program, organized by <span className="font-semibold">CNI IISc</span>, co-hosted by <span className="font-semibold">COSH NITK</span>, and supported by <span className="font-semibold">Cisco Corporate Social Responsibility</span>.
        <br />
        <br />
        <br />
        Network In Code (NIC) is a two-week-long competition designed to challenge students in systems and networking. Participants will tackle real-world problems in eBPF, network simulations, containers, Kubernetes, network security, and IPv6. The event provides a unique opportunity to gain hands-on experience and compete for awards worth INR 2,00,000 and an intership at IISc.
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
