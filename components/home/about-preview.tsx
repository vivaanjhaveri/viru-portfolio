'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn } from '@/lib/motion';

export function AboutPreview() {
	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">
				<SectionHeader
					title="About Me"
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="relative h-[600px] rounded-lg overflow-hidden"
					>
						<Image
							src="/images/photo.png"
							alt="Viru Gurudath"
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>

					<motion.div
						variants={fadeIn('left', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="flex flex-col justify-center"
					>
						<h3 className="text-2xl font-bold mb-4">Engineer in Training</h3>
						<p className="text-muted-foreground mb-6">
							I'm a dedicated engineering student with a passion for innovation and problem-solving.
							My academic journey has equipped me with strong technical skills and a deep understanding
							of engineering principles that I apply to real-world challenges.
						</p>

						<div className="grid grid-cols-2 gap-4 mb-6">
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Education</h4>
									<p className="text-sm text-muted-foreground">B.A.Sc. Integrated Engineering</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Experience</h4>
									<p className="text-sm text-muted-foreground">3 Years</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Projects</h4>
									<p className="text-sm text-muted-foreground">7+ Completed</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Awards</h4>
									<p className="text-sm text-muted-foreground">4 Recognitions</p>
								</CardContent>
							</Card>
						</div>

						<Button asChild>
							<Link href="/about">
								Learn More <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}