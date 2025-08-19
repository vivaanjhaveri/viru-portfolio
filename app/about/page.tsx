'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Guitar, Piano } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container space-y-24">
				{/* About Section */}
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">About Me</h1>
						<p className="text-lg text-muted-foreground">
							I’m an Integrated Engineering graduate, with Distinction, passionate about combining mechanical design, electronics, and computational analysis to create innovative solutions. Growing up, I took inspiration from my Father, a former Mechanical Engineer, and found myself constantly tinkering and disassembling devices to figure out how they work. My passion for Physics only further drove me towards the Sciences and Engineering.
						</p>
						<p className="text-lg text-muted-foreground"> 
							I’ve worked on projects in robotics, smart monitoring, and renewable energy, focusing on design optimization, simulation workflows, prototyping, and real-time control systems. 
							Outside of my technical Engineering work, I’m a dedicated martial artist, musician, and photographer, which highlights my adaptability, sharpens my creativity, precision, and attention to detail.
						</p>
						<div className="space-y-4">
					<h2 className="text-2xl font-semibold">My Journey</h2>
					<p className="text-muted-foreground">
						Originally from India, I completed the IBDP at Canadian International School Bangalore before moving to UBC to study Integrated Engineering, a program that allowed me to shape my own path within the intersection of key Mechanical and Electrical engineering concepts through project-based, independent learning. I began my professional journey at Log9 Materials, where I worked on high-impact, 
						  <span className="font-bold text-gradient"> confidential </span>
						(Computational Fluid Dynamics and Finite Element Analysis) projects, later joined Hynes Group as an HVAC Research Assistant (Building Information Management, Computational Fluid Dynamics), and was subsequently invited back to Log9. I believe my call-backs symbolise and endorse the value of my early contributions, my work ethic, and my resourcefulness.
					</p>
					</div>
					</motion.div>

					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[700px]">
						<Image
							src="/images/photo.png"
							alt="Professional photo"
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				{/* Education / Experience / Skills */}
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6 space-y-4">
								<h3 className="text-xl font-semibold">Education</h3>
								<p className="text-muted-foreground">
									Graduated with Distinction in Integrated Engineering, specialising in Mechanical and Electrical Engineering from The University of British Columbia.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6 space-y-4">
								<h3 className="text-xl font-semibold">Experience</h3>
								<p className="text-muted-foreground">
									Valuable internships and projects with cutting-edge technologies and methodologies. Worked in Industry and in Research domains, demonstrating adaptability in different technical environments.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6 space-y-4">
								<h3 className="text-xl font-semibold">Skills</h3>
								<p className="text-muted-foreground">
									Embedded Systems, Computer-Aided Design (CAD), Finite Element Analysis (FEA), Computational Fluid Dynamics (CFD), Building Information Management (BIM). Breadth of competency demonstrates strong problem-solving abilities and independent analytical thinking skills required for self-learning.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>

				{/* Music Covers Section */}
				<div className="space-y-12">
					<motion.h3
						variants={fadeIn('up', 0.1)}
						className="text-3xl font-bold text-center"
					>
						Outside The Classroom
					</motion.h3>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
						{/* Piano Section */}
						<motion.div
							variants={fadeIn('up', 0.1)}
							className="flex flex-col space-y-6 h-full"
						>
							<div className="flex items-center gap-2">
								<Piano className="h-6 w-6 text-primary" />
								<h3 className="text-xl font-bold">Piano Covers</h3>
							</div>

							<div className="space-y-4">
								{/* Interstellar */}
								<div className="space-y-2">
									<h4 className="text-lg font-semibold">Interstellar</h4>
									<div className="aspect-video rounded-lg overflow-hidden">
										<iframe
											className="w-full h-full rounded-lg"
											src="https://www.youtube.com/embed/xpoxaA8mEdk?rel=0"
											title="Piano Performance"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										/>
									</div>
								</div>

								{/* Man of Steel */}
								<div className="space-y-2">
									<h4 className="text-lg font-semibold">Man of Steel</h4>
									<div className="aspect-video rounded-lg overflow-hidden">
										<iframe
											className="w-full h-full rounded-lg"
											src="https://www.youtube.com/embed/OCHJRCFjJGM?rel=0"
											title="Piano Performance 2"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										/>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Guitar Section */}
						<motion.div
							variants={fadeIn('up', 0.2)}
							className="flex flex-col space-y-6 h-full"
						>
							<div className="flex items-center gap-2">
								<Guitar className="h-6 w-6 text-primary" />
								<h3 className="text-xl font-bold">Guitar Cover</h3>
							</div>

							<div className="space-y-4">
								{/* The Last of Us */}
								<div className="space-y-2">
									<h4 className="text-lg font-semibold">The Last of Us</h4>
									<div className="aspect-video rounded-lg overflow-hidden">
										<iframe
											className="w-full h-full rounded-lg"
											src="https://www.youtube.com/embed/qbPn2S3KehE?rel=0"
											title="Guitar Performance 1"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										/>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
