'use client';
import { SafeUser } from '@/app/types';
import useCountries from '@/hooks/useCountries';
import React from 'react';
import Heading from './Heading';
import Image from 'next/image';
import BookmarkButton from './BookmarkButton';

interface ListingHeadProps {
	title: string;
	imageSrc: string;
	locationValue: string;
	id: string;
	currentUser?: SafeUser | null;
}
export default function ListingHead({
	id,
	imageSrc,
	locationValue,
	title,
	currentUser,
}: ListingHeadProps) {
	const { getByValue } = useCountries();
	const location = getByValue(locationValue);

	return (
		<div>
			<Heading
				title={title}
				subtitle={`${location?.region}, ${location?.label}`}
			/>
			<div className='mt-2 w-full h-[60vh] overflow-hidden rounded-xl relative'>
				<Image
					alt='Image'
					src={imageSrc}
					fill
					className='object-cover w-full'
				/>
				<div className='absolute top-5 right-5'>
					<BookmarkButton listingId={id} currentUser={currentUser} />
				</div>
			</div>
		</div>
	);
}
