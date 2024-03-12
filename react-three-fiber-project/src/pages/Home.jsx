import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Brain from '../models/Brain';
const Home = () => {
  const adjustBrainforScreen = () => {
    let screenScale,
      screenPosition = null;
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [30, 30, 30];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [30, 30, 30];
      screenPosition = [0, -15.5, -43];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [brainScale, brainPosition, rotation] = adjustBrainforScreen();
  return (
    <section className="w-full h-screen relative bg-black-500">
      <Canvas
        className="w-full h-screen bg-black"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}></Suspense>
        <directionalLight />
        <ambientLight />
        <pointLight />
        <spotLight />
        <Brain
          position={brainPosition}
          scale={brainScale}
          rotation={rotation}
        />
      </Canvas>
    </section>
  );
};

export default Home;
