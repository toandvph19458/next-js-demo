import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './icon.json'; // Đường dẫn đến tệp JSON Lottie của bạn
import animationData2 from './icon2.json'; // Đường dẫn đến tệp JSON Lottie của bạn
const LottieAnimation = () => {
    const [isHovered, setIsHovered] = useState(false);
    const defaultOptions = {
        loop: true,
        autoplay: isHovered,

        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const defaultOptions2 = {
        playOnHover: true,
        loop: true,
        autoplay: false,
        animationData: animationData2,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return <>
        <div onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ width: 400, height: 400 }}>
            <Lottie options={defaultOptions} height={400} width={400} isPaused={!isHovered} isHovered={!isHovered} />

        </div>
        <Lottie options={defaultOptions2} height={500} width={700} />

    </>;
};

export default LottieAnimation;
