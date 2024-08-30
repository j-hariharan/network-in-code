'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';
import { basePath } from '../next.config';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="Prizes?" />
        <TitleText title={<>Prizes and Goodies worth 11k+</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src={`${basePath}/deaddog.png`}
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
          style={{
            // add a slight black glow to the png image
            filter: 'drop-shadow(2px 10px 5px rgba(0, 0, 0, 0.3)) brightness(0.9) contrast(0.9)',
            // blur the image slightly
            // webkitFilter: 'blur(0.8px)',
            // reduce the contrast of the image
            // filter: 'contrast(0.8)',
          }}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
