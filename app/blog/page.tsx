'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function BlogPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Blog</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Insights, experiences, and knowledge sharing from my engineering journey.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogPosts.map((post, index) => (
							<motion.div
								key={index}
								variants={fadeIn('up', 0.2 * index)}
							>
								<Card className="h-full card-gradient">
									<div className="relative h-48">
										<Image
											src={post.image}
											alt={post.title}
											fill
											className="object-cover rounded-t-lg"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									</div>
									<CardContent className="p-6">
										<div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
											<div className="flex items-center">
												<Calendar className="h-4 w-4 mr-1" />
												{post.date}
											</div>
											<div className="flex items-center">
												<User className="h-4 w-4 mr-1" />
												{post.author}
											</div>
										</div>
										<h2 className="text-xl font-semibold mb-2">{post.title}</h2>
										<p className="text-muted-foreground">{post.excerpt}</p>
									</CardContent>
									<CardFooter className="p-6 pt-0">
										<Button variant="outline" className="w-full" asChild>
											<Link href={`/blog/${post.slug}`}>
												Read More <ArrowRight className="ml-2 h-4 w-4" />
											</Link>
										</Button>
									</CardFooter>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}