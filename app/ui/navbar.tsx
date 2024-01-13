import React from 'react';
import { AnimatePresence, motion, MotionConfig, useCycle } from 'framer-motion';
import Link from 'next/link';
import { Zen_Maru_Gothic } from 'next/font/google';

const zenMaruGothic = Zen_Maru_Gothic({ weight: '500', subsets: ['latin'] });

export default function Navbar() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  return (
    <nav className={`${zenMaruGothic.className}`}>
      <div className={'relative z-10'}>
        <button
          onClick={() => toggleMobileNav()}
          className="flex flex-col items-center justify-center"
        >
          <span
            className={`bg-steel-500 block h-1 w-8 rounded-sm bg-black
                    transition-all duration-300 ease-out ${
                      mobileNav
                        ? 'translate-y-[0.5rem] rotate-45'
                        : '-translate-y-0.5'
                    }`}
          ></span>
          <span
            className={`bg-steel-500 my-1 block h-0.5 w-6 rounded-sm
                    bg-black transition-all duration-300 ease-out ${
                      mobileNav ? 'opacity-0' : 'opacity-100'
                    }`}
          ></span>
          <span
            className={`bg-steel-500 block h-1 w-8 rounded-sm bg-black
                    transition-all duration-300 ease-out ${
                      mobileNav
                        ? '-translate-y-1.5 -rotate-45'
                        : 'translate-y-0.5'
                    }`}
          ></span>
        </button>
      </div>
      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: 'spring',
              bounce: 0.1,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                hide: {
                  x: '100%',
                  transition: {
                    type: 'spring',
                    bounce: 0.1,
                    when: 'afterChildren',
                  },
                },
                show: {
                  x: '0%',
                  transition: {
                    type: 'spring',
                    bounce: 0.1,
                    when: 'beforeChildren',
                  },
                },
              }}
              initial="hide"
              animate="show"
              exit="hide"
              className="fixed inset-0 flex h-full w-full flex-col justify-center space-y-10 bg-white p-6
 backdrop-filter lg:hidden"
            >
              <motion.ul
                variants={{
                  hide: {
                    y: '25%',
                    opacity: 0,
                  },
                  show: {
                    y: '0%',
                    opacity: 1,
                  },
                }}
                className="list-none space-y-8"
              >
                <li>
                  <Link
                    href="/menu"
                    onClick={() => toggleMobileNav()}
                    className="text-5xl font-semibold text-black"
                  >
                    メニュー
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-5xl font-semibold text-black">
                    テーブル予約
                  </a>
                </li>
                <li>
                  <a href="#" className="text-5xl font-semibold text-black">
                    コンセプト
                  </a>
                </li>
                <li>
                  <a href="#" className="text-5xl font-semibold text-black">
                    アクセス
                  </a>
                </li>
              </motion.ul>
              <motion.div
                variants={{
                  hide: {
                    y: '25%',
                    opacity: 0,
                  },
                  show: {
                    y: '0%',
                    opacity: 1,
                  },
                }}
                className="h-px w-full bg-black/30"
              ></motion.div>
              <motion.ul
                variants={{
                  hide: {
                    y: '25%',
                    opacity: 0,
                  },
                  show: {
                    y: '0%',
                    opacity: 1,
                  },
                }}
                className="flex list-none justify-center gap-x-4"
              >
                <li>
                  <div className="h-8 w-8 rounded-lg bg-black"></div>
                </li>
                <li>
                  <div className="h-8 w-8 rounded-lg bg-black"></div>
                </li>
                <li>
                  <div className="h-8 w-8 rounded-lg bg-black"></div>
                </li>
              </motion.ul>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </nav>
  );
}
