'use client';
import { Minus, Plus } from 'lucide-react';
import React, { useCallback } from 'react';
interface CounterProps {
	title: string;
	subtitle: string;
	value: number;
	onChange: (value: number) => void;
}
export default function Counter({
	onChange,
	subtitle,
	title,
	value,
}: CounterProps) {
	const onAdd = useCallback(() => {
		onChange(value + 1);
	}, [onChange, value]);

	const onReduce = useCallback(() => {
		if (value == 1) return;

		onChange(value - 1);
	}, [value, onChange]);
	return (
		<div className='flex flex-row items-center justify-between'>
			<div className='flex flex-col'>
				<div className='font-medium'>{title}</div>
				<div className='font-light text-muted-foreground'>{subtitle}</div>
			</div>
			<div className='flex flex-row items-center gap-4'>
				<div
					onClick={onReduce}
					className='size-10 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-muted-foreground cursor-pointer hover:opacity-80 transition'
				>
					<Minus className='size-4' />
				</div>
				<div className='font-light text-lg text-muted-foreground w-7 text-center select-none'>
					{value}
				</div>
				<div
					onClick={onAdd}
					className='size-10 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-muted-foreground cursor-pointer hover:opacity-80 transition'
				>
					<Plus className='size-4' />
				</div>
			</div>
		</div>
	);
}
