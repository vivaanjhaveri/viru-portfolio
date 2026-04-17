'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function ExperiencePage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-3xl mx-auto"
				>
					<motion.h1
						variants={fadeIn('down', 0.2)}
						className="text-4xl font-bold mb-6"
					>
						Professional Experience
					</motion.h1>
					<motion.p
						variants={fadeIn('down', 0.3)}
						className="text-lg text-muted-foreground mb-12"
					>
						My journey through various roles and projects in the engineering field.
					</motion.p>

					<div className="space-y-8">
						{experiences.map((exp, index) => (
							<motion.div
								key={index}
								variants={fadeIn('up', 0.2 * index)}
							>
								<Card className="card-gradient">
									<CardContent className="p-6">
										<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
											<div>
												<h2 className="text-2xl font-semibold">{exp.title}</h2>
												<p className="text-primary">{exp.company}</p>
											</div>
										</div>

										<div className="space-y-3 mb-6">
											<div className="flex items-center text-muted-foreground">
												<MapPin className="h-4 w-4 mr-2" />
												{exp.location}
											</div>
											<div className="flex items-center text-muted-foreground">
												<Calendar className="h-4 w-4 mr-2" />
												{exp.startDate} - {exp.endDate}
											</div>
										</div>

										<div className="space-y-4">
											<h3 className="text-lg font-semibold">Key Responsibilities</h3>
											<ul className="space-y-2">
												{exp.description.map((item, i) => (
													<li key={i} className="flex items-start">
														<CheckCircle2 className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
														<span className="text-muted-foreground">{item}</span>
													</li>
												))}
											</ul>
										</div>

										<div className="mt-6">
											<h3 className="text-lg font-semibold mb-3">Technologies & Tools</h3>
											<div className="flex flex-wrap gap-2">
												{exp.technologies.map((tech, i) => (
													<Badge key={i} variant="secondary">
														{tech}
													</Badge>
												))}
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}