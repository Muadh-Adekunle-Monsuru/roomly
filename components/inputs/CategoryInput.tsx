'use client';
import { LucideProps } from 'lucide-react';
import React, { ForwardRefExoticComponent, RefAttributes } from 'react';

interface CategoryInputProps {
	icon: ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
	>;
	label: string;
	selected: boolean;
	onClick: (value: string) => void;
}

export default function CategoryInput({
	icon: Icon,
	label,
	onClick,
	selected,
}: CategoryInputProps) {
	return (
		<div
			onClick={() => onClick(label)}
			className={` rounded-xl border-2 p-4 flex flex-row items-center md:flex-col gap-3 hover:border-black transition cursor-pointer ${
				selected ? 'border-black bg-gray-100' : 'border-neutral-200'
			}`}
		>
			<Icon className='size-5' />
			<div className='font-medium '>{label}</div>
		</div>
	);
}
