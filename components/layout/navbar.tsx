'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { X, Menu, ChevronDown } from 'lucide-react';

import { siteConfig } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.header
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
				}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="container relative flex h-16 items-center justify-between py-4">
				{/* Left-aligned name */}
				<div className="absolute left-0 top-1/2 -translate-y-1/2">
					<Link href="/" className="flex items-center space-x-2">
						<motion.div
							whileHover={{ scale: 1.05 }}
							className="font-bold text-2xl text-gradient"
						>
							Viru Gurudath
						</motion.div>
					</Link>
				</div>

				{/* Center-aligned desktop nav */}
				<nav className="hidden md:flex mx-auto gap-6">
					{siteConfig.mainNav.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`nav-link text-sm font-medium transition-colors hover:text-primary ${pathname === item.href
								? 'text-primary active'
								: 'text-muted-foreground'
								}`}
						>
							{item.title}
						</Link>
					))}
				</nav>

				{/* Right-aligned mobile menu */}
				<div className="md:hidden ml-auto">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent className="flex flex-col p-6">
							<div className="flex items-center justify-between mb-8">
								<Link href="/" className="flex items-center space-x-2">
									<span className="font-bold text-2xl text-gradient">Portfolio</span>
								</Link>
							</div>
							<nav className="flex flex-col gap-4">
								{siteConfig.mainNav.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className={`text-base font-medium transition-colors hover:text-primary ${pathname === item.href ? 'text-primary' : 'text-muted-foreground'
											}`}
									>
										{item.title}
									</Link>
								))}
							</nav>
							<div className="mt-auto pt-4">
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="outline" className="w-full justify-between">
											Social Links
											<ChevronDown className="h-4 w-4 ml-2" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuItem asChild>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
												LinkedIn
											</Link>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</motion.header>
	);
}
