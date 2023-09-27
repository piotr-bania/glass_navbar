import React, { useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei/core'
import * as THREE from 'three'

const Navbar = () => {

    const material = React.useMemo(
        () =>
            new THREE.MeshPhysicalMaterial({
                transmission: 0.15,
                opacity: 0.85,
                clearcoat: .5,
                clearcoatRoughness: 0.1,
                roughness: 0.25,
                metalness: 0.75,
                envMapIntensity: 1.25,
                transparent: true,
                depthWrite: false,
                depthTest: true,
            }),
        []
    )

    const logoRef = useRef()
    const { nodes: logo } = useLoader(GLTFLoader, '/models/logo.glb')

    const navbarRef = useRef()
    const { nodes: navbar } = useLoader(GLTFLoader, '/models/navbar.glb')

    useFrame(() => {
        logoRef.current.rotation.y -= 0.01,
        navbarRef.current.rotation.x += 0.0025
    })

    return (
        <>
            {/* Navbar background */}
            <mesh ref={navbarRef} scale={20}
                geometry={navbar['BezierCurve'].geometry}
                position={navbar['BezierCurve'].position}>
                <meshPhysicalMaterial {...material} color={'#07032E'} />
            </mesh>

            {/* Logo */}
            <group ref={logoRef} position={[-45, 0, 5]} scale={25} >
                <mesh
                    geometry={logo['base'].geometry}
                    position={logo['base'].position}>
                    <meshPhysicalMaterial {...material} color={'#6526D1'} />
                </mesh>
                <mesh
                    geometry={logo['top'].geometry}
                    position={logo['top'].position}>
                    <meshPhysicalMaterial {...material} color={'#9B26A1'} />
                </mesh>
                <mesh
                    geometry={logo['bottom'].geometry}
                    position={logo['bottom'].position}>
                    <meshPhysicalMaterial {...material} color={'#D02670'} />
                </mesh>
            </group>

            {/* Links */}
            <group scale={2}>
                <Float
                    speed={5}
                    rotationIntensity={.2}
                    floatIntensity={.1}
                    floatingRange={[-.5, .5]}
                >
                    <Text
                        font='/fonts/Dolce_Amyara.otf'
                        position={[2, 0, 5]}
                        color={'#6526D1'}>
                        Home
                    </Text>
                </Float>
                <Float
                    speed={5}
                    rotationIntensity={.2}
                    floatIntensity={.1}
                    floatingRange={[-.5, .5]}
                >
                    <Text
                        font='/fonts/Dolce_Amyara.otf'
                        position={[10, 0, 5]}
                        color={'#9B26A1'}>
                        About
                    </Text>
                </Float>
                <Float
                    speed={5}
                    rotationIntensity={.2}
                    floatIntensity={.1}
                    floatingRange={[-.5, .5]}
                >
                    <Text
                        font='/fonts/Dolce_Amyara.otf'
                        position={[18, 0, 5]}
                        color={'#6526D1'}>
                        Projects
                    </Text>
                </Float>
            </group>
        </>
    )
}

export default Navbar