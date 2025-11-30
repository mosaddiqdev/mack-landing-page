import { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>Macbook Pro</h1>
        <img src="/title.png" alt="Macbook Pro" />
      </div>

      <video ref={videoRef} src="/videos/hero.mp4" autoPlay playsInline muted />
      <button>Buy</button>
      <p>From ₹1,07,817 or ₹3,454.46/mo. for 24 mo. with Apple Card.</p>
    </section>
  );
};

export default Hero;
