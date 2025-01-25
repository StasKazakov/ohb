'use client'
import React from 'react'
import Hero from './hero/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: "top-bottom",
        offset: 200
      });
    };

    initAOS();

  },[]);
  return (
    <section>
        <Hero />
    </section>
  )
}

export default Home