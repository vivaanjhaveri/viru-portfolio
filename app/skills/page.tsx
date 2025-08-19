'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Brain, Languages } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { skills } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function SkillsPage() {
	const technicalSkills = skills.filter(skill => skill.category === 'technical');
	const softwareSkills = skills.filter(skill => skill.category === 'software');
	const softSkills = skills.filter(skill => skill.category === 'soft');
	const languageSkills = skills.filter(skill => skill.category === 'language');

	const SkillCategory = ({
		title,
		skills,
		icon,
		delay
	}: {
		title: string;
		skills: typeof technicalSkills;
		icon: React.ReactNode;
		delay: number;
	}) => (
		<motion.div variants={fadeIn('up', delay)} className="h-full">
			<Card className="card-gradient h-full flex flex-col">
				<CardContent className="p-6 flex-1 flex flex-col">
					<div className="flex items-center gap-2 mb-6">
						{icon}
						<h2 className="text-2xl font-semibold">{title}</h2>
					</div>
					<ul className="list-disc list-inside text-muted-foreground space-y-2 flex-1">
						{skills.map((skill, index) => (
							<li key={index}>{skill.name}</li>
						))}
					</ul>
				</CardContent>
			</Card>
		</motion.div>
	);

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div variants={fadeIn('down', 0.2)} className="text-center mb-12">
						<h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							A comprehensive overview of my technical abilities, software proficiency,
							soft skills, and language capabilities.
						</p>
					</motion.div>

					{/* grid with equal height cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
						<SkillCategory
							title="Technical Skills"
							skills={technicalSkills}
							icon={<Cpu className="h-6 w-6 text-primary" />}
							delay={0.3}
						/>
						<SkillCategory
							title="Softwares & Coding Languages"
							skills={softwareSkills}
							icon={<Code2 className="h-6 w-6 text-secondary" />}
							delay={0.4}
						/>
						<SkillCategory
							title="Soft Skills"
							skills={softSkills}
							icon={<Brain className="h-6 w-6 text-accent" />}
							delay={0.5}
						/>
						<SkillCategory
							title="Languages"
							skills={languageSkills}
							icon={<Languages className="h-6 w-6 text-primary" />}
							delay={0.6}
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
