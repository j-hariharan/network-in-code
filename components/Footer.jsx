'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { eventEnd, eventStart, socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { basePath } from '../next.config';

const Footer = () => {
  const [eventHasStarted, setEventHasStarted] = useState(false);
  const [eventHasEnded, setEventHasEnded] = useState(false);

  useEffect(() => {
    const currentTime = new Date().getTime();
    setEventHasStarted(currentTime > eventStart);
    setEventHasEnded(currentTime > eventEnd);
  }, []);

  return (
    <img src="/banner.webp" className="w-full invert max-w-[1100px] mx-auto" />
  );
};

export default Footer;
