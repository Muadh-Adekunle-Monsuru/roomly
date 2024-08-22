'use client';
import React from 'react';
import Container from '../Container';
import {
	CableCar,
	CloudSnow,
	FishSymbol,
	GlassWater,
	HandPlatter,
	House,
	Mountain,
	MountainSnow,
	ShellIcon,
	TentTree,
	TreePalm,
	Warehouse,
	Wind,
} from 'lucide-react';
import CategoryBox from './CategoryBox';
import { useParams, usePathname, useSearchParams } from 'next/navigation';

export const categories = [
	{
		label: 'Beach',
		icon: ShellIcon,
		description: 'This property is close to the beach',
	},
	{
		label: 'Windmills',
		icon: Wind,
		description: 'This property is has windmills',
	},
	{
		label: 'Modern',
		icon: House,
		description: 'This property is has a modern look',
	},
	{
		label: 'Countryside',
		icon: MountainSnow,
		description: 'This property is in the countryside',
	},
	{
		label: 'Pools',
		icon: GlassWater,
		description: 'This property is has pools',
	},
	{
		label: 'Islands',
		icon: TreePalm,
		description: 'This property is on an island',
	},
	{
		label: 'Lake',
		icon: FishSymbol,
		description: 'This property is close to a lake',
	},
	{
		label: 'Skiing',
		icon: CableCar,
		description: 'This property has skiing facilities',
	},
	{
		label: 'Camp',
		icon: TentTree,
		description: 'This property has camping facilities',
	},
	{
		label: 'Arctic',
		icon: CloudSnow,
		description: 'This property is in the arctic',
	},
	{
		label: 'Cave',
		icon: Mountain,
		description: 'This property is near a cave',
	},
	{
		label: 'Desert',
		icon: Wind,
		description: 'This property is in a desert',
	},
	{
		label: 'Barn',
		icon: Warehouse,
		description: 'This property has a barn',
	},
	{
		label: 'Lux',
		icon: HandPlatter,
		description: 'This property is luxurious',
	},
];

export default function Categories() {
	const params = useSearchParams();
	const category = params?.get('category');
	const pathname = usePathname();

	const isMainPage = pathname === '/';

	if (!isMainPage) return null;

	return (
		<Container>
			<div
				className='
          pt-4
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto custom-scrollbar'
			>
				{categories.map((item) => (
					<CategoryBox
						key={item.label}
						label={item.label}
						selected={category == item.label}
						icon={item.icon}
					/>
				))}
			</div>
		</Container>
	);
}
