'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import UploadAndConvert from './components/Upload';
import icon from './icon.json'
import LottieAnimation from './Animation';
import Card from './components/Card';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
export default function Home() {
  const [animatedSections, setAnimatedSections] = useState<any>([]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.your-section-class');
      elements.forEach((element: any) => {

        if (!animatedSections.includes(element.id) && element.getBoundingClientRect().top < window.innerHeight) {
          setAnimatedSections((prevSections: any) => [...prevSections, element.id] as any);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedSections]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <motion.div
        id="section-1"
        className="your-section-class"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: animatedSections.includes('section-1') ? 1 : 0, x: animatedSections.includes('section-1') ? 0 : -100 }}
      >
        <LottieAnimation />
      </motion.div>
      <motion.div
        id="section-2"
        className="your-section-class"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: animatedSections.includes('section-2') ? 1 : 0, x: animatedSections.includes('section-2') ? 0 : 100 }}
      >
        <Card />
      </motion.div>
      <motion.div
        id="section-3"
        className="your-section-class"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: animatedSections.includes('section-3') ? 1 : 0, x: animatedSections.includes('section-3') ? 0 : 100 }}
      >
        <Card />
      </motion.div>
    </main>
  );
}



