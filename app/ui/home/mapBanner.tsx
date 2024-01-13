import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Zen_Maru_Gothic } from 'next/font/google';

const zenMaruGothic = Zen_Maru_Gothic({ weight: '500', subsets: ['latin'] });
export default function MapBanner() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.div
      className={'shadow-3xl fixed bottom-0 h-20 w-full p-2'}
      variants={{
        visible: { y: 0 },
        hidden: { y: '100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <button className="group h-full w-full rounded-md border-2 border-solid border-slate-600 bg-white px-2 shadow-2xl">
        <div
          className={'flex h-full flex-col items-center justify-center gap-0.5'}
        >
          <FaMapMarkerAlt size={20} />
          <span
            className={`transform text-sm transition duration-700 ease-in-out ${zenMaruGothic.className}`}
          >
            マップ
            <span className="block h-0.5 max-w-0 bg-sky-600 transition-all duration-500 group-hover:max-w-full"></span>
          </span>
        </div>
      </button>
    </motion.div>
  );
}
