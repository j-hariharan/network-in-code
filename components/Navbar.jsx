'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { useEffect } from 'react';

const Navbar = () => {

  return (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between`}>
      <img src="/ieee_nitk.png" alt="search" className="w-[180px] object-contain" />

      <div className='flex items-center justify-between gap-16'>
        <h2 className="font-extrabold test-[24px] text-white">
          About
        </h2>
        <h2 className="font-extrabold test-[24px] text-white">
          Explore
        </h2>
        <h2 className="font-extrabold test-[24px] text-white">
          Get Started
        </h2>
        <h2 className="font-extrabold test-[24px] text-white">
          Insights
        </h2>
      </div>

      <div className='flex items-center gap-16 w-[180px] justify-end'>
        <button className="font-extrabold test-[24px] text-white"
          style={{
            background: '#e80d0d',
            padding: '12px 24px',
            borderRadius: '8px',
            boxShadow: '0 0 10px #f1871220, 0 0 20px #f1871220, 0 0 40px #f1871230, 0 0 60px #f1871220',
          }}
        >
          Register Now 
        </button>
      </div>
    </div>
  </motion.nav>
)
};

export default Navbar;
