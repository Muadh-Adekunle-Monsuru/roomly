'use client';
import React from 'react';

interface HeadingProps {
	title: string;
	subtitle?: string;
	center?: boolean;
}
export default function Heading({ title, center, subtitle }: HeadingProps) {
	return (
		<div className={center ? 'text-center' : 'text-start'}>
			<div className='text-xl font-bold'>{title}</div>
			<div className='font-light text-neutral-500 mt-2'>{subtitle}</div>
		</div>
	);
}
