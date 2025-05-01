import React,{Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,useGLTF } from '@react-three/drei';
import {useMediaQuery} from 'react-responsive';
const Earth=()=>{
    const isLargeScreen=useMediaQuery({query:'(min-width:1024px)'});
    const isMediumScreen=useMediaQuery({query:'(min-width:768px) and (max-width:1023px)'});
    const isSmallScreen=useMediaQuery({query:'(max-width:768px)'});

    const scale=isLargeScreen ? 1.9 : isMediumScreen ? 1.7  :1;
    console.log(scale)
    const earth= useGLTF('/models/stylized_planet.glb');
    return <primitive object={earth.scene} scale={scale}  />
}
const EarthCanvas=()=>{
     return (
       
         <Canvas frameloop='demand' shadows  camera={{ position: [0, 0, 4], fov: 50, near: 0.1, far: 1000 }} gl={{ preserveDrawingBuffer: true, alpha: true }} style={{width:"100%",height:"600px"}} >
          
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 3, 3]} intensity={1.2} />

        <Suspense fallback={null}  >
        <Earth />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
    

     )
}
export default EarthCanvas ;