'use client';
import { IconNode, Loader, LucideIcon } from 'lucide-react';
import React, { ReactElement } from 'react';

interface ButtonProps {
	label: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	outline?: boolean;
	small?: boolean;
	icon?: ReactElement;
}
export default function Button({
	label,
	onClick,
	disabled,
	icon: Icon,
	outline,
	small,
}: ButtonProps) {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full flex items-center px-auto justify-center gap-5 ${
				outline ? 'bg-white' : 'bg-black'
			} ${outline ? 'border-black' : 'border-gray-500'} ${
				outline ? 'text-black' : 'text-white'
			} ${
				small
					? 'py-1 text-sm font-light border-[1px]'
					: 'py-3 text-md font-semibold border-2'
			}`}
		>
			{/* {Icon && <Icon />} */}
			{Icon}
			{label}
			{disabled &&(<Loader className='animate-spin size-4'/>)}
		</button>
	);
}
