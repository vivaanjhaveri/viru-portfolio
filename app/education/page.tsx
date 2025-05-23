'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { education } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function EducationPage() {
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
						Education
					</motion.h1>
					<motion.p
						variants={fadeIn('down', 0.3)}
						className="text-lg text-muted-foreground mb-12"
					>
						My academic journey and achievements in the field of engineering.
					</motion.p>

					<div className="space-y-8">
						{education.map((edu, index) => (
							<motion.div
								key={index}
								variants={fadeIn('up', 0.2 * index)}
								className="relative"
							>
								<Card className="card-gradient">
									<CardContent className="p-6">
										<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
											<div>
												<h2 className="text-2xl font-semibold">{edu.degree}</h2>
												<p className="text-primary">{edu.field}</p>
											</div>
											{edu.gpa && (
												<p className="text-lg font-semibold mt-2 md:mt-0">
													GPA: {edu.gpa}
												</p>
											)}
										</div>

										<div className="space-y-3">
											<div className="flex items-center text-muted-foreground">
												<MapPin className="h-4 w-4 mr-2" />
												{edu.institution}, {edu.location}
											</div>
											<div className="flex items-center text-muted-foreground">
												<Calendar className="h-4 w-4 mr-2" />
												{edu.startDate} - {edu.endDate}
											</div>
										</div>

										<div className="mt-6">
											<h3 className="text-lg font-semibold mb-3">Achievements</h3>
											<ul className="space-y-2">
												{edu.achievements.map((achievement, i) => (
													<li key={i} className="flex items-start">
														<Award className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
														<span className="text-muted-foreground">{achievement}</span>
													</li>
												))}
											</ul>
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