import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import { Environment } from '@react-three/drei'
export const Rendermodel = ({ children, className }) => {
    return (
        <Canvas
        className={clsx("w-screen h-screen  relative", className)}>
            <Suspense fallback={null}>
                {children}
            </Suspense>
            <Environment preset='dawn'/>
        </Canvas>
    )
}
