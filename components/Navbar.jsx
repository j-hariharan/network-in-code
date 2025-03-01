'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles';
import useWindow from '../hooks/useWindow';
import { basePath } from '../next.config';

const Navbar = () => {

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 w-full top-0 z-10`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center flex-wrap md:flex-nowrap`}>
        <img src={`${basePath}/CNI.png`} alt="logo" className="w-[220px] md:w-[270px] object-contain" />
        <img src={`${basePath}/COSH.png`} alt="logo" className="w-[180px] md:w-[230px] object-contain invert" />

        {/* {
          isMobileOrTablet ? (
            <button
              type="button"
              className="block"
              onClick={() => setIsNavbarExpanded(!isNavbarExpanded)}
            >
              <img src="/menu.svg" alt="menu" className="w-[32px] md:w-[48px] object-contain" />
            </button>
          ) : null
        } */}

        {/* {
          !isMobileOrTablet ? (
            <div className="flex items-center justify-center md:justify-between gap-8 md:gap-16 flex-wrap md:flex-nowrap w-full md:w-auto mt-4 md:mt-0 flex-col md:flex-row">
              <h2 className="font-extrabold text-sm md:text-base text-white"
                onClick={() => {
                  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </h2>
              <h2 className="font-extrabold text-sm md:text-base text-white">
                Explore
              </h2>
              <h2 className="font-extrabold text-sm md:text-base text-white">
                Get Started
              </h2>
              <h2 className="font-extrabold text-sm md:text-base text-white">
                Insights
              </h2>
            </div>
          ) : null
        } */}

        {/* <div className="flex items-center gap-8 md:gap-12 w-[200px] justify-end mt-20 md:mt-0">
          <button className="font-extrabold text-[16px] text-white"
            type="button"
            style={{
              background: '#e80d0d',
              padding: '8px 16px',
              borderRadius: '8px',
              boxShadow: '0 0 10px #00bceb33, 0 0 20px #00bceb33, 0 0 40px #f1871230, 0 0 60px #00bceb33',
            }}
            onClick={() => {
              window.open('https://unstop.com/p/network-in-code-indian-institute-of-science-iisc-bangalore-1415099', '_blank');
            }}
          >
          </button>
        </div> */}


        <img src={`${basePath}/cisco.png`} alt="compsoc-logo" className="w-[100px] md:w-[150px] object-contain" />
      </div>

      {/* {
        (isNavbarExpanded && isMobileOrTablet) ? (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inset-0 bg-primary bg-opacity-90 z-50 flex justify-center items-center mt-0"
          >
            <div className="inset-0 bg-primary bg-opacity-90 z-50 flex justify-center items-center mt-10">
              <div className="flex flex-col gap-8">
                <h2 className="font-extrabold text-white text-xl">About</h2>
                <h2 className="font-extrabold text-white text-xl">Explore</h2>
                <h2 className="font-extrabold text-white text-xl">Get Started</h2>
                <h2 className="font-extrabold text-white text-xl">Insights</h2>
              </div>
            </div>
          </motion.div>
        ) : null
      } */}

    </motion.nav>
  );
};

export default Navbar;
