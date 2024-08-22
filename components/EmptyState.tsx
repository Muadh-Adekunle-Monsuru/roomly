'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import Heading from './Heading';
import Image from 'next/image';
import Button from './Button';
interface EmptySpace {
	title?: string;
	subtitle?: string;
	showReset?: boolean;
}
export default function EmptyState({
	showReset,
	subtitle = 'Try changing or removing some of your filters',
	title = 'No exact matches',
}: EmptySpace) {
	const router = useRouter();

	return (
		<div className='h-[70vh] flex flex-col gap-2 justify-center items-center'>
			<Image alt='empty box' src={'/empty2.svg'} width={150} height={150} />
			<Heading title={title} subtitle={subtitle} center />
			<div className=' mt-4'>
				{showReset && (
					<p
						className='p-2 hover:bg-gray-100 cursor-pointer transition rounded-md text-sm'
						onClick={() => router.push('/')}
					>
						Reset
					</p>
				)}
			</div>
		</div>
	);
}
