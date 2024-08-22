'use client';
import React from 'react';
import { Range } from 'react-date-range';
import Calendar from './Calendar';
import Button from './Button';

interface ListingReservationProps {
	price: number;
	dateRange: Range;
	onChangeDate: (value: Range) => void;
	onSubmit: () => void;
	disabled?: boolean;
	disabledDates: Date[];
	totalPrice: number;
}

export default function ListingReservation({
	dateRange,
	disabledDates,
	onChangeDate,
	onSubmit,
	price,
	totalPrice,
	disabled,
}: ListingReservationProps) {
	return (
		<div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
			<div className='flex flex-row items-center gap-1 p-4'>
				<div className='text-2xl font-semibold'>${price}</div>
				<div className='font-light text-muted-foreground text-xs'>night</div>
			</div>
			<hr />
			<Calendar
				value={dateRange}
				disabledDates={disabledDates}
				onChange={(value) => onChangeDate(value.selection)}
			/>
			<hr />
			<div className='p-4 '>
				<Button disabled={disabled} label='Reserve' onClick={onSubmit} />
			</div>
			<div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
				<div>Total</div>
				<div>${totalPrice}</div>
			</div>
		</div>
	);
}
