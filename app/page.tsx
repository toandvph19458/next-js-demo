'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import UploadAndConvert from './components/Upload';
import icon from './icon.json'
import LottieAnimation from './Animation';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LottieAnimation/>
    <UploadAndConvert/>
    </main>
  );
}



