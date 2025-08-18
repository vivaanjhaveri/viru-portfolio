'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function ContactPage() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus('sending');

		const response = await fetch('https://formspree.io/f/mkgzeglj', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				name: formState.name,
				email: formState.email,
				subject: formState.subject,
				message: formState.message,
			}),
		});

		if (response.ok) {
			setStatus('success');
			setFormState({ name: '', email: '', subject: '', message: '' });
		} else {
			setStatus('error');
		}
	};

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-4xl mx-auto"
				>
					<motion.div variants={fadeIn('down', 0.2)} className="text-center mb-12">
						<h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
						<p className="text-lg text-muted-foreground">
							Have a question or want to work together? Feel free to reach out!
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<motion.div variants={fadeIn('right', 0.3)}>
							<div className="bg-muted/30 rounded-xl p-6">
								<h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
								<div className="space-y-4">
									<div className="flex items-center">
										<Phone className="h-5 w-5 text-primary mr-3" />
										<a
											href="tel:+16049685595"
											className="text-muted-foreground hover:underline"
										>
											+1 604 968 5595
										</a>
									</div>
									<div className="flex items-center">
										<Mail className="h-5 w-5 text-primary mr-3" />
										<a
											href="https://mail.google.com/mail/?view=cm&fs=1&to=virugurudath@gmail.com"
											target="_blank"
											rel="noopener noreferrer"
											className="text-muted-foreground hover:underline"
										>
											virugurudath@gmail.com
										</a>
									</div>
									<div className="flex items-center">
										<MapPin className="h-5 w-5 text-primary mr-3" />
										<a
											href="https://www.google.com/maps?q=Vancouver,+Canada"
											target="_blank"
											rel="noopener noreferrer"
											className="text-muted-foreground hover:underline"
										>
											Vancouver, Canada
										</a>
									</div>
								</div>
							</div>
						</motion.div>

						<motion.div variants={fadeIn('left', 0.3)}>
							<form onSubmit={handleSubmit} className="space-y-4">
								<Input
									placeholder="Your Name"
									name="name"
									value={formState.name}
									onChange={handleChange}
									required
								/>
								<Input
									type="email"
									placeholder="Your Email"
									name="email"
									value={formState.email}
									onChange={handleChange}
									required
								/>
								<Input
									placeholder="Subject"
									name="subject"
									value={formState.subject}
									onChange={handleChange}
									required
								/>
								<Textarea
									placeholder="Your Message"
									name="message"
									value={formState.message}
									onChange={handleChange}
									required
									className="min-h-[150px]"
								/>
								<Button
									type="submit"
									className="w-full"
									disabled={status === 'sending'}
								>
									{status === 'sending' ? 'Sending...' : 'Send Message'}
									<Send className="ml-2 h-4 w-4" />
								</Button>

								{status === 'success' && (
									<p className="text-sm text-green-600 mt-2">
										Thanks! Your message was sent.
									</p>
								)}
								{status === 'error' && (
									<p className="text-sm text-red-600 mt-2">
										Oops! Something went wrong. Please try again.
									</p>
								)}
							</form>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
