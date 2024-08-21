'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Logo() {
	const router = useRouter();
	return (
		<div
			onClick={() => {
				router.push('/');
			}}
		>
			<Image
				alt='logo'
				className='hidden md:block cursor-pointer size-10'
				height={50}
				width={50}
				src='/logo.svg'
			/>
		</div>
	);
}
