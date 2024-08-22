import { LucideProps } from 'lucide-react';
import React, { ForwardRefExoticComponent, RefAttributes } from 'react';

interface ListingCategoryProps {
	icon: ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
	>;
	label: string;
	description: string;
}
export default function ListingCategory({
	description,
	icon: Icon,
	label,
}: ListingCategoryProps) {
	return (
		<div className='flex flex-col gap-6'>
			<div className='flex flex-row items-center gap-4'>
				<Icon className='size-6 text-muted-foreground' />
				<div className='flex flex-col'>
					<div className='text-lg font-semibold'>{label}</div>
					<div className='text-muted-foreground font-light text-sm'>
						{description}
					</div>
				</div>
			</div>
		</div>
	);
}
