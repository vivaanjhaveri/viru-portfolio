'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionHeader } from '@/components/ui/section-header';
import { fadeIn } from '@/lib/motion';

export function ContactPreview() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Form submission would be handled here
		alert('Form submitted! This is a demo - no actual email is sent.');
		setFormState({ name: '', email: '', message: '' });
	};

	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4">
				<SectionHeader
					title="Get In Touch"
					description="Interested in working together or have a question? Feel free to reach out!"
					className="text-center"
				/>

				<motion.div
					variants={fadeIn('up', 0.3)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="max-w-md mx-auto mt-10"
				>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<Input
								name="name"
								placeholder="Your Name"
								value={formState.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<Input
								name="email"
								type="email"
								placeholder="Your Email"
								value={formState.email}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<Textarea
								name="message"
								placeholder="Your Message"
								value={formState.message}
								onChange={handleChange}
								required
								className="min-h-[150px]"
							/>
						</div>
						<Button type="submit" className="w-full">
							Send Message <Send className="ml-2 h-4 w-4" />
						</Button>
					</form>
				</motion.div>
			</div>
		</section>
	);
}