'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown } from 'lucide-react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';

import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer } from '@/lib/motion';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={[0, 0, 0]} scale={2}>
      <meshStandardMaterial 
        color="#00C8A0" 
        wireframe 
        emissive="#00C8A0"
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight position={[10, 10, 5]} intensity={0.3} />
          <AnimatedSphere />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5} 
          />
        </Canvas>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32 flex flex-col items-center justify-center min-h-[90vh]">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1 
            variants={fadeIn('up', 0.3)}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="text-gradient">Engineering</span> Portfolio
          </motion.h1>
          
          <motion.p 
            variants={fadeIn('up', 0.5)}
            className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            A showcase of my projects, skills, and achievements in the field of engineering.
          </motion.p>
          
          <motion.div 
            variants={fadeIn('up', 0.7)}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Button size="lg" asChild>
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#" download>
                Download CV <FileDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}