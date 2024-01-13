'use client';

import Image from 'next/image';
import React from 'react';
import { Climate_Crisis, Zen_Maru_Gothic } from 'next/font/google';
import MapBanner from '@/app/ui/home/mapBanner';
import { motion } from 'framer-motion';
import Link from 'next/link';

const zenMaruGothic = Zen_Maru_Gothic({ weight: '500', subsets: ['latin'] });
const climateCrisis = Climate_Crisis({ subsets: ['latin'] });

export default function KeyVisual() {
  return (
    <section
      className={'relative flex h-dvh flex-col items-center justify-center'}
    >
      <svg
        className={'absolute h-full w-full overflow-hidden'}
        width="405"
        height="474"
        viewBox="0 0 405 474"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_598_10232"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="405"
          height="474"
        >
          <rect width="405" height="474" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_598_10232)">
          <motion.path
            d="M0 3.05325C95 1.88658 275.5 19.4533 237.5 99.0533C190 198.553 323 149.553 292.5 218.053C262 286.553 215 365.053 292.5 414.053C354.5 453.253 398.333 469.72 412.5 473.053"
            stroke="url(#paint0_linear_598_10232)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_598_10232"
            x1="-2.07951e-10"
            y1="237.253"
            x2="412.5"
            y2="237.253"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#AA6831" />
            <stop offset="1" stopColor="#ECE2B5" />
          </linearGradient>
        </defs>
      </svg>
      <Image
        src="/img/logo.svg"
        alt="WAIWAIのロゴ"
        width={'800'}
        height={'800'}
        className={'z-10 h-1/4 fill-white stroke-white stroke-1'}
        priority={true}
      />
      <h1 className={`z-10 text-6xl ${climateCrisis.className}`}>WAIWAI</h1>
      <div className={'mt-8'}>
        <a
          href="#"
          className="group relative inline-block px-6 py-3 font-medium"
        >
          <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-black"></span>
          <span
            className={`relative text-xl text-black group-hover:text-white ${zenMaruGothic.className}`}
          >
            テーブル予約
          </span>
        </a>
      </div>
      <div className={'pt-6'}>
        <Link
          href="/menu"
          className="group relative inline-block px-6 py-3 font-medium"
        >
          <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-black"></span>
          <span
            className={`relative text-xl text-black group-hover:text-white ${zenMaruGothic.className}`}
          >
            メニュー
          </span>
        </Link>
      </div>
      <MapBanner />
    </section>
  );
}
