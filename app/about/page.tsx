'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">About Me</h1>
						<p className="text-lg text-muted-foreground">
I’m an Integrated Engineering graduate passionate about combining mechanical design, electronics, and computational analysis to create innovative solutions. My skills span Embedded Systems, CAD, FEA, CFD, and BIM. I’ve worked on projects in robotics, smart monitoring, and renewable energy, focusing on design optimization, simulation workflows, prototyping, and real-time control systems. Outside of engineering, I’m a dedicated musician and photographer, which sharpens my creativity, precision, and attention to detail.						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							<p className="text-muted-foreground">
								Originally from India, I completed the IBDP at Canadian International School (Bangalore) before moving to UBC to study Integrated Engineering—a program that let me shape my own path at the intersection of mechanical design and electrical systems through project-based learning. I began my professional journey at Log9 Materials, where I worked on high-impact, confidential mechatronics projects, later joined Hynes Group as an HVAC Research Assistant, and was subsequently invited back to Log9—recognition I value as a strong endorsement of my early contributions.
							</p>
						</div>
					</motion.div>

					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[550px]">
						<Image
							src="/images/photo.png"
							alt="Professional photo"
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Education</h3>
								<p className="text-muted-foreground">
									Currently Graduated, with Distinction, with a Bachelor's degree in Integrated Engineering with a focus on
									Mechanical and Electrical Engineering.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Experience</h3>
								<p className="text-muted-foreground">
									Gained valuable experience through internships and projects, working
									with cutting-edge technologies and methodologies driving for results.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Skills</h3>
								<p className="text-muted-foreground">
									Proficient in various engineering tools and technologies, such as Embedded Systems, CAD, FEA, CFD, and BIM, with a strong
									foundation in problem-solving and analytical thinking.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}