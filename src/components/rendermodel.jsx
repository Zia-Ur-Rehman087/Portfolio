import React from 'react'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
export const rendermodel = ({ children, className }) => {
    return (
        <Canvas
        className={clsx("w-screen h-screen relative", className)}>
            <Suspense fallback={null}>
                {children}
            </Suspense>
        </Canvas>
    )
}
