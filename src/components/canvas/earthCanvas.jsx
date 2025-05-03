import React,{Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,useGLTF } from '@react-three/drei';
import {useMediaQuery} from 'react-responsive';
import { Stars } from '@react-three/drei';
const Earth=()=>{
    const isLargeScreen=useMediaQuery({query:'(min-width:1024px)'});
    const isMediumScreen=useMediaQuery({query:'(min-width:768px) and (max-width:1023px)'});
    const isSmallScreen=useMediaQuery({query:'(max-width:768px)'});

    const scale=isLargeScreen ? 1.8 : isMediumScreen ? 1.7  :1.9;
    console.log(scale)
    const earth= useGLTF('/models/stylized_planet.glb');
    return <primitive object={earth.scene} scale={scale}  />
}
const EarthCanvas=()=>{
    
     return (
        <div className="w-full h-[270px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
         <Canvas frameloop='demand' shadows  camera={{ position: [0, 0, 4], fov: 50, near: 0.1, far: 1000 }} gl={{ preserveDrawingBuffer: true, alpha: true }}  >
          
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 3, 3]} intensity={1.2} />

        <Suspense fallback={null}  >
        <Stars
    radius={100}        // how far the stars are spread
    depth={50}          // how deep (z) the stars go
    count={5000}        // number of stars
    factor={4}          // size factor (lower = bigger)
    saturation={0}
    fade                // makes stars fade as they approach the camera
    speed={0.1}           // speed of star rotation
  />
        <Earth />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
    </div>
    

     )
}
export default EarthCanvas ;