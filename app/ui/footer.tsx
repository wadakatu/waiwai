import Image from 'next/image';
import { Climate_Crisis, Zen_Maru_Gothic } from 'next/font/google';
import { FaClock } from 'react-icons/fa';
import React from 'react';
import { IoOpenOutline } from 'react-icons/io5';
import { GiNightSleep } from 'react-icons/gi';
import { FiInstagram, FiMail, FiPhoneCall } from 'react-icons/fi';
import { TfiYoutube } from 'react-icons/tfi';
import { FaMapLocationDot } from 'react-icons/fa6';

const climateCrisis = Climate_Crisis({ subsets: ['latin'] });
const zenMaruGothic = Zen_Maru_Gothic({ weight: '500', subsets: ['latin'] });

export default function Footer() {
  return (
    <footer className={'grid gap-3'}>
      <hr
        className={'mx-12 border border-t border-dashed border-black bg-white'}
      />
      <div className={`grid gap-4 p-6 ${zenMaruGothic.className}`}>
        <div className={'shadow-3xl h-20 w-full p-2'}>
          <button className="group h-full w-full rounded-md border-2 border-solid border-slate-600 bg-white px-1 shadow-2xl">
            <div className={'grid h-full grid-cols-3 divide-x-2'}>
              <div className={'col-span-1 flex items-center justify-center'}>
                <FaMapLocationDot size={20} />
                <p className={'ml-2 text-xl'}>アクセス</p>
              </div>
              <div className={'col-span-2 flex items-center justify-around'}>
                <div
                  className={
                    'flex w-5/6 shrink flex-col items-center justify-center'
                  }
                >
                  <p>〒763-0003</p>
                  <p>香川県丸亀市葭町27</p>
                </div>
                <div className={'w-1/6'}>
                  <IoOpenOutline size={20} />
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className={'shadow-3xl h-20 w-full p-2'}>
          <button className="group h-full w-full rounded-md border-2 border-solid border-slate-600 bg-white px-1 shadow-2xl">
            <div className={'grid h-full grid-cols-3 divide-x-2'}>
              <div className={'col-span-1 flex items-center justify-center'}>
                <FaClock size={20} />
                <p className={'ml-2 text-xl'}>営業時間</p>
              </div>
              <div className={'col-span-2 flex items-center justify-around'}>
                <div
                  className={
                    'flex w-5/6 shrink flex-col items-center justify-center'
                  }
                >
                  <p>17:00~22:00（LO 21:30）</p>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className={'shadow-3xl h-20 w-full p-2'}>
          <button className="group h-full w-full rounded-md border-2 border-solid border-slate-600 bg-white px-1 shadow-2xl">
            <div className={'grid h-full grid-cols-3 divide-x-2'}>
              <div className={'col-span-1 flex items-center justify-center'}>
                <GiNightSleep size={20} />
                <p className={'ml-2 text-xl'}>おやすみ</p>
              </div>
              <div className={'col-span-2 flex items-center justify-around'}>
                <div
                  className={
                    'flex w-5/6 shrink flex-col items-center justify-center'
                  }
                >
                  <p>毎週水曜、第2木曜、第3木曜</p>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className={'flex items-center justify-center'}>
        <Image
          src={'/img/logo.svg'}
          alt={'WAIWAIのロゴ'}
          width={60}
          height={60}
          priority={true}
        />
        <p className={`text-2xl ${climateCrisis.className}`}>WAIWAI</p>
      </div>
      <div className={'flex items-center justify-center gap-8'}>
        <a href="https://www.instagram.com/waiwai.____/">
          <FiInstagram size={25} color={'#868686'} />
        </a>
        <a href="https://youtube.com">
          <TfiYoutube size={25} color={'#868686'} />
        </a>
        <a href="mailto:wadakatukoyo330@gmail.com">
          <FiMail size={25} color={'#868686'} />
        </a>
        <a href="tel:+81-090-1234-5678" className={'md:cursor-none'}>
          <FiPhoneCall size={25} color={'#868686'} />
        </a>
      </div>
      <div className={'mb-4 text-center'}>
        <span className="text-sm text-slate-400 sm:text-center dark:text-gray-400">
          © 2024 WAIWAI. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
