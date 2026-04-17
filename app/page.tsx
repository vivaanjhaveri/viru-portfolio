'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { HeroSection } from '@/components/home/hero-section';
import { AboutPreview } from '@/components/home/about-preview';
import { ProjectsPreview } from '@/components/home/projects-preview';
import { SkillsPreview } from '@/components/home/skills-preview';
import { ContactPreview } from '@/components/home/contact-preview';

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulate loading time
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<AnimatePresence>
				{isLoading && (
					<motion.div
						className="fixed inset-0 z-50 flex items-center justify-center bg-background"
						initial={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<motion.div
							className="flex flex-col items-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<motion.div
								className="w-16 h-16 border-t-4 border-primary border-solid rounded-full"
								animate={{ rotate: 360 }}
								transition={{
									repeat: Infinity,
									duration: 1,
									ease: "linear"
								}}
							/>
							<motion.p
								className="mt-4 text-lg"
								animate={{
									opacity: [0.5, 1, 0.5],
								}}
								transition={{
									repeat: Infinity,
									duration: 1.5
								}}
							>
								Loading...
							</motion.p>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{!isLoading && (
				<>
					<HeroSection />
					<AboutPreview />
					<ProjectsPreview />
					<SkillsPreview />
					<ContactPreview />
				</>
			)}
		</>
	);
}