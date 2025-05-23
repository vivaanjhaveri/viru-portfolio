import { Variants } from 'framer-motion';

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay: number = 0): Variants => {
	return {
		hidden: {
			y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
			x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
			opacity: 0,
		},
		show: {
			y: 0,
			x: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				duration: 0.8,
				delay,
				ease: [0.25, 0.25, 0.25, 0.75],
			},
		},
	};
};

export const fadeInScale = (delay: number = 0): Variants => {
	return {
		hidden: {
			opacity: 0,
			scale: 0.95,
		},
		show: {
			opacity: 1,
			scale: 1,
			transition: {
				type: 'spring',
				duration: 0.5,
				delay,
				ease: [0.25, 0.25, 0.25, 0.75],
			},
		},
	};
};

export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0): Variants => {
	return {
		hidden: {},
		show: {
			transition: {
				staggerChildren,
				delayChildren,
			},
		},
	};
};

export const cardVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			ease: 'easeInOut',
		},
	},
};

export const slideIn = (direction: 'up' | 'down' | 'left' | 'right', type: string, delay: number, duration: number): Variants => {
	return {
		hidden: {
			x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
			y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
		},
		show: {
			x: 0,
			y: 0,
			transition: {
				type,
				delay,
				duration,
				ease: 'easeOut',
			},
		},
	};
};

export const textVariant = (delay: number): Variants => {
	return {
		hidden: {
			y: 20,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				duration: 0.8,
				delay,
			},
		},
	};
};

export const textContainer: Variants = {
	hidden: {
		opacity: 0,
	},
	show: (i = 1) => ({
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
	}),
};

export const textVariant2: Variants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'tween',
			ease: 'easeIn',
		},
	},
};