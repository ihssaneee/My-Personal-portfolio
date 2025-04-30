import React,{Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,useGLTF } from '@react-three/drei';

const Hologram=()=>{
    const hologram= useGLTF('/models/stylized_planet.glb');
    return <primitive object={hologram.scene} scale={1.9} />
}
const HologramCanvas=()=>{
     return (
       
         <Canvas frameloop='demand' shadows  camera={{ position: [0, 0, 4], fov: 50, near: 0.1, far: 1000 }} gl={{ preserveDrawingBuffer: true, alpha: true }}   >
          
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 3, 3]} intensity={1.2} />

        <Suspense fallback={null}  >
        <Hologram />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
    

     )
}
export default HologramCanvas ;