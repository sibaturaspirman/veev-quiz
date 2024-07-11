'use client';

import Image from "next/image";
import Link from 'next/link';
import React,{ useEffect, useState, useRef } from 'react';

export default function Home() {
  const [pageDepan, setPageDepan] = useState(false);
  const [pageBelakang, setPageBelakang] = useState(true);
  const [pageQ1, setPageQ1] = useState(true);
  const [pageQ2, setPageQ2] = useState(true);
  const [pageQ3, setPageQ3] = useState(true);
  const [pageJ1, setPageJ1] = useState(true);
  const [pageJ2, setPageJ2] = useState(true);
  const [pageJ3, setPageJ3] = useState(true);
  const [jawabanQ1, setJawabanQ1] = useState(null);
  const [jawabanQ2, setJawabanQ2] = useState(null);
  const [jawabanQ3, setJawabanQ3] = useState(null);

  const startPageDepan = () => {
    setPageDepan(true)
    setPageQ1(false)
  }

  const jawabQ1A = () => {
    setJawabanQ1('A')

    setTimeout(() => {
      // console.log(jawabanQ1)
      setPageQ1(true)
      setPageQ2(false)
    }, 600);
  }
  const jawabQ1B = () => {
    setJawabanQ1('B')

    setTimeout(() => {
      // console.log(jawabanQ1)
      setPageQ1(true)
      setPageQ2(false)
    }, 600);
  }

  const jawabQ2A = () => {
    setJawabanQ2('A')

    setTimeout(() => {
      // console.log(jawabanQ2)
      setPageQ2(true)
      setPageQ3(false)
    }, 600);
  }
  const jawabQ2B = () => {
    setJawabanQ2('B')

    setTimeout(() => {
      // console.log(jawabanQ2)
      setPageQ2(true)
      setPageQ3(false)
    }, 600);
  }

  const jawabQ3A = () => {
    setJawabanQ3('A')

    setTimeout(() => {
      console.log("Q1 : "+jawabanQ1)
      console.log("Q2 : "+jawabanQ2)
      console.log("Q3 : "+jawabanQ3)
      setPageQ3(true)
      analisaHasil()
    }, 600);
  }
  const jawabQ3B = () => {
    setJawabanQ3('B')

    setTimeout(() => {
      // console.log("Q1 : "+jawabanQ1)
      // console.log("Q2 : "+jawabanQ2)
      // console.log("Q3 : "+jawabanQ3)
      setPageQ3(true)
      analisaHasil()
    }, 600);
  }
  const analisaHasil = () => {
    if(
    (jawabanQ1 == 'A' && jawabanQ2 == 'A' && jawabanQ3 == 'A') || 
    (jawabanQ1 == 'A' && jawabanQ2 == 'B' && jawabanQ3 == 'A') || 
    (jawabanQ1 == 'B' && jawabanQ2 == 'A' && jawabanQ3 == 'A')){
      setPageJ1(false)
    }else if(
    (jawabanQ1 == 'A' && jawabanQ2 == 'B' && jawabanQ3 == 'B') || 
    (jawabanQ1 == 'B' && jawabanQ2 == 'B' && jawabanQ3 == 'B') || 
    (jawabanQ1 == 'B' && jawabanQ2 == 'A' && jawabanQ3 == 'B')){
      setPageJ2(false)
    }else if(
    (jawabanQ1 == 'A' && jawabanQ2 == 'A' && jawabanQ3 == 'B') || 
    (jawabanQ1 == 'B' && jawabanQ2 == 'B' && jawabanQ3 == 'A')){
      setPageJ3(false)
    }
  }

  const selesai = () => {
    setPageBelakang(false)
    setPageJ1(true)
    setPageJ2(true)
    setPageJ3(true)
    setTimeout(() => {
      window.location.href='/'
      // setPageDepan(false)
      // setPageBelakang(true)
    }, 5000);
  }

  return (
    <div className="flex min-h-screen bg flex-col items-center justify-center pt-12 p-20">
      {/* PAGE DEPAN */}
      <div className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center ${pageDepan ? 'opacity-0 pointer-events-none' : ''}`} onClick={startPageDepan}>
        <div className="w-[60%] relative mx-auto flex justify-center items-center">
          <Image src='/logo.png' width={734} height={320} alt='Zirolu' className='w-full' priority />
        </div>
        <div className="w-[35%] relative mx-auto mt-8 flex justify-center items-center">
          <Image src='/btn-start.png' width={731} height={240} alt='Zirolu' className='w-full' priority />
        </div>
      </div>

      {/* PAGE BELAKANG */}
      <div className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center ${pageBelakang ? 'opacity-0 pointer-events-none' : ''}`}>
        <Link href='/' className="w-[60%] absolute top-10 left-0 right-0 mx-auto flex justify-center items-center">
          <Image src='/logo.png' width={734} height={320} alt='Zirolu' className='w-full' priority />
        </Link>
        <div className="w-[45%] relative mx-auto mt-8 flex justify-center items-center">
          <Image src='/thanks1.png' width={715} height={224} alt='Zirolu' className='w-full' priority />
        </div>
        <div className="animate-upDown w-[25%] relative mx-auto mt-14 flex justify-center items-center">
          <Image src='/loading.png' width={289} height={288} alt='Zirolu' className='w-full' priority />
        </div>
        <div className="w-[58%] relative mx-auto mt-14 flex justify-center items-center">
          <Image src='/thanks2.png' width={615} height={72} alt='Zirolu' className='w-full' priority />
        </div>
      </div>
      

      {/* PAGE QUESTION */}
      {/* --Q1-- */}
      <div className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center ${pageQ1 ? 'opacity-0 pointer-events-none' : ''}`}>
        <Link href='/' className="w-[60%] absolute top-10 left-0 right-0 mx-auto flex justify-center items-center">
          <Image src='/logo.png' width={734} height={320} alt='Zirolu' className='w-full' priority />
        </Link>
        <div className="w-[90%] absolute bottom-10 left-0 right-0 mx-auto flex flex-col justify-center items-center">
          <h4 className="text-center font-bold text-4xl color-white mb-4">Question #1</h4>
          <div className="w-full rounded-xl lg p-10 bg-white/70">
            <h4 className="text-center font-bold text-4xl text-[#571571] mb-8">How do you prefer to recharge after a long week?</h4>
            <div className="w-full">
              <ul className='choose4'>
                  <li className='mb-5' onClick={jawabQ1A}>
                      <input
                      id='q1'
                      type="radio"
                      name='q1'
                      value="A"
                      />
                      <label htmlFor="q1" className='text-3xl'>By finding a queit spot to relax and unwind</label>
                  </li>
                  <li onClick={jawabQ1B}>
                      <input
                      id='q12'
                      type="radio"
                      name='q1'
                      value="B"
                      />
                      <label htmlFor="q12" className='text-3xl'>By engaging in exciting activities and socializing</label>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --Q2-- */}
      <div className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center ${pageQ2 ? 'opacity-0 pointer-events-none' : ''}`}>
        <Link href='/' className="w-[60%] absolute top-10 left-0 right-0 mx-auto flex justify-center items-center">
          <Image src='/logo.png' width={734} height={320} alt='Zirolu' className='w-full' priority />
        </Link>
        <div className="w-[90%] absolute bottom-10 left-0 right-0 mx-auto flex flex-col justify-center items-center">
          <h4 className="text-center font-bold text-4xl color-white mb-4">Question #2</h4>
          <div className="w-full rounded-xl lg p-10 bg-white/70">
            <h4 className="text-center font-bold text-4xl text-[#571571] mb-8">Which environment makes you feel most at ease?</h4>
            <div className="w-full">
              <ul className='choose4'>
                  <li className='mb-5' onClick={jawabQ2A}>
                      <input
                      id='q2'
                      type="radio"
                      name='q2'
                      value="A"
                      />
                      <label htmlFor="q2" className='text-3xl'>A peaceful and natural setting, surrounded by nature</label>
                  </li>
                  <li onClick={jawabQ2B}>
                      <input
                      id='q22'
                      type="radio"
                      name='q2'
                      value="B"
                      />
                      <label htmlFor="q22" className='text-3xl'>A vibrant and dynamic setting with lots of energy</label>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --Q3-- */}
      <div className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center ${pageQ3 ? 'opacity-0 pointer-events-none' : ''}`}>
        <Link href='/' className="w-[60%] absolute top-10 left-0 right-0 mx-auto flex justify-center items-center">
          <Image src='/logo.png' width={734} height={320} alt='Zirolu' className='w-full' priority />
        </Link>
        <div className="w-[90%] absolute bottom-10 left-0 right-0 mx-auto flex flex-col justify-center items-center">
          <h4 className="text-center font-bold text-4xl color-white mb-4">Question #3</h4>
          <div className="w-full rounded-xl lg p-10 bg-white/70">
            <h4 className="text-center font-bold text-4xl text-[#571571] mb-8">What&apos;s your approach to new experiences?</h4>
            <div className="w-full">
              <ul className='choose4'>
                  <li className='mb-5' onClick={jawabQ3A}>
                      <input
                      id='q3'
                      type="radio"
                      name='q3'
                      value="A"
                      />
                      <label htmlFor="q3" className='text-3xl'>You take a calm, reflective approach and enjoy the journey</label>
                  </li>
                  <li onClick={jawabQ3B}>
                      <input
                      id='q32'
                      type="radio"
                      name='q3'
                      value="B"
                      />
                      <label htmlFor="q32" className='text-3xl'>You dive right in and seek out of the thrill of discovery</label>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* !PAGE QUESTION */}

      {/* PAGE JAWABAN */}
      <div className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center ${pageJ1 ? 'opacity-0 pointer-events-none' : ''}`} onClick={selesai}>
        <Link href='/' className="w-[60%] absolute top-10 left-0 right-0 mx-auto flex justify-center items-center">
          <Image src='/logo.png' width={734} height={320} alt='Zirolu' className='w-full' priority />
        </Link>
        <div className="w-[70%] absolute bottom-10 left-0 right-0 mx-auto flex flex-col justify-center items-center">
          <div className="w-full relative mx-auto flex justify-center items-center">
            <Image src='/preview1.png' width={840} height={1304} alt='Zirolu' className='w-full' priority />
          </div>
        </div>
      </div>

      <div className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center ${pageJ2 ? 'opacity-0 pointer-events-none' : ''}`} onClick={selesai}>
        <Link href='/' className="w-[60%] absolute top-10 left-0 right-0 mx-auto flex justify-center items-center">
          <Image src='/logo.png' width={734} height={320} alt='Zirolu' className='w-full' priority />
        </Link>
        <div className="w-[70%] absolute bottom-10 left-0 right-0 mx-auto flex flex-col justify-center items-center">
          <div className="w-full relative mx-auto flex justify-center items-center">
            <Image src='/preview2.png' width={840} height={1304} alt='Zirolu' className='w-full' priority />
          </div>
        </div>
      </div>

      <div className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center ${pageJ3 ? 'opacity-0 pointer-events-none' : ''}`} onClick={selesai}>
        <Link href='/' className="w-[60%] absolute top-10 left-0 right-0 mx-auto flex justify-center items-center">
          <Image src='/logo.png' width={734} height={320} alt='Zirolu' className='w-full' priority />
        </Link>
        <div className="w-[70%] absolute bottom-10 left-0 right-0 mx-auto flex flex-col justify-center items-center">
          <div className="w-full relative mx-auto flex justify-center items-center">
            <Image src='/preview3.png' width={840} height={1304} alt='Zirolu' className='w-full' priority />
          </div>
        </div>
      </div>
      {/* !PAGE JAWABAN */}
    </div>
  );
}
