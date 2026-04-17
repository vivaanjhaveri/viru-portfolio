import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
	title: string;
	description?: string;
	className?: string;
	children?: ReactNode;
}

export function SectionHeader({
	title,
	description,
	className,
	children,
}: SectionHeaderProps) {
	return (
		<div className={cn('space-y-2', className)}>
			<h2 className="section-title">{title}</h2>
			{description && <p className="text-muted-foreground max-w-2xl">{description}</p>}
			{children}
		</div>
	);
}