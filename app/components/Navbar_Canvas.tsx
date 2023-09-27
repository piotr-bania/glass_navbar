'use client'

import { Canvas } from '@react-three/fiber'
import Navbar from './Navbar'
import { OrthographicCamera, Environment } from '@react-three/drei'


const Navbar_Canvas = () => {
    return (
        <Canvas className='canvas'>
            <OrthographicCamera makeDefault position={[0, 0, 1]} zoom={15} near={-15} far={15} />
            <Environment preset="dawn" />
            <ambientLight intensity={1} />

            <Navbar />
        </Canvas>
    )
}

export default Navbar_Canvas