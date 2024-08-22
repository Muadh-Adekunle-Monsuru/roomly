'use client';
import { SafeUser } from '@/app/types';
import useCountries from '@/hooks/useCountries';
import { LucideProps } from 'lucide-react';
import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Avatar, AvatarImage } from './ui/avatar';
import AvatarIcon from './Avatar';
import ListingCategory from './ListingCategory';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'));

interface ListingInfoProps {
	user: SafeUser;
	description: string;
	roomCount: number;
	guestCount: number;
	bathroomCount: number;
	category:
		| {
				icon: ForwardRefExoticComponent<
					Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
				>;
				label: string;
				description: string;
		  }
		| undefined;
	locationValue: string;
}
export default function ListingInfo({
	bathroomCount,
	category,
	description,
	locationValue,
	roomCount,
	user,
	guestCount,
}: ListingInfoProps) {
	const { getByValue } = useCountries();

	const coordinates = getByValue(locationValue)?.latlng;

	return (
		<div className='col-span-4 flex flex-col gap-8'>
			<div className='flex flex-col gap-2'>
				<div className='text-xl font-semibold flex flex-row items-center gap-2'>
					<div>Posted by {user.name}</div>
					<AvatarIcon src={user?.image} />
				</div>
				<div className='flex flex-row items-center gap-4 font-light text-muted-foreground'>
					<div>{guestCount} guests</div>
					<div>{roomCount} rooms</div>
					<div>{bathroomCount} bathrooms</div>
				</div>
			</div>
			<hr />
			{category && (
				<ListingCategory
					icon={category.icon}
					label={category.label}
					description={category.description}
				/>
			)}
			<hr />
			<div className='text-lg font-light text-muted-foreground'>
				{description}
			</div>
			<hr />
			<Map center={coordinates} />
		</div>
	);
}
