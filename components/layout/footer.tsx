import Link from 'next/link';
import { Linkedin, Github, Twitter, Facebook, Instagram, Phone, Mail, MessageSquare } from 'lucide-react';

import { siteConfig } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ icon: <Phone className="h-5 w-5" />, href: siteConfig.links.phone, label: 'Phone' },
		{ icon: <Mail className="h-5 w-5" />, href: siteConfig.links.email, label: 'Email' },
		{ icon: <Linkedin className="h-5 w-5" />, href: siteConfig.links.linkedin, label: 'LinkedIn' },
		{ icon: <Github className="h-5 w-5" />, href: siteConfig.links.github, label: 'GitHub' },
		{ icon: <MessageSquare className="h-5 w-5" />, href: siteConfig.links.whatsapp, label: 'WhatsApp' },
		{ icon: <Twitter className="h-5 w-5" />, href: siteConfig.links.twitter, label: 'Twitter' },
		{ icon: <Facebook className="h-5 w-5" />, href: siteConfig.links.facebook, label: 'Facebook' },
		{ icon: <Instagram className="h-5 w-5" />, href: siteConfig.links.instagram, label: 'Instagram' },
	];

	const navColumns = [
		{
			title: 'About',
			links: [
				{ title: 'About Me', href: '/about' },
				{ title: 'Education', href: '/education' },
				{ title: 'Skills', href: '/skills' },
			],
		},
		{
			title: 'Work',
			links: [
				{ title: 'Experience', href: '/experience' },
				{ title: 'Projects', href: '/projects' },
				{ title: 'Certificates', href: '/certificates' },
			],
		},
		{
			title: 'Connect',
			links: [
				{ title: 'Blog', href: '/blog' },
				{ title: 'Contact', href: '/contact' },
				{ title: 'Resume', href: '#', download: true },
			],
		},
	];

	return (
		<footer className="bg-card py-12 border-t">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="md:col-span-1">
						<Link href="/" className="inline-block">
							<span className="text-2xl font-bold text-gradient">Portfolio</span>
						</Link>
						<p className="mt-4 text-sm text-muted-foreground">
							A professional portfolio showcasing my skills, projects, and achievements in engineering.
						</p>
						<div className="mt-6 flex flex-wrap gap-3">
							{socialLinks.map((link, index) => (
								<Button key={index} size="icon" variant="outline" asChild>
									<Link href={link.href} aria-label={link.label} target="_blank" rel="noreferrer">
										{link.icon}
									</Link>
								</Button>
							))}
						</div>
					</div>

					<div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
						{navColumns.map((column, index) => (
							<div key={index}>
								<h3 className="font-semibold mb-3">{column.title}</h3>
								<ul className="space-y-2">
									{column.links.map((link, linkIndex) => (
										<li key={linkIndex}>
											<Link
												href={link.href}
												className="text-muted-foreground hover:text-primary text-sm transition-colors"
												{...(link.download ? { download: true } : {})}
											>
												{link.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				<Separator className="my-8" />

				<div className="flex flex-col sm:flex-row items-center justify-between text-sm">
					<p className="text-muted-foreground">
						© {currentYear} Engineering Portfolio. All rights reserved.
					</p>
					<div className="mt-4 sm:mt-0 flex gap-4">
						<Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
							Privacy Policy
						</Link>
						<Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}