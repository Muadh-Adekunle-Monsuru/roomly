'use client';
import { LucideProps } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, {
	ForwardRefExoticComponent,
	ReactElement,
	RefAttributes,
	useCallback,
} from 'react';
import qs from 'query-string';
interface CategoryBoxProps {
	icon: ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
	>;
	label: string;
	selected?: boolean;
}
export default function CategoryBox({
	icon: Icon,
	label,
	selected,
}: CategoryBoxProps) {
	const router = useRouter();
	const params = useSearchParams();

	const handleClick = useCallback(() => {
		let currentQuery = {};
		if (params) {
			currentQuery = qs.parse(params.toString());
		}
		const updatedQuery: any = {
			...currentQuery,
			category: label,
		};

		if (params.get('category') === label) {
			delete updatedQuery.category;
		}
		const url = qs.stringifyUrl(
			{
				url: '/',
				query: updatedQuery,
			},
			{ skipNull: true }
		);

		router.push(url);
	}, [label, params, router]);
	return (
		<div
			onClick={handleClick}
			className={`flex flex-col items-center justify-center gap-2 p-2 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
				selected
					? 'border-b-neutral-800 text-neutral-800'
					: 'border-transparent text-neutral-500'
			}`}
		>
			<Icon className='size-4' />
			<div className='font-medium text-xs select-none'>{label}</div>
		</div>
	);
}
