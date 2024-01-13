'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Navbar from '@/app/ui/navbar';

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      className="fixed right-0 top-0 z-20 flex w-full items-center justify-between bg-white px-4 py-6"
      variants={{
        visible: {
          y: 0,
          transitionEnd: { x: 0, y: 0 },
        },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <Link href={'/'}>
        <Image
          src="/img/logo.svg"
          alt="WAIWAIのロゴ"
          width={'50'}
          height={'50'}
          className={'h-1/4'}
          priority={true}
        />
      </Link>
      <Navbar />
    </motion.header>
  );
}
